import "./libraries/OZOwnable.sol";

contract FeeReceiverProxy is Ownable {
    address public feeReceiver;

    function _sendEtherUsingCall(address payable _to, uint256 _value) internal {
        (bool success, ) = _to.call{value: _value}("");
        require(success, "FeeReceiverProxy: ETH_TRANSFER_FAILED");
    }

    receive() external payable {
        _sendEtherUsingCall(payable(feeReceiver), msg.value);
    }

    constructor(address _feeReceiver) {
        feeReceiver = _feeReceiver;
    }

    function setFeeReceiver(address _feeReceiver) external onlyOwner {
        feeReceiver = _feeReceiver;
    }

    function withdrawToken(
        address _tokenAddress,
        uint256 amount
    ) external onlyOwner {
        IERC20(_tokenAddress).transfer(msg.sender, amount);
    }
}
