pragma solidity ^0.8.14;

contract TestERC20 {
    address public owner;
    string public name;
    string public symbol;
    uint8 public constant decimals = 18;
    uint public constant MAX_SUPPLY = 1e30;
    uint public totalSupply;
    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;

    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    constructor(string memory _name, string memory _symbol) {
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        _mint(msg.sender, 1000000 * 1e18);
    }

    function _mint(address to, uint value) internal {
        totalSupply = totalSupply + value;
        balanceOf[to] = balanceOf[to] + value;
        emit Transfer(address(0), to, value);
    }

    function _burn(address from, uint value) internal {
        balanceOf[from] = balanceOf[from] - value;
        totalSupply = totalSupply - value;
        emit Transfer(from, address(0), value);
    }

    function _approve(address _owner, address spender, uint value) private {
        allowance[_owner][spender] = value;
        emit Approval(_owner, spender, value);
    }

    function _transfer(address from, address to, uint value) private {
        balanceOf[from] = balanceOf[from] - value;
        balanceOf[to] = balanceOf[to] + value;
        emit Transfer(from, to, value);
    }

    function mint(address to, uint value) external returns (bool) {
        require (msg.sender == owner, "TestERC20: CALLER_NOT_OWNER");
        _mint(to, value);
        return true;
    }

    function approve(address spender, uint value) external returns (bool) {
        _approve(msg.sender, spender, value);
        return true;
    }

    function transfer(address to, uint value) external returns (bool) {
        _transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(address from, address to, uint value) external returns (bool) {
        if (allowance[from][msg.sender] != type(uint).max) {
            allowance[from][msg.sender] = allowance[from][msg.sender] - value;
        }
        _transfer(from, to, value);
        return true;
    }

    function transferOwnership(address to) external {
        require (msg.sender == owner, "TestERC20: CALLER_NOT_OWNER");
        owner = to;
    }

    // WBNB FUNCTIONS
    receive() external payable {
        deposit();
    }
    function deposit() public payable {
        balanceOf[msg.sender] += msg.value;
    }
    function withdraw(uint256 amountETH) public {
        balanceOf[msg.sender] -= amountETH;
        (bool success, ) = payable(msg.sender).call{value: amountETH}("");
        require (success, "TestERC20::withdraw: TRASNFER_ETH_ERROR");
    }
}