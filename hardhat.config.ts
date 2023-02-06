import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomiclabs/hardhat-solhint';
import 'hardhat-docgen';
import 'hardhat-spdx-license-identifier';

import { networks } from './hardhat.networks';

networks['hardhat'] = {
    forking: {
        url: process.env.MAINNET_RPC_URL || '',
    },
};

import * as dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.14',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
            outputSelection: {
                '*': {
                    '*': ['storageLayout'],
                },
            },
        },
    },
    networks,
    docgen: {
        path: './docs',
        clear: true,
        runOnCompile: true,
    },
    spdxLicenseIdentifier: {
        overwrite: false,
        runOnCompile: false,
    },
};

export default config;
