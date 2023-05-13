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
            url: "https://data-seed-prebsc-2-s3.binance.org:8545",
            chainId: 97,
            accounts: [String(process.env.TESTNET_PRIVATEKEY)]
        },
        arbitrumGoerli: {
            url: "https://endpoints.omniatech.io/v1/arbitrum/goerli/public",
            chainId: 421613,
            accounts: [String(process.env.TESTNET_PRIVATEKEY)]
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
            arbitrumOne: String(process.env.ARBISCAN_API_KEY)
        }
    }
};

export default config;
