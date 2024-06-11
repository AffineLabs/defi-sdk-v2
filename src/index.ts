import { ethers, providers } from "ethers";

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
} from "./constants";

// ABIs
import ERC20_ABI from "./abis/erc20.json";
import EIGENSTETH_ABI from "./abis/eigenlayerStrategy.json";
import ULTRAETH_ABI from "./abis/ultraEth.json";
import ESCROW_ABI from "./abis/withdrawalEscrow.json";
import DELEGATION_MANAGER_ABI from "./abis/delegationManager.json";

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

  async completeMigrationWithdrawal(
    address: string,
    delegator: string,
    nonce: string,
    blockNumber: string,
    shares: string
  ) {
    const eigenDelegator = new ethers.Contract(
      EigenDelegatorAddress,
      DELEGATION_MANAGER_ABI,
      this.signer
    );

    const withdrawalInfos: WithdrawalInfo[] = [
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

    // Define the additional parameters
    const assetsArray: string[][] = [[StETHAddress]];
    const uint256Array: ethers.BigNumber[] = [ethers.BigNumber.from("0")];
    const boolArray: boolean[] = [true];

    const tx = await eigenDelegator.completeWithdrawals(
      withdrawalInfos,
      assetsArray,
      uint256Array,
      boolArray
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

  _removeDecimals(
    amount: ethers.BigNumber,
    decimals: ethers.BigNumberish
  ): string {
    return ethers.utils.formatUnits(amount, decimals);
  }

  _addDecimals(amount: string, decimals: number): ethers.BigNumber {
    return ethers.utils.parseUnits(amount, decimals);
  }
}
