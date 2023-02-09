// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.14;

import "./interfaces/IDarwinSwapPair.sol";
import "./interfaces/IDarwinSwapFactory.sol";
import "./interfaces/IDarwinSwapRouter.sol";
import "./interfaces/IAntiDumpGuard.sol";
import "./interfaces/IERC20.sol";
import "./libraries/DarwinSwapLibrary.sol";

contract AntiDumpGuard is IAntiDumpGuard {
    IDarwinSwapPair public immutable pair;
    IDarwinSwapFactory public immutable factory;
    IDarwinSwapRouter public immutable router;
    address public immutable token0;
    address public immutable token1;

    constructor() {
        pair = IDarwinSwapPair(msg.sender);
        factory = IDarwinSwapFactory(pair.factory());
        router = IDarwinSwapRouter(factory.router());
        token0 = pair.token0();
        token1 = pair.token1();
    }

    function buyBackAndPair(address _sellToken) external {
        IDarwinSwapFactory.TokenInfo memory tokenInfo = factory.tokenInfo(_sellToken);

        // Return if antidump is not a thing for this token
        if (tokenInfo.antiDumpTriggerPrice == 0) {
            return;
        }

        address _buyToken = _sellToken == token0 ? token1 : token0;

        // Return if there is no buyToken balance in the antiDump
        if (IERC20(_buyToken).balanceOf(address(this)) == 0) {
            return;
        }

        (uint reserveSellToken, uint reserveBuyToken) = DarwinSwapLibrary.getReserves(address(factory), _sellToken, _buyToken);
        uint _price = DarwinSwapLibrary.quote(10 ** IERC20(_sellToken).decimals(), reserveSellToken, reserveBuyToken);

        // Return if current price is higher than antidump trigger price
        // TODO: THIS ACTUALLY CHECKS THE PRICE AT WHICH TOKEN WAS PROPOSED, SO THE PRICE AGAINST THE TOKEN IT WAS PAIRED WITH.
        // TODO: FIND A WAY TO CONVERT IT TO THE TOKEN IT IS BEING SWAPPED FOR.
        if (_price >= tokenInfo.antiDumpTriggerPrice) {
            return;
        }

        // The amount of buyToken that we need to sell to reach antiDumpTriggerPrice for sellToken
        uint sellAmountOfBuyToken = ((tokenInfo.antiDumpTriggerPrice + _price) * (tokenInfo.antiDumpTriggerPrice * reserveSellToken - reserveBuyToken)) / (3 * tokenInfo.antiDumpTriggerPrice + _price);

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