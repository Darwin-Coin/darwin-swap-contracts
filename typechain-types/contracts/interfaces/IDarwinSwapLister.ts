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

export declare namespace IDarwinSwapLister {
  export type OwnTokenomicsInfoStruct = {
    tokenTaxOnSell: PromiseOrValue<BigNumberish>;
    tokenTaxOnBuy: PromiseOrValue<BigNumberish>;
  };

  export type OwnTokenomicsInfoStructOutput = [BigNumber, BigNumber] & {
    tokenTaxOnSell: BigNumber;
    tokenTaxOnBuy: BigNumber;
  };

  export type TokenomicsInfoStruct = {
    tokenA1TaxOnSell: PromiseOrValue<BigNumberish>;
    tokenB1TaxOnSell: PromiseOrValue<BigNumberish>;
    tokenA1TaxOnBuy: PromiseOrValue<BigNumberish>;
    tokenB1TaxOnBuy: PromiseOrValue<BigNumberish>;
    tokenA2TaxOnSell: PromiseOrValue<BigNumberish>;
    tokenB2TaxOnSell: PromiseOrValue<BigNumberish>;
    tokenA2TaxOnBuy: PromiseOrValue<BigNumberish>;
    tokenB2TaxOnBuy: PromiseOrValue<BigNumberish>;
    refundOnSell: PromiseOrValue<BigNumberish>;
    refundOnBuy: PromiseOrValue<BigNumberish>;
    tokenB1SellToLI: PromiseOrValue<BigNumberish>;
    tokenB1BuyToLI: PromiseOrValue<BigNumberish>;
    tokenB2SellToLI: PromiseOrValue<BigNumberish>;
    tokenB2BuyToLI: PromiseOrValue<BigNumberish>;
  };

  export type TokenomicsInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenA1TaxOnSell: BigNumber;
    tokenB1TaxOnSell: BigNumber;
    tokenA1TaxOnBuy: BigNumber;
    tokenB1TaxOnBuy: BigNumber;
    tokenA2TaxOnSell: BigNumber;
    tokenB2TaxOnSell: BigNumber;
    tokenA2TaxOnBuy: BigNumber;
    tokenB2TaxOnBuy: BigNumber;
    refundOnSell: BigNumber;
    refundOnBuy: BigNumber;
    tokenB1SellToLI: BigNumber;
    tokenB1BuyToLI: BigNumber;
    tokenB2SellToLI: BigNumber;
    tokenB2BuyToLI: BigNumber;
  };

  export type TokenInfoStruct = {
    ownToks: IDarwinSwapLister.OwnTokenomicsInfoStruct;
    addedToks: IDarwinSwapLister.TokenomicsInfoStruct;
    status: PromiseOrValue<BigNumberish>;
    validator: PromiseOrValue<string>;
    owner: PromiseOrValue<string>;
    feeReceiver: PromiseOrValue<string>;
    valid: PromiseOrValue<boolean>;
    official: PromiseOrValue<boolean>;
    purpose: PromiseOrValue<string>;
    unlockTime: PromiseOrValue<BigNumberish>;
  };

  export type TokenInfoStructOutput = [
    IDarwinSwapLister.OwnTokenomicsInfoStructOutput,
    IDarwinSwapLister.TokenomicsInfoStructOutput,
    number,
    string,
    string,
    string,
    boolean,
    boolean,
    string,
    BigNumber
  ] & {
    ownToks: IDarwinSwapLister.OwnTokenomicsInfoStructOutput;
    addedToks: IDarwinSwapLister.TokenomicsInfoStructOutput;
    status: number;
    validator: string;
    owner: string;
    feeReceiver: string;
    valid: boolean;
    official: boolean;
    purpose: string;
    unlockTime: BigNumber;
  };
}

export interface IDarwinSwapListerInterface extends utils.Interface {
  functions: {
    "createPair(address,address)": FunctionFragment;
    "isValidator(address)": FunctionFragment;
    "maxTok1Tax()": FunctionFragment;
    "maxTok2Tax()": FunctionFragment;
    "tokenInfo(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createPair"
      | "isValidator"
      | "maxTok1Tax"
      | "maxTok2Tax"
      | "tokenInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPair",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxTok1Tax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTok2Tax",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenInfo",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxTok1Tax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxTok2Tax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenInfo", data: BytesLike): Result;

  events: {
    "TokenBanned(address,address)": EventFragment;
    "TokenListed(address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokenBanned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenListed"): EventFragment;
}

export interface TokenBannedEventObject {
  tokenAddress: string;
  ownerAddress: string;
}
export type TokenBannedEvent = TypedEvent<
  [string, string],
  TokenBannedEventObject
>;

export type TokenBannedEventFilter = TypedEventFilter<TokenBannedEvent>;

export interface TokenListedEventObject {
  tokenAddress: string;
  listingInfo: IDarwinSwapLister.TokenInfoStructOutput;
}
export type TokenListedEvent = TypedEvent<
  [string, IDarwinSwapLister.TokenInfoStructOutput],
  TokenListedEventObject
>;

export type TokenListedEventFilter = TypedEventFilter<TokenListedEvent>;

export interface IDarwinSwapLister extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDarwinSwapListerInterface;

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
    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isValidator(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxTok1Tax(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxTok2Tax(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IDarwinSwapLister.TokenInfoStructOutput]>;
  };

  createPair(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isValidator(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxTok1Tax(overrides?: CallOverrides): Promise<BigNumber>;

  maxTok2Tax(overrides?: CallOverrides): Promise<BigNumber>;

  tokenInfo(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IDarwinSwapLister.TokenInfoStructOutput>;

  callStatic: {
    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    isValidator(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxTok1Tax(overrides?: CallOverrides): Promise<BigNumber>;

    maxTok2Tax(overrides?: CallOverrides): Promise<BigNumber>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IDarwinSwapLister.TokenInfoStructOutput>;
  };

  filters: {
    "TokenBanned(address,address)"(
      tokenAddress?: PromiseOrValue<string> | null,
      ownerAddress?: PromiseOrValue<string> | null
    ): TokenBannedEventFilter;
    TokenBanned(
      tokenAddress?: PromiseOrValue<string> | null,
      ownerAddress?: PromiseOrValue<string> | null
    ): TokenBannedEventFilter;

    "TokenListed(address,tuple)"(
      tokenAddress?: PromiseOrValue<string> | null,
      listingInfo?: IDarwinSwapLister.TokenInfoStruct | null
    ): TokenListedEventFilter;
    TokenListed(
      tokenAddress?: PromiseOrValue<string> | null,
      listingInfo?: IDarwinSwapLister.TokenInfoStruct | null
    ): TokenListedEventFilter;
  };

  estimateGas: {
    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isValidator(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxTok1Tax(overrides?: CallOverrides): Promise<BigNumber>;

    maxTok2Tax(overrides?: CallOverrides): Promise<BigNumber>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isValidator(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxTok1Tax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxTok2Tax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
