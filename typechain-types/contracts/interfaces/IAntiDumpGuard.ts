/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface IAntiDumpGuardInterface extends utils.Interface {
  functions: {
    "buyBackAndPair(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "buyBackAndPair" | "initialize"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyBackAndPair",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "buyBackAndPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;

  events: {
    "BuyBackAndPair(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyBackAndPair"): EventFragment;
}

export interface BuyBackAndPairEventObject {
  tokenSold: string;
  tokenBought: string;
  amountSold: BigNumber;
  amountBought: BigNumber;
}
export type BuyBackAndPairEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  BuyBackAndPairEventObject
>;

export type BuyBackAndPairEventFilter = TypedEventFilter<BuyBackAndPairEvent>;

export interface IAntiDumpGuard extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAntiDumpGuardInterface;

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
    buyBackAndPair(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyBackAndPair(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _pair: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyBackAndPair(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _pair: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BuyBackAndPair(address,address,uint256,uint256)"(
      tokenSold?: null,
      tokenBought?: null,
      amountSold?: null,
      amountBought?: null
    ): BuyBackAndPairEventFilter;
    BuyBackAndPair(
      tokenSold?: null,
      tokenBought?: null,
      amountSold?: null,
      amountBought?: null
    ): BuyBackAndPairEventFilter;
  };

  estimateGas: {
    buyBackAndPair(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyBackAndPair(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _pair: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}