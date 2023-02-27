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
    address public token0;
    address public token1;
    // the stablecoin used as USD value (BUSD)
    address public USD;

    constructor() {
        factory = IDarwinSwapFactory(msg.sender);
    }

    function initialize(address _pair) external {
        require(msg.sender == address(factory), "AntiDumpGuard: CALLER_NOT_FACTORY");
        pair = IDarwinSwapPair(_pair);
        router = IDarwinSwapRouter(factory.router());
        lister = IDarwinSwapLister(factory.lister());
        USD = factory.USD();
        token0 = pair.token0();
        token1 = pair.token1();
    }

    function buyBackAndPair(address _sellToken) external {
        IDarwinSwapLister.TokenInfo memory tokenInfo = lister.tokenInfo(_sellToken);

        // Return if antidump is not a thing for this token
        if (tokenInfo.antiDumpTriggerPrice == 0) {
            return;
        }

        address _buyToken = _sellToken == token0 ? token1 : token0;

        // Return if there is no buyToken balance in the antiDump
        if (IERC20(_buyToken).balanceOf(address(this)) == 0) {
            return;
        }

        // Gets price of sellToken against buyToken
        (uint reserveSellToken, uint reserveBuyToken) = DarwinSwapLibrary.getReserves(address(factory), _sellToken, _buyToken);
        uint _price = DarwinSwapLibrary.quote(1e18, reserveSellToken, reserveBuyToken);

        // Ensures antiDumpTriggerPrice is calculated in _buyToken's
        uint antiDumpTriggerPrice = tokenInfo.antiDumpTriggerPrice;
        if (_buyToken != USD) {
            (uint reserveUSD,) = DarwinSwapLibrary.getReserves(address(factory), USD, _buyToken);
            uint _priceOfUSDInBuyToken = DarwinSwapLibrary.quote(1e18, reserveUSD, reserveBuyToken);
            antiDumpTriggerPrice = (antiDumpTriggerPrice * _priceOfUSDInBuyToken) / 1e18;
        }

        // Return if current price is higher than antidump trigger price
        if (_price >= antiDumpTriggerPrice) {
            return;
        }

        // The amount of buyToken that we need to sell to reach antiDumpTriggerPrice for sellToken
        uint sellAmountOfBuyToken = ((antiDumpTriggerPrice + _price) * (antiDumpTriggerPrice * reserveSellToken - reserveBuyToken)) / (3 * antiDumpTriggerPrice + _price);

        if (IERC20(_buyToken).balanceOf(address(this)) < sellAmountOfBuyToken * 2) {
            sellAmountOfBuyToken = IERC20(_buyToken).balanceOf(address(this)) / 2;
        }

        // Approve router and pair using of BUYTOKEN and SELLTOKEN
        if (IERC20(_sellToken).allowance(address(this), address(router)) != type(uint).max) {
            IERC20(_sellToken).approve(address(router), type(uint).max);
            IERC20(_buyToken).approve(address(router), type(uint).max);
            IERC20(_sellToken).approve(address(pair), type(uint).max);
            IERC20(_buyToken).approve(address(pair), type(uint).max);
        }

        // SWAP
        uint balanceSellToken = IERC20(_sellToken).balanceOf(address(this));
        pair.swapWithoutToks(_buyToken, sellAmountOfBuyToken);
        balanceSellToken = IERC20(_sellToken).balanceOf(address(this)) - balanceSellToken;
        uint balanceBuyToken = IERC20(_buyToken).balanceOf(address(this));

        // PAIR
        router.addLiquidityWithoutReceipt(_sellToken, _buyToken, balanceSellToken, sellAmountOfBuyToken > balanceBuyToken ? balanceBuyToken : sellAmountOfBuyToken, block.timestamp + 600);

        emit BuyBackAndPair(_buyToken, _sellToken, sellAmountOfBuyToken, balanceSellToken);
    }

    receive() external payable {}
}