pragma solidity ^0.8.14;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import "./interfaces/IDarwinStaking.sol";
import "./interfaces/IERC20.sol";

contract DarwinStaking is IDarwinStaking, ReentrancyGuard {
    IERC20 public darwin;
    IERC20 public stakedDarwin;

    // TODO: SET ACTUAL APR
    uint public constant BASE_APR = 7e18; // 7%
    uint private constant _SECONDS_IN_YEAR = 31_536_000;

    mapping(address => UserInfo) public userInfo;

    constructor(address _darwin, address _stakedDarwin) {
        darwin = IERC20(_darwin);
        stakedDarwin = IERC20(_stakedDarwin);
    }

    function stake(uint _amount, uint _lockPeriod) external nonReentrant {
        require(darwin.transferFrom(msg.sender, address(this), _amount), "DarwinStaking: STAKE_FAILED");

        _claim();
        userInfo[msg.sender].claimed = 0;
        userInfo[msg.sender].lastStakeTimestamp = block.timestamp;
        if (userInfo[msg.sender].lockEnd == 0) {
            userInfo[msg.sender].lockEnd = block.timestamp + _lockPeriod;
        } else {
            userInfo[msg.sender].lockEnd += _lockPeriod;
        }
        userInfo[msg.sender].lockPeriod += _lockPeriod;

        stakedDarwin.mint(msg.sender, _amount);

        emit Stake(msg.sender, _amount);
    }

    function withdraw(uint _amount) public nonReentrant {
        uint claimAmount = _claim();
        if (_amount > 0) {
            require(userInfo[msg.sender].lockEnd <= block.timestamp, "DarwinStaking: LOCKED");
            require(_amount <= stakedDarwin.balanceOf(msg.sender), "DarwinStaking: NOT_ENOUGH_sDARWIN");
            stakedDarwin.burn(msg.sender, _amount);
            userInfo[msg.sender].lockPeriod = 0;
            require(darwin.transfer(msg.sender, _amount), "DarwinStaking: WITHDRAW_TRANSFER_FAILED");
        }
        emit Withdraw(msg.sender, _amount, claimAmount);
    }

    function _claim() internal returns (uint claimAmount) {
        claimAmount = claimableDarwin(msg.sender);
        if (claimAmount > 0) {
            userInfo[msg.sender].claimed += claimAmount;
            darwin.mint(msg.sender, claimAmount);
        }
    }

    function claimableDarwin(address _user) public view returns(uint256 claimable) {
        uint staked = stakedDarwin.balanceOf(_user);
        if (staked == 0) {
            return 0;
        }
        uint claimed = userInfo[_user].claimed;
        uint start = userInfo[_user].lastStakeTimestamp;
        uint timePassedFromLastStake = (block.timestamp - start);

        claimable = (staked * (BASE_APR + lockBonusApr(_user)) * timePassedFromLastStake) / (100e18 * _SECONDS_IN_YEAR) - claimed;
    }

    function lockBonusApr(address _user) public view returns(uint256 bonus) {
        // TODO: SET ACTUAL MAX BONUS APR
        uint maxBonusApr = 7e18;
        uint lockPeriod = userInfo[_user].lockPeriod;
        // TODO: Max bonus currently set at 1 year lock, if lock period < 1 year the bonus is a fraction of 7%
        lockPeriod = lockPeriod > _SECONDS_IN_YEAR ? _SECONDS_IN_YEAR : lockPeriod;
        bonus = (maxBonusApr * lockPeriod) / _SECONDS_IN_YEAR;
    }
}