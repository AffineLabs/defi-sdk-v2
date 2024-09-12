import { BigNumber, ethers } from "ethers";
import {
  AllowedChainId,
  WithdrawSlippageByProduct,
} from "./sdk-v1-types";

export const DEFAULT_WALLET = "magic";

// The chain id is a hexadecimal string preceeded by "0x"
export const DEFAULT_RAW_CHAIN_ID: AllowedChainId = process.env.CHAIN_ID
  ? (parseInt(process.env.CHAIN_ID) as AllowedChainId)
  : 80001;

export function getChainIdFromRaw(
  chainId: AllowedChainId = DEFAULT_RAW_CHAIN_ID,
): string {
  return `0x${Number(chainId).toString(16)}`;
}

export const NETWORK_TYPE: "testnet" | "mainnet" =
  process.env.NEXT_PUBLIC_NETWORK_TYPE === "mainnet" ? "mainnet" : "testnet";

export const ALLOWED_CHAIN_IDS: AllowedChainId[] =
  NETWORK_TYPE === "mainnet" ? [1, 81457, 59144, 167000] : [17000, 11155111, 97];

export const MAX_UINT = ethers.BigNumber.from(2).pow(256).sub(1);

export const MAX_APPROVAL_AMOUNT: BigNumber = ethers.constants.MaxUint256;

export const WALLETCONNECT_PROJECT_ID =
  process.env.WALLETCONNECT_PROJECT_ID || "demo-project-id";

export const IS_USING_FORKED_MAINNET: boolean =
  process.env.IS_USING_FORKED_MAINNET === "true";

export const FORKED_NODE_URL_FOR_ETH =
  process.env.FORKED_NODE_URL_FOR_ETH || "";

export const FORKED_NODE_URL_FOR_MATIC =
  process.env.FORKED_NODE_URL_FOR_MATIC || "";

export const FORKED_NODE_URL_FOR_BASE =
  process.env.FORKED_NODE_URL_FOR_BASE || "";

export const CCIP_NETWORK_SELECTOR = {
  1: `5009297550715157269`,
  137: `4051577828743386545`,
};

/**
 * We will use this to show the slippage for the withdraw/ sell of the product/ baskets.
 * * Note: Please add the slippage here if you want to include a new product.
 */
export const WITHDRAW_SLIPPAGE_BY_PRODUCT: WithdrawSlippageByProduct = {
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
