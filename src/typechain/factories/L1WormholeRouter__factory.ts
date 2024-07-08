/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  L1WormholeRouter,
  L1WormholeRouterInterface,
} from "../L1WormholeRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract L1Vault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "contract IWormhole",
        name: "_wormhole",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "consistencyLevel",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    inputs: [],
    name: "nextValidNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "otherLayerWormholeId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "receiveFundRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "receiveFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "reportFundTransfer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tvl",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "received",
        type: "bool",
      },
    ],
    name: "reportTVL",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_consistencyLevel",
        type: "uint8",
      },
    ],
    name: "setConsistencyLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract BaseVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class L1WormholeRouter__factory {
  static readonly abi = _abi;

  static createInterface(): L1WormholeRouterInterface {
    return new utils.Interface(_abi) as L1WormholeRouterInterface;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): L1WormholeRouter {
    return new Contract(address, _abi, signerOrProvider) as L1WormholeRouter;
  }
}
