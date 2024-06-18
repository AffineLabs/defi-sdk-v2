/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDelegatorBeacon,
  IDelegatorBeaconInterface,
} from "../IDelegatorBeacon";

const _abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDelegatorBeacon__factory {
  static readonly abi = _abi;
  static createInterface(): IDelegatorBeaconInterface {
    return new utils.Interface(_abi) as IDelegatorBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDelegatorBeacon {
    return new Contract(address, _abi, signerOrProvider) as IDelegatorBeacon;
  }
}
