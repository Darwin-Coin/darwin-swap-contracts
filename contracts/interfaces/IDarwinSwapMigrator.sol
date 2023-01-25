pragma solidity ^0.8.14;

interface IDarwinSwapMigrator {
    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;
}
