"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBalancerVault__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IFlashLoanRecipient",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "contract ERC20[]",
                name: "tokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "userData",
                type: "bytes",
            },
        ],
        name: "flashLoan",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "poolId",
                type: "bytes32",
            },
        ],
        name: "getPool",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "enum IBalancerVault.PoolSpecialization",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "poolId",
                type: "bytes32",
            },
        ],
        name: "getPoolTokens",
        outputs: [
            {
                internalType: "contract ERC20[]",
                name: "tokens",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "balances",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "lastChangeBlock",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "enum IBalancerVault.SwapKind",
                name: "kind",
                type: "uint8",
            },
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "poolId",
                        type: "bytes32",
                    },
                    {
                        internalType: "uint256",
                        name: "assetInIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "assetOutIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "userData",
                        type: "bytes",
                    },
                ],
                internalType: "struct IBalancerVault.BatchSwapStep[]",
                name: "swaps",
                type: "tuple[]",
            },
            {
                internalType: "address[]",
                name: "assets",
                type: "address[]",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "fromInternalBalance",
                        type: "bool",
                    },
                    {
                        internalType: "address payable",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "toInternalBalance",
                        type: "bool",
                    },
                ],
                internalType: "struct IBalancerVault.FundManagement",
                name: "funds",
                type: "tuple",
            },
        ],
        name: "queryBatchSwap",
        outputs: [
            {
                internalType: "int256[]",
                name: "assetDeltas",
                type: "int256[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "poolId",
                        type: "bytes32",
                    },
                    {
                        internalType: "enum IBalancerVault.SwapKind",
                        name: "kind",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "assetIn",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "assetOut",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "userData",
                        type: "bytes",
                    },
                ],
                internalType: "struct IBalancerVault.SingleSwap",
                name: "singleSwap",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "fromInternalBalance",
                        type: "bool",
                    },
                    {
                        internalType: "address payable",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "toInternalBalance",
                        type: "bool",
                    },
                ],
                internalType: "struct IBalancerVault.FundManagement",
                name: "funds",
                type: "tuple",
            },
            {
                internalType: "uint256",
                name: "limit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
        ],
        name: "swap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
class IBalancerVault__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IBalancerVault__factory = IBalancerVault__factory;
