import { ethers, providers, BigNumber } from "ethers";
import {
  AllowanceProvider,
  PERMIT2_ADDRESS,
  PermitTransferFrom,
  SignatureTransfer,
} from "@uniswap/permit2-sdk";

import {
  WithdrawalInfo,
  EscrowAddress,
  StETHAddress,
  EigenDelegatorAddress,
  EigenStETHStrategy,
  UltraLRTAddress,
  SymbioticEscrow,
  SymbioticVault,
  WStEthAddress,
  RouterAddress,
  WEthAddress,
} from "./constants";

// ABIs
import ERC20_ABI from "./abis/erc20.json";
import EIGENSTETH_ABI from "./abis/eigenlayerStrategy.json";
import ULTRAETH_ABI from "./abis/ultraEth.json";
import ESCROW_ABI from "./abis/withdrawalEscrow.json";
import DELEGATION_MANAGER_ABI from "./abis/delegationManager.json";
import {
  MockERC20__factory,
  UltraLRTRouter__factory,
  UltraLRT__factory,
  ISignatureTransfer__factory,
  ISignatureTransfer,
} from "./typechain";
import constants_1 from "../dist/constants";

export class AffineRestakingSDK {
  private provider: providers.JsonRpcProvider;
  private signer: ethers.Signer;

  constructor(provider: providers.JsonRpcProvider, signer?: ethers.Signer) {
    this.provider = provider;
    this.signer = signer || this.provider.getSigner();
  }

  async getUltraEthBalance(): Promise<string> {
    const address = await this.signer.getAddress();
    const erc20Contract = new ethers.Contract(
      UltraLRTAddress,
      ERC20_ABI,
      this.signer
    );
    const balance = await erc20Contract.balanceOf(address);
    return this._removeDecimals(balance, 26);
  }

  async getSymbioticBalance(): Promise<string> {
    const address = await this.signer.getAddress();
    const erc20Contract = new ethers.Contract(
      SymbioticVault,
      ERC20_ABI,
      this.signer
    );
    const balance = await erc20Contract.balanceOf(address);
    return this._removeDecimals(balance, 26);
  }

  async getStEthBalance(): Promise<string> {
    const address = await this.signer.getAddress();
    const erc20Contract = new ethers.Contract(
      StETHAddress,
      ERC20_ABI,
      this.signer
    );
    const balance = await erc20Contract.balanceOf(address);
    return this._removeDecimals(balance, 18);
  }

  async getWStEthBalance(): Promise<string> {
    const address = await this.signer.getAddress();
    const erc20Contract = new ethers.Contract(
      WStEthAddress,
      ERC20_ABI,
      this.signer
    );
    const balance = await erc20Contract.balanceOf(address);
    return this._removeDecimals(balance, 18);
  }

  async getWEthBalance(): Promise<string> {
    const address = await this.signer.getAddress();
    const erc20Contract = new ethers.Contract(
        WEthAddress,
        ERC20_ABI,
        this.signer
    );
    const balance = await erc20Contract.balanceOf(address);
    return this._removeDecimals(balance, 18);
  }

  async migratableAssets(address: string) {
    const eigenStETH = new ethers.Contract(
      EigenStETHStrategy,
      EIGENSTETH_ABI,
      this.signer
    );
    const value = await eigenStETH.userUnderlyingView(address);
    return parseFloat(this._removeDecimals(value, 18));
  }

  async queueMigrationWithdrawal(address: string, assets: string) {
    console.log("queueMigrationWithdrawal");
    const eigenStETH = new ethers.Contract(
      EigenStETHStrategy,
      EIGENSTETH_ABI,
      this.signer
    );
    const eigenDelegator = new ethers.Contract(
      EigenDelegatorAddress,
      DELEGATION_MANAGER_ABI,
      this.signer
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
      shares: string
  ) {
    // Validate addresses
    if (
        !await this.isValidAddress(EigenDelegatorAddress) ||
        !await this.isValidAddress(address) ||
        !await this.isValidAddress(delegator) ||
        !await this.isValidAddress(EigenStETHStrategy) ||
        !await this.isValidAddress(StETHAddress)
    ) {
      throw new Error("One or more addresses are invalid");
    }

    // Log addresses and parameters
    console.log("Address:", address);
    console.log("Delegator:", delegator);
    console.log("EigenDelegatorAddress:", EigenDelegatorAddress);
    console.log("EigenStETHStrategy:", EigenStETHStrategy);
    console.log("StETHAddress:", StETHAddress);

    const eigenDelegator = new ethers.Contract(
        EigenDelegatorAddress,
        DELEGATION_MANAGER_ABI,
        this.signer
    );

    const withdrawalInfos = [
      {
        staker: address,
        delegatedTo: delegator,
        withdrawer: address,
        nonce: ethers.BigNumber.from(nonce),
        startBlock: parseInt(blockNumber),
        strategies: [EigenStETHStrategy],
        shares: [ethers.BigNumber.from(shares)],
      },
    ];

    const assetsArray = [StETHAddress];
    const middlewareTimesIndex = ethers.BigNumber.from("0");
    const receiveAsTokens = true;

    // Log the structured data
    console.log("WithdrawalInfos:", withdrawalInfos);
    console.log("AssetsArray:", assetsArray);
    console.log("MiddlewareTimesIndex:", middlewareTimesIndex);
    console.log("ReceiveAsTokens:", receiveAsTokens);

    const tx = await eigenDelegator.completeQueuedWithdrawal(
        withdrawalInfos,
        assetsArray,
        middlewareTimesIndex,
        receiveAsTokens
    );

    return tx;
  }

  async canWithdraw(amount: number) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer
    );
    const value = await lrtVault.canWithdraw(
      this._addDecimals(amount.toString(), await asset.decimals())
    );
    return value;
  }

  async canWithdrawSymbiotic(amount: number) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      SymbioticVault,
      ULTRAETH_ABI,
      this.signer
    );
    const value = await lrtVault.canWithdraw(
      this._addDecimals(amount.toString(), await asset.decimals())
    );
    return value;
  }

  async deposit(amount: string) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer
    );

    const assetUnits = this._addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.deposit(
      assetUnits,
      await this.signer.getAddress()
    );
    return tx;
  }

  async withdraw(amount: string) {
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer
    );
    const receiver = await this.signer.getAddress();

    const assetUnits = this._addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
    return tx;
  }

  async depositSymbiotic(amount: string) {
    const asset = new ethers.Contract(WStEthAddress, ERC20_ABI, this.signer);
    const lrtVault = new ethers.Contract(
      SymbioticVault,
      ULTRAETH_ABI,
      this.signer
    );
    const receiver = await this.signer.getAddress();

    const assetUnits = this._addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.deposit(assetUnits, receiver);
    return tx;
  }

  async isPermit2Approve(token: string, amount: string) {
    const asset = MockERC20__factory.connect(token, this.signer);
    const receiver = await this.signer.getAddress();

    const allowance = await asset.allowance(receiver, PERMIT2_ADDRESS);
    const assetUnits = this._addDecimals(amount, await asset.decimals());
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
      BigNumber.from("2").pow(256).sub(1)
    );
    return tx;
  }
  async depositERC20Any(token: string, amount: string, vault: string) {
    const asset = MockERC20__factory.connect(token, this.signer);
    const router = UltraLRTRouter__factory.connect(RouterAddress, this.signer);
    const receiver = await this.signer.getAddress();

    // check allowance with the permit2
    const allowance = await asset.allowance(receiver, PERMIT2_ADDRESS);
    const assetUnits = this._addDecimals(amount, await asset.decimals());
    if (allowance.lt(assetUnits)) {
      // get approval for permit 2
      throw Error("No allowance to permit2, please approve permit2 address");
    }
    const allowanceProvider = new AllowanceProvider(
      this.provider,
      PERMIT2_ADDRESS
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
      await this.signer.getChainId()
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
        signature
      );
    } else if (token === WStEthAddress) {
      tx = await router.depositWStEth(
        assetUnits,
        vault,
        receiver,
        nonce,
        deadline,
        signature
      );
    } else if (token === WEthAddress) {
      tx = await router.depositWeth(
        assetUnits,
        vault,
        receiver,
        nonce,
        deadline,
        signature
      );
    } else {
      throw Error("Invalid token");
    }
    return tx;
  }

  async depositNative(amount: string, vault: string) {
    const router = UltraLRTRouter__factory.connect(RouterAddress, this.signer);
    const receiver = await this.signer.getAddress();
    const assetUnits = this._addDecimals(amount, 18);

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
      this.signer
    );
    const receiver = await this.signer.getAddress();

    const assetUnits = this._addDecimals(amount, await asset.decimals());
    const tx = await lrtVault.withdraw(assetUnits, receiver, receiver);
    return tx;
  }

  async withdrawableAssets(address: string) {
    const vault = new ethers.Contract(
      UltraLRTAddress,
      ULTRAETH_ABI,
      this.signer
    );
    const asset = new ethers.Contract(StETHAddress, ERC20_ABI, this.signer);
    const withdrawalEscrowV2 = new ethers.Contract(
      EscrowAddress,
      ESCROW_ABI,
      this.signer
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
        address
      );
      const assets = await withdrawalEscrowV2.withdrawableAssets(address, i);

      epochData.push({
        epoch: i,
        assets: this._removeDecimals(assets, assetDecimals),
        shares: this._removeDecimals(shares, vaultDecimals),
        canWithdraw: i < resolvingEpoch && shares.gt(0),
      });
      totalAmount += parseFloat(this._removeDecimals(assets, assetDecimals));
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
      this.signer
    );
    const value = await withdrawalEscrowV2.canWithdraw(epoch);
    return value;
  }

  async canWithdrawEscrowSymbiotic(epoch: string) {
    const withdrawalEscrowV2 = new ethers.Contract(
      SymbioticEscrow,
      ESCROW_ABI,
      this.signer
    );
    const value = await withdrawalEscrowV2.canWithdraw(epoch);
    return value;
  }

  async redeem(epoch: string): Promise<ethers.providers.TransactionResponse> {
    const withdrawalEscrowV2 = new ethers.Contract(
      EscrowAddress,
      ESCROW_ABI,
      this.signer
    );
    const receiver = await this.signer.getAddress();

    const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
    return tx;
  }

  async redeemSymbiotic(
    epoch: string
  ): Promise<ethers.providers.TransactionResponse> {
    const withdrawalEscrowV2 = new ethers.Contract(
      SymbioticEscrow,
      ESCROW_ABI,
      this.signer
    );
    const receiver = await this.signer.getAddress();

    const tx = await withdrawalEscrowV2.redeem(receiver, epoch);
    return tx;
  }

  async isApproved(
    contractAddress: string,
    spenderAddress: string,
    amount: number
  ): Promise<boolean> {
    const erc20Contract = new ethers.Contract(
      contractAddress,
      ERC20_ABI,
      this.signer
    );
    const units = this._addDecimals(
      amount.toString(),
      await erc20Contract.decimals()
    );
    const allowance = await erc20Contract.allowance(
      await this.signer.getAddress(),
      spenderAddress
    );
    return ethers.BigNumber.from(allowance).gte(units);
  }

  async approve(
    contractAddress: string,
    spenderAddress: string,
    amount: number
  ): Promise<ethers.providers.TransactionResponse> {
    const erc20Contract = new ethers.Contract(
      contractAddress,
      ERC20_ABI,
      this.signer
    );
    const units = this._addDecimals(
      amount.toString(),
      await erc20Contract.decimals()
    );
    const tx = await erc20Contract.approve(spenderAddress, units);
    return tx;
  }

  async wrapETH(amountInEther : string) {
    const wethContract = new ethers.Contract(WEthAddress, [
      "function deposit() payable",
    ], this.signer);
    const tx = await wethContract.deposit({ value: ethers.utils.parseEther(amountInEther) });
    await tx.wait();
    console.log(`Wrapped ${amountInEther} ETH to WETH`);
  }

  _removeDecimals(
    amount: ethers.BigNumber,
    decimals: ethers.BigNumberish
  ): string {
    return ethers.utils.formatUnits(amount, decimals);
  }

  _addDecimals(amount: string, decimals: number): ethers.BigNumber {
    return ethers.utils.parseUnits(amount, decimals);
  }

  _toDeadline(expiration: number): number {
    return Math.floor((Date.now() + expiration) / 1000);
  }

  async _getRandomNonce(): Promise<BigNumber> {
    const nonceProvider = ISignatureTransfer__factory.connect(
      PERMIT2_ADDRESS,
      this.signer
    );
    const byteSize = 32; // 256 bits
    for (let i = 0; i < 10; i++) {
      const randomBytes = ethers.utils.randomBytes(byteSize);
      const nonce = ethers.BigNumber.from(randomBytes);
      const bitPos = randomBytes[byteSize - 1];
      const word = ethers.BigNumber.from(randomBytes.slice(0, byteSize - 1));

      const bitMap = await nonceProvider.nonceBitmap(
        await nonceProvider.signer.getAddress(),
        word
      );

      if (bitMap.and(ethers.BigNumber.from(2).pow(bitPos)).eq(0)) {
        return nonce;
      }
    }
    throw Error("Failed to generate a random nonce");
  }
}
