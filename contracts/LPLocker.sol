pragma solidity ^0.8.14;

// SPDX-License-Identifier: BUSL-1.1

import "./interfaces/IERC20.sol";

contract LPLocker {
    struct LockedToken {
        uint256 startTime;
        uint256 endTime;
        uint256 amount;
    }

    mapping(address => mapping(address => LockedToken)) internal _userLockedToken;

    function lockToken(address _token, uint256 _amount, uint256 _duration) external {
        require(_amount > 0, "LPLocker: ZERO_AMOUNT");
        require(IERC20(_token).balanceOf(msg.sender) >= _amount, "LPLocker: AMOUNT_EXCEEDS_BALANCE");

        // If this token has already an amount locked by this caller, just increase its locking amount by _amount;
        // And increase its locking duration by _duration (if endTime is not met yet) or set it to "now" + _duration
        // (if endTime is already passed). Avoids exploiting of _duration to decrease the lock period.
        if (_userLockedToken[msg.sender][_token].amount > 0) {
            _increaseLockedAmount(_token, _amount);
            _increaseLockDuration(_token, _duration);
            return;
        }

        _userLockedToken[msg.sender][_token] = LockedToken({
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            amount: _amount
        });

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    }

    function increaseLockedAmount(address _token, uint256 _amount) external {
        require(_amount > 0, "LPLocker: ZERO_AMOUNT");
        require(_userLockedToken[msg.sender][_token].amount > 0, "LPLocker: TOKEN_NOT_LOCKED");

        _increaseLockedAmount(_token, _amount);
    }

    function _increaseLockedAmount(address _token, uint256 _amount) internal {
        _userLockedToken[msg.sender][_token].amount += _amount;
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    }

    function increaseLockDuration(address _token, uint256 _increaseBy) external {
        require(_userLockedToken[msg.sender][_token].amount > 0, "LPLocker: TOKEN_NOT_LOCKED");

        _increaseLockDuration(_token, _increaseBy);
    }

    function _increaseLockDuration(address _token, uint256 _increaseBy) internal {
        if (_userLockedToken[msg.sender][_token].endTime >= block.timestamp) {
            _userLockedToken[msg.sender][_token].endTime += _increaseBy;
        } else {
            _userLockedToken[msg.sender][_token].endTime = block.timestamp + _increaseBy;
        }
    }

    function withdrawToken(address _token, uint256 _amount) external {
        require(_userLockedToken[msg.sender][_token].endTime <= block.timestamp, "LPLocker: TOKEN_STILL_LOCKED");
        require(_amount <= _userLockedToken[msg.sender][_token].amount, "LPLocker: AMOUNT_EXCEEDS_LOCKED_AMOUNT");

        _userLockedToken[msg.sender][_token].amount -= _amount;

        IERC20(_token).transfer(msg.sender, _amount);
    }
}