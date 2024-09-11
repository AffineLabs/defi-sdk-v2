import { ethers } from "ethers";
export declare const PassPolygonAddress = "0x962e765a68c12e5c890589ba66bfd848d0ee52c5";
export declare const PassPolygonBridgeAddress = "0xd1B45F273Db3156110cB363325331337BB1deD14";
export declare const PassEthAddress = "0x9244d2cf73861Ee7aA79Ffe90fe4eDF925482795";
export declare const PassEthBridgeAddress = "0xA473fDfdBBaf3a31f14F5b69f0Dfc31cc5a14e83";
export declare const XUltraLRTRouterAddress = "0x7F6233c2e78EeF7a9037Bdc896b15CD83a60B59a";
export declare const LineaXLRTRouter = "0x7331aD312BAF6CFb127a84DbA077b72295cFEB28";
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
export declare const EthRPC: string;
export declare const PolygonRPC: string;
export interface WithdrawalInfo {
    staker: string;
    delegatedTo: string;
    withdrawer: string;
    nonce: ethers.BigNumber;
    startBlock: number;
    strategies: string[];
    shares: ethers.BigNumber[];
}
