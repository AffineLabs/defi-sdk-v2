"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NETWORK_PARAMS = void 0;
const sdk_v1_constants_1 = require("./sdk-v1-constants");
let _XUltraLRTAddressSEPOLIA = "0x633dc76965e520a777378CFc6299d925B443C224";
let _XUltraLRTAddressBSC = "0x7e80886220B586942a200c92AD1273A3e128086b";
exports.NETWORK_PARAMS = {
    1: {
        chainName: `Ethereum Mainnet${sdk_v1_constants_1.IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: sdk_v1_constants_1.IS_USING_FORKED_MAINNET && sdk_v1_constants_1.FORKED_NODE_URL_FOR_ETH
            ? [sdk_v1_constants_1.FORKED_NODE_URL_FOR_ETH]
            : ["https://rpc.ankr.com/eth"],
        blockExplorerUrls: ["https://etherscan.io"],
    },
    5: {
        chainName: "Goerli Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.ankr.com/eth_goerli"],
        blockExplorerUrls: ["https://goerli.etherscan.io"],
    },
    17000: {
        chainName: "Holesky Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://ethereum-holesky-rpc.publicnode.com"],
        blockExplorerUrls: ["https://holesky.etherscan.io"],
    },
    137: {
        chainName: `Polygon Mainnet${sdk_v1_constants_1.IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
        nativeCurrency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: sdk_v1_constants_1.IS_USING_FORKED_MAINNET && sdk_v1_constants_1.FORKED_NODE_URL_FOR_MATIC
            ? [sdk_v1_constants_1.FORKED_NODE_URL_FOR_MATIC]
            : ["https://polygon-rpc.com"],
        blockExplorerUrls: ["https://polygonscan.com"],
    },
    80001: {
        chainName: "Polygon Mumbai Testnet",
        nativeCurrency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: ["https://polygon-mumbai.g.alchemy.com/v2/demo"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    },
    8453: {
        chainName: `Base Protocol Mainnet${sdk_v1_constants_1.IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: sdk_v1_constants_1.IS_USING_FORKED_MAINNET && sdk_v1_constants_1.FORKED_NODE_URL_FOR_BASE
            ? [sdk_v1_constants_1.FORKED_NODE_URL_FOR_BASE]
            : ["https://mainnet.base.org"],
        blockExplorerUrls: ["https://basescan.org"],
    },
    84531: {
        chainName: "Base Goerli",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://goerli.base.org"],
        blockExplorerUrls: ["https://goerli.basescan.org"],
    },
    11155111: {
        chainName: "Sepolia Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://ethereum-sepolia.rpc.subquery.network/public"],
        blockExplorerUrls: ["https://sepolia.etherscan.io/"],
        xUltraLRTAddress: _XUltraLRTAddressSEPOLIA
    },
    97: {
        chainName: "BSC Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
        blockExplorerUrls: ["https://testnet.bscscan.com/"],
        xUltraLRTAddress: _XUltraLRTAddressBSC
    }
};
