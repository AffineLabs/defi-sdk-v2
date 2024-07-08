/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BaseVault, BaseVaultInterface } from "../BaseVault";

const _abi = [
  {
    inputs: [],
    name: "ProfitUnlocking",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyStrategyBps",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldEscrow",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newEscrow",
        type: "address",
      },
    ],
    name: "BridgeEscrowSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract BaseStrategy[]",
        name: "strategies",
        type: "address[]",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "assetsRequested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetsLiquidated",
        type: "uint256",
      },
    ],
    name: "Liquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Rebalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
    ],
    name: "StrategyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract BaseStrategy[]",
        name: "strategyList",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint16[]",
        name: "strategyBps",
        type: "uint16[]",
      },
    ],
    name: "StrategyAllocsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "StrategyDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
    ],
    name: "StrategyRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetsRequested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetsReceived",
        type: "uint256",
      },
    ],
    name: "StrategyWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract BaseStrategy[20]",
        name: "newQueue",
        type: "address[20]",
      },
    ],
    name: "WithdrawalQueueSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldRouter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRouter",
        type: "address",
      },
    ],
    name: "WormholeRouterSet",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "LOCK_INTERVAL",
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
    inputs: [
      {
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "tvlBps",
        type: "uint16",
      },
    ],
    name: "addStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "asset",
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
    name: "bridgeEscrow",
    outputs: [
      {
        internalType: "contract BridgeEscrow",
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
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "depositIntoStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [],
    name: "getWithdrawalQueue",
    outputs: [
      {
        internalType: "contract BaseStrategy[20]",
        name: "",
        type: "address[20]",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract BaseStrategy[]",
        name: "strategyList",
        type: "address[]",
      },
    ],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "account",
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
  {
    inputs: [],
    name: "lastHarvest",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockedProfit",
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
    name: "maxLockedProfit",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
    ],
    name: "removeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract BridgeEscrow",
        name: "_escrow",
        type: "address",
      },
    ],
    name: "setBridgeEscrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract BaseStrategy[20]",
        name: "newQueue",
        type: "address[20]",
      },
    ],
    name: "setWithdrawalQueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "setWormholeRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract BaseStrategy",
        name: "",
        type: "address",
      },
    ],
    name: "strategies",
    outputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "tvlBps",
        type: "uint16",
      },
      {
        internalType: "uint232",
        name: "balance",
        type: "uint232",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [],
    name: "totalBps",
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
    name: "totalStrategyHoldings",
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
    inputs: [
      {
        internalType: "contract BaseStrategy[]",
        name: "strategyList",
        type: "address[]",
      },
      {
        internalType: "uint16[]",
        name: "strategyBps",
        type: "uint16[]",
      },
    ],
    name: "updateStrategyAllocations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultTVL",
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
    inputs: [
      {
        internalType: "contract BaseStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
    ],
    name: "withdrawFromStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdrawalQueue",
    outputs: [
      {
        internalType: "contract BaseStrategy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormholeRouter",
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
] as const;

export class BaseVault__factory {
  static readonly abi = _abi;
  static createInterface(): BaseVaultInterface {
    return new utils.Interface(_abi) as BaseVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseVault {
    return new Contract(address, _abi, signerOrProvider) as BaseVault;
  }
}
