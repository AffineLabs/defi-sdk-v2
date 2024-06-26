import { ethers } from "ethers";
export declare const EigenStETHStrategy: string;
export declare const EigenDelegatorAddress: string;
export declare const UltraLRTAddress: string;
export declare const StETHAddress: string;
export declare const WStEthAddress: string;
export declare const EscrowAddress: string;
export declare const SymbioticVault: string;
export declare const SymbioticEscrow: string;
export declare const RouterAddress: string;
export declare const WEthAddress: string;
export interface WithdrawalInfo {
    staker: string;
    delegatedTo: string;
    withdrawer: string;
    nonce: ethers.BigNumber;
    startBlock: number;
    strategies: string[];
    shares: ethers.BigNumber[];
}
