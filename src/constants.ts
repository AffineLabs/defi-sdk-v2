import { ethers } from "ethers";

let _EigenStETHStrategy = "0x93c4b944D05dfe6df7645A86cd2206016c51564D";
let _EigenDelegatorAddress = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
let _UltraLRTAddress = "0x47657094e3AF11c47d5eF4D3598A1536B394EEc4";
let _StETHAddress = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
let _WStEthAddress = "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0";
let _EscrowAddress = "0xA6C1c5C0092eA16bdaBad3cEE36e8BF7967e8C20";
let _SymbioticVault = "0x0D53bc2BA508dFdf47084d511F13Bb2eb3f8317B";
let _SymbioticEscrow = "0x02f5289e7dBF17E49631A160bdE5BaDDd36163Dd";
let _RouterAddress = "0x379a56089623AE0c22F56417AB28319AD8DCF1Cc";
let _WEthAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

let _EthRPC = "https://rpc.ankr.com/eth";
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
export const PassPolygonAddress = "0x962e765a68c12e5c890589ba66bfd848d0ee52c5";
export const PassPolygonBridgeAddress =
  "0xd1B45F273Db3156110cB363325331337BB1deD14";
export const PassEthAddress = "0x9244d2cf73861Ee7aA79Ffe90fe4eDF925482795";
export const PassEthBridgeAddress =
  "0xA473fDfdBBaf3a31f14F5b69f0Dfc31cc5a14e83";

export const EigenStETHStrategy = _EigenStETHStrategy;
export const EigenDelegatorAddress = _EigenDelegatorAddress;
export const UltraLRTAddress = _UltraLRTAddress;
export const StETHAddress = _StETHAddress;
export const WStEthAddress = _WStEthAddress;
export const EscrowAddress = _EscrowAddress;
export const SymbioticVault = _SymbioticVault;
export const SymbioticEscrow = _SymbioticEscrow;
export const RouterAddress = _RouterAddress;
export const WEthAddress = _WEthAddress;
export const EthRPC = _EthRPC;
export const PolygonRPC = _PolygonRPC;

export interface WithdrawalInfo {
  staker: string;
  delegatedTo: string;
  withdrawer: string;
  nonce: ethers.BigNumber;
  startBlock: number;
  strategies: string[];
  shares: ethers.BigNumber[];
}
