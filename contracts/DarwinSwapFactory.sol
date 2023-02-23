// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

import "./interfaces/IDarwinSwapFactory.sol";
import {FL} from "./libraries/FactoryLibrary.sol";

contract DarwinSwapFactory is IDarwinSwapFactory {
    address public dev;
    address public weth;
    address public router;
    address public feeTo;

    uint public maxTok1Tax;
    uint public maxTok2Tax;

    mapping(address => mapping(address => address)) public getPair;
    address[] public allPairs;

    mapping(address => FL.TokenInfo) private _tokenInfo;

    mapping(address => bool) public isValidator;
    mapping(address => bool) public isUserBannedFromListing;

    bytes32 public constant INIT_CODE_HASH = keccak256(abi.encodePacked(type(DarwinSwapPair).creationCode));

    constructor(address _weth) {
        dev = msg.sender;
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
        FL.createPair(tokenA, tokenB, isUserBannedFromListing[tx.origin], allPairs, _tokenInfo[tokenA], _tokenInfo[tokenB]);
        getPair[tokenA][tokenB] = pair;
        getPair[tokenB][tokenA] = pair; // populate mapping in the reverse direction
    }

    // Only callable by a Darwin team validator.
    // If isTokenValid is true, lists tokenToValidate, with all the add-on features selected by the lister.
    // If isTokenValid is false, either bans it (if outcome == TokenStatus.BANNED), or still lists the token but without any of the add-on features (if outcome == TokenStatus.LISTED).
    function validateToken(address tokenToValidate, FL.TokenStatus outcome, bool isTokenValid) external onlyValidators {
        isUserBannedFromListing[_tokenInfo[tokenToValidate].owner] = FL.validateToken(tokenToValidate, outcome, isTokenValid, _tokenInfo[tokenToValidate]);
    }

    // Allows a token owner (or the Dev address, in case the token is owned by address(0) et similia) to ask for the validation and listing of his token. This way users are able to put add-ons Tokenomics (1.0 or 2.0) on their tokens. (only if they get validated)
    // Also allows to propose modifies to an already listed token.
    function proposeToken(address tokenAddress, FL.TokenInfo memory proposalInfo) external {
        FL.proposeToken(tokenAddress, maxTok1Tax, maxTok2Tax, isUserBannedFromListing[msg.sender], proposalInfo, _tokenInfo[tokenAddress]);
    }

    // Lists DARWIN and pairs with BNB, with 5% tax on LP on buys
    function listDarwinWithBNB(address darwin, address darwinCommunity) external onlyDev {
        FL.listDarwinWithBNB(darwin, weth, darwinCommunity, _tokenInfo[weth], _tokenInfo[darwin]);
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
    function tokenInfo(address _token) external view returns(FL.TokenInfo memory) {
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
            _tokenInfo[_token].status = FL.TokenStatus.BANNED;
        } else {
            _tokenInfo[_token].status = FL.TokenStatus.UNLISTED;
        }
    }

    // lists an official token
    function listOfficialToken(address _token) external onlyValidators {
        _tokenInfo[_token].status = FL.TokenStatus.LISTED;
        _tokenInfo[_token].validator = msg.sender;
        _tokenInfo[_token].valid = true;
        _tokenInfo[_token].official = true;
    }

    function allPairsLength() external view returns (uint) {
        return allPairs.length;
    }

    function setFeeTo(address _feeTo) external onlyDev {
        feeTo = _feeTo;
    }

    function setRouter(address _router) external onlyDev {
        router = _router;
    }
}