// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.14;

import "./interfaces/IDarwinSwapFactory.sol";
import "./UniswapV2Factory.sol";

interface IDarwin {
    function registerDarwinSwapPair(address _pair) external;
}

contract DarwinSwapFactory is IDarwinSwapFactory, UniswapV2Factory {
    address public dev;
    address public weth;
    uint public maxTok1Tax;
    uint public maxTok2Tax;

    mapping(address => TokenInfo) private _tokenInfo;

    mapping(address => bool) public isValidator;
    mapping(address => bool) public isUserBannedFromListing;

    constructor(address _weth) {
        dev = msg.sender;
        feeToSetter = msg.sender;
        isValidator[msg.sender] = true;
        maxTok1Tax = 2000; // Max add-on Tokenomics 1.0 percentage of taxation. (20.00%)
        maxTok2Tax = 1000; // Max add-on Tokenomics 2.0 percentage of taxation. (10.00%)
        weth = _weth;
    }

    modifier onlyDev() {
        require(msg.sender == dev, "DarwinSwap: CALLER_NOT_DEV");
        _;
    }

    modifier onlyValidators() {
        require(isValidator[msg.sender], "DarwinSwap: CALLER_NOT_VALIDATOR");
        _;
    }

    // List tokenA by pairing it with the already listed tokenB (or viceversa), without validation by the Darwin team.
    function createPair(address tokenA, address tokenB) external returns (address pair) {
        // Requires the caller who wants to list a token, to either be the owner of the token (this itself requires the token to inherit from Ownable) or the Darwin team (in case the token is owned by address(0) et similia).
        if (msg.sender != dev) {
            // TODO: Currently using tx.origin because this func will be called by the Router contract. Another way exists and we will use it cause tx.origin could create security issues, but for the initial development this will be ok.
            if (tx.origin == IERC20(tokenB).owner() && _tokenInfo[tokenA].status == TokenStatus.LISTED) {
                (tokenA, tokenB) = (tokenB, tokenA);
            } else {
                require(tx.origin == IERC20(tokenA).owner() && _tokenInfo[tokenB].status == TokenStatus.LISTED, "DarwinSwap: CALLER_NOT_TOKEN_OWNER");
            }
        }

        require(_tokenInfo[tokenA].status != TokenStatus.BANNED && !isUserBannedFromListing[tx.origin], "DarwinSwap: TOKEN_OR_CALLER_BANNED");
        require(_tokenInfo[tokenA].status != TokenStatus.PROPOSED, "DarwinSwap: TOKEN_ALREADY_PROPOSED");

        if (_tokenInfo[tokenA].status == TokenStatus.UNLISTED) {
            _tokenInfo[tokenA].owner = IERC20(tokenA).owner();
            _tokenInfo[tokenA].status = TokenStatus.LISTED;
            _tokenInfo[tokenA].listByPairingWith = tokenB;
        }

        pair = _createPair(tokenA, tokenB);
    }

    // Only callable by a Darwin team validator.
    // If isTokenValid is true, creates the pair between an already-listed token and a token that has been proposed, with all the add-on features selected by the lister.
    // If isTokenValid is false, either bans it (if outcome == TokenStatus.BANNED), or still lists the token and creates the pair but without any of the add-one features (if outcome == TokenStatus.LISTED).
    function createPairWithValidation(address tokenToValidate, TokenStatus outcome, bool isTokenValid) external onlyValidators returns (address pair) {
        require(_tokenInfo[tokenToValidate].status == TokenStatus.PROPOSED, "DarwinSwap: TOKEN_NOT_PROPOSED");
        require(outcome != TokenStatus.PROPOSED && outcome != TokenStatus.UNLISTED, "DarwinSwap: INVALID_VALIDATION");

        _tokenInfo[tokenToValidate].isTokenValid = isTokenValid;
        _tokenInfo[tokenToValidate].validator = msg.sender;
        _tokenInfo[tokenToValidate].status = outcome;

        if (outcome == TokenStatus.BANNED) {
            isUserBannedFromListing[_tokenInfo[tokenToValidate].owner] = true;

            emit TokenBanned(tokenToValidate, _tokenInfo[tokenToValidate].owner);
            return address(0);

        } else if (!isTokenValid) { // outcome == TokenStatus.LISTED but token not valid
            // Reset the requested add-on Tokenomics to blank
            TokenomicsInfo memory blankToks;
            _tokenInfo[tokenToValidate].addedToks = blankToks;

        } else { // outcome == TokenStatus.LISTED and token valid
            emit TokenValidated(tokenToValidate);

        }

        pair = _createPair(tokenToValidate, _tokenInfo[tokenToValidate].listByPairingWith);
    }

    // Allows a token owner (or the Dev address, in case the token is owned by address(0) et similia) to ask for the validation and listing of his token. This way users are able to put add-ons Tokenomics (1.0 or 2.0) on their tokens. (only if they get validated)
    function proposeToken(address tokenAddress, TokenInfo memory proposalInfo) external {
        require(tokenAddress != address(0) && proposalInfo.feeReceiver != address(0), "DarwinSwap: ZERO_ADDRESS");
        require(_tokenInfo[tokenAddress].status == TokenStatus.UNLISTED && !isUserBannedFromListing[msg.sender], "DarwinSwap: TOKEN_ALREADY_LISTED_PROPOSED_OR_BANNED");
        require(msg.sender == IERC20(tokenAddress).owner() || msg.sender == dev, "DarwinSwap: CALLER_NOT_TOKEN_OWNER");
        require(_tokenInfo[proposalInfo.listByPairingWith].status == TokenStatus.LISTED, "DarwinSwap: OTHER_TOKEN_NOT_LISTED");

        // Makes sure the fields in the proposal are setted as they should by default
        proposalInfo.owner = IERC20(tokenAddress).owner();
        proposalInfo.status = TokenStatus.PROPOSED;
        proposalInfo.validator = address(0);
        proposalInfo.isTokenValid = false;

        (bool valid,,) = ensureTokenomics(proposalInfo);
        require(valid, "DarwinSwap: EXCESSIVE_REQUESTED_TOKENOMICS");

        _tokenInfo[tokenAddress] = proposalInfo;

        emit TokenProposed(tokenAddress, proposalInfo);
    }

    // Lists DARWIN by pairing with BNB, with 5% tax on LP on buys
    function listDarwinWithBNB(address darwin, address darwinCommunity) external onlyDev {
        // BNB validate
        _tokenInfo[weth].status = TokenStatus.LISTED;
        _tokenInfo[weth].listByPairingWith = darwin;
        _tokenInfo[weth].validator = msg.sender;
        _tokenInfo[weth].isTokenValid = true;

        // DARWIN validate
        _tokenInfo[darwin].addedToks.tokenA2TaxOnBuy = 250;
        _tokenInfo[darwin].addedToks.tokenB2TaxOnBuy = 250;
        _tokenInfo[darwin].status = TokenStatus.LISTED;
        _tokenInfo[darwin].listByPairingWith = weth;
        _tokenInfo[darwin].validator = msg.sender;
        _tokenInfo[darwin].isTokenValid = true;
        _tokenInfo[darwin].owner = msg.sender;
        _tokenInfo[darwin].feeReceiver = darwinCommunity;

        address pair = _createPair(darwin, weth);
        IDarwin(darwin).registerDarwinSwapPair(pair);

        emit TokenValidated(darwin);
    }

    // Ensures that the limitations we've set for taxes are respected
    function ensureTokenomics(TokenInfo memory tokInfo) public view returns(bool valid, Tokenomics toksOnSell, Tokenomics toksOnBuy) {
        TokenomicsInfo memory toks = tokInfo.addedToks;
        OwnTokenomicsInfo memory ownToks = tokInfo.ownToks;

        uint refundOnSell = tokInfo.refundOwnToks1 ? _refund(ownToks.tokenTaxOnSell) : 0;
        uint refundOnBuy = tokInfo.refundOwnToks1 ? _refund(ownToks.tokenTaxOnBuy) : 0;

        uint tax1OnSell = toks.tokenA1TaxOnSell + toks.tokenB1TaxOnSell;
        uint tax1OnBuy = toks.tokenA1TaxOnBuy + toks.tokenB1TaxOnBuy;
        uint tax2OnSell = refundOnSell + toks.tokenA2TaxOnSell + toks.tokenB2TaxOnSell;
        uint tax2OnBuy = refundOnBuy + toks.tokenA2TaxOnBuy + toks.tokenB2TaxOnBuy;

        valid = tax1OnSell <= maxTok1Tax && tax1OnBuy <= maxTok1Tax && tax2OnSell <= maxTok2Tax && tax2OnBuy <= maxTok2Tax;

        if (tax1OnSell == 0 && tax1OnBuy == 0 && tax2OnSell == 0 && tax2OnBuy == 0) {           // notok notok
            return (valid, Tokenomics.NO_TOK, Tokenomics.NO_TOK);
        } else if (tax1OnSell > 0 && tax1OnBuy == 0 && tax2OnSell == 0 && tax2OnBuy == 0) {     // tok1 notok
            return (valid, Tokenomics.TOK_1, Tokenomics.NO_TOK);
        } else if (tax1OnSell > 0 && tax1OnBuy > 0 && tax2OnSell == 0 && tax2OnBuy == 0) {      // tok1 tok1
            return (valid, Tokenomics.TOK_1, Tokenomics.TOK_1);
        } else if (tax1OnSell == 0 && tax1OnBuy > 0 && tax2OnSell == 0 && tax2OnBuy == 0) {     // notok tok1
            return (valid, Tokenomics.NO_TOK, Tokenomics.TOK_1);
        } else if (tax1OnSell == 0 && tax1OnBuy == 0 && tax2OnSell > 0 && tax2OnBuy == 0) {     // tok2 notok
            return (valid, Tokenomics.TOK_2, Tokenomics.NO_TOK);
        } else if (tax1OnSell == 0 && tax1OnBuy == 0 && tax2OnSell > 0 && tax2OnBuy > 0) {      // tok2 tok2
            return (valid, Tokenomics.TOK_2, Tokenomics.TOK_2);
        } else if (tax1OnSell == 0 && tax1OnBuy == 0 && tax2OnSell == 0 && tax2OnBuy > 0) {     // notok tok2
            return (valid, Tokenomics.NO_TOK, Tokenomics.TOK_2);
        } else if (tax1OnSell > 0 && tax1OnBuy == 0 && tax2OnSell == 0 && tax2OnBuy > 0) {      // tok1 tok2
            return (valid, Tokenomics.TOK_1, Tokenomics.TOK_2);
        } else if (tax1OnSell == 0 && tax1OnBuy > 0 && tax2OnSell > 0 && tax2OnBuy == 0) {      // tok2 tok1
            return (valid, Tokenomics.TOK_2, Tokenomics.TOK_1);
        } else if (tax1OnSell > 0 && tax1OnBuy > 0 && tax2OnSell > 0 && tax2OnBuy > 0) {        // tok12 tok12
            return (valid, Tokenomics.TOK_1_AND_2, Tokenomics.TOK_1_AND_2);
        } else if (tax1OnSell > 0 && tax1OnBuy == 0 && tax2OnSell > 0 && tax2OnBuy == 0) {      // tok12 notok
            return (valid, Tokenomics.TOK_1_AND_2, Tokenomics.NO_TOK);
        } else if (tax1OnSell == 0 && tax1OnBuy > 0 && tax2OnSell == 0 && tax2OnBuy > 0) {      // notok tok12
            return (valid, Tokenomics.NO_TOK, Tokenomics.TOK_1_AND_2);
        } else if (tax1OnSell > 0 && tax1OnBuy > 0 && tax2OnSell > 0 && tax2OnBuy == 0) {       // tok12 tok1
            return (valid, Tokenomics.TOK_1_AND_2, Tokenomics.TOK_1);
        } else if (tax1OnSell > 0 && tax1OnBuy == 0 && tax2OnSell > 0 && tax2OnBuy > 0) {       // tok12 tok2
            return (valid, Tokenomics.TOK_1_AND_2, Tokenomics.TOK_2);
        } else if (tax1OnSell > 0 && tax1OnBuy > 0 && tax2OnSell == 0 && tax2OnBuy > 0) {       // tok1 tok12
            return (valid, Tokenomics.TOK_1, Tokenomics.TOK_1_AND_2);
        } else if (tax1OnSell == 0 && tax1OnBuy > 0 && tax2OnSell > 0 && tax2OnBuy > 0) {       // tok2 tok12
            return (valid, Tokenomics.TOK_2, Tokenomics.TOK_1_AND_2);
        }
    }

    // If the lister of a Tok1.0 token wants to refund users with added-Tok2.0, the refund will be the min between the maximum allowed taxation and the already present Tok1.0 taxation
    function _refund(uint ownTax) internal view returns(uint) {
        if (ownTax > maxTok2Tax) {
            return maxTok2Tax;
        } else {
            return ownTax;
        }
    }

    // transfer ownership
    function setDev(address _dev) external onlyDev {
        dev = _dev;
    }

    // adds or removes a validator
    function setValidator(address _user, bool _isValidator) external onlyDev {
        isValidator[_user] = _isValidator;
    }

    // getter for the tokenInfo mapping
    function tokenInfo(address _token) external view returns(TokenInfo memory) {
        return _tokenInfo[_token];
    }

    // setter for max add-on Tokenomics 1.0 percentage of taxation
    function setMaxTok1Tax(uint _maxTok1Tax) external onlyDev {
        maxTok1Tax = _maxTok1Tax;
    }

    // setter for max add-on Tokenomics 2.0 percentage of taxation
    function setMaxTok2Tax(uint _maxTok2Tax) external onlyDev {
        maxTok2Tax = _maxTok2Tax;
    }

    function setFeeToSetter(address _feeToSetter) external override onlyDev {
        feeToSetter = _feeToSetter;
    }
}