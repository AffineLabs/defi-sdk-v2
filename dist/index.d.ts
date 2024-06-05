import { ethers, providers } from "ethers";
export declare class AffineRestakingSDK {
    private provider;
    private signer;
    constructor(provider: providers.JsonRpcProvider);
    getBalance(contractAddress: string, address: string): Promise<string>;
    migratableAssets(address: string): Promise<number>;
    queueMigrationWithdrawal(address: string, assets: string): Promise<any>;
    completeMigrationWithdrawal(address: string, delegator: string, nonce: string, blockNumber: string, shares: string): Promise<any>;
    canWithdraw(amount: number): Promise<any>;
    deposit(amount: string, address: string): Promise<any>;
    withdraw(amount: string, receiver: string, owner: string): Promise<any>;
    withdrawableAssets(address: string): Promise<{
        totalAmount: number;
        epochData: {
            epoch: number;
            assets: string;
            shares: string;
            canWithdraw: any;
        }[];
    }>;
    canWithdrawEscrow(epoch: string): Promise<any>;
    redeem(address: string, epoch: string): Promise<ethers.providers.TransactionResponse>;
    approve(contractAddress: string, spenderAddress: string, amount: ethers.BigNumberish): Promise<ethers.providers.TransactionResponse>;
    private _removeDecimals;
    private _addDecimals;
}
