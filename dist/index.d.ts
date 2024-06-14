import { ethers, providers } from "ethers";
export declare class AffineRestakingSDK {
    private provider;
    private signer;
    constructor(provider: providers.JsonRpcProvider, signer?: ethers.Signer);
    getUltraEthBalance(): Promise<string>;
    getSymbioticBalance(): Promise<string>;
    getStEthBalance(): Promise<string>;
    getWStEthBalance(): Promise<string>;
    migratableAssets(address: string): Promise<number>;
    queueMigrationWithdrawal(address: string, assets: string): Promise<any>;
    completeMigrationWithdrawal(address: string, delegator: string, nonce: string, blockNumber: string, shares: string): Promise<any>;
    canWithdraw(amount: number): Promise<any>;
    canWithdrawSymbiotic(amount: number): Promise<any>;
    deposit(amount: string): Promise<any>;
    withdraw(amount: string): Promise<any>;
    depositSymbiotic(amount: string): Promise<any>;
    depositERC20Any(token: string, amount: string, vault: string): Promise<ethers.ContractTransaction>;
    depositNative(amount: string, vault: string): Promise<ethers.ContractTransaction>;
    withdrawSymbiotic(amount: string): Promise<any>;
    withdrawableAssets(address: string): Promise<{
        totalAmount: number;
        epochData: {
            epoch: number;
            assets: string;
            shares: string;
            canWithdraw: any;
        }[];
    }>;
    getEthBalance(): Promise<string>;
    canWithdrawEscrow(epoch: string): Promise<any>;
    canWithdrawEscrowSymbiotic(epoch: string): Promise<any>;
    redeem(epoch: string): Promise<ethers.providers.TransactionResponse>;
    redeemSymbiotic(epoch: string): Promise<ethers.providers.TransactionResponse>;
    isApproved(contractAddress: string, spenderAddress: string, amount: number): Promise<boolean>;
    approve(contractAddress: string, spenderAddress: string, amount: number): Promise<ethers.providers.TransactionResponse>;
    _removeDecimals(amount: ethers.BigNumber, decimals: ethers.BigNumberish): string;
    _addDecimals(amount: string, decimals: number): ethers.BigNumber;
    _toDeadline(expiration: number): number;
}
