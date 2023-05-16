pragma solidity ^0.8.4;

// SPDX-License-Identifier: BSL-1.1

interface IDarwinLiquidityBundles {

    struct User {
        uint256 lpAmount;
        uint256 lockEnd;
        uint256 bundledEth;
        uint256 bundledToken;
    }

    event EnterBundle(
        address indexed user,
        uint256 amountToken,
        uint256 amountETH,
        uint256 timestamp,
        uint256 lockEnd
    );

    event ExitBundle(
        address indexed user,
        uint256 amountToken,
        uint256 amountETH,
        uint256 timestamp
    );

    function initialize(address _darwinRouter, address _WETH) external;
    function update(address _lpToken) external;
}