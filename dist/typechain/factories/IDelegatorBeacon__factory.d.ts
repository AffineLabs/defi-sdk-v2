import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDelegatorBeacon, IDelegatorBeaconInterface } from "../IDelegatorBeacon";
export declare class IDelegatorBeacon__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IDelegatorBeaconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDelegatorBeacon;
}
