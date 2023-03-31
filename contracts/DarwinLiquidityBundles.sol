pragma solidity ^0.8.4;

// SPDX-License-Identifier: BSL-1.1

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {IDarwinSwapRouter} from "./interfaces/IDarwinSwapRouter.sol";
import {IDarwinSwapPair} from "./interfaces/IDarwinSwapPair.sol";
import {IDarwinSwapFactory} from "./interfaces/IDarwinSwapFactory.sol";
import {IERC20} from "./interfaces/IERC20.sol";
import {IDarwinLiquidityBundles} from "./interfaces/IDarwinLiquidityBundles.sol";

contract DarwinLiquidityBundles is Ownable, IDarwinLiquidityBundles {

    /*///////////////////////////////////////////////////////////////
                                Variables
    //////////////////////////////////////////////////////////////*/

    IDarwinSwapFactory public darwinFactory;
    IDarwinSwapRouter public darwinRouter;
    address public WETH;
    uint256 public constant LOCK_PERIOD = 365 days;

    /*///////////////////////////////////////////////////////////////
                                Mappings
    //////////////////////////////////////////////////////////////*/

    // User address -> LP Token address -> User info
    mapping(address => mapping(address => User)) public userInfo;

    /*///////////////////////////////////////////////////////////////
                                Constructor
    //////////////////////////////////////////////////////////////*/

    constructor() {
        darwinFactory = IDarwinSwapFactory(msg.sender);
    }

    function initialize(address _darwinRouter, address _WETH) external {
        require(msg.sender == address(darwinFactory), "DarwinLiquidityBundles: INVALID");
        darwinRouter = IDarwinSwapRouter(_darwinRouter);
        WETH = _WETH;
    }

    function tokenInfo(address _token) public view returns (uint tokenAmount, uint priceInWeth) {
        tokenAmount = IERC20(_token).balanceOf(address(this));

        if (darwinFactory.getPair(_token, WETH) == address(0)) {
            return (tokenAmount, 0);
        }

        address[] memory path = new address[](2);
        path[0] = _token;
        path[1] = WETH;

        // get pair price in WETH on DarwinSwap
        priceInWeth = darwinRouter.getAmountsOut(10 ** IERC20(_token).decimals(), path)[1];
    }

    /// @notice Enter a Bundle
    /// @dev This functions takes an amount of ETH from a user and pairs it with a X amount of _token (already present in the contract), and locks it for a year. After the lock ends, the user will be able to not only withdraw the ETH he provided, but also the respective token amount.
    /// @param _token The bundle token address
    /// @param _desiredTokenAmount The amount of the token to pair ETH with
    function enterBundle(
        address _token,
        uint _desiredTokenAmount
    ) external payable {
        (uint tokenAmount, uint priceInWeth) = tokenInfo(_token);
        if (_desiredTokenAmount > tokenAmount) {
            _desiredTokenAmount = tokenAmount;
        }

        uint256 ethValue = (_desiredTokenAmount * priceInWeth) / (10 ** IERC20(_token).decimals());
        require(msg.value >= ethValue, "DarwinLiquidityBundles: INSUFFICIENT_ETH");

        IERC20(_token).approve(address(darwinRouter), _desiredTokenAmount);
        (uint amountToken, uint amountETH, uint liquidity) = darwinRouter.addLiquidityETH(
            _token,
            _desiredTokenAmount,
            0,
            0,
            address(this),
            block.timestamp + 600
        );

        userInfo[msg.sender][_token].lpAmount += liquidity;
        userInfo[msg.sender][_token].lockEnd = block.timestamp + LOCK_PERIOD;

        // refund dust ETH, if any
        if (msg.value > amountETH) {
            (bool success,) = payable(msg.sender).call{value: (msg.value - amountETH)}("");
            require(success, "DarwinLiquidityBundles: ETH_TRANSFER_FAILED");
        }

        emit EnterBundle(msg.sender, amountToken, amountETH, block.timestamp, block.timestamp + LOCK_PERIOD);
    }

    /// @notice Exit from a Bundle
    /// @dev If the lock period of the interested user on the interested token has ended, withdraws the bundled LP
    /// @param _token The bundle token address
    function exitBundle(
        address _token
    ) external {
        User storage user = userInfo[msg.sender][_token];

        require(user.lockEnd <= block.timestamp, "DarwinLiquidityBundles: LOCK_NOT_ENDED");
        require(user.lpAmount > 0, "DarwinLiquidityBundles: NO_BUNDLED_LP");

        IERC20(darwinFactory.getPair(_token, WETH)).approve(address(darwinRouter), user.lpAmount);
        (uint256 amountToken, uint256 amountETH) = darwinRouter.removeLiquidityETH(
            _token,
            user.lpAmount,
            0,
            0,
            address(msg.sender),
            block.timestamp + 600
        );

        user.lpAmount = 0;

        emit ExitBundle(msg.sender, amountToken, amountETH, block.timestamp);
    }

    /// @notice Updates a LP token by destructuring it and eventually swapping
    /// @param _lpToken The interested LP token address
    function update(address _lpToken) external {
        IDarwinSwapPair pair = IDarwinSwapPair(_lpToken);
        uint liquidity = IERC20(address(pair)).balanceOf(address(this));
        if (liquidity > 0) {
            address token0 = pair.token0();
            address token1 = pair.token1();
            (uint amount0, uint amount1) = darwinRouter.removeLiquidity(token0, token1, liquidity, 0, 0, address(this), block.timestamp + 600);

            if (token0 == WETH) {
                address[] memory path = new address[](2);
                path[0] = token0;
                path[1] = token1;
                darwinRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(amount0, 0, path, address(this), block.timestamp + 600);
            } else if (token1 == WETH) {
                address[] memory path = new address[](2);
                path[0] = token1;
                path[1] = token0;
                darwinRouter.swapExactTokensForTokensSupportingFeeOnTransferTokens(amount1, 0, path, address(this), block.timestamp + 600);
            }
        }
    }

    receive() external payable {}
}