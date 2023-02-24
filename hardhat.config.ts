import { HardhatUserConfig } from "hardhat/config";
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomiclabs/hardhat-solhint';
import '@openzeppelin/hardhat-upgrades';

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
        bscTestnet: {
            url: "https://bsc-testnet.public.blastapi.io",
            chainId: 97,
            accounts: [String(process.env.BSC_TESTNET_PRIVATEKEY)]
        },
        bscMainnet: {
            url: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            accounts: [String(process.env.BSC_MAINNET_PRIVATEKEY)]
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
            bscTestnet: String(process.env.BSCSCAN_API_KEY)
        }
    }
};

export default config;
