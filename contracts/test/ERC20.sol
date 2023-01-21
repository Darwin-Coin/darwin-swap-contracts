pragma solidity =0.5.16;

import '../DarwinSwapERC20.sol';

contract ERC20 is DarwinSwapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}