import {BigNumber, ContractTransaction, ethers, providers} from "ethers";
import {AllowanceProvider, PERMIT2_ADDRESS, PermitTransferFrom, SignatureTransfer,} from "@uniswap/permit2-sdk";

import {
  EigenDelegatorAddress,
  EigenStETHStrategy,
  EscrowAddress,
  EthRPC,
  RouterAddress,
  StETHAddress,
  SymbioticEscrow,
  SymbioticVault,
  UltraLRTAddress,
  WEthAddress,
  WStEthAddress,
  XUltraLRTRouterAddress,
} from "./constants";

// ABIs
import ERC20_ABI from "./abis/erc20.json";
import EIGENSTETH_ABI from "./abis/eigenlayerStrategy.json";
import ULTRAETH_ABI from "./abis/ultraEth.json";
import ESCROW_ABI from "./abis/withdrawalEscrow.json";
import DELEGATION_MANAGER_ABI from "./abis/delegationManager.json";
import {
  ISignatureTransfer__factory,
  IWSTETH__factory,
  MockERC20__factory,
  UltraLRT__factory,
  UltraLRTRouter__factory,
  WithdrawalEscrowV2__factory,
} from "./typechain";
import {WithdrawalInfoStruct} from "./typechain/EigenDelegator";
import {bridgePass, ccipFee, getPassBalance} from "./pass";
import {Routerabi__factory, XUltraLRT__factory} from "./bridge-typegen";
import {NETWORK_PARAMS} from "./chain-constants";

export class AffineRestakingSDK {
  public readonly provider: providers.JsonRpcProvider;
  public readonly signer: ethers.Signer;

  constructor(provider: providers.JsonRpcProvider, signer?: ethers.Signer) {
    this.provider = provider;
    this.signer = signer || this.provider.getSigner();
  }

  // ========= BRIDGING =========

  async approveCrosschainDeposit(chainID: number, amount: string) {
    const contract = NETWORK_PARAMS[chainID].ultraLRTAddress;
    if(!contract) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const xulraLRT = XUltraLRT__factory.connect(contract, this.signer);

    const asset = MockERC20__factory.connect(await xulraLRT.baseAsset(), this.signer);
    return await asset.approve(contract, ethers.utils.parseUnits(amount, await asset.decimals()));
  }

  async checkCrosschainApproval(chainID: number, amount: string) {
    const contract = NETWORK_PARAMS[chainID].ultraLRTAddress;
    if(!contract) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")

    const xulraLRT = XUltraLRT__factory.connect(contract, this.signer);
    const asset = MockERC20__factory.connect(await xulraLRT.baseAsset(), this.signer);
    const units = _addDecimals(
        amount.toString(),
        await asset.decimals(),
    );
    const receiver = await this.signer.getAddress();
    const allowance = await asset.allowance(receiver, contract);

    return ethers.BigNumber.from(allowance).gte(units);
  }

  async depositToChain(chainID: number, amount: string): Promise<ContractTransaction> {
    const contract = NETWORK_PARAMS[chainID].ultraLRTAddress;
    if(!contract) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const router = XUltraLRT__factory.connect(contract, this.signer);
    const receiver = await this.signer.getAddress();
    const assetUnits = _addDecimals(amount, 18);
    return await router.deposit(assetUnits, receiver);
  }

  async getBalanceOfTokenWithChain(chainID: number, token: string) {
    const assets = NETWORK_PARAMS[chainID].nativeDepositAssets;
    if(!assets) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const address = assets[token].address;
    if(!address) throw new Error("Token doesnt exist for chain ID")
    const erc20 = MockERC20__factory.connect(address, this.signer);
    const balance = await erc20.balanceOf(await this.signer.getAddress());
    return _removeDecimals(balance, await erc20.decimals());
  }

  async approveRouter(amount: string) {
    const asset = MockERC20__factory.connect(SymbioticVault, this.signer);
    return await asset.approve(XUltraLRTRouterAddress, ethers.utils.parseUnits(amount, await asset.decimals()));
  }

  async isRouterApproved(amount: string) {
    const asset = MockERC20__factory.connect(SymbioticVault, this.signer);
    const units = _addDecimals(
        amount.toString(),
        await asset.decimals(),
    );
    const receiver = await this.signer.getAddress();

    const allowance = await asset.allowance(receiver, XUltraLRTRouterAddress);

    return ethers.BigNumber.from(allowance).gte(units);
  }

  async doMainnetTransfer(chainIdFrom: number, chainIdTo: number, to: string | null, amount: string): Promise<ethers.providers.TransactionResponse | number> {
    const router = Routerabi__factory.connect(XUltraLRTRouterAddress, this.signer);
    const lrtVault = new ethers.Contract(
        SymbioticVault,
        ULTRAETH_ABI,
        this.signer,
    );
    const assetUnits = ethers.utils.parseUnits(amount, await lrtVault.decimals());

    const quote = to ? await this.quoteTransferRemoteWithAddress(chainIdFrom, chainIdTo, to, amount) : await this.quoteTransferRemoteWithoutAddress(chainIdFrom, chainIdTo, amount);


    // Case 1: With an address
    if (to) {
      return await router["transferRemoteUltraLRT(address,uint32,address,uint256)"](SymbioticVault, chainIdTo, to, assetUnits, {
        value: quote, // Assuming native token transfer, remove if unnecessary
      });
    }

    // Case 2: Without an address
    return await router["transferRemoteUltraLRT(address,uint32,uint256)"](SymbioticVault, chainIdTo, assetUnits, {
      value: quote, // Assuming native token transfer, remove if unnecessary
    });
  }


  async getBalanceFromChain(chainId : number): Promise<number> {
    const contract = NETWORK_PARAMS[chainId].ultraLRTAddress;
    if(!contract) return 0;

    const provider = new providers.JsonRpcProvider(NETWORK_PARAMS[chainId].rpcUrls[0])
    const router = MockERC20__factory.connect(contract, provider);

    const balance = await router.balanceOf(await this.signer.getAddress());
    return Number(_removeDecimals(balance, await router.decimals()));
  }

  // Transfer remote with address
  async transferRemoteWithAddress(chainID: number, destination: number, to: string, amount: string): Promise<ethers.providers.TransactionResponse> {
    console.log("transferRemoteWithAddress", chainID, destination, to, amount)
    const contract = NETWORK_PARAMS[chainID].xUltraLRTAddress;
    if(!contract) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const router = XUltraLRT__factory.connect(contract, this.signer);

    const asset = NETWORK_PARAMS[chainID].ultraLRTAddress
    const provider = new providers.JsonRpcProvider(NETWORK_PARAMS[chainID].rpcUrls[0])
    if(!asset) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const assets = MockERC20__factory.connect(asset, provider);

    const quote = await this.quoteTransferRemoteWithAddress(chainID, destination, to, amount)

    const assetUnits = ethers.utils.parseUnits(amount, await assets.decimals());
    return await router["transferRemote(uint32,address,uint256)"](destination, to, assetUnits, {
      value: quote
    });
  }

  // Transfer remote without address
  async transferRemoteWithoutAddress(chainID: number, destination: number, amount: string): Promise<ethers.providers.TransactionResponse> {
    const contract = NETWORK_PARAMS[chainID].xUltraLRTAddress;
    if(!contract) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const router = XUltraLRT__factory.connect(contract, this.signer);
    const assetUnits = ethers.utils.parseUnits(amount, await router.decimals());
    return await router["transferRemote(uint32,uint256)"](destination, assetUnits, {
      value: assetUnits, // Assuming native token transfer, remove if unnecessary
    });
  }

  // Quote transfer remote with address
  async quoteTransferRemoteWithAddress(chainID: number, destination: number, to: string, amount: string): Promise<BigNumber> {
    const contract = NETWORK_PARAMS[chainID].xUltraLRTAddress;
    if(!contract) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const router = XUltraLRT__factory.connect(contract, this.signer);
    const assetUnits = ethers.utils.parseUnits(amount, await router.decimals());

    return await router["quoteTransferRemote(uint32,address,uint256)"](destination, to, assetUnits);
  }

  // Quote transfer remote without address
  async quoteTransferRemoteWithoutAddress(chainID: number, destination: number, amount: string): Promise<BigNumber> {
    const contract = NETWORK_PARAMS[chainID].xUltraLRTAddress;
    if(!contract) throw new Error("Invalid chainID Or chain ID doesnt have contract deployment")
    const router = XUltraLRT__factory.connect(contract, this.signer);
    const assetUnits = ethers.utils.parseUnits(amount, await router.decimals());

    console.log("CHAIN ID OF SIGNER", this.signer.getChainId())
    return await router["quoteTransferRemote(uint32,uint256)"](destination, assetUnits);
  }

  async _getVaultBalanceByAsset(vaultAddress: string): Promise<string> {
    const address = await this.signer.getAddress();
    const vault = UltraLRT__factory.connect(vaultAddress, this.signer);
    const asset = MockERC20__factory.connect(await vault.asset(), this.signer);
    const shares = await vault.balanceOf(address);
    const assets = await vault.convertToAssets(shares);
    return _removeDecimals(assets, await asset.decimals());
  }

  async getUltraEthBalance(): Promise<string> {
    return this._getVaultBalanceByAsset(UltraLRTAddress);
  }

  async getSymbioticBalance(): Promise<string> {
    return this._getVaultBalanceByAsset(SymbioticVault);
  }

  async _getTokenBalance(tokenAddress: string): Promise<string> {
    const address = await this.signer.getAddress();
    const token = MockERC20__factory.connect(tokenAddress, this.signer);
    const balance = await token.balanceOf(address);
    return _removeDecimals(balance, await token.decimals());
  }

  async getStEthBalance(): Promise<string> {
    return this._getTokenBalance(StETHAddress);
  }

  async getWStEthBalance(): Promise<string> {
    return this._getTokenBalance(WStEthAddress);
  }

  async getWEthBalance(): Promise<string> {
    return this._getTokenBalance(WEthAddress);
  }

  async migratableAssets(address: string) {
    const eigenStETH = new ethers.Contract(
      EigenStETHStrategy,
      EIGENSTETH_ABI,
      this.signer,
    );
    const value = await eigenStETH.userUnderlyingView(address);
    return parseFloat(_removeDecimals(value, 18));
  }

  async queueMigrationWithdrawal(address: string, assets: string) {
    console.log("queueMigrationWithdrawal");
    const eigenStETH = new ethers.Contract(
      EigenStETHStrategy,
      EIGENSTETH_ABI,
      this.signer,
    );
    const eigenDelegator = new ethers.Contract(
      EigenDelegatorAddress,
      DELEGATION_MANAGER_ABI,
      this.signer,
    );

    const assetUnits = ethers.utils.parseUnits(assets, 18);
    const shares = await eigenStETH.underlyingToShares(assetUnits);
    console.log("shares", shares.toString());

    const queuedWithdrawalParams = [
      [[EigenStETHStrategy], [ethers.BigNumber.from(shares)], address],
    ];

    const tx = await eigenDelegator.queueWithdrawals(queuedWithdrawalParams, {
      value: ethers.utils.parseEther("0"),
    });
    return tx;
  }

  async isValidAddress(address: string): Promise<boolean> {
    return ethers.utils.isAddress(address);
  }

  async completeMigrationWithdrawal(
    address: string,
    delegator: string,
    nonce: string,
    blockNumber: string,
    shares: string,
  ) {
    // Validate addresses
    if (
      !(await this.isValidAddress(EigenDelegatorAddress)) ||
      !(await this.isValidAddress(address)) ||
      !(await this.isValidAddress(delegator)) ||
      !(await this.isValidAddress(EigenStETHStrategy)) ||
      !(await this.isValidAddress(StETHAddress))
    ) {
      throw new Error("One or more addresses are invalid");
    }

    // Convert parameters to the correct types
    const nonceBigNumber = ethers.BigNumber.from(nonce);
    const blockNumberInt = parseInt(blockNumber, 10);
    const sharesBigNumber = ethers.BigNumber.from(shares);

    // Log addresses and parameters
    console.log("Address:", address);
    console.log("Delegator:", delegator);
    console.log("EigenDelegatorAddress:", EigenDelegatorAddress);
    console.log("EigenStETHStrategy:", EigenStETHStrategy);
    console.log("StETHAddress:", StETHAddress);
    console.log("Nonce (BigNumber):", nonceBigNumber.toString());
    console.log("BlockNumber (int):", blockNumberInt);
    console.log("Shares (BigNumber):", sharesBigNumber.toString());

    const eigenDelegator = new ethers.Contract(
      EigenDelegatorAddress,
      DELEGATION_MANAGER_ABI,
      this.signer,
    );

    const withdrawalInfos: WithdrawalInfoStruct[] = [
      {
        staker: address,
        delegatedTo: delegator,
        withdrawer: address,
        nonce: nonceBigNumber,
        startBlock: blockNumberInt,
        strategies: [EigenStETHStrategy],
        shares: [sharesBigNumber],
      },
    ];

    const assetsArray: string[][] = [[StETHAddress]];
    const middlewareTimesIndex: ethers.BigNumberish[] = [0];
    const receiveAsTokens: boolean[] = [true];

    // Log the structured data
    console.log("WithdrawalInfos:", JSON.stringify(withdrawalInfos, null, 2));
    console.log("AssetsArray:", assetsArray);
    console.log("MiddlewareTimesIndex:", middlewareTimesIndex);
    console.log("ReceiveAsTokens:", receiveAsTokens);

    try {
      const gasEstimate =
        await eigenDelegator.estimateGas.completeQueuedWithdrawals(
          withdrawalInfos,
          assetsArray,
          middlewareTimesIndex,
          receiveAsTokens,
          { from: await this.signer.getAddress() },
        );

      console.log("Estimated Gas:", gasEstimate.toString());

      const tx = await eigenDelegator.completeQueuedWithdrawals(
        withdrawalInfos,
        assetsArray,
        middlewareTimesIndex,
        receiveAsTokens,
        { from: await this.signer.getAddress(), gasLimit: gasEstimate },
      );

      console.log("Transaction successful:", tx);
      return tx;
    } catch (error) {
      console.error("Error completing queued withdrawals:", error);
      throw error;
    }
  }

  async canWithdraw(amount: number) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer,
    );
    const value = await lrtVault.canWithdraw(
      _addDecimals(amount.toString(), await asset.decimals()),
    );
    return value;
  }

  async canWithdrawSymbiotic(amount: number) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      SymbioticVault,
      ULTRAETH_ABI,
      this.signer,
    );
    const value = await lrtVault.canWithdraw(
      _addDecimals(amount.toString(), await asset.decimals()),
    );
    return value;
  }

  async deposit(amount: string) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer,
    );

    const assetUnits = _addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.deposit(
      assetUnits,
      await this.signer.getAddress(),
    );
    return tx;
  }

  async withdraw(amount: string) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer,
    );
    const receiver = await this.signer.getAddress();

    const assetUnits = _addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
    return tx;
  }

  async depositSymbiotic(amount: string) {
    const asset = new ethers.Contract(WStEthAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      SymbioticVault,
      ULTRAETH_ABI,
      this.signer,
    );
    const receiver = await this.signer.getAddress();

    const assetUnits = _addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.deposit(assetUnits, receiver);
    return tx;
  }

  async isPermit2Approve(token: string, amount: string) {
    const asset = MockERC20__factory.connect(token, this.signer);
    const receiver = await this.signer.getAddress();

    const allowance = await asset.allowance(receiver, PERMIT2_ADDRESS);
    const assetUnits = _addDecimals(amount, await asset.decimals());
    if (allowance.lt(assetUnits)) {
      // get approval for permit 2
      return false;
    }
    return true;
  }

  async approvePermit2(token: string) {
    const asset = MockERC20__factory.connect(token, this.signer);

    const tx = await asset.approve(
      PERMIT2_ADDRESS,
      BigNumber.from("2").pow(256).sub(1),
    );
    return tx;
  }

  async depositERC20Any(token: string, amount: string, vault: string) {
    const asset = MockERC20__factory.connect(token, this.signer);
    const router = UltraLRTRouter__factory.connect(RouterAddress, this.signer);
    const receiver = await this.signer.getAddress();

    // check allowance with the permit2
    const allowance = await asset.allowance(receiver, PERMIT2_ADDRESS);
    const assetUnits = _addDecimals(amount, await asset.decimals());
    if (allowance.lt(assetUnits)) {
      // get approval for permit 2
      throw Error("No allowance to permit2, please approve permit2 address");
    }
    const allowanceProvider = new AllowanceProvider(
      this.provider,
      PERMIT2_ADDRESS,
    );

    const nonce = await this._getRandomNonce();

    const deadline = this._toDeadline(30 * 60 * 1000); // deadline 30 mins
    const permit: PermitTransferFrom = {
      permitted: {
        token,
        amount: assetUnits,
      },
      spender: router.address,
      nonce,
      deadline,
    };

    const { domain, types, values } = SignatureTransfer.getPermitData(
      permit,
      PERMIT2_ADDRESS,
      await this.signer.getChainId(),
    );
    const signature = await this.provider
      .getSigner()
      ._signTypedData(domain, types, values);

    let tx;

    if (token === StETHAddress) {
      tx = await router.depositStEth(
        assetUnits,
        vault,
        receiver,
        nonce,
        deadline,
        signature,
      );
    } else if (token === WStEthAddress) {
      tx = await router.depositWStEth(
        assetUnits,
        vault,
        receiver,
        nonce,
        deadline,
        signature,
      );
    } else if (token === WEthAddress) {
      tx = await router.depositWeth(
        assetUnits,
        vault,
        receiver,
        nonce,
        deadline,
        signature,
      );
    } else {
      throw Error("Invalid token");
    }
    return tx;
  }

  async depositNative(amount: string, vault: string) {
    const router = UltraLRTRouter__factory.connect(RouterAddress, this.signer);
    const receiver = await this.signer.getAddress();
    const assetUnits = _addDecimals(amount, 18);

    const tx = await router.depositNative(vault, receiver, {
      value: assetUnits,
    });
    return tx;
  }

  async withdrawSymbiotic(amount: string) {
    const asset = new ethers.Contract(WStEthAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      SymbioticVault,
      ULTRAETH_ABI,
      this.signer,
    );
    const receiver = await this.signer.getAddress();

    const assetUnits = _addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
    return tx;
  }

  async withdrawableAssets(vaultAddress: string, address: string) {
    const vault = UltraLRT__factory.connect(vaultAddress, this.signer);
    const asset = MockERC20__factory.connect(await vault.asset(), this.signer);
    const withdrawalEscrowV2 = WithdrawalEscrowV2__factory.connect(
      await vault.escrow(),
      this.signer,
    );

    const vaultDecimals = await vault.decimals();
    const assetDecimals = await asset.decimals();

    const resolvingEpoch = (
      await withdrawalEscrowV2.resolvingEpoch()
    ).toNumber();
    const currentEpoch = (await withdrawalEscrowV2.currentEpoch()).toNumber();

    let totalAmount = 0;
    const epochData = [];
    for (let i = 0; i <= currentEpoch; i++) {
      const shares = await withdrawalEscrowV2.userDebtShare(
        ethers.BigNumber.from(i),
        address,
      );
      if (shares.eq(0)) continue;
      const assets = await withdrawalEscrowV2.withdrawableAssets(address, i);

      epochData.push({
        epoch: i,
        assets: _removeDecimals(assets, assetDecimals),
        shares: _removeDecimals(shares, vaultDecimals),
        canWithdraw: i < resolvingEpoch && shares.gt(0),
      });
      totalAmount += parseFloat(_removeDecimals(assets, assetDecimals));
    }
    return { totalAmount, epochData };
  }

  async getEthBalance(): Promise<string> {
    const balance = await this.signer.getBalance();
    return ethers.utils.formatEther(balance);
  }

  async canWithdrawEscrow(epoch: string) {
    const withdrawalEscrowV2 = new ethers.Contract(
      EscrowAddress,
      ESCROW_ABI,
      this.signer,
    );
    const value = await withdrawalEscrowV2.canWithdraw(epoch);
    return value;
  }

  async canWithdrawEscrowSymbiotic(epoch: string) {
    const withdrawalEscrowV2 = new ethers.Contract(
      SymbioticEscrow,
      ESCROW_ABI,
      this.signer,
    );
    const value = await withdrawalEscrowV2.canWithdraw(epoch);
    return value;
  }

  async redeem(epoch: string): Promise<ethers.providers.TransactionResponse> {
    const withdrawalEscrowV2 = WithdrawalEscrowV2__factory.connect(
      EscrowAddress,
      this.signer,
    );
    const receiver = await this.signer.getAddress();

    const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
    return tx;
  }

  async redeemSymbiotic(
    epoch: string,
  ): Promise<ethers.providers.TransactionResponse> {
    const withdrawalEscrowV2 = WithdrawalEscrowV2__factory.connect(
      SymbioticEscrow,
      this.signer,
    );
    const receiver = await this.signer.getAddress();

    const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
    return tx;
  }

  async isApproved(
    contractAddress: string,
    spenderAddress: string,
    amount: number,
  ): Promise<boolean> {
    const erc20Contract = new ethers.Contract(
      contractAddress,
      ERC20_ABI,
      this.signer,
    );
    const units = _addDecimals(
      amount.toString(),
      await erc20Contract.decimals(),
    );
    const allowance = await erc20Contract.allowance(
      await this.signer.getAddress(),
      spenderAddress,
    );
    return ethers.BigNumber.from(allowance).gte(units);
  }

  async approve(
    contractAddress: string,
    spenderAddress: string,
    amount: number,
  ): Promise<ethers.providers.TransactionResponse> {
    const erc20Contract = new ethers.Contract(
      contractAddress,
      ERC20_ABI,
      this.signer,
    );
    const units = _addDecimals(
      amount.toString(),
      await erc20Contract.decimals(),
    );
    const tx = await erc20Contract.approve(spenderAddress, units);
    return tx;
  }

  async wrapETH(amountInEther: string) {
    const wethContract = new ethers.Contract(
      WEthAddress,
      ["function deposit() payable"],
      this.signer,
    );
    const tx = await wethContract.deposit({
      value: ethers.utils.parseEther(amountInEther),
    });
    await tx.wait();
    console.log(`Wrapped ${amountInEther} ETH to WETH`);
  }

  async getCCIPFee(destinationChainId: 1 | 137) {
    return await ccipFee(destinationChainId, this.provider);
  }

  async bridgeAffinePass(
    destinationChainId: 1 | 137,
    destinationAddress: string,
    tokenId: number,
    fee: number,
  ) {
    return await bridgePass(
      destinationChainId,
      destinationAddress,
      tokenId,
      fee,
      this.provider,
    );
  }

  async getPassBalance() {
    try {
      return await getPassBalance(
        await this.provider.getSigner().getChainId(),
        await this.provider.getSigner().getAddress(),
      );
    } catch (e) {
      throw "ERROR GETTING PASS BALANCE";
    }
  }

  _toDeadline(expiration: number): number {
    return Math.floor((Date.now() + expiration) / 1000);
  }

  async _getRandomNonce(): Promise<BigNumber> {
    const nonceProvider = ISignatureTransfer__factory.connect(
      PERMIT2_ADDRESS,
      this.signer,
    );
    const byteSize = 32; // 256 bits
    for (let i = 0; i < 10; i++) {
      const randomBytes = ethers.utils.randomBytes(byteSize);
      const nonce = ethers.BigNumber.from(randomBytes);
      const bitPos = randomBytes[byteSize - 1];
      const word = ethers.BigNumber.from(randomBytes.slice(0, byteSize - 1));

      const bitMap = await nonceProvider.nonceBitmap(
        await nonceProvider.signer.getAddress(),
        word,
      );

      if (bitMap.and(ethers.BigNumber.from(2).pow(bitPos)).eq(0)) {
        return nonce;
      }
    }
    throw Error("Failed to generate a random nonce");
  }
}

export function _removeDecimals(
  amount: ethers.BigNumber,
  decimals: ethers.BigNumberish,
): string {
  const parsed = ethers.utils.formatUnits(amount, decimals);
  const decimalIndex = parsed.indexOf(".");
  if (decimalIndex === -1) {
    return parsed;
  }
  return parsed.slice(0, decimalIndex + 7);
}

export function _addDecimals(
  amount: string,
  decimals: number,
): ethers.BigNumber {
  return ethers.utils.parseUnits(amount, decimals);
}

async function _getVaultTVL(
  vaultAddress: string,
  provider: providers.JsonRpcProvider,
): Promise<string> {
  const vault = UltraLRT__factory.connect(vaultAddress, provider);
  const asset = MockERC20__factory.connect(await vault.asset(), provider);
  const totalAssets = await vault.totalAssets();
  return _removeDecimals(totalAssets, await asset.decimals());
}

async function _getVaultRate(
    vaultAddress: string,
    provider: providers.JsonRpcProvider,
): Promise<string> {
  const vault = UltraLRT__factory.connect(vaultAddress, provider);
  const asset = MockERC20__factory.connect(await vault.asset(), provider);
  const totalAssets = await vault.getRate();
  return _removeDecimals(totalAssets, await asset.decimals());
}

export async function getUltraEthTVL(): Promise<string> {
  console.log("ETH RPC", EthRPC);
  return _getVaultTVL(UltraLRTAddress, new providers.JsonRpcProvider(EthRPC));
}

export async function getSymbioticTVL(): Promise<string> {
  return _getVaultTVL(SymbioticVault, new providers.JsonRpcProvider(EthRPC));
}

export async function getBlastTVL(): Promise<string> {
  const address = NETWORK_PARAMS[81457].ultraLRTAddress as string;
  const provider = new providers.JsonRpcProvider(NETWORK_PARAMS[81457].rpcUrls[0])
  const vault = XUltraLRT__factory.connect(address, provider);
  const asset = MockERC20__factory.connect(SymbioticVault, new providers.JsonRpcProvider(EthRPC));

  return _removeDecimals(await vault.totalSupply(), await asset.decimals());
}

export async function getSymbioticRate(): Promise<string> {
  return _getVaultRate(SymbioticVault, new providers.JsonRpcProvider(EthRPC));
}

export async function getUltraEthRate(): Promise<string> {
  return _getVaultRate(UltraLRTAddress, new providers.JsonRpcProvider(EthRPC));
}

export async function convertStEthToWStEth(amount: string) {
  const provider = new providers.JsonRpcProvider(EthRPC);
  const wStEth = IWSTETH__factory.connect(WStEthAddress, provider);
  const stEth = MockERC20__factory.connect(StETHAddress, provider);

  const stEthDecimals = await stEth.decimals();
  const wStEthDecimals = await wStEth.decimals();

  const decimalAmount = _addDecimals(amount, stEthDecimals);

  return _removeDecimals(decimalAmount, wStEthDecimals);
}

export async function convertWStEthToStEth(amount: string) {
  const provider = new providers.JsonRpcProvider(EthRPC);
  const wStEth = IWSTETH__factory.connect(WStEthAddress, provider);
  const stEth = MockERC20__factory.connect(StETHAddress, provider);

  const stEthDecimals = await stEth.decimals();
  const wStEthDecimals = await wStEth.decimals();

  const decimalAmount = _addDecimals(amount, wStEthDecimals);
  const stEthAmount = await wStEth.getStETHByWstETH(decimalAmount);
  return _removeDecimals(stEthAmount, stEthDecimals);
}
