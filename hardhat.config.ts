import { HardhatUserConfig } from "hardhat/config";
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomiclabs/hardhat-solhint';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-etherscan';

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {

    solidity: {
        compilers: [
            {
                version: "0.8.14",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                }
            }
        ],
    },

    networks: {
        mainnet: {
            url: "https://eth.llamarpc.com",
            chainId: 1,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        bsc: {
            url: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        arbitrumOne: {
            url: "https://arbitrum-one.public.blastapi.io",
            chainId: 42161,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        bscTestnet: {
            url: "https://bsc-testnet.public.blastapi.io",
            chainId: 97,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        arbitrumGoerli: {
            url: "https://arbitrum-goerli.public.blastapi.io",
            chainId: 421613,
            accounts: [String(process.env.TESTNET_PRIVATEKEY)]
        },
        bitgert: {
            url: "https://rpc.icecreamswap.com",
            chainId: 32520,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        bitgertTestnet: {
            url: "https://testnet-rpc.brisescan.com",
            chainId: 64668,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },
        tritonNautilus: {
            url: "https://triton.api.nautchain.xyz",
            chainId: 91002,
            accounts: [String(process.env.TESTNET_PRIVATEKEY)]
        },
        proteusNautilus: {
            url: "https://api.proteus.nautchain.xyz/solana",
            chainId: 88002,
            accounts: [String(process.env.MAINNET_PRIVATEKEY)]
        },

        hardhat: {
            loggingEnabled: false,
            forking: {
                enabled: false,
                url: "https://bsc-dataseed3.ninicoin.io/"
            },
            accounts: {
                accountsBalance: "100000000000000000000000000",
                count: 100,
                initialIndex: 0
            }
        }
    },

    gasReporter: {
        enabled: Boolean(process.env.REPORT_GAS),
        currency: "USD",
    },

    etherscan: {
        apiKey: {
            bsc: String(process.env.BSCSCAN_API_KEY),
            bscTestnet: String(process.env.BSCSCAN_API_KEY),
            arbitrumOne: String(process.env.ARBISCAN_API_KEY),
            mainnet: String(process.env.ETHERSCAN_API_KEY)
        }
    }
};

export default config;
