/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {IMakerAdapter, IMakerAdapterInterface} from "../IMakerAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "urn",
        type: "address",
      },
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMakerAdapter__factory {
  static readonly abi = _abi;

  static createInterface(): IMakerAdapterInterface {
    return new utils.Interface(_abi) as IMakerAdapterInterface;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IMakerAdapter {
    return new Contract(address, _abi, signerOrProvider) as IMakerAdapter;
  }
}
