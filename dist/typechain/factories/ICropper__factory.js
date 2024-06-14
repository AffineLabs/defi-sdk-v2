"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICropper__factory = void 0;
const ethers_1 = require("ethers");
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
];
class ICropper__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICropper__factory = ICropper__factory;
ICropper__factory.abi = _abi;
