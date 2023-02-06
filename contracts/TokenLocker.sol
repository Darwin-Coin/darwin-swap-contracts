pragma solidity ^0.8.14;

import "./interfaces/IERC20.sol";
import "./interfaces/ITokenLocker.sol";

contract TokenLocker is ITokenLocker {
    mapping(address => mapping(address => LockedToken)) internal _userLockedToken;

    bool private _locked;
    modifier nonReentrant() {
        require(_locked == false, "TokenLocker: REENTRANT_CALL");
        _locked = true;
        _;
        _locked = false;
    }

    function lockToken(address _token, uint256 _amount, uint256 _duration) external nonReentrant {
        require(_amount > 0, "TokenLocker: ZERO_AMOUNT");
        require(IERC20(_token).balanceOf(msg.sender) >= _amount, "TokenLocker: AMOUNT_EXCEEDS_BALANCE");

        // If this token has already an amount locked by this caller, just increase its locking amount by _amount;
        // And increase its locking duration by _duration (if endTime is not met yet) or set it to "now" + _duration
        // (if endTime is already passed). Avoids exploiting of _duration to decrease the lock period.
        if (_userLockedToken[msg.sender][_token].amount > 0) {
            _increaseLockedAmount(_token, _amount);
            _increaseLockDuration(_token, _duration);
            return;
        }

        _userLockedToken[msg.sender][_token] = LockedToken({
            endTime: block.timestamp + _duration,
            amount: _amount
        });

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        emit TokenLocked(msg.sender, _token, _amount, _duration);
    }

    function increaseLockedAmount(address _token, uint256 _amount) external nonReentrant {
        require(_amount > 0, "TokenLocker: ZERO_AMOUNT");
        require(_userLockedToken[msg.sender][_token].amount > 0, "TokenLocker: TOKEN_NOT_LOCKED");

        _increaseLockedAmount(_token, _amount);
    }

    function _increaseLockedAmount(address _token, uint256 _amount) internal {
        _userLockedToken[msg.sender][_token].amount += _amount;
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        emit LockAmountIncreased(msg.sender, _token, _amount);
    }

    function increaseLockDuration(address _token, uint256 _increaseBy) external nonReentrant {
        require(_userLockedToken[msg.sender][_token].amount > 0, "TokenLocker: TOKEN_NOT_LOCKED");

        _increaseLockDuration(_token, _increaseBy);
    }

    function _increaseLockDuration(address _token, uint256 _increaseBy) internal {
        if (_userLockedToken[msg.sender][_token].endTime >= block.timestamp) {
            _userLockedToken[msg.sender][_token].endTime += _increaseBy;
        } else {
            _increaseBy += (block.timestamp - _userLockedToken[msg.sender][_token].endTime);
            _userLockedToken[msg.sender][_token].endTime += _increaseBy;
        }

        emit LockDurationIncreased(msg.sender, _token, _increaseBy);
    }

    function withdrawToken(address _token, uint256 _amount) external nonReentrant {
        require(_userLockedToken[msg.sender][_token].endTime <= block.timestamp, "TokenLocker: TOKEN_STILL_LOCKED");
        require(_amount <= _userLockedToken[msg.sender][_token].amount, "TokenLocker: AMOUNT_EXCEEDS_LOCKED_AMOUNT");

        _userLockedToken[msg.sender][_token].amount -= _amount;

        IERC20(_token).transfer(msg.sender, _amount);

        emit TokenWithdrawn(msg.sender, _token, _amount);
    }
}