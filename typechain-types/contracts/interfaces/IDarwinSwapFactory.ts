/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IDarwinSwapFactoryInterface extends utils.Interface {
  functions: {
    "INIT_CODE_HASH()": FunctionFragment;
    "USD()": FunctionFragment;
    "allPairs(uint256)": FunctionFragment;
    "allPairsLength()": FunctionFragment;
    "createPair(address,address)": FunctionFragment;
    "dev()": FunctionFragment;
    "feeTo()": FunctionFragment;
    "getPair(address,address)": FunctionFragment;
    "liquidityBundles()": FunctionFragment;
    "lister()": FunctionFragment;
    "masterChef()": FunctionFragment;
    "router()": FunctionFragment;
    "setDev(address)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setLister(address)": FunctionFragment;
    "setRouter(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INIT_CODE_HASH"
      | "USD"
      | "allPairs"
      | "allPairsLength"
      | "createPair"
      | "dev"
      | "feeTo"
      | "getPair"
      | "liquidityBundles"
      | "lister"
      | "masterChef"
      | "router"
      | "setDev"
      | "setFeeTo"
      | "setLister"
      | "setRouter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "INIT_CODE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "USD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allPairs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "allPairsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "dev", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPair",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityBundles",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lister", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "masterChef",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDev",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLister",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "INIT_CODE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "USD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allPairsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityBundles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lister", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "masterChef", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setLister", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;

  events: {
    "PairCreated(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
}

export interface PairCreatedEventObject {
  token0: string;
  token1: string;
  pair: string;
  arg3: BigNumber;
}
export type PairCreatedEvent = TypedEvent<
  [string, string, string, BigNumber],
  PairCreatedEventObject
>;

export type PairCreatedEventFilter = TypedEventFilter<PairCreatedEvent>;

export interface IDarwinSwapFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDarwinSwapFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    INIT_CODE_HASH(overrides?: CallOverrides): Promise<[string]>;

    USD(overrides?: CallOverrides): Promise<[string]>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dev(overrides?: CallOverrides): Promise<[string]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    liquidityBundles(overrides?: CallOverrides): Promise<[string]>;

    lister(overrides?: CallOverrides): Promise<[string]>;

    masterChef(overrides?: CallOverrides): Promise<[string]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    setDev(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLister(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRouter(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;

  USD(overrides?: CallOverrides): Promise<string>;

  allPairs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

  createPair(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dev(overrides?: CallOverrides): Promise<string>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  getPair(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  liquidityBundles(overrides?: CallOverrides): Promise<string>;

  lister(overrides?: CallOverrides): Promise<string>;

  masterChef(overrides?: CallOverrides): Promise<string>;

  router(overrides?: CallOverrides): Promise<string>;

  setDev(
    arg0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    arg0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLister(
    arg0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRouter(
    arg0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;

    USD(overrides?: CallOverrides): Promise<string>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    dev(overrides?: CallOverrides): Promise<string>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    liquidityBundles(overrides?: CallOverrides): Promise<string>;

    lister(overrides?: CallOverrides): Promise<string>;

    masterChef(overrides?: CallOverrides): Promise<string>;

    router(overrides?: CallOverrides): Promise<string>;

    setDev(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLister(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRouter(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PairCreated(address,address,address,uint256)"(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      pair?: null,
      arg3?: null
    ): PairCreatedEventFilter;
    PairCreated(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      pair?: null,
      arg3?: null
    ): PairCreatedEventFilter;
  };

  estimateGas: {
    INIT_CODE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    USD(overrides?: CallOverrides): Promise<BigNumber>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dev(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidityBundles(overrides?: CallOverrides): Promise<BigNumber>;

    lister(overrides?: CallOverrides): Promise<BigNumber>;

    masterChef(overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    setDev(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLister(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRouter(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INIT_CODE_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPairs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityBundles(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lister(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    masterChef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDev(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLister(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRouter(
      arg0: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
