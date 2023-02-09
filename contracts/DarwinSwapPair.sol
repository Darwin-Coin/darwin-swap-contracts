pragma solidity ^0.8.14;

import "./interfaces/IDarwinSwapPair.sol";
import "./DarwinSwapERC20.sol";
import "./libraries/Math.sol";
import "./libraries/UQ112x112.sol";
import "./interfaces/IERC20.sol";
import "./interfaces/IUniswapV2Factory.sol";
import "./interfaces/IDarwinSwapFactory.sol";
import "./interfaces/IDarwinSwapCallee.sol";
import "./libraries/Tokenomics2Library.sol";

import "./AntiDumpGuard.sol";

contract DarwinSwapPair is IDarwinSwapPair, DarwinSwapERC20 {
    using SafeMath  for uint;
    using UQ112x112 for uint224;

    uint public constant MINIMUM_LIQUIDITY = 10**3;
    bytes4 private constant _SELECTOR = bytes4(keccak256(bytes("transfer(address,uint256)")));

    address public antiDumpGuard;

    address public factory;
    address public token0;
    address public token1;

    uint112 private _reserve0;           // uses single storage slot, accessible via getReserves
    uint112 private _reserve1;           // uses single storage slot, accessible via getReserves
    uint32  private _blockTimestampLast; // uses single storage slot, accessible via getReserves

    uint public price0CumulativeLast;
    uint public price1CumulativeLast;
    uint public kLast; // _reserve0 * _reserve1, as of immediately after the most recent liquidity event

    uint private _unlocked = 1;
    modifier lock() {
        require(_unlocked == 1, "DarwinSwap: LOCKED");
        _unlocked = 0;
        _;
        _unlocked = 1;
    }

    modifier onlyAntiDumpGuard() {
        require(msg.sender == antiDumpGuard, "DarwinSwapPair: CALLER_NOT_ANTIDUMP");
        _;
    }

    function getReserves() public view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) {
        reserve0 = _reserve0;
        reserve1 = _reserve1;
        blockTimestampLast = _blockTimestampLast;
    }

    function _safeTransfer(address token, address to, uint value, address otherToken) private {
        // NOTE: DarwinSwap: TOKS1_BUY
        if (otherToken != address(0)) {
            value -= Tokenomics2Library.handleToks1Buy(token, value, otherToken, factory);
        }
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(_SELECTOR, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), "DarwinSwap: TRANSFER_FAILED");
    }

    constructor() {
        factory = msg.sender;
    }

    // called once by the factory at time of deployment
    function initialize(address _token0, address _token1) external {
        require(msg.sender == factory, "DarwinSwap: FORBIDDEN"); // sufficient check
        token0 = _token0;
        token1 = _token1;

        // Deploy the AntiDumpGuard contract and save its address
        address _antiDumpGuard;
        address _addressThis = address(this);
        bytes memory bytecode = type(AntiDumpGuard).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        assembly {
            _antiDumpGuard := create2(_addressThis, add(bytecode, 32), mload(bytecode), salt)
        }
        antiDumpGuard = _antiDumpGuard;
    }

    // update reserves and, on the first call per block, price accumulators
    function _update(uint balance0, uint balance1, uint112 reserve0, uint112 reserve1) private {
        require(balance0 <= type(uint112).max && balance1 <= type(uint112).max, "DarwinSwap: OVERFLOW");
        uint32 blockTimestamp = uint32(block.timestamp % 2**32);
        uint32 timeElapsed = blockTimestamp - _blockTimestampLast; // overflow is desired
        if (timeElapsed > 0 && reserve0 != 0 && reserve1 != 0) {
            // * never overflows, and + overflow is desired
            price0CumulativeLast += uint(UQ112x112.encode(reserve1).uqdiv(reserve0)) * timeElapsed;
            price1CumulativeLast += uint(UQ112x112.encode(reserve0).uqdiv(reserve1)) * timeElapsed;
        }
        _reserve0 = uint112(balance0);
        _reserve1 = uint112(balance1);
        _blockTimestampLast = blockTimestamp;
        emit Sync(_reserve0, _reserve1);
    }

    // if fee is on, mint liquidity equivalent to 1/6th of the growth in sqrt(k)
    function _mintFee(uint112 reserve0, uint112 reserve1) private returns (bool feeOn) {
        address feeTo = IUniswapV2Factory(factory).feeTo();
        feeOn = feeTo != address(0);
        uint _kLast = kLast; // gas savings
        if (feeOn) {
            if (_kLast != 0) {
                uint rootK = Math.sqrt(uint(reserve0).mul(reserve1));
                uint rootKLast = Math.sqrt(_kLast);
                if (rootK > rootKLast) {
                    uint numerator = totalSupply.mul(rootK.sub(rootKLast));
                    uint denominator = rootK.mul(5).add(rootKLast);
                    uint liquidity = numerator / denominator;
                    if (liquidity > 0) _mint(feeTo, liquidity);
                }
            }
        } else if (_kLast != 0) {
            kLast = 0;
        }
    }

    // this low-level function should be called from a contract which performs important safety checks
    function mint(address to) external lock returns (uint liquidity) {
        (uint112 reserve0, uint112 reserve1,) = getReserves(); // gas savings
        uint balance0 = IERC20(token0).balanceOf(address(this));
        uint balance1 = IERC20(token1).balanceOf(address(this));
        uint amount0 = balance0.sub(reserve0);
        uint amount1 = balance1.sub(reserve1);

        bool feeOn = _mintFee(reserve0, reserve1);
        uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee
        if (_totalSupply == 0) {
            liquidity = Math.sqrt(amount0.mul(amount1)).sub(MINIMUM_LIQUIDITY);
           _mint(address(0), MINIMUM_LIQUIDITY); // permanently lock the first MINIMUM_LIQUIDITY tokens
        } else {
            liquidity = Math.min(amount0.mul(_totalSupply) / reserve0, amount1.mul(_totalSupply) / reserve1);
        }
        require(liquidity > 0, "DarwinSwap: INSUFFICIENT_LIQUIDITY_MINTED");
        _mint(to, liquidity);

        _update(balance0, balance1, reserve0, reserve1);
        if (feeOn) kLast = uint(_reserve0).mul(_reserve1); // reserve0 and reserve1 are up-to-date
        emit Mint(msg.sender, amount0, amount1);
    }

    // this low-level function should be called from a contract which performs important safety checks
    function burn(address to) external lock returns (uint amount0, uint amount1) {
        (uint112 reserve0, uint112 reserve1,) = getReserves(); // gas savings
        address _token0 = token0;                                // gas savings
        address _token1 = token1;                                // gas savings
        uint balance0 = IERC20(_token0).balanceOf(address(this));
        uint balance1 = IERC20(_token1).balanceOf(address(this));
        uint liquidity = balanceOf[address(this)];

        bool feeOn = _mintFee(reserve0, reserve1);
        uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee
        amount0 = liquidity.mul(balance0) / _totalSupply; // using balances ensures pro-rata distribution
        amount1 = liquidity.mul(balance1) / _totalSupply; // using balances ensures pro-rata distribution
        require(amount0 > 0 && amount1 > 0, "DarwinSwap: INSUFFICIENT_LIQUIDITY_BURNED");
        _burn(address(this), liquidity);
        _safeTransfer(_token0, to, amount0, address(0));
        _safeTransfer(_token1, to, amount1, address(0));
        balance0 = IERC20(_token0).balanceOf(address(this));
        balance1 = IERC20(_token1).balanceOf(address(this));

        _update(balance0, balance1, reserve0, reserve1);
        if (feeOn) kLast = uint(_reserve0).mul(_reserve1); // reserve0 and reserve1 are up-to-date
        emit Burn(msg.sender, amount0, amount1, to);
    }

    // this low-level function should be called from a contract which performs important safety checks
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data, address[2] memory firstAndLastInPath) external lock {
        require(amount0Out > 0 || amount1Out > 0, "DarwinSwap: INSUFFICIENT_OUTPUT_AMOUNT");
        (uint112 reserve0, uint112 reserve1,) = getReserves(); // gas savings
        require(amount0Out < reserve0 && amount1Out < reserve1, "DarwinSwap: INSUFFICIENT_LIQUIDITY");

        uint balance0;
        uint balance1;
        { // scope for _token{0,1}, avoids stack too deep errors
        address _token0 = token0;
        address _token1 = token1;
        require(to != _token0 && to != _token1, "DarwinSwap: INVALID_TO");
        if (amount0Out > 0) _safeTransfer(_token0, to, amount0Out, firstAndLastInPath[0]); // optimistically transfer tokens
        if (amount1Out > 0) _safeTransfer(_token1, to, amount1Out, firstAndLastInPath[0]); // optimistically transfer tokens
        if (data.length > 0) IDarwinSwapCallee(to).darwinSwapCall(msg.sender, amount0Out, amount1Out, data);
        balance0 = IERC20(_token0).balanceOf(address(this));
        balance1 = IERC20(_token1).balanceOf(address(this));
        }
        uint amount0In = balance0 > reserve0 - amount0Out ? balance0 - (reserve0 - amount0Out) : 0;
        uint amount1In = balance1 > reserve1 - amount1Out ? balance1 - (reserve1 - amount1Out) : 0;
        require(amount0In > 0 || amount1In > 0, "DarwinSwap: INSUFFICIENT_INPUT_AMOUNT");
        { // scope for reserve{0,1}Adjusted, avoids stack too deep errors
        uint balance0Adjusted = balance0.mul(1000).sub(amount0In.mul(3));
        uint balance1Adjusted = balance1.mul(1000).sub(amount1In.mul(3));
        require(balance0Adjusted.mul(balance1Adjusted) >= uint(reserve0).mul(reserve1).mul(1000**2), "DarwinSwap: K");
        }

        if (firstAndLastInPath[1] != address(0)) {
            // NOTE: TOKS2_SELL
            Tokenomics2Library.handleToks2Sell(amount0In > 0 ? token0 : token1, amount0In > amount1In ? amount0In : amount1In, firstAndLastInPath[1], factory);
            balance0 = IERC20(token0).balanceOf(address(this));
            balance1 = IERC20(token1).balanceOf(address(this));
        }
        if (firstAndLastInPath[0] != address(0)) {
            // NOTE: TOKS2_BUY
            Tokenomics2Library.handleToks2Buy(amount0Out > 0 ? token0 : token1, amount0Out > amount1Out ? amount0Out : amount1Out, firstAndLastInPath[0], to, factory);
            balance0 = IERC20(token0).balanceOf(address(this));
            balance1 = IERC20(token1).balanceOf(address(this));
        }

        _update(balance0, balance1, reserve0, reserve1);
        _emitSwap(amount0In, amount1In, amount0Out, amount1Out, to);
    }

    // TODO: THIS CURRENTLY AVOIDS STACK TOO DEEP, BUT MAYBE EVERYTHING CAN BE OPTIMIZED AND A BETTER SOLUTION CAN BE FOUND
    function _emitSwap(uint amount0In, uint amount1In, uint amount0Out, uint amount1Out, address to) internal {
        emit Swap(msg.sender, amount0In, amount1In, amount0Out, amount1Out, to);
    }

    // Allows antidump guard to call this simpler swap function to spend less gas
    function swapWithoutToks(address tokenIn, uint amountIn) external lock onlyAntiDumpGuard {
        (uint reserveIn, uint reserveOut, address tokenOut) = token0 == tokenIn ? (_reserve0, _reserve1, token1) : (_reserve1, _reserve0, token0);
        uint amountOut = DarwinSwapLibrary.getAmountOut(amountIn, reserveIn, reserveOut);
        IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
        IERC20(tokenOut).transfer(msg.sender, amountOut);

        _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)), _reserve0, _reserve1);
    }

    // force balances to match reserves
    function skim(address to) external lock {
        address _token0 = token0; // gas savings
        address _token1 = token1; // gas savings
        _safeTransfer(_token0, to, IERC20(_token0).balanceOf(address(this)).sub(_reserve0), address(0));
        _safeTransfer(_token1, to, IERC20(_token1).balanceOf(address(this)).sub(_reserve1), address(0));
    }

    // force reserves to match balances
    function sync() external lock {
        _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)), _reserve0, _reserve1);
    }
}