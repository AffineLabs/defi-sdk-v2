import { BigNumber } from "ethers";
import { AllowedChainId, WithdrawSlippageByProduct } from "./sdk-v1-types";
export declare const DEFAULT_WALLET = "magic";
export declare const DEFAULT_RAW_CHAIN_ID: AllowedChainId;
export declare function getChainIdFromRaw(chainId?: AllowedChainId): string;
export declare const NETWORK_TYPE: "testnet" | "mainnet";
export declare const ALLOWED_CHAIN_IDS: AllowedChainId[];
export declare const MAX_UINT: BigNumber;
export declare const MAX_APPROVAL_AMOUNT: BigNumber;
export declare const WALLETCONNECT_PROJECT_ID: string;
export declare const IS_USING_FORKED_MAINNET: boolean;
export declare const FORKED_NODE_URL_FOR_ETH: string;
export declare const FORKED_NODE_URL_FOR_MATIC: string;
export declare const FORKED_NODE_URL_FOR_BASE: string;
export declare const CCIP_NETWORK_SELECTOR: {
    1: string;
    137: string;
};
/**
 * We will use this to show the slippage for the withdraw/ sell of the product/ baskets.
 * * Note: Please add the slippage here if you want to include a new product.
 */
export declare const WITHDRAW_SLIPPAGE_BY_PRODUCT: WithdrawSlippageByProduct;
