import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SymDelegatorFactory, SymDelegatorFactoryInterface } from "../SymDelegatorFactory";
export declare class SymDelegatorFactory__factory {
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
            readonly name: "_collateral";
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
    static createInterface(): SymDelegatorFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymDelegatorFactory;
}
