/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {IUltraLRT, IUltraLRTInterface} from "../IUltraLRT";

const _abi = [
  {
    inputs: [],
    name: "HARVESTER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IUltraLRT__factory {
  static readonly abi = _abi;

  static createInterface(): IUltraLRTInterface {
    return new utils.Interface(_abi) as IUltraLRTInterface;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IUltraLRT {
    return new Contract(address, _abi, signerOrProvider) as IUltraLRT;
  }
}
