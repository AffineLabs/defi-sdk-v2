import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPermit2, IPermit2Interface } from "../IPermit2";
export declare class IPermit2__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "AllowanceExpired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExcessiveInvalidation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientAllowance";
        readonly type: "error";
    }, {
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
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "Lockdown";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "newNonce";
            readonly type: "uint48";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "oldNonce";
            readonly type: "uint48";
        }];
        readonly name: "NonceInvalidation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "nonce";
            readonly type: "uint48";
        }];
        readonly name: "Permit";
        readonly type: "event";
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
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "nonce";
            readonly type: "uint48";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "expiration";
            readonly type: "uint48";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint48";
            readonly name: "newNonce";
            readonly type: "uint48";
        }];
        readonly name: "invalidateNonces";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly internalType: "struct IAllowanceTransfer.TokenSpenderPair[]";
            readonly name: "approvals";
            readonly type: "tuple[]";
        }];
        readonly name: "lockdown";
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
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint160";
                    readonly name: "amount";
                    readonly type: "uint160";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "expiration";
                    readonly type: "uint48";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "nonce";
                    readonly type: "uint48";
                }];
                readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
                readonly name: "details";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "sigDeadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitBatch";
            readonly name: "permitBatch";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint160";
                    readonly name: "amount";
                    readonly type: "uint160";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "expiration";
                    readonly type: "uint48";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "nonce";
                    readonly type: "uint48";
                }];
                readonly internalType: "struct IAllowanceTransfer.PermitDetails";
                readonly name: "details";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "sigDeadline";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitSingle";
            readonly name: "permitSingle";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "permit";
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
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }];
            readonly internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]";
            readonly name: "transferDetails";
            readonly type: "tuple[]";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IPermit2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPermit2;
}
