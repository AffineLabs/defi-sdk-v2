import { ethers } from "ethers";

export const EigenStETHStrategy = "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3";
export const EigenDelegatorAddress =
  "0xA44151489861Fe9e3055d95adC98FbD462B948e7";
export const UltraLRTAddress = "0x3b07A1A5de80f9b22DE0EC6C44C6E59DDc1C5f41";
export const StETHAddress = "0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034";
export const WStEthAddress = "0x8d09a4502Cc8Cf1547aD300E066060D043f6982D";
export const EscrowAddress = "0x84eF1F1A7f14A237c4b1DA8d13548123879FC3A9";
export const SymbioticVault = "0x9666aB93452dC300C6b7412936D114bF1F737B1B";
export const SymbioticEscrow = "0xe1A274343d23BCb148e838256665baFb250c4937";
export const RouterAddress = "0xB56aC485418304f20F21e8169db757c2261532e2"; // TODO deploy
export const WEthAddress = "0x94373a4919B3240D86eA41593D5eBa789FEF3848"; // holeksy

export interface WithdrawalInfo {
  staker: string;
  delegatedTo: string;
  withdrawer: string;
  nonce: ethers.BigNumber;
  startBlock: number;
  strategies: string[];
  shares: ethers.BigNumber[];
}
