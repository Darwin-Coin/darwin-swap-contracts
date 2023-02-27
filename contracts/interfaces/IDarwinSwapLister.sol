// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

interface IDarwinSwapLister {
    struct TokenInfo {
        OwnTokenomicsInfo ownToks; //? The original token's tokenomics
        TokenomicsInfo addedToks; //? Tokenomics "added" by DarwinSwap
        TokenStatus status; //? Token status
        address validator; //? If a Darwin team validator has verified this token (with whatever outcome), this is their address. Otherwise it equals the address(0)
        address owner; //? The owner of the token contract
        address feeReceiver; //? Where will the fees go
        bool refundOwnToks1; //? True if part (or all) of Tokenomics 2.0 will be used to refund users. This can only happen on the selected token side, not on the token it is paired with
        bool valid; //? Only true if the token has been POSITIVELY validated by a Darwin team validator
        bool official; //? Only true if the token is either Darwin, WBNB, or a selected list of tokens like USDT, USDC, etc. If "official" is true, other tokens paired with this token will be able to execute tokenomics, if any
        uint antiDumpTriggerPrice; //? [18 DECIMALS] If > 0, represents the price of this token against its 'tokenB' in a pair, calculated in BUSD,
                                   //? below which a buyback->addLiquidityWithoutReceipt is triggered. If == 0, antiDump is not active for this token
        string purpose; //? Why are you sending the fees to the feeReceiver address? Is it a treasury? Will it be used for buybacks? Marketing?
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

    enum TokenStatus {
        UNLISTED, //? This token is not listed on DarwinSwap
        PROPOSED, //? This token has been proposed for validation
        LISTED, //? This token has been listed on DarwinSwap
        BANNED //? This token and its owner are banned from listing on DarwinSwap (because it has been recognized as harmful during a verification)
    }

    event TokenProposed(address indexed tokenAddress, TokenInfo indexed proposalInfo);
    event TokenBanned(address indexed tokenAddress, address indexed ownerAddress);
    event TokenValidated(address indexed tokenAddress);

    function maxTok1Tax() external view returns (uint);
    function maxTok2Tax() external view returns (uint);

    function isValidator(address user) external view returns (bool);
    function createPair(address tokenA, address tokenB) external returns (address pair);
    function tokenInfo(address _token) external view returns(TokenInfo memory);
}