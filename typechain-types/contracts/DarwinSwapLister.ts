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
} from "../common";

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
    tokenB1SellToADG: PromiseOrValue<BigNumberish>;
    tokenB1BuyToADG: PromiseOrValue<BigNumberish>;
    tokenB2SellToADG: PromiseOrValue<BigNumberish>;
    tokenB2BuyToADG: PromiseOrValue<BigNumberish>;
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
    tokenB1SellToADG: BigNumber;
    tokenB1BuyToADG: BigNumber;
    tokenB2SellToADG: BigNumber;
    tokenB2BuyToADG: BigNumber;
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
    antiDumpTriggerPrice: PromiseOrValue<BigNumberish>;
    purpose: PromiseOrValue<string>;
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
    BigNumber,
    string
  ] & {
    ownToks: IDarwinSwapLister.OwnTokenomicsInfoStructOutput;
    addedToks: IDarwinSwapLister.TokenomicsInfoStructOutput;
    status: number;
    validator: string;
    owner: string;
    feeReceiver: string;
    valid: boolean;
    official: boolean;
    antiDumpTriggerPrice: BigNumber;
    purpose: string;
  };
}

export interface DarwinSwapListerInterface extends utils.Interface {
  functions: {
    "createPair(address,address)": FunctionFragment;
    "dev()": FunctionFragment;
    "factory()": FunctionFragment;
    "isUserBannedFromListing(address)": FunctionFragment;
    "isValidator(address)": FunctionFragment;
    "listDarwinWithWETH(address,address,address)": FunctionFragment;
    "listOfficialToken(address)": FunctionFragment;
    "maxTok1Tax()": FunctionFragment;
    "maxTok2Tax()": FunctionFragment;
    "proposals()": FunctionFragment;
    "proposeToken(address,((uint256,uint256),(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint8,address,address,address,bool,bool,uint256,string))": FunctionFragment;
    "setBanToken(address,bool)": FunctionFragment;
    "setBanUser(address,bool)": FunctionFragment;
    "setDev(address)": FunctionFragment;
    "setFactory(address)": FunctionFragment;
    "setMaxTok1Tax(uint256)": FunctionFragment;
    "setMaxTok2Tax(uint256)": FunctionFragment;
    "setValidator(address,bool)": FunctionFragment;
    "tokenInfo(address)": FunctionFragment;
    "validTokens(uint256)": FunctionFragment;
    "validateToken(address,uint8,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createPair"
      | "dev"
      | "factory"
      | "isUserBannedFromListing"
      | "isValidator"
      | "listDarwinWithWETH"
      | "listOfficialToken"
      | "maxTok1Tax"
      | "maxTok2Tax"
      | "proposals"
      | "proposeToken"
      | "setBanToken"
      | "setBanUser"
      | "setDev"
      | "setFactory"
      | "setMaxTok1Tax"
      | "setMaxTok2Tax"
      | "setValidator"
      | "tokenInfo"
      | "validTokens"
      | "validateToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPair",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "dev", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isUserBannedFromListing",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "listDarwinWithWETH",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "listOfficialToken",
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
  encodeFunctionData(functionFragment: "proposals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeToken",
    values: [PromiseOrValue<string>, IDarwinSwapLister.TokenInfoStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setBanToken",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBanUser",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDev",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxTok1Tax",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxTok2Tax",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setValidator",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isUserBannedFromListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listDarwinWithWETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listOfficialToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxTok1Tax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxTok2Tax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBanToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBanUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFactory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxTok1Tax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxTok2Tax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateToken",
    data: BytesLike
  ): Result;

  events: {
    "TokenBanned(address,address)": EventFragment;
    "TokenProposed(address,tuple)": EventFragment;
    "TokenValidated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokenBanned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenValidated"): EventFragment;
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

export interface TokenProposedEventObject {
  tokenAddress: string;
  proposalInfo: IDarwinSwapLister.TokenInfoStructOutput;
}
export type TokenProposedEvent = TypedEvent<
  [string, IDarwinSwapLister.TokenInfoStructOutput],
  TokenProposedEventObject
>;

export type TokenProposedEventFilter = TypedEventFilter<TokenProposedEvent>;

export interface TokenValidatedEventObject {
  tokenAddress: string;
}
export type TokenValidatedEvent = TypedEvent<
  [string],
  TokenValidatedEventObject
>;

export type TokenValidatedEventFilter = TypedEventFilter<TokenValidatedEvent>;

export interface DarwinSwapLister extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DarwinSwapListerInterface;

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

    dev(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    isUserBannedFromListing(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    listDarwinWithWETH(
      darwin: PromiseOrValue<string>,
      weth: PromiseOrValue<string>,
      darwinCommunity: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    listOfficialToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxTok1Tax(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxTok2Tax(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      overrides?: CallOverrides
    ): Promise<[string[], IDarwinSwapLister.TokenInfoStructOutput[]]>;

    proposeToken(
      tokenAddress: PromiseOrValue<string>,
      proposalInfo: IDarwinSwapLister.TokenInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBanToken(
      _token: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBanUser(
      _user: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDev(
      _dev: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxTok1Tax(
      _maxTok1Tax: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxTok2Tax(
      _maxTok2Tax: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setValidator(
      _user: PromiseOrValue<string>,
      _isValidator: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IDarwinSwapLister.TokenInfoStructOutput]>;

    validTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    validateToken(
      tokenToValidate: PromiseOrValue<string>,
      outcome: PromiseOrValue<BigNumberish>,
      isTokenValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createPair(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dev(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  isUserBannedFromListing(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidator(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  listDarwinWithWETH(
    darwin: PromiseOrValue<string>,
    weth: PromiseOrValue<string>,
    darwinCommunity: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  listOfficialToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxTok1Tax(overrides?: CallOverrides): Promise<BigNumber>;

  maxTok2Tax(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    overrides?: CallOverrides
  ): Promise<[string[], IDarwinSwapLister.TokenInfoStructOutput[]]>;

  proposeToken(
    tokenAddress: PromiseOrValue<string>,
    proposalInfo: IDarwinSwapLister.TokenInfoStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBanToken(
    _token: PromiseOrValue<string>,
    _ban: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBanUser(
    _user: PromiseOrValue<string>,
    _ban: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDev(
    _dev: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFactory(
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxTok1Tax(
    _maxTok1Tax: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxTok2Tax(
    _maxTok2Tax: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setValidator(
    _user: PromiseOrValue<string>,
    _isValidator: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenInfo(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IDarwinSwapLister.TokenInfoStructOutput>;

  validTokens(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  validateToken(
    tokenToValidate: PromiseOrValue<string>,
    outcome: PromiseOrValue<BigNumberish>,
    isTokenValid: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    dev(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    isUserBannedFromListing(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listDarwinWithWETH(
      darwin: PromiseOrValue<string>,
      weth: PromiseOrValue<string>,
      darwinCommunity: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    listOfficialToken(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    maxTok1Tax(overrides?: CallOverrides): Promise<BigNumber>;

    maxTok2Tax(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      overrides?: CallOverrides
    ): Promise<[string[], IDarwinSwapLister.TokenInfoStructOutput[]]>;

    proposeToken(
      tokenAddress: PromiseOrValue<string>,
      proposalInfo: IDarwinSwapLister.TokenInfoStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setBanToken(
      _token: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBanUser(
      _user: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDev(
      _dev: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxTok1Tax(
      _maxTok1Tax: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxTok2Tax(
      _maxTok2Tax: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setValidator(
      _user: PromiseOrValue<string>,
      _isValidator: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IDarwinSwapLister.TokenInfoStructOutput>;

    validTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    validateToken(
      tokenToValidate: PromiseOrValue<string>,
      outcome: PromiseOrValue<BigNumberish>,
      isTokenValid: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
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

    "TokenProposed(address,tuple)"(
      tokenAddress?: PromiseOrValue<string> | null,
      proposalInfo?: IDarwinSwapLister.TokenInfoStruct | null
    ): TokenProposedEventFilter;
    TokenProposed(
      tokenAddress?: PromiseOrValue<string> | null,
      proposalInfo?: IDarwinSwapLister.TokenInfoStruct | null
    ): TokenProposedEventFilter;

    "TokenValidated(address)"(
      tokenAddress?: PromiseOrValue<string> | null
    ): TokenValidatedEventFilter;
    TokenValidated(
      tokenAddress?: PromiseOrValue<string> | null
    ): TokenValidatedEventFilter;
  };

  estimateGas: {
    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dev(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    isUserBannedFromListing(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listDarwinWithWETH(
      darwin: PromiseOrValue<string>,
      weth: PromiseOrValue<string>,
      darwinCommunity: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    listOfficialToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maxTok1Tax(overrides?: CallOverrides): Promise<BigNumber>;

    maxTok2Tax(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(overrides?: CallOverrides): Promise<BigNumber>;

    proposeToken(
      tokenAddress: PromiseOrValue<string>,
      proposalInfo: IDarwinSwapLister.TokenInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBanToken(
      _token: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBanUser(
      _user: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDev(
      _dev: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxTok1Tax(
      _maxTok1Tax: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxTok2Tax(
      _maxTok2Tax: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setValidator(
      _user: PromiseOrValue<string>,
      _isValidator: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateToken(
      tokenToValidate: PromiseOrValue<string>,
      outcome: PromiseOrValue<BigNumberish>,
      isTokenValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dev(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUserBannedFromListing(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidator(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listDarwinWithWETH(
      darwin: PromiseOrValue<string>,
      weth: PromiseOrValue<string>,
      darwinCommunity: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    listOfficialToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxTok1Tax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxTok2Tax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeToken(
      tokenAddress: PromiseOrValue<string>,
      proposalInfo: IDarwinSwapLister.TokenInfoStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBanToken(
      _token: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBanUser(
      _user: PromiseOrValue<string>,
      _ban: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDev(
      _dev: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFactory(
      _factory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxTok1Tax(
      _maxTok1Tax: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxTok2Tax(
      _maxTok2Tax: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setValidator(
      _user: PromiseOrValue<string>,
      _isValidator: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenInfo(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateToken(
      tokenToValidate: PromiseOrValue<string>,
      outcome: PromiseOrValue<BigNumberish>,
      isTokenValid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
