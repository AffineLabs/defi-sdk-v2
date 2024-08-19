import {NetworkParams} from "./sdk-v1-types";
import {
    FORKED_NODE_URL_FOR_BASE,
    FORKED_NODE_URL_FOR_ETH,
    FORKED_NODE_URL_FOR_MATIC,
    IS_USING_FORKED_MAINNET
} from "./sdk-v1-constants";
import {SymbioticVault} from "./constants";

const _XUltraLRTAddressSEPOLIA = "0x633dc76965e520a777378CFc6299d925B443C224";
const _XUltraLRTAddressBSC = "0x7e80886220B586942a200c92AD1273A3e128086b"
const _XUltraLRTAddressBLAST = "0x7e80886220B586942a200c92AD1273A3e128086b"
const _XUltraLRTAddressETH = "0xb954d805aAf2a2c4fCe83325fC4C785DeF4A6E94"

const ultraLRTTokenBlast = "0xbb4e01B8940E8E2b3a95cED7941969D033786FF7"


export const NETWORK_PARAMS: { [index: number]: NetworkParams } = {
    1: {
        chainName: `Ethereum Mainnet${IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls:
            IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_ETH
                ? [FORKED_NODE_URL_FOR_ETH]
                : ["https://rpc.ankr.com/eth"],
        blockExplorerUrls: ["https://etherscan.io"],
        xUltraLRTAddress: _XUltraLRTAddressETH,
        ultraLRTAddress: SymbioticVault
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
        chainName: `Polygon Mainnet${IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
        nativeCurrency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls:
            IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_MATIC
                ? [FORKED_NODE_URL_FOR_MATIC]
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
        chainName: `Base Protocol Mainnet${IS_USING_FORKED_MAINNET ? " (Forked)" : ""}`,
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls:
            IS_USING_FORKED_MAINNET && FORKED_NODE_URL_FOR_BASE
                ? [FORKED_NODE_URL_FOR_BASE]
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
            name: "BSC Testnet",
            symbol: "tBNB",
            decimals: 18,
        },
        rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
        blockExplorerUrls: ["https://testnet.bscscan.com/"],
        xUltraLRTAddress: _XUltraLRTAddressBSC
    },
    81457: {
        chainName: "Blast",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://blast-mainnet.g.alchemy.com/v2/T8JHI8jMGKrO88j6qvZwjk8d1IxOPqtk"],
        blockExplorerUrls: ["https://blastscan.io/"],
        xUltraLRTAddress: _XUltraLRTAddressBLAST,
        ultraLRTAddress: ultraLRTTokenBlast
    }
};
