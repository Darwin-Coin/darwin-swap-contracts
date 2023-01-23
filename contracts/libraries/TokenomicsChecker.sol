pragma solidity ^0.8.14;

// SPDX-License-Identifier: UNLICENSED

import {IDarwinSwapERC20} from "../interfaces/IDarwinSwapERC20.sol";
import {IDarwinSwapFactory} from "../interfaces/IDarwinSwapFactory.sol";
import {IDarwinSwapRouter02} from "../interfaces/IDarwinSwapRouter02.sol";

/// @title Tokenomics Checker
/// @author SmartGambleDev
/// @notice Library used to verify what kind of Tokenomics the being-listed token does have.
library TokenomicsChecker {

    enum Tokenomics {
        UNDEFINED, // Undefined. (probably tokenomics 2.0, taxes on LP)
        NOTOK, // No-tokenomics. (no taxes)
        TOK1, // Tokenomics 1.0. (taxes on user)
        HONEYPOT // Honeypot. (stay away from this token)
    }

    struct TokenInfo {
        Tokenomics tokOnSell; // The kind of tokenomics the token has on sells.
        uint taxOnSell; // Tax percentage on sells. (max: 10000)
        Tokenomics tokOnBuy; // The kind of tokenomics the token has on buys.
        uint taxOnBuy; // Tax percentage on buys. (max: 10000)
    }

    /// @notice Returns what kind of tokenomics the selected tokens has.
    /// @dev "Simulates" a [token->ETH] swap and then a [ETH->token] swap to understand if there's any taxation on the token. Requires the token to already be in the contract in order to "simulate" it.
    /// @param token_ The token address.
    /// @param amountIn_ The token amount the user desires to list on DarwinSwap.
    /// @param router_ The router that will be used to simulate the swap. We advice to use PancakeSwap router.
    /// @return tokenInfo The kind of tokenomics of the token. (No-Tokenomics | Tokenomics 1.0 | Undefined | Honeypot)
    function check(address token_, uint amountIn_, address router_) internal returns(TokenInfo memory tokenInfo) {
        IDarwinSwapRouter02 routerV2 = IDarwinSwapRouter02(router_);

        (address token0, address token1) = token_ < routerV2.WETH() ? (token_, routerV2.WETH()) : (routerV2.WETH(), token_);
        if (IDarwinSwapFactory(routerV2.factory()).getPair(token0, token1) == address(0)) {
            // If this token does not have a pair with BNB on PancakeSwap, it's not verifiable (undefined).
            return tokenInfo;
        }

        // Reduces amountIn so just 1 1000th of how much is being provided is used for the simulation.
        amountIn_ = amountIn_ / 1e3;

        require(IDarwinSwapERC20(token_).balanceOf(address(this)) >= amountIn_, "TokenomicsChecker: INSUFFICIENT_TOKEN_BALANCE");
        IDarwinSwapERC20(token_).approve(router_, amountIn_);

        address[] memory path = new address[](2);

        // CHECK ON SELL
        path[0] = token_;
        path[1] = routerV2.WETH();
        uint[] memory amountsSell = routerV2.getAmountsOut(amountIn_, path);
        uint expectedAmountOutSell = amountsSell[amountsSell.length - 1];
        uint ethBalance = address(this).balance;
        try routerV2.swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn_, 0, path, address(this), block.timestamp + 600) {
        } catch {
            // If it fails on selling with minAmountOut = 0 it's 99.9% a honeypot.
            tokenInfo.tokOnSell = Tokenomics.HONEYPOT;
            tokenInfo.tokOnBuy = Tokenomics.HONEYPOT;
            return tokenInfo;
        }
        ethBalance = address(this).balance - ethBalance;
        if (expectedAmountOutSell > ethBalance) {
            // Tokenomics 1.0 on sells.
            uint taxPercentage = ((expectedAmountOutSell - ethBalance) * 10000) / expectedAmountOutSell; // 10000 equals to 100%.
            tokenInfo.tokOnSell = Tokenomics.TOK1;
            tokenInfo.taxOnSell = taxPercentage;
        } else {
            // No Tokenomics on sells.
            tokenInfo.tokOnSell = Tokenomics.NOTOK;
        }

        // CHECK ON BUY
        path[0] = routerV2.WETH();
        path[1] = token_;
        uint[] memory amountsBuy = routerV2.getAmountsOut(ethBalance, path);
        uint expectedAmountOutBuy = amountsBuy[amountsBuy.length - 1];
        uint tokenBalance = IDarwinSwapERC20(token_).balanceOf(address(this));
        routerV2.swapExactETHForTokensSupportingFeeOnTransferTokens{value: ethBalance}(0, path, address(this), block.timestamp + 600);
        tokenBalance = IDarwinSwapERC20(token_).balanceOf(address(this)) - tokenBalance;
        if (expectedAmountOutBuy > tokenBalance) {
            // Tokenomics 1.0 on buys.
            uint taxPercentage = ((expectedAmountOutBuy - tokenBalance) * 10000) / expectedAmountOutBuy; // 10000 equals to 100%.
            tokenInfo.tokOnBuy = Tokenomics.TOK1;
            tokenInfo.taxOnBuy = taxPercentage;
        } else {
            // No Tokenomics on buys.
            tokenInfo.tokOnBuy = Tokenomics.NOTOK;
        }
    }
}