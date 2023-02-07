// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.14;

interface IDarwinSwapFactory {
    struct TokenInfo {
        OwnTokenomicsInfo ownToks; //? The original token's tokenomics
        TokenomicsInfo addedToks; //? Tokenomics "added" by DarwinSwap
        TokenStatus status; //? Token status
        bool refundOwnToks1; //? True if part (or all) of Tokenomics 2.0 will be used to refund users. This can only happen on the selected token side, not on the token it is paired with
        address listByPairingWith; //? The other token this one will be paired with at its first listing
        address validator; //? If a Darwin team validator has verified this token (with whatever outcome), this is their address. Otherwise it equals the address(0)
        bool isTokenValid; //? Only true if the token has been POSITIVELY validated by a Darwin team validator
        address owner; //? The owner of the token contract
        address feeReceiver; //? Where will the fees go
        uint antiDumpTriggerPrice; //? If > 0, represents the price of this token against its 'tokenB' in a pair, below which a buyback->addLiquidityWithoutReceipt is triggered. If == 0, antiDump is not active for this token
    }

    struct OwnTokenomicsInfo {
        uint tokenTaxOnSell; //? The Toks 1.0 taxation applied to tokenA on sells (100%: 10000)
        uint tokenTaxOnBuy; //? The Toks 1.0 taxation applied to tokenA on buys (100%: 10000)
    }

    struct TokenomicsInfo {
        uint tokenA1TaxOnSell; //? The Toks 1.0 taxation applied to tokenA on sells (100%: 10000)
        uint tokenB1TaxOnSell; //? The Toks 1.0 taxation applied to tokenB on sells (100%: 10000)
        uint tokenA1TaxOnBuy; //? The Toks 1.0 taxation applied to tokenA on buys (100%: 10000)
        uint tokenB1TaxOnBuy; //? The Toks 1.0 taxation applied to tokenB on buys (100%: 10000)
        uint tokenA2TaxOnSell; //? The Toks 2.0 taxation applied to tokenA on sells (100%: 10000)
        uint tokenB2TaxOnSell; //? The Toks 2.0 taxation applied to tokenB on sells (100%: 10000)
        uint tokenA2TaxOnBuy; //? The Toks 2.0 taxation applied to tokenA on buys (100%: 10000)
        uint tokenB2TaxOnBuy; //? The Toks 2.0 taxation applied to tokenB on buys (100%: 10000)
    }

    enum Tokenomics {
        NO_TOK, //? No Tokenomics (no taxes on trades) - PLEASE NOTE: not recognized, too complicated or unverified tokens will be also treated as NO_TOKs
        TOK_1, //? Tokenomics 1.0 (taxes on users)
        TOK_2, //? Tokenomics 2.0 (taxes on LP)
        TOK_1_AND_2 //? Mixed Tokenomics (taxes on both LP and users)
    }

    enum TokenStatus {
        UNLISTED, //? This token is not listed on DarwinSwap
        PROPOSED, //? This token has been proposed for validation
        LISTED, //? This token has been listed on DarwinSwap
        BANNED //? This token and its owner are banned from listing on DarwinSwap (because it has been recognized as harmful during a verification)
    }

    event TokenProposed(address indexed tokenAddress, TokenInfo indexed proposalInfo);
    event TokenBanned(address indexed tokenAddress, address indexed ownerAddress);
    event TokenValidated(address indexed tokenAddress);

    function isValidator(address user) external view returns (bool);
    function createPair(address tokenA, address tokenB) external returns (address pair);
    function tokenInfo(address _token) external view returns(TokenInfo memory);
    function router() external view returns(address);
}