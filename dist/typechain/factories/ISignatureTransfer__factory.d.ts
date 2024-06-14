import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISignatureTransfer, ISignatureTransferInterface } from "../ISignatureTransfer";
export declare class ISignatureTransfer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxAmount";
            readonly type: "uint256";
        }];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LengthMismatch";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "word";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "mask";
            readonly type: "uint256";
        }];
        readonly name: "UnorderedNonceInvalidation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "wordPos";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "mask";
            readonly type: "uint256";
        }];
        readonly name: "invalidateUnorderedNonces";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "nonceBitmap";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly name: "permitted";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly name: "permit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "requestedAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails";
            readonly name: "transferDetails";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permitTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISignatureTransfer.TokenPermissions[]";
                readonly name: "permitted";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.PermitBatchTransferFrom";
            readonly name: "permit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "requestedAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails[]";
            readonly name: "transferDetails";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permitTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISignatureTransfer.TokenPermissions";
                readonly name: "permitted";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
            readonly name: "permit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "requestedAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails";
            readonly name: "transferDetails";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "witness";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "witnessTypeString";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permitWitnessTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISignatureTransfer.TokenPermissions[]";
                readonly name: "permitted";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.PermitBatchTransferFrom";
            readonly name: "permit";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "requestedAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails[]";
            readonly name: "transferDetails";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "witness";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "witnessTypeString";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permitWitnessTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ISignatureTransferInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISignatureTransfer;
}
