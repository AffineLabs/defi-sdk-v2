import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DelegatorFactory, DelegatorFactoryInterface } from "../DelegatorFactory";
export declare class DelegatorFactory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_vault";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_operator";
            readonly type: "address";
        }];
        readonly name: "createDelegator";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "vault";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DelegatorFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DelegatorFactory;
}
