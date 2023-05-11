// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

import "./interfaces/IDarwinSwapPair.sol";
import "./interfaces/IDarwinSwapFactory.sol";
import "./interfaces/IDarwinSwapLister.sol";
import "./interfaces/IDarwinSwapRouter.sol";
import "./interfaces/IAntiDumpGuard.sol";
import "./interfaces/IERC20.sol";

import "./libraries/DarwinSwapLibrary.sol";

contract AntiDumpGuard is IAntiDumpGuard {
    IDarwinSwapFactory public immutable factory;
    IDarwinSwapPair public pair;
    IDarwinSwapRouter public router;
    IDarwinSwapLister public lister;
    address public dev;
    address public token0;
    address public token1;
    // the stablecoin used as USD value (BUSD)
    address public USD;

    modifier onlyTeamOrDev() {
        require(msg.sender == dev || msg.sender == lister.tokenInfo(token0).owner || msg.sender == lister.tokenInfo(token1).owner, "AntiDumpGuard: CALLER_NOT_TOKEN_TEAM_OR_DEV");
        _;
    }

    constructor() {
        factory = IDarwinSwapFactory(msg.sender);
    }

    function initialize(address _pair) external {
        require(msg.sender == address(factory), "AntiDumpGuard: CALLER_NOT_FACTORY");
        pair = IDarwinSwapPair(_pair);
        router = IDarwinSwapRouter(factory.router());
        lister = IDarwinSwapLister(factory.lister());
        dev = factory.dev();
        USD = factory.USD();
        token0 = pair.token0();
        token1 = pair.token1();
    }

    function buyBackAndPair(address _sellToken) external onlyTeamOrDev {
        IDarwinSwapLister.TokenInfo memory tokenInfo = lister.tokenInfo(_sellToken);

        // Return if antidump is not a thing for this token
        if (tokenInfo.addedToks.tokenB1SellToADG + tokenInfo.addedToks.tokenB1BuyToADG + tokenInfo.addedToks.tokenB2SellToADG + tokenInfo.addedToks.tokenB2BuyToADG == 0) {
            return;
        }

        address _buyToken = _sellToken == token0 ? token1 : token0;

        // Return if there is no buyToken balance in the antiDump
        if (IERC20(_buyToken).balanceOf(address(this)) == 0) {
            return;
        }

        // Approve router and pair using of BUYTOKEN and SELLTOKEN
        if (IERC20(_sellToken).allowance(address(this), address(router)) != type(uint).max) {
            IERC20(_sellToken).approve(address(router), type(uint).max);
            IERC20(_buyToken).approve(address(router), type(uint).max);
            IERC20(_sellToken).approve(address(pair), type(uint).max);
            IERC20(_buyToken).approve(address(pair), type(uint).max);
        }

        // SWAP
        pair.swapWithoutToks(_buyToken, IERC20(_buyToken).balanceOf(address(this)) / 2);
        uint balanceSellToken = IERC20(_sellToken).balanceOf(address(this));
        uint balanceBuyToken = IERC20(_buyToken).balanceOf(address(this));

        // PAIR
        router.addLiquidityWithoutReceipt(_sellToken, _buyToken, balanceSellToken, balanceBuyToken, block.timestamp + 600);

        emit BuyBackAndPair(_buyToken, _sellToken, balanceBuyToken, balanceSellToken);
    }

    receive() external payable {}
}