// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

import "./interfaces/IDarwinSwapLister.sol";
import "./interfaces/IDarwinSwapRouter.sol";
import "./interfaces/IERC20.sol";
import "../darwin-token-contracts/contracts/interface/IDarwin.sol";

import "./libraries/Tokenomics2Library.sol";

contract DarwinSwapLister is IDarwinSwapLister {
    address public dev;
    address public factory;

    uint public maxTok1Tax;
    uint public maxTok2Tax;

    mapping(address => TokenInfo) private _tokenInfo;

    mapping(address => bool) public isValidator;
    mapping(address => bool) public isUserBannedFromListing;

    constructor() {
        dev = msg.sender;
        isValidator[msg.sender] = true;
        maxTok1Tax = 1000; // Max add-on Tokenomics 1.0 percentage of taxation. (20.00%)
        maxTok2Tax = 500; // Max add-on Tokenomics 2.0 percentage of taxation. (10.00%)
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

        pair = IDarwinSwapFactory(factory).createPair(tokenA, tokenB);
    }

    // Allows a token owner (or the Dev address, in case the token is owned by address(0) et similia) to ask for the validation and listing of his token. This way users are able to put add-ons Tokenomics (1.0 or 2.0) on their tokens. (only if they get validated)
    // Also allows to propose modifies to an already listed token.
    function listToken(address tokenAddress, TokenInfo memory listingInfo) external {
        require(tokenAddress != address(0), "DarwinSwap: ZERO_ADDRESS");
        require(bytes(listingInfo.purpose).length > 0, "DarwinSwap: EMPTY_PURPOSE");
        require(_tokenInfo[tokenAddress].status != TokenStatus.BANNED && !isUserBannedFromListing[msg.sender], "DarwinSwap: TOKEN_OR_BANNED");
        address owner = _getTokenOwner(tokenAddress);
        require(msg.sender == owner || isValidator[msg.sender], "DarwinSwap: CALLER_NOT_TOKEN_OWNER_OR_VALIDATOR");

        // Makes sure the fields in the proposal are setted as they should by default
        listingInfo.owner = owner;
        listingInfo.status = TokenStatus.LISTED;
        listingInfo.valid = true;
        listingInfo.official = false;
        if (listingInfo.feeReceiver == address(0)) {
            listingInfo.feeReceiver = msg.sender;
        }

        bool valid = Tokenomics2Library.ensureTokenomics(listingInfo, maxTok1Tax, maxTok2Tax);
        require(valid, "DarwinSwap: INVALID_REQUESTED_TOKENOMICS");

        listingInfo.addedToks = Tokenomics2Library.adjustTokenomics(listingInfo.addedToks);

        _tokenInfo[tokenAddress] = listingInfo;

        emit TokenListed(tokenAddress, listingInfo);
    }

    // Lists DARWIN and pairs with WETH, with 5% tax on LP on buys
    function listDarwinWithWETH(address darwin, address weth, address darwinCommunity) external onlyDev {
        // DARWIN validate
        _tokenInfo[darwin].addedToks.tokenA2TaxOnBuy = 200;
        _tokenInfo[darwin].status = TokenStatus.LISTED;
        _tokenInfo[darwin].validator = msg.sender;
        _tokenInfo[darwin].valid = true;
        _tokenInfo[darwin].official = true;
        _tokenInfo[darwin].owner = msg.sender;
        _tokenInfo[darwin].feeReceiver = darwinCommunity;
        _tokenInfo[darwin].addedToks.tokenB1SellToLI = 200;

        address pair = IDarwinSwapFactory(factory).getPair(darwin, weth);
        if (pair == address(0)) {
            pair = IDarwinSwapFactory(factory).createPair(darwin, weth);
        }
        IDarwin(darwin).registerDarwinSwapPair(pair);
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
            _tokenInfo[_token].valid = false;
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

    function setFactory(address _factory) external onlyDev {
        factory = _factory;
    }

    // Gets the owner of the token (if any). Some tokens do not have an "owner" state variable or a "getOwner" function, so this uses a try/catch.
    function _getTokenOwner(address _tokenAddress) internal view returns(address) {
        try IERC20(_tokenAddress).owner() returns (address owner) {
            return owner;
        } catch {
            try IERC20(_tokenAddress).getOwner() returns (address owner) {
                return owner;
            } catch {
                return 0x0000000000000000000000000000000000000000;
            }
        }
    }
}