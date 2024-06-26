/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMinter, IMinterInterface } from "../IMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "gauge",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMinter__factory {
  static readonly abi = _abi;
  static createInterface(): IMinterInterface {
    return new utils.Interface(_abi) as IMinterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMinter {
    return new Contract(address, _abi, signerOrProvider) as IMinter;
  }
}
