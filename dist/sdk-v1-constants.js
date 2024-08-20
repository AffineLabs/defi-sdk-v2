"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WITHDRAW_SLIPPAGE_BY_PRODUCT = exports.CCIP_NETWORK_SELECTOR = exports.FORKED_NODE_URL_FOR_BASE = exports.FORKED_NODE_URL_FOR_MATIC = exports.FORKED_NODE_URL_FOR_ETH = exports.IS_USING_FORKED_MAINNET = exports.WALLETCONNECT_PROJECT_ID = exports.MAX_APPROVAL_AMOUNT = exports.MAX_UINT = exports.ALLOWED_CHAIN_IDS = exports.NETWORK_TYPE = exports.getChainIdFromRaw = exports.DEFAULT_RAW_CHAIN_ID = exports.DEFAULT_WALLET = void 0;
const ethers_1 = require("ethers");
exports.DEFAULT_WALLET = "magic";
// The chain id is a hexadecimal string preceeded by "0x"
exports.DEFAULT_RAW_CHAIN_ID = process.env.CHAIN_ID
    ? parseInt(process.env.CHAIN_ID)
    : 80001;
function getChainIdFromRaw(chainId = exports.DEFAULT_RAW_CHAIN_ID) {
    return `0x${Number(chainId).toString(16)}`;
}
exports.getChainIdFromRaw = getChainIdFromRaw;
exports.NETWORK_TYPE = process.env.NEXT_PUBLIC_NETWORK_TYPE === "mainnet" ? "mainnet" : "testnet";
exports.ALLOWED_CHAIN_IDS = exports.NETWORK_TYPE === "mainnet" ? [1, 81457, 59144] : [17000, 11155111, 97];
exports.MAX_UINT = ethers_1.ethers.BigNumber.from(2).pow(256).sub(1);
exports.MAX_APPROVAL_AMOUNT = ethers_1.ethers.constants.MaxUint256;
exports.WALLETCONNECT_PROJECT_ID = process.env.WALLETCONNECT_PROJECT_ID || "demo-project-id";
exports.IS_USING_FORKED_MAINNET = process.env.IS_USING_FORKED_MAINNET === "true";
exports.FORKED_NODE_URL_FOR_ETH = process.env.FORKED_NODE_URL_FOR_ETH || "";
exports.FORKED_NODE_URL_FOR_MATIC = process.env.FORKED_NODE_URL_FOR_MATIC || "";
exports.FORKED_NODE_URL_FOR_BASE = process.env.FORKED_NODE_URL_FOR_BASE || "";
exports.CCIP_NETWORK_SELECTOR = {
    1: `5009297550715157269`,
    137: `4051577828743386545`,
};
/**
 * We will use this to show the slippage for the withdraw/ sell of the product/ baskets.
 * * Note: Please add the slippage here if you want to include a new product.
 */
exports.WITHDRAW_SLIPPAGE_BY_PRODUCT = {
    ethLeverage: {
        max: 1,
        avg: 0.4,
    },
    ethEarn: {
        max: 1,
        avg: 0.5,
    },
    alpLarge: {
        max: 1,
        avg: 0.5,
    },
    ethWethEarn: {
        max: 1,
        avg: 0.5,
    },
    alpSave: {},
    degen: {},
    polygonDegen: {},
    polygonLeverage: {},
    baseUsdEarn: {},
    baseLeverage: {},
    ssvEthUSDEarn: {},
    polygonLevMaticX: {},
    polygon6xLevMaticX: {},
    affineReStaking: {},
    ultraLRT: {},
};
