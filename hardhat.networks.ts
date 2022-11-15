export const networks: {
    [name: string]: Network;
} = {};
const etherscan: Etherscan = {};

interface Etherscan {
    [apiKey: string]: ApiKey;
}

interface ApiKey {
    [network: string]: string;
}

interface Network {
    url?: string;
    chainId?: number;
    accounts?: string[];
    forking?: {
        url: string;
    };
}

function register(
    name: string,
    chainId: number,
    url: string,
    privateKey: string,
    etherscanNetworkName: string,
    etherscanKey: string
) {
    if (url && privateKey && etherscanKey) {
        networks[name] = {
            url,
            chainId,
            accounts: [privateKey],
        };
        etherscan.apiKey[etherscanNetworkName] = etherscanKey;
        console.log(`Network '${name}' registered`);
    } else {
        console.log(`Network '${name}' not registered`);
    }
}

register(
    'bsc',
    56,
    process.env.BSC_RPC_URL!,
    process.env.BSC_PRIVATE_KEY!,
    'bsc',
    process.env.BSC_ETHERSCAN_KEY!
);
register(
    'bsc-testnet',
    87,
    process.env.BSC_TESTNET_RPC_URL!,
    process.env.BSC_TESTNET_PRIVATE_KEY!,
    'bsc-testnet',
    process.env.BSC_ETHERSCAN_KEY!
);

module.exports = {
    networks,
    etherscan,
};
