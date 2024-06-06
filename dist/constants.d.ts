import { ethers } from "ethers";
export declare const EigenStETHStrategy = "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3";
export declare const EigenDelegatorAddress = "0xA44151489861Fe9e3055d95adC98FbD462B948e7";
export declare const UltraLRTAddress = "0x3b07A1A5de80f9b22DE0EC6C44C6E59DDc1C5f41";
export declare const StETHAddress = "0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034";
export declare const EscrowAddress = "0x84eF1F1A7f14A237c4b1DA8d13548123879FC3A9";
export interface WithdrawalInfo {
    staker: string;
    delegatedTo: string;
    withdrawer: string;
    nonce: ethers.BigNumber;
    startBlock: number;
    strategies: string[];
    shares: ethers.BigNumber[];
}
