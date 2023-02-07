// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.14;

import "../interfaces/IDarwinSwapFactory.sol";
import "../interfaces/IUniswapV2Factory.sol";
import "../interfaces/IDarwinSwapPair.sol";
import "../interfaces/IAntiDumpGuard.sol";
import "../libraries/DarwinSwapLibrary.sol";

library Tokenomics2Library {

    bytes4 private constant _TRANSFER = bytes4(keccak256(bytes("transfer(address,uint256)")));
    bytes4 private constant _TRANSFERFROM = 0x23b872dd;

    // TODO: Make sure this actually does correct and enough calculations
    // Taxes the sender with Tokenomics 1.0 on the sold token, both from the sold token and the bought token. Returns the taxed amount.
    function handleToks1Sell(
        address sellToken,
        address from,
        uint256 value,
        address buyToken,
        address factory
    ) internal returns(uint sellTaxAmount) {
        IDarwinSwapFactory.TokenInfo memory sellTokenInfo = IDarwinSwapFactory(factory).tokenInfo(sellToken);
        IDarwinSwapFactory.TokenInfo memory buyTokenInfo = IDarwinSwapFactory(factory).tokenInfo(buyToken);

        if (sellTokenInfo.isTokenValid) {
            // SELLTOKEN tokenomics1.0 sell tax value applied to itself
            uint sellTokenA1 = (value * sellTokenInfo.addedToks.tokenA1TaxOnSell) / 10000;

            if (sellTokenA1 > 0) {
                (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFERFROM, from, sellTokenInfo.feeReceiver, sellTokenA1));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_SELL_A1");
            }

            sellTaxAmount += sellTokenA1;
        }

        if (buyTokenInfo.isTokenValid) {
            // BUYTOKEN tokenomics1.0 buy tax value applied to SELLTOKEN
            uint buyTokenB1 = (value * buyTokenInfo.addedToks.tokenB1TaxOnBuy) / 10000;

            if (buyTokenB1 > 0) {
                (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFERFROM, from, buyTokenInfo.feeReceiver, buyTokenB1));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_BUY_B1");
            }

            sellTaxAmount += buyTokenB1;
        }
    }

    // TODO: Make sure this actually does correct and enough calculations
    // Taxes the receiver (well, actually sends LESS tokens to the receiver) with Tokenomics 1.0 on the bought token, both from the sold token and the bought token. Returns the taxed amount.
    function handleToks1Buy(
        address buyToken,
        uint value,
        address sellToken,
        address factory
    ) internal returns(uint buyTaxAmount) {
        IDarwinSwapFactory.TokenInfo memory buyTokenInfo = IDarwinSwapFactory(factory).tokenInfo(buyToken);
        IDarwinSwapFactory.TokenInfo memory sellTokenInfo = IDarwinSwapFactory(factory).tokenInfo(sellToken);

        if (buyTokenInfo.isTokenValid) {
            // BUYTOKEN tokenomics1.0 buy tax value applied to itself
            uint buyTokenA1 = (value * buyTokenInfo.addedToks.tokenA1TaxOnBuy) / 10000;

            if (buyTokenA1 > 0) {
                (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, buyTokenInfo.feeReceiver, buyTokenA1));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_BUY_A1");
            }

            buyTaxAmount += buyTokenA1;
        }

        if (sellTokenInfo.isTokenValid) {
            // SELLTOKEN tokenomics1.0 sell tax value applied to BUYTOKEN
            uint sellTokenB1 = (value * sellTokenInfo.addedToks.tokenB1TaxOnSell) / 10000;

            if (sellTokenB1 > 0) {
                (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, sellTokenInfo.feeReceiver, sellTokenB1));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_SELL_B1");
            }

            buyTaxAmount += sellTokenB1;
        }
    }

    // TODO: Make sure this actually does correct and enough calculations
    // Taxes the LP with Tokenomics 2.0 on the sold token, both from the sold token and the bought token.
    function handleToks2Sell(
        address sellToken,
        uint value,
        address buyToken,
        address factory
    ) internal {
        IDarwinSwapFactory.TokenInfo memory sellTokenInfo = IDarwinSwapFactory(factory).tokenInfo(sellToken);
        IDarwinSwapFactory.TokenInfo memory buyTokenInfo = IDarwinSwapFactory(factory).tokenInfo(buyToken);

        if (sellTokenInfo.isTokenValid) {
            // Calculates eventual tokenomics1.0 refund and makes it
            if (sellTokenInfo.refundOwnToks1) {
                uint refundA1WithA2 = (value * sellTokenInfo.ownToks.tokenTaxOnSell) / 10000;

                if (refundA1WithA2 > 0) {
                    // TODO: SHOULD AVOID USING TX.ORIGIN
                    (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFER, tx.origin, refundA1WithA2));
                    require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: REFUND_FAILED_SELL_A2");
                }
            }

            // If antiDump is active, send the toks2 taxation to the pair's antidump guard
            if (sellTokenInfo.antiDumpTriggerPrice > 0) {
                (uint sellReserve, uint buyReserve) = DarwinSwapLibrary.getReserves(factory, sellToken, buyToken);
                uint refill = (DarwinSwapLibrary.getAmountOut(value, sellReserve, buyReserve) * sellTokenInfo.addedToks.tokenB2TaxOnSell) / 10000;
                address antiDump = IDarwinSwapPair(address(this)).antiDumpGuard();
                address otherToken = IDarwinSwapPair(address(this)).token0() == sellToken ? IDarwinSwapPair(address(this)).token1() : IDarwinSwapPair(address(this)).token0();
                // No need to check if sellTokenB2 is > 0, since to propose a token with antiDump, addedToks.tokenB2TaxOnSell MUST be > 0.
                (bool success, bytes memory data) = otherToken.call(abi.encodeWithSelector(_TRANSFER, antiDump, refill));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: ANTIDUMP_REFILL_FAILED");
            }

            // SELLTOKEN tokenomics2.0 sell tax value applied to itself
            uint sellTokenA2 = (value * sellTokenInfo.addedToks.tokenA2TaxOnSell) / 10000;

            if (sellTokenA2 > 0) {
                (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFER, sellTokenInfo.feeReceiver, sellTokenA2));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_SELL_A2");
            }
        }

        if (buyTokenInfo.isTokenValid) {
            // BUYTOKEN tokenomics2.0 buy tax value applied to SELLTOKEN
            uint buyTokenB2 = (value * buyTokenInfo.addedToks.tokenB2TaxOnBuy) / 10000;

            if (buyTokenB2 > 0) {
                (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFER, buyTokenInfo.feeReceiver, buyTokenB2));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_BUY_B2");
            }
        }
    }

    // TODO: Make sure this actually does correct and enough calculations
    // Taxes the LP with Tokenomics 2.0 on the bought token, both from the bought token and the sold token.
    function handleToks2Buy(
        address buyToken,
        uint value,
        address sellToken,
        address to,
        address factory
    ) internal {
        IDarwinSwapFactory.TokenInfo memory buyTokenInfo = IDarwinSwapFactory(factory).tokenInfo(buyToken);
        IDarwinSwapFactory.TokenInfo memory sellTokenInfo = IDarwinSwapFactory(factory).tokenInfo(sellToken);

        if (buyTokenInfo.isTokenValid) {
            // Calculates eventual tokenomics1.0 refund
            if (buyTokenInfo.refundOwnToks1) {
                uint refundA1WithA2 = (value * buyTokenInfo.ownToks.tokenTaxOnBuy) / 10000;

                if (refundA1WithA2 > 0) {
                    (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, to, refundA1WithA2));
                    require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: REFUND_FAILED_BUY_A2");
                }
            }

            // BUYTOKEN tokenomics2.0 buy tax value applied to itself
            uint buyTokenA2 = (value * buyTokenInfo.addedToks.tokenA2TaxOnBuy) / 10000;

            if (buyTokenA2 > 0) {
                (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, buyTokenInfo.feeReceiver, buyTokenA2));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_BUY_A2");
            }
        }

        if (sellTokenInfo.isTokenValid) {
            // SELLTOKEN tokenomics2.0 sell tax value applied to BUYTOKEN
            uint sellTokenB2 = (value * sellTokenInfo.addedToks.tokenB2TaxOnSell) / 10000;

            // If antiDump is active on sellToken do not tax (because it has already been taxed)
            if (sellTokenB2 > 0 && sellTokenInfo.antiDumpTriggerPrice == 0) {
                (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, sellTokenInfo.feeReceiver, sellTokenB2));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_SELL_B2");
            }
        }
    }

    // Ensures that the limitations we've set for taxes are respected
    function ensureTokenomics(IDarwinSwapFactory.TokenInfo memory tokInfo, uint maxTok1Tax, uint maxTok2Tax) internal pure returns(bool valid) {
        IDarwinSwapFactory.TokenomicsInfo memory toks = tokInfo.addedToks;
        IDarwinSwapFactory.OwnTokenomicsInfo memory ownToks = tokInfo.ownToks;

        uint refundOnSell = tokInfo.refundOwnToks1 ? refund(ownToks.tokenTaxOnSell, maxTok2Tax) : 0;
        uint refundOnBuy = tokInfo.refundOwnToks1 ? refund(ownToks.tokenTaxOnBuy, maxTok2Tax) : 0;

        uint tax1OnSell = toks.tokenA1TaxOnSell + toks.tokenB1TaxOnSell;
        uint tax1OnBuy = toks.tokenA1TaxOnBuy + toks.tokenB1TaxOnBuy;
        uint tax2OnSell = refundOnSell + toks.tokenA2TaxOnSell + toks.tokenB2TaxOnSell;
        uint tax2OnBuy = refundOnBuy + toks.tokenA2TaxOnBuy + toks.tokenB2TaxOnBuy;

        valid = tax1OnSell <= maxTok1Tax && tax1OnBuy <= maxTok1Tax && tax2OnSell <= maxTok2Tax && tax2OnBuy <= maxTok2Tax && (tokInfo.antiDumpTriggerPrice == 0 || toks.tokenB2TaxOnSell > 0);
    }

    // If the lister of a Tok1.0 token wants to refund users with added-Tok2.0, the refund will be the min between the maximum allowed taxation and the already present Tok1.0 taxation
    function refund(uint ownTax, uint maxTok2Tax) internal pure returns(uint) {
        if (ownTax > maxTok2Tax) {
            return maxTok2Tax;
        } else {
            return ownTax;
        }
    }
}