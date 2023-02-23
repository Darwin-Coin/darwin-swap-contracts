// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

import "./interfaces/IDarwinSwapFactory.sol";
import "./UniswapV2Factory.sol";
import "./libraries/Tokenomics2Library.sol";

interface IDarwin {
    function registerDarwinSwapPair(address _pair) external;
}

contract DarwinSwapFactory is IDarwinSwapFactory, UniswapV2Factory {
    address public dev;
    address public weth;
    uint public maxTok1Tax;
    uint public maxTok2Tax;
    address public router;

    mapping(address => TokenInfo) private _tokenInfo;

    mapping(address => bool) public isValidator;
    mapping(address => bool) public isUserBannedFromListing;

    bytes32 public constant INIT_CODE_HASH = keccak256(abi.encodePacked(type(DarwinSwapPair).creationCode));

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

    // Pairs 2 tokens by skipping validation (no DEX-added-features allowed). Callable by anyone.
    function createPair(address tokenA, address tokenB) external returns (address pair) {
        require(_tokenInfo[tokenA].status != TokenStatus.BANNED && !isUserBannedFromListing[tx.origin], "DarwinSwap: TOKENA_OR_CALLER_BANNED");
        require(_tokenInfo[tokenB].status != TokenStatus.BANNED && !isUserBannedFromListing[tx.origin], "DarwinSwap: TOKENB_OR_CALLER_BANNED");

        if (_tokenInfo[tokenA].status == TokenStatus.UNLISTED) {
            _tokenInfo[tokenA].status = TokenStatus.LISTED;
        }

        if (_tokenInfo[tokenB].status == TokenStatus.UNLISTED) {
            _tokenInfo[tokenB].status = TokenStatus.LISTED;
        }

        pair = _createPair(tokenA, tokenB);
    }

    // Only callable by a Darwin team validator.
    // If isTokenValid is true, lists tokenToValidate, with all the add-on features selected by the lister.
    // If isTokenValid is false, either bans it (if outcome == TokenStatus.BANNED), or still lists the token but without any of the add-on features (if outcome == TokenStatus.LISTED).
    function validateToken(address tokenToValidate, TokenStatus outcome, bool isTokenValid) external onlyValidators {
        require(_tokenInfo[tokenToValidate].status == TokenStatus.PROPOSED, "DarwinSwap: TOKEN_NOT_PROPOSED");
        require(outcome != TokenStatus.PROPOSED && outcome != TokenStatus.UNLISTED, "DarwinSwap: INVALID_VALIDATION");

        _tokenInfo[tokenToValidate].valid = isTokenValid;
        _tokenInfo[tokenToValidate].validator = msg.sender;
        _tokenInfo[tokenToValidate].status = outcome;

        if (outcome == TokenStatus.BANNED) {
            isUserBannedFromListing[_tokenInfo[tokenToValidate].owner] = true;

            emit TokenBanned(tokenToValidate, _tokenInfo[tokenToValidate].owner);

        } else if (!isTokenValid) { // outcome == TokenStatus.LISTED but token not valid
            // Reset the requested add-on Tokenomics to blank
            TokenomicsInfo memory blankToks;
            _tokenInfo[tokenToValidate].addedToks = blankToks;

        } else { // outcome == TokenStatus.LISTED and token valid
            emit TokenValidated(tokenToValidate);
        }
    }

    // Allows a token owner (or the Dev address, in case the token is owned by address(0) et similia) to ask for the validation and listing of his token. This way users are able to put add-ons Tokenomics (1.0 or 2.0) on their tokens. (only if they get validated)
    // Also allows to propose modifies to an already listed token.
    function proposeToken(address tokenAddress, TokenInfo memory proposalInfo) external {
        require(tokenAddress != address(0) && proposalInfo.feeReceiver != address(0), "DarwinSwap: ZERO_ADDRESS");
        require((_tokenInfo[tokenAddress].status == TokenStatus.UNLISTED || _tokenInfo[tokenAddress].status == TokenStatus.LISTED) && !isUserBannedFromListing[msg.sender], "DarwinSwap: TOKEN_PROPOSED_OR_BANNED");
        require(msg.sender == IERC20(tokenAddress).owner() || msg.sender == dev, "DarwinSwap: CALLER_NOT_TOKEN_OWNER");

        // Makes sure the fields in the proposal are setted as they should by default
        proposalInfo.owner = IERC20(tokenAddress).owner();
        proposalInfo.status = TokenStatus.PROPOSED;
        proposalInfo.validator = address(0);
        proposalInfo.valid = false;
        proposalInfo.official = false;

        bool valid = Tokenomics2Library.ensureTokenomics(proposalInfo, maxTok1Tax, maxTok2Tax);
        require(valid, "DarwinSwap: EXCESSIVE_REQUESTED_TOKENOMICS");

        _tokenInfo[tokenAddress] = proposalInfo;

        emit TokenProposed(tokenAddress, proposalInfo);
    }

    // Lists DARWIN and pairs with BNB, with 5% tax on LP on buys
    function listDarwinWithBNB(address darwin, address darwinCommunity) external onlyDev {
        // BNB validate
        _tokenInfo[weth].status = TokenStatus.LISTED;
        _tokenInfo[weth].validator = msg.sender;
        _tokenInfo[weth].valid = true;
        _tokenInfo[weth].official = true;

        // DARWIN validate
        _tokenInfo[darwin].addedToks.tokenA2TaxOnBuy = 250;
        _tokenInfo[darwin].addedToks.tokenB2TaxOnBuy = 250;
        _tokenInfo[darwin].status = TokenStatus.LISTED;
        _tokenInfo[darwin].validator = msg.sender;
        _tokenInfo[darwin].valid = true;
        _tokenInfo[darwin].official = true;
        _tokenInfo[darwin].owner = msg.sender;
        _tokenInfo[darwin].feeReceiver = darwinCommunity;
        _tokenInfo[darwin].antiDumpTriggerPrice = 1e18; // 1 BUSD ($1)

        address pair = getPair[darwin][weth];
        if (pair == address(0)) {
            pair = _createPair(darwin, weth);
        }
        IDarwin(darwin).registerDarwinSwapPair(pair);

        emit TokenValidated(darwin);
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

    // bans or unbans a user from listing
    function setBanUser(address _user, bool _ban) external onlyValidators {
        isUserBannedFromListing[_user] = _ban;
    }

    // bans or unbans a token from being listed
    function setBanToken(address _token, bool _ban) external onlyValidators {
        if (_ban) {
            _tokenInfo[_token].status = TokenStatus.BANNED;
        } else {
            _tokenInfo[_token].status = TokenStatus.UNLISTED;
        }
    }

    // lists an official token
    function listOfficialToken(address _token) external onlyValidators {
        _tokenInfo[_token].status = TokenStatus.LISTED;
        _tokenInfo[_token].validator = msg.sender;
        _tokenInfo[_token].valid = true;
        _tokenInfo[_token].official = true;
    }

    function setFeeToSetter(address _feeToSetter) external override onlyDev {
        feeToSetter = _feeToSetter;
    }

    function setRouter(address _router) external onlyDev {
        router = _router;
    }
}