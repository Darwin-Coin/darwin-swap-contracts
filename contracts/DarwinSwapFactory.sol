pragma solidity ^0.8.14;

import "./DarwinSwapPair.sol";
import "./AntiDumpGuard.sol";

import "./interfaces/IDarwinSwapFactory.sol";

contract DarwinSwapFactory is IDarwinSwapFactory {
    address public dev;
    address public router;
    address public lister;
    address public feeTo;
    // the stablecoin used as USD value (BUSD)
    address public USD;

    mapping(address => mapping(address => address)) public getPair;
    address[] public allPairs;

    function allPairsLength() external view returns (uint) {
        return allPairs.length;
    }

    bytes32 public constant INIT_CODE_HASH = keccak256(abi.encodePacked(type(DarwinSwapPair).creationCode));

    constructor(address _lister, address _USD) {
        dev = msg.sender;
        lister = _lister;
        USD = _USD;
    }

    modifier onlyDev() {
        require(msg.sender == dev, "DarwinSwap: CALLER_NOT_DEV");
        _;
    }

    modifier onlyLister() {
        require(msg.sender == lister, "DarwinSwap: CALLER_NOT_LISTER_CONTRACT");
        _;
    }

    function createPair(address tokenA, address tokenB) external onlyLister returns (address pair) {
        require(tokenA != tokenB, "DarwinSwap: IDENTICAL_ADDRESSES");
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), "DarwinSwap: ZERO_ADDRESS");
        require(getPair[token0][token1] == address(0), "DarwinSwap: PAIR_EXISTS"); // single check is sufficient
        bytes memory bytecode = type(DarwinSwapPair).creationCode;
        bytes memory bytecode2 = type(AntiDumpGuard).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        address _antiDumpGuard;
        assembly {
            pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
            _antiDumpGuard := create2(0, add(bytecode2, 32), mload(bytecode2), salt)
        }
        IAntiDumpGuard(_antiDumpGuard).initialize(pair);
        IDarwinSwapPair(pair).initialize(token0, token1, _antiDumpGuard);
        getPair[token0][token1] = pair;
        getPair[token1][token0] = pair; // populate mapping in the reverse direction
        allPairs.push(pair);
        emit PairCreated(token0, token1, pair, allPairs.length);
    }

    function setFeeTo(address _feeTo) external onlyDev {
        feeTo = _feeTo;
    }

    function setDev(address _dev) external onlyDev {
        dev = _dev;
    }

    function setLister(address _lister) external onlyDev {
        lister = _lister;
    }

    function setRouter(address _router) external onlyDev {
        router = _router;
    }
}