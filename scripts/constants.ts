const TEST = true;
export const VERIFY = false;
  // TODO: SET MASTERCHEF START DATE
export const MASTERCHEF_START = 0;

export const BSC_ADDRESSES = {
    deployer: "0x63a0704e005776B153248A500Dfd950873AFB186",
    darwin: "0xB25406f5135eB6274c648B9B69A9218284904cFb",
    community: "0x8c439c6e3C6006b3a7d2e7cff77bd92B337271e5",
    drop: "0xD04cB36A3e97150311Cf71798C40C3ae56b16339",
    presale: "",
    privateSales: [
        "0xE757E8aBeD6d2Ff8C2273D6BE76D89AB791Da257"
    ],
    vester: "0x5732dEe4Cfe9E30F7E400aCB442749A0C9C1Bac6",
    rewardsWallet: "0x3Cc90773ebB2714180b424815f390D937974109B",
    wallet1: "0x0bF1C4139A6168988Fe0d1384296e6df44B27aFd",
    wallet2: "0xBE013CeAB3611Dc71A4f150577375f8Cb8d9f6c3",
    kieran: "0xe4e672ED86b8f6782e889F125e977bcF54018232",
    charity: "0xf74Fb0505f868961f8da7e423d5c8A1CC5c2C162",
    giveaway: "0x33149c1CB70262E29bF7adde4aA79F41a2fd0c39",
    bounties: "0xD8F251F13eaf05C7D080F917560eB884FEd4227b",
    privateSaleBuyers: [
        ""
    ]
}

export const TESTNET_ADDRESSES = {
    darwin: "0xa5a5E675E2c66B599e601568ef9eB1650a4969F6",
    stakedDarwin: "",
    weth: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    busd: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
    community: "0x46aeeE521b0674b9A1aA155f7A5D8c3187eA7219",
    feeTo: "0x46aeeE521b0674b9A1aA155f7A5D8c3187eA7219",
    masterChefFeeTo: "0x46aeeE521b0674b9A1aA155f7A5D8c3187eA7219",
    deployer: "0x46aeeE521b0674b9A1aA155f7A5D8c3187eA7219",
    drop: "0xce0Cb550096E32D047d6741ED702daF2782cD2b8",
    presale: "",
    privateSales: [
        ""
    ],
    rewardsWallet: "0x3Cc90773ebB2714180b424815f390D937974109B",
    wallet1: "",
    kieran: "0xe4e672ED86b8f6782e889F125e977bcF54018232",
    charity: "",
    giveaway: "",
    bounties: "",
};

export const ARB_ADDRESSES = {
    darwin: "",
    stakedDarwin: "",
    weth: "",
    busd: "",
    community: "",
    feeTo: "",
    masterChefFeeTo: "",
    deployer: "0x63a0704e005776B153248A500Dfd950873AFB186",
    drop: "0x0D683F642f5A5055DC31741957e05cccEdf469BA",
    presale: "",
    privateSales: [
        ""
    ],
    rewardsWallet: "0x3Cc90773ebB2714180b424815f390D937974109B",
    wallet1: "0x5Baa5b0eCB4d81DEbb15be26cc967E01a4c6b3e0",
    kieran: "0xe4e672ED86b8f6782e889F125e977bcF54018232",
    charity: "0x4066a812D1940CeB6bcB6749acd7Abe0Ca20DF42",
    giveaway: "0x552F0100ae3A78ADd3D0f47F7590815b9538F4ef",
    bounties: "0x16c0EE2590d29E61De097515522dD672f6342FE3",
};

export const addr = TEST ? TESTNET_ADDRESSES : ARB_ADDRESSES;