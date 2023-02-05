pragma solidity ^0.8.14;

import "./interfaces/IUniswapV2Factory.sol";
import "./DarwinSwapPair.sol";
import "./interfaces/IERC20.sol";

contract UniswapV2Factory is IUniswapV2Factory {
    address public feeTo;
    address public feeToSetter;

    mapping(address => mapping(address => address)) public getPair;
    address[] public allPairs;

    function allPairsLength() external view returns (uint) {
        return allPairs.length;
    }

    // The original Uniswap function to create a new pair, but made internal
    function _createPair(address tokenA, address tokenB) internal returns (address pair) {
        require(tokenA != tokenB, "DarwinSwap: IDENTICAL_ADDRESSES");
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), "DarwinSwap: ZERO_ADDRESS");
        require(getPair[token0][token1] == address(0), "DarwinSwap: PAIR_EXISTS"); // single check is sufficient
        bytes memory bytecode = type(DarwinSwapPair).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        IDarwinSwapPair(pair).initialize(token0, token1);
        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair; // populate mapping in the reverse direction
        allPairs.push(pair);
        emit PairCreated(token0, token1, pair, allPairs.length);
    }

    function setFeeTo(address _feeTo) external {
        require(msg.sender == feeToSetter, "DarwinSwap: FORBIDDEN");
        feeTo = _feeTo;
    }

    // Made virtual to be inherited from DarwinSwap factory to add the onlyDev modifier
    function setFeeToSetter(address _feeToSetter) external virtual {
        feeToSetter = _feeToSetter;
    }
}