pragma solidity ^0.8.14;

interface IDarwinStaking {

    struct UserInfo {
        uint claimed;
        uint lastStakeTimestamp;
        uint lockPeriod;
        uint lockEnd;
    }

    event Stake(address indexed user, uint indexed amount);
    event Withdraw(address indexed user, uint indexed amount, uint indexed rewards);

}