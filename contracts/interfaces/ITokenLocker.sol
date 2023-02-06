pragma solidity ^0.8.14;

interface ITokenLocker {
    struct LockedToken {
        uint256 endTime;
        uint256 amount;
    }

    event TokenLocked(address indexed user, address indexed token, uint256 amount, uint256 duration);
    event LockAmountIncreased(address indexed user, address indexed token, uint256 amountIncreased);
    event LockDurationIncreased(address indexed user, address indexed token, uint256 durationIncreased);
    event TokenWithdrawn(address indexed user, address indexed token, uint256 amount);

    function lockToken(address _token, uint256 _amount, uint256 _duration) external;
    function increaseLockedAmount(address _token, uint256 _amount) external;
    function increaseLockDuration(address _token, uint256 _increaseBy) external;
    function withdrawToken(address _token, uint256 _amount) external;
}