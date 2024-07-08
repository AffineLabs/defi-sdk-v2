import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUltraLRT, IUltraLRTInterface } from "../IUltraLRT";
export declare class IUltraLRT__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "HARVESTER";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IUltraLRTInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUltraLRT;
}
