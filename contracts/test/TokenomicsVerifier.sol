pragma solidity ^0.8.14;

// SPDX-License-Identifier: UNLICENSED

import {TokenomicsChecker} from "../libraries/TokenomicsChecker.sol";

/// @title TokenomicsVerifier
/// @author SmartGambleDev
/// @dev Contract to test the functionalities of the TokenomicsChecker library
contract TokenomicsVerifier {
    mapping(address => TokenomicsChecker.TokenInfo) public tokenInfo;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function checkToken(address token_, uint amountIn_, address router_) external onlyOwner {
        tokenInfo[token_] = TokenomicsChecker.check(token_, amountIn_, router_);
    }

    receive() external payable {}
}