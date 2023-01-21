pragma solidity >=0.5.0;

interface IDarwinSwapFactory {
    function getExchange(address) external view returns (address);
}
