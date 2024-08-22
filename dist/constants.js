"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonRPC = exports.EthRPC = exports.WEthAddress = exports.RouterAddress = exports.SymbioticEscrow = exports.SymbioticVault = exports.EscrowAddress = exports.WStEthAddress = exports.StETHAddress = exports.UltraLRTAddress = exports.EigenDelegatorAddress = exports.EigenStETHStrategy = exports.LieanXLRTRouter = exports.XUltraLRTRouterAddress = exports.PassEthBridgeAddress = exports.PassEthAddress = exports.PassPolygonBridgeAddress = exports.PassPolygonAddress = void 0;
let _EigenStETHStrategy = "0x93c4b944D05dfe6df7645A86cd2206016c51564D";
let _EigenDelegatorAddress = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
let _UltraLRTAddress = "0xcbC632833687DacDcc7DfaC96F6c5989381f4B47";
let _StETHAddress = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
let _WStEthAddress = "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0";
let _EscrowAddress = "0xDFE83C4932aDDaD887453e1A8b50348A16E852a2";
let _SymbioticVault = "0xF0a949B935e367A94cDFe0F2A54892C2BC7b2131";
let _SymbioticEscrow = "0xaE48EBEB1A00B66354e251b36267039749Ad48dD";
let _RouterAddress = "0x379a56089623AE0c22F56417AB28319AD8DCF1Cc";
let _WEthAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
let _EthRPC = "https://eth-mainnet.g.alchemy.com/v2/T8JHI8jMGKrO88j6qvZwjk8d1IxOPqtk";
let _PolygonRPC = "https://polygon-rpc.com";
if (process.env.NEXT_PUBLIC_NETWORK_TYPE === "holesky") {
    _EigenStETHStrategy = "0x7D704507b76571a51d9caE8AdDAbBFd0ba0e63d3";
    _EigenDelegatorAddress = "0xA44151489861Fe9e3055d95adC98FbD462B948e7";
    _UltraLRTAddress = "0x3b07A1A5de80f9b22DE0EC6C44C6E59DDc1C5f41";
    _StETHAddress = "0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034";
    _WStEthAddress = "0x8d09a4502Cc8Cf1547aD300E066060D043f6982D";
    _EscrowAddress = "0x84eF1F1A7f14A237c4b1DA8d13548123879FC3A9";
    _SymbioticVault = "0x9666aB93452dC300C6b7412936D114bF1F737B1B";
    _SymbioticEscrow = "0xe1A274343d23BCb148e838256665baFb250c4937";
    _RouterAddress = "0xB56aC485418304f20F21e8169db757c2261532e2";
    _WEthAddress = "0x94373a4919B3240D86eA41593D5eBa789FEF3848";
    _EthRPC = "https://ethereum-holesky-rpc.publicnode.com";
}
// AFFINE PASS
exports.PassPolygonAddress = "0x962e765a68c12e5c890589ba66bfd848d0ee52c5";
exports.PassPolygonBridgeAddress = "0xd1B45F273Db3156110cB363325331337BB1deD14";
exports.PassEthAddress = "0x9244d2cf73861Ee7aA79Ffe90fe4eDF925482795";
exports.PassEthBridgeAddress = "0xA473fDfdBBaf3a31f14F5b69f0Dfc31cc5a14e83";
exports.XUltraLRTRouterAddress = "0x7F6233c2e78EeF7a9037Bdc896b15CD83a60B59a";
exports.LieanXLRTRouter = "0x7331aD312BAF6CFb127a84DbA077b72295cFEB28";
exports.EigenStETHStrategy = _EigenStETHStrategy;
exports.EigenDelegatorAddress = _EigenDelegatorAddress;
exports.UltraLRTAddress = _UltraLRTAddress;
exports.StETHAddress = _StETHAddress;
exports.WStEthAddress = _WStEthAddress;
exports.EscrowAddress = _EscrowAddress;
exports.SymbioticVault = _SymbioticVault;
exports.SymbioticEscrow = _SymbioticEscrow;
exports.RouterAddress = _RouterAddress;
exports.WEthAddress = _WEthAddress;
exports.EthRPC = _EthRPC;
exports.PolygonRPC = _PolygonRPC;
