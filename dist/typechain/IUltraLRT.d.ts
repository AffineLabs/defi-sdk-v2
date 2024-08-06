import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUltraLRTInterface extends utils.Interface {
    functions: {
        "HARVESTER()": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HARVESTER" | "hasRole"): FunctionFragment;
    encodeFunctionData(functionFragment: "HARVESTER", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "HARVESTER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    events: {};
}
export interface IUltraLRT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUltraLRTInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        HARVESTER(overrides?: CallOverrides): Promise<[string]>;
        hasRole(role: BytesLike, user: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    HARVESTER(overrides?: CallOverrides): Promise<string>;
    hasRole(role: BytesLike, user: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        HARVESTER(overrides?: CallOverrides): Promise<string>;
        hasRole(role: BytesLike, user: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        HARVESTER(overrides?: CallOverrides): Promise<BigNumber>;
        hasRole(role: BytesLike, user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        HARVESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
