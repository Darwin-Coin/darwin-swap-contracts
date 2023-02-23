// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

import "../DarwinSwapPair.sol";
import "../libraries/DarwinSwapLibrary.sol";
import "../interfaces/IERC20.sol";

interface IDarwin {
    function registerDarwinSwapPair(address _pair) external;
}

// Created to fight the 24576 bytes contract size limit
library FL {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);
    event TokenProposed(address indexed tokenAddress, TokenInfo indexed proposalInfo);
    event TokenBanned(address indexed tokenAddress, address indexed ownerAddress);
    event TokenValidated(address indexed tokenAddress);

    struct TokenInfo {
        OwnTokenomicsInfo ownToks; //? The original token's tokenomics
        TokenomicsInfo addedToks; //? Tokenomics "added" by DarwinSwap
        TokenStatus status; //? Token status
        bool refundOwnToks1; //? True if part (or all) of Tokenomics 2.0 will be used to refund users. This can only happen on the selected token side, not on the token it is paired with
        address validator; //? If a Darwin team validator has verified this token (with whatever outcome), this is their address. Otherwise it equals the address(0)
        bool valid; //? Only true if the token has been POSITIVELY validated by a Darwin team validator
        bool official; //? Only true if the token is either Darwin, WBNB, or a selected list of tokens like USDT, USDC, etc. If "official" is true, other tokens paired with this token will be able to execute tokenomics, if any
        address owner; //? The owner of the token contract
        address feeReceiver; //? Where will the fees go
        uint antiDumpTriggerPrice; //? [18 DECIMALS] If > 0, represents the price of this token against its 'tokenB' in a pair, calculated in BUSD,
                                   //? below which a buyback->addLiquidityWithoutReceipt is triggered. If == 0, antiDump is not active for this token
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

    // Ensures that the limitations we've set for taxes are respected
    function ensureTokenomics(TokenInfo memory tokInfo, uint maxTok1Tax, uint maxTok2Tax) public pure returns(bool valid) {
        TokenomicsInfo memory toks = tokInfo.addedToks;
        OwnTokenomicsInfo memory ownToks = tokInfo.ownToks;

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

    // Allows a token owner (or the Dev address, in case the token is owned by address(0) et similia) to ask for the validation and listing of his token. This way users are able to put add-ons Tokenomics (1.0 or 2.0) on their tokens. (only if they get validated)
    // Also allows to propose modifies to an already listed token.
    function proposeToken(address tokenAddress, uint maxTok1Tax, uint maxTok2Tax, bool isUserBanned, TokenInfo memory proposalInfo, TokenInfo storage tokenInfo) public {
        require(tokenAddress != address(0) && proposalInfo.feeReceiver != address(0), "DarwinSwap: ZERO_ADDRESS");
        require((tokenInfo.status == TokenStatus.UNLISTED || tokenInfo.status == TokenStatus.LISTED) && !isUserBanned, "DarwinSwap: TOKEN_PROPOSED_OR_BANNED");
        require(msg.sender == IERC20(tokenAddress).owner() || msg.sender == IDarwinSwapFactory(address(this)).dev(), "DarwinSwap: CALLER_NOT_TOKEN_OWNER");

        // Makes sure the fields in the proposal are setted as they should by default
        proposalInfo.owner = IERC20(tokenAddress).owner();
        proposalInfo.status = TokenStatus.PROPOSED;
        proposalInfo.validator = address(0);
        proposalInfo.valid = false;
        proposalInfo.official = false;

        bool valid = ensureTokenomics(proposalInfo, maxTok1Tax, maxTok2Tax);
        require(valid, "DarwinSwap: EXCESSIVE_REQUESTED_TOKENOMICS");

        tokenInfo.addedToks = proposalInfo.addedToks;
        tokenInfo.ownToks = proposalInfo.ownToks;
        tokenInfo.antiDumpTriggerPrice = proposalInfo.antiDumpTriggerPrice;
        tokenInfo.feeReceiver = proposalInfo.feeReceiver;
        tokenInfo.official = proposalInfo.official;
        tokenInfo.owner = proposalInfo.owner;
        tokenInfo.valid = proposalInfo.valid;
        tokenInfo.refundOwnToks1 = proposalInfo.refundOwnToks1;
        tokenInfo.status = proposalInfo.status;
        tokenInfo.validator = proposalInfo.validator;

        emit TokenProposed(tokenAddress, proposalInfo);
    }

    // If isTokenValid is true, lists tokenToValidate, with all the add-on features selected by the lister.
    // If isTokenValid is false, either bans it (if outcome == TokenStatus.BANNED), or still lists the token but without any of the add-on features (if outcome == TokenStatus.LISTED).
    function validateToken(address tokenToValidate, TokenStatus outcome, bool isTokenValid, TokenInfo storage tokenInfo) public returns(bool banned) {
        require(tokenInfo.status == TokenStatus.PROPOSED, "DarwinSwap: TOKEN_NOT_PROPOSED");
        require(outcome != TokenStatus.PROPOSED && outcome != TokenStatus.UNLISTED, "DarwinSwap: INVALID_VALIDATION");

        tokenInfo.valid = isTokenValid;
        tokenInfo.validator = msg.sender;
        tokenInfo.status = outcome;

        if (outcome == TokenStatus.BANNED) {
            banned = true;

            emit TokenBanned(tokenToValidate, tokenInfo.owner);

        } else if (!isTokenValid) { // outcome == TokenStatus.LISTED but token not valid
            // Reset the requested add-on Tokenomics to blank
            TokenomicsInfo memory blankToks;
            tokenInfo.addedToks = blankToks;

        } else { // outcome == TokenStatus.LISTED and token valid
            emit TokenValidated(tokenToValidate);
        }
    }

    // Lists DARWIN and pairs with BNB, with 5% tax on LP on buys
    function listDarwinWithBNB(address darwin, address weth, address darwinCommunity, TokenInfo storage wethTokenInfo, TokenInfo storage darwinTokenInfo) public {
        // BNB validate
        wethTokenInfo.status = TokenStatus.LISTED;
        wethTokenInfo.validator = msg.sender;
        wethTokenInfo.valid = true;
        wethTokenInfo.official = true;

        // DARWIN validate
        darwinTokenInfo.addedToks.tokenA2TaxOnBuy = 250;
        darwinTokenInfo.addedToks.tokenB2TaxOnBuy = 250;
        darwinTokenInfo.status = TokenStatus.LISTED;
        darwinTokenInfo.validator = msg.sender;
        darwinTokenInfo.valid = true;
        darwinTokenInfo.official = true;
        darwinTokenInfo.owner = msg.sender;
        darwinTokenInfo.feeReceiver = darwinCommunity;
        darwinTokenInfo.antiDumpTriggerPrice = 1e18; // 1 BUSD ($1)

        address pair = IDarwinSwapFactory(address(this)).getPair(darwin,weth);
        if (pair == address(0)) {
            pair = IDarwinSwapFactory(address(this)).createPair(darwin, weth);
        }
        IDarwin(darwin).registerDarwinSwapPair(pair);

        emit TokenValidated(darwin);
    }

    // Pairs 2 tokens by skipping validation (no DEX-added-features allowed). Callable by anyone.
    function createPair(address tokenA, address tokenB, bool isUserBanned, address[] storage allPairs, TokenInfo storage tokenInfoA, TokenInfo storage tokenInfoB) public returns (address pair) {
        require(tokenInfoA.status != FL.TokenStatus.BANNED && !isUserBanned, "DarwinSwap: TOKENA_OR_CALLER_BANNED");
        require(tokenInfoB.status != FL.TokenStatus.BANNED && !isUserBanned, "DarwinSwap: TOKENB_OR_CALLER_BANNED");

        if (tokenInfoA.status == FL.TokenStatus.UNLISTED) {
            tokenInfoA.status = FL.TokenStatus.LISTED;
        }

        if (tokenInfoB.status == FL.TokenStatus.UNLISTED) {
            tokenInfoB.status = FL.TokenStatus.LISTED;
        }

        require(tokenA != tokenB, "DarwinSwap: IDENTICAL_ADDRESSES");
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), "DarwinSwap: ZERO_ADDRESS");
        require(IDarwinSwapFactory(address(this)).getPair(token0, token1) == address(0), "DarwinSwap: PAIR_EXISTS"); // single check is sufficient
        bytes memory bytecode = type(DarwinSwapPair).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        IDarwinSwapPair(pair).initialize(token0, token1);

        allPairs.push(pair);
        emit PairCreated(token0, token1, pair, allPairs.length);
    }
}