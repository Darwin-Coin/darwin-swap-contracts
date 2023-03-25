pragma solidity ^0.8.14;

// SPDX-License-Identifier: MIT

interface IDarwinNFT {
    struct Stats {
        uint256 hp; // NFT HP Points
        uint256 attack; // NFT Attack Points
        uint256 defense; // NFT Defense Points
        uint256 speed; // NFT Speed Points
        uint256 special; // NFT Special Points
        bool good; // NFT Good (true) or Bad (false)
        Rarity rarity; // NFT Rarity
        uint256 multiplier; // NFT Multiplier for Darwin Staking (2 decimals)
    }

    enum Rarity {
        COMMON,
        RARE,
        ULTRARARE,
        MYTHICAL,
        DIVINE
    }
}