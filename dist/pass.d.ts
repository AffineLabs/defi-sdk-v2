import { providers } from "ethers";
import { SmallTxReceipt } from "./sdk-v1-types";
export declare const CCIP_NETWORK_SELECTOR: Record<1 | 137, string>;
/**
 * Get the Affine Pass Bridge contract instance based on the destination chain ID
 * @param destinationChainId the destination chain id
 * @param provider
 * @returns
 */
export declare function getAffinePassBridge(destinationChainId: number, provider: providers.JsonRpcProvider): Promise<import("./typechain").AffinePassBridge>;
/**
 * Get the fee in native asset for bridging pass to destination chain
 * @param destinationChainId the destination chain id
 * @param provider
 * @returns
 */
export declare function ccipFee(destinationChainId: 1 | 137, provider: providers.JsonRpcProvider): Promise<number>;
/**
 * Bridge pass to destination chain
 * @param destinationChainId the destination chain id
 * @param destinationAddress the destination address
 * @param tokenId token id of the pass
 * @param fee fee in native asset
 * @param provider
 * @returns
 */
export declare function bridgePass(destinationChainId: 1 | 137, destinationAddress: string, tokenId: number, fee: number, provider: providers.JsonRpcProvider): Promise<SmallTxReceipt>;
