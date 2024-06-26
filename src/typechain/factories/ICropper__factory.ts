/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICropper, ICropperInterface } from "../ICropper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "crop",
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
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "crop",
        type: "address",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "flux",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "u",
        type: "address",
      },
      {
        internalType: "address",
        name: "v",
        type: "address",
      },
      {
        internalType: "address",
        name: "w",
        type: "address",
      },
      {
        internalType: "int256",
        name: "dink",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "dart",
        type: "int256",
      },
    ],
    name: "frob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "crop",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "u",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rad",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "proxy",
    outputs: [
      {
        internalType: "address",
        name: "urn",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICropper__factory {
  static readonly abi = _abi;
  static createInterface(): ICropperInterface {
    return new utils.Interface(_abi) as ICropperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICropper {
    return new Contract(address, _abi, signerOrProvider) as ICropper;
  }
}
