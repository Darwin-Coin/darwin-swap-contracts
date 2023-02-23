// SPDX-License-Identifier: BSL-1.1

import "../libraries/FactoryLibrary.sol";

pragma solidity ^0.8.14;

interface IDarwinSwapFactory {
    function router() external view returns(address);
    function dev() external view returns(address);
    function feeTo() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function setFeeTo(address) external;

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function tokenInfo(address _token) external view returns(FL.TokenInfo memory);
    function isValidator(address user) external view returns (bool);

    //function validateToken(address tokenToValidate, FL.TokenStatus outcome, bool isTokenValid) external;
    //function proposeToken(address tokenAddress, FL.TokenInfo memory proposalInfo) external;

    function INIT_CODE_HASH() external pure returns(bytes32);
}