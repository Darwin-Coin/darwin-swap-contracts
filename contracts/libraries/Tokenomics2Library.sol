// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

import "../interfaces/IDarwinSwapLister.sol";
import "../interfaces/IDarwinSwapPair.sol";
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
    ) public returns(uint sellTaxAmount) {
        IDarwinSwapLister.TokenInfo memory sellTokenInfo = IDarwinSwapLister(IDarwinSwapFactory(factory).lister()).tokenInfo(sellToken);
        IDarwinSwapLister.TokenInfo memory buyTokenInfo = IDarwinSwapLister(IDarwinSwapFactory(factory).lister()).tokenInfo(buyToken);

        if (sellTokenInfo.valid && buyTokenInfo.official) {
            // SELLTOKEN tokenomics1.0 sell tax value applied to itself
            uint sellTokenA1 = (value * sellTokenInfo.addedToks.tokenA1TaxOnSell) / 10000;

            if (sellTokenA1 > 0) {
                (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFERFROM, from, sellTokenInfo.feeReceiver, sellTokenA1));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_SELL_A1");
            }

            sellTaxAmount += sellTokenA1;
        }

        if (buyTokenInfo.valid && sellTokenInfo.official) {
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
    ) public returns(uint buyTaxAmount) {
        IDarwinSwapLister.TokenInfo memory buyTokenInfo = IDarwinSwapLister(IDarwinSwapFactory(factory).lister()).tokenInfo(buyToken);
        IDarwinSwapLister.TokenInfo memory sellTokenInfo = IDarwinSwapLister(IDarwinSwapFactory(factory).lister()).tokenInfo(sellToken);

        if (buyTokenInfo.valid && sellTokenInfo.official) {
            // BUYTOKEN tokenomics1.0 buy tax value applied to itself
            uint buyTokenA1 = (value * buyTokenInfo.addedToks.tokenA1TaxOnBuy) / 10000;

            if (buyTokenA1 > 0) {
                (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, buyTokenInfo.feeReceiver, buyTokenA1));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_BUY_A1");
            }

            buyTaxAmount += buyTokenA1;
        }

        if (sellTokenInfo.valid && buyTokenInfo.official) {
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
    ) public {
        IDarwinSwapLister lister = IDarwinSwapLister(IDarwinSwapFactory(factory).lister());
        IDarwinSwapLister.TokenInfo memory sellTokenInfo = lister.tokenInfo(sellToken);
        IDarwinSwapLister.TokenInfo memory buyTokenInfo = lister.tokenInfo(buyToken);

        if (sellTokenInfo.valid && buyTokenInfo.official) {
            // Calculates eventual tokenomics1.0 refund and makes it
            if (sellTokenInfo.refundOwnToks1) {
                uint refundA1WithA2 = (value * refund(sellTokenInfo.ownToks.tokenTaxOnSell, lister.maxTok2Tax())) / 10000;

                if (refundA1WithA2 > 0) {
                    // TODO: SHOULD AVOID USING TX.ORIGIN
                    (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFER, tx.origin, refundA1WithA2));
                    require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: REFUND_FAILED_SELL_A2");
                }
            }

            // If SELLTOKEN's antiDump is active, send the tokenomics2.0 sell tax value applied to BUYTOKEN to the pair's antidump guard
            if (sellTokenInfo.antiDumpTriggerPrice > 0) {
                (uint sellReserve, uint buyReserve) = DarwinSwapLibrary.getReserves(factory, sellToken, buyToken);
                uint refill = (DarwinSwapLibrary.getAmountOut(value, sellReserve, buyReserve) * sellTokenInfo.addedToks.tokenB2TaxOnSell) / 10000;
                address antiDump = IDarwinSwapPair(address(this)).antiDumpGuard();
                (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, antiDump, refill));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: ANTIDUMP_FAILED_SELL_2");
            }

            // SELLTOKEN tokenomics2.0 sell tax value applied to itself
            uint sellTokenA2 = (value * sellTokenInfo.addedToks.tokenA2TaxOnSell) / 10000;

            if (sellTokenA2 > 0) {
                (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFER, sellTokenInfo.feeReceiver, sellTokenA2));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_SELL_A2");
            }
        }

        if (buyTokenInfo.valid && sellTokenInfo.official) {
            // BUYTOKEN tokenomics2.0 buy tax value applied to SELLTOKEN
            uint buyTokenB2 = (value * buyTokenInfo.addedToks.tokenB2TaxOnBuy) / 10000;

            // If antiDump is active on buyToken do not tax (because it has already been taxed)
            if (buyTokenB2 > 0 && buyTokenInfo.antiDumpTriggerPrice == 0) {
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
    ) public {
        IDarwinSwapLister lister = IDarwinSwapLister(IDarwinSwapFactory(factory).lister());
        IDarwinSwapLister.TokenInfo memory buyTokenInfo = lister.tokenInfo(buyToken);
        IDarwinSwapLister.TokenInfo memory sellTokenInfo = lister.tokenInfo(sellToken);

        if (buyTokenInfo.valid && sellTokenInfo.official) {
            // Calculates eventual tokenomics1.0 refund
            if (buyTokenInfo.refundOwnToks1) {
                uint refundA1WithA2 = (value * refund(buyTokenInfo.ownToks.tokenTaxOnBuy, lister.maxTok2Tax())) / 10000;

                if (refundA1WithA2 > 0) {
                    (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, to, refundA1WithA2));
                    require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: REFUND_FAILED_BUY_A2");
                }
            }

            // If BUYTOKEN's antiDump is active, send the tokenomics2.0 buy tax value applied to SELLTOKEN to the pair's antidump guard
            if (buyTokenInfo.antiDumpTriggerPrice > 0) {
                (uint sellReserve, uint buyReserve) = DarwinSwapLibrary.getReserves(factory, sellToken, buyToken);
                uint refill = (DarwinSwapLibrary.getAmountOut(value, buyReserve, sellReserve) * buyTokenInfo.addedToks.tokenB2TaxOnBuy) / 10000;
                address antiDump = IDarwinSwapPair(address(this)).antiDumpGuard();
                (bool success, bytes memory data) = sellToken.call(abi.encodeWithSelector(_TRANSFER, antiDump, refill));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: ANTIDUMP_FAILED_BUY_2");
            }

            // BUYTOKEN tokenomics2.0 buy tax value applied to itself
            uint buyTokenA2 = (value * buyTokenInfo.addedToks.tokenA2TaxOnBuy) / 10000;

            if (buyTokenA2 > 0) {
                (bool success, bytes memory data) = buyToken.call(abi.encodeWithSelector(_TRANSFER, buyTokenInfo.feeReceiver, buyTokenA2));
                require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TAX_FAILED_BUY_A2");
            }
        }

        if (sellTokenInfo.valid && buyTokenInfo.official) {
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
    function ensureTokenomics(IDarwinSwapLister.TokenInfo memory tokInfo, uint maxTok1Tax, uint maxTok2Tax) public pure returns(bool valid) {
        IDarwinSwapLister.TokenomicsInfo memory toks = tokInfo.addedToks;
        IDarwinSwapLister.OwnTokenomicsInfo memory ownToks = tokInfo.ownToks;

        uint refundOnSell = tokInfo.refundOwnToks1 ? refund(ownToks.tokenTaxOnSell, maxTok2Tax) : 0;
        uint refundOnBuy = tokInfo.refundOwnToks1 ? refund(ownToks.tokenTaxOnBuy, maxTok2Tax) : 0;

        uint tax1OnSell = toks.tokenA1TaxOnSell + toks.tokenB1TaxOnSell;
        uint tax1OnBuy = toks.tokenA1TaxOnBuy + toks.tokenB1TaxOnBuy;
        uint tax2OnSell = refundOnSell + toks.tokenA2TaxOnSell + toks.tokenB2TaxOnSell;
        uint tax2OnBuy = refundOnBuy + toks.tokenA2TaxOnBuy + toks.tokenB2TaxOnBuy;

        valid = tax1OnSell <= maxTok1Tax && tax1OnBuy <= maxTok1Tax && tax2OnSell <= maxTok2Tax && tax2OnBuy <= maxTok2Tax && (tokInfo.antiDumpTriggerPrice == 0 || (toks.tokenB2TaxOnSell + toks.tokenB2TaxOnBuy) > 0);
    }

    // If the lister of a Tok1.0 token wants to refund users with added-Tok2.0, the refund will be the min between the maximum allowed taxation and the already present Tok1.0 taxation
    function refund(uint ownTax, uint maxTok2Tax) public pure returns(uint) {
        if (ownTax > maxTok2Tax) {
            return maxTok2Tax;
        } else {
            return ownTax;
        }
    }

    // Removes 5% from added tokenomics, to leave it for LP providers.
    function adjustTokenomics(IDarwinSwapLister.TokenomicsInfo calldata addedToks) public pure returns(IDarwinSwapLister.TokenomicsInfo memory returnToks) {
        returnToks.tokenA1TaxOnBuy = addedToks.tokenA1TaxOnBuy - (addedToks.tokenA1TaxOnBuy * 5) / 100;
        returnToks.tokenA1TaxOnSell = addedToks.tokenA1TaxOnSell - (addedToks.tokenA1TaxOnSell * 5) / 100;
        returnToks.tokenA2TaxOnBuy = addedToks.tokenA2TaxOnBuy - (addedToks.tokenA2TaxOnBuy * 5) / 100;
        returnToks.tokenA2TaxOnSell = addedToks.tokenA2TaxOnSell - (addedToks.tokenA2TaxOnSell * 5) / 100;
        returnToks.tokenB1TaxOnBuy = addedToks.tokenB1TaxOnBuy - (addedToks.tokenB1TaxOnBuy * 5) / 100;
        returnToks.tokenB1TaxOnSell = addedToks.tokenB1TaxOnSell - (addedToks.tokenB1TaxOnSell * 5) / 100;
        returnToks.tokenB2TaxOnBuy = addedToks.tokenB2TaxOnBuy - (addedToks.tokenB2TaxOnBuy * 5) / 100;
        returnToks.tokenB2TaxOnSell = addedToks.tokenB2TaxOnSell - (addedToks.tokenB2TaxOnSell * 5) / 100;
    }
}