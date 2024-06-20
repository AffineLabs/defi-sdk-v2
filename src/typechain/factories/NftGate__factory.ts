/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { NftGate, NftGateInterface } from "../NftGate";

const _abi = [
  {
    inputs: [],
    name: "accessNft",
    outputs: [
      {
        internalType: "contract ERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC721",
        name: "_accessNft",
        type: "address",
      },
    ],
    name: "setAccessNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_needNftToDeposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_nftDiscountActive",
        type: "bool",
      },
    ],
    name: "setNftProperties",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_newFee",
        type: "uint16",
      },
    ],
    name: "setWithdrawalFeeWithNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalFeeWithNft",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class NftGate__factory {
  static readonly abi = _abi;
  static createInterface(): NftGateInterface {
    return new utils.Interface(_abi) as NftGateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NftGate {
    return new Contract(address, _abi, signerOrProvider) as NftGate;
  }
}