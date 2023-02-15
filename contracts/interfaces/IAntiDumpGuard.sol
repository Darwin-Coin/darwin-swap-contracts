// SPDX-License-Identifier: BSL-1.1

pragma solidity ^0.8.14;

interface IAntiDumpGuard {
    event BuyBackAndPair(address tokenSold, address tokenBought, uint amountSold, uint amountBought);

    function buyBackAndPair(address _token) external;
}