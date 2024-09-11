import { BigNumber, ContractTransaction, ethers, providers } from "ethers";
export declare class AffineRestakingSDK {
    readonly provider: providers.JsonRpcProvider;
    readonly signer: ethers.Signer;
    constructor(provider: providers.JsonRpcProvider, signer?: ethers.Signer);
    approveCrosschainDeposit(chainID: number, amount: string): Promise<ContractTransaction>;
    checkCrosschainApproval(chainID: number, amount: string): Promise<boolean>;
    depositToChain(chainID: number, amount: string): Promise<ContractTransaction>;
    getBalanceOfTokenWithChain(chainID: number, token: string): Promise<string>;
    approveRouter(amount: string): Promise<ContractTransaction>;
    isRouterApproved(amount: string): Promise<boolean>;
    doMainnetTransfer(chainIdFrom: number, chainIdTo: number, to: string | null, amount: string): Promise<ethers.providers.TransactionResponse | number>;
    getBalanceFromChain(chainId: number): Promise<number>;
    transferRemoteWithAddress(chainID: number, destination: number, to: string, amount: string): Promise<ethers.providers.TransactionResponse>;
    transferRemoteWithoutAddress(chainID: number, destination: number, amount: string): Promise<ethers.providers.TransactionResponse>;
    quoteTransferRemoteWithAddress(chainID: number, destination: number, to: string, amount: string): Promise<BigNumber>;
    quoteTransferRemoteWithoutAddress(chainID: number, destination: number, amount: string): Promise<BigNumber>;
    _getVaultBalanceByAsset(vaultAddress: string): Promise<string>;
    getUltraEthBalance(): Promise<string>;
    getSymbioticBalance(): Promise<string>;
    _getTokenBalance(tokenAddress: string): Promise<string>;
    getStEthBalance(): Promise<string>;
    getWStEthBalance(): Promise<string>;
    getWEthBalance(): Promise<string>;
    migratableAssets(address: string): Promise<number>;
    queueMigrationWithdrawal(address: string, assets: string): Promise<any>;
    isValidAddress(address: string): Promise<boolean>;
    completeMigrationWithdrawal(address: string, delegator: string, nonce: string, blockNumber: string, shares: string): Promise<any>;
    canWithdraw(amount: number): Promise<any>;
    canWithdrawSymbiotic(amount: number): Promise<any>;
    deposit(amount: string): Promise<any>;
    withdraw(amount: string): Promise<any>;
    depositSymbiotic(amount: string): Promise<any>;
    isPermit2Approve(token: string, amount: string): Promise<boolean>;
    approvePermit2(token: string): Promise<ContractTransaction>;
    depositERC20Any(token: string, amount: string, vault: string): Promise<ContractTransaction>;
    depositNative(amount: string, vault: string): Promise<ContractTransaction>;
    withdrawSymbiotic(amount: string): Promise<any>;
    withdrawableAssets(vaultAddress: string, address: string): Promise<{
        totalAmount: number;
        epochData: {
            epoch: number;
            assets: string;
            shares: string;
            canWithdraw: boolean;
        }[];
    }>;
    getEthBalance(): Promise<string>;
    canWithdrawEscrow(epoch: string): Promise<any>;
    canWithdrawEscrowSymbiotic(epoch: string): Promise<any>;
    redeem(epoch: string): Promise<ethers.providers.TransactionResponse>;
    redeemSymbiotic(epoch: string): Promise<ethers.providers.TransactionResponse>;
    isApproved(contractAddress: string, spenderAddress: string, amount: number): Promise<boolean>;
    approve(contractAddress: string, spenderAddress: string, amount: number): Promise<ethers.providers.TransactionResponse>;
    wrapETH(amountInEther: string): Promise<void>;
    getCCIPFee(destinationChainId: 1 | 137): Promise<number>;
    bridgeAffinePass(destinationChainId: 1 | 137, destinationAddress: string, tokenId: number, fee: number): Promise<import("./sdk-v1-types").SmallTxReceipt>;
    getPassBalance(): Promise<number>;
    _toDeadline(expiration: number): number;
    _getRandomNonce(): Promise<BigNumber>;
    DepositNativeL2(amount: string, chainID: number): Promise<ContractTransaction>;
}
export declare function _removeDecimals(amount: ethers.BigNumber, decimals: ethers.BigNumberish): string;
export declare function _addDecimals(amount: string, decimals: number): ethers.BigNumber;
export declare function getUltraEthTVL(): Promise<string>;
export declare function getSymbioticTVL(): Promise<string>;
export declare function getBlastTVL(): Promise<string>;
export declare function getSymbioticRate(): Promise<string>;
export declare function getUltraEthRate(): Promise<string>;
export declare function convertStEthToWStEth(amount: string): Promise<string>;
export declare function convertWStEthToStEth(amount: string): Promise<string>;
