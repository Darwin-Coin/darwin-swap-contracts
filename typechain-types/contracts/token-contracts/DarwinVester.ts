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

export interface DarwinVesterInterface extends utils.Interface {
  functions: {
    "INTEREST()": FunctionFragment;
    "MONTHS()": FunctionFragment;
    "VESTING_TIME()": FunctionFragment;
    "claimableDarwin(address)": FunctionFragment;
    "darwin()": FunctionFragment;
    "deployer()": FunctionFragment;
    "init(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startVesting()": FunctionFragment;
    "supportedNFT(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawableDarwin(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INTEREST"
      | "MONTHS"
      | "VESTING_TIME"
      | "claimableDarwin"
      | "darwin"
      | "deployer"
      | "init"
      | "owner"
      | "renounceOwnership"
      | "startVesting"
      | "supportedNFT"
      | "transferOwnership"
      | "userInfo"
      | "withdraw"
      | "withdrawableDarwin"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "INTEREST", values?: undefined): string;
  encodeFunctionData(functionFragment: "MONTHS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "VESTING_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimableDarwin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "darwin", values?: undefined): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startVesting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportedNFT",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawableDarwin",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "INTEREST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MONTHS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "VESTING_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableDarwin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "darwin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawableDarwin",
    data: BytesLike
  ): Result;

  events: {
    "Claim(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "StakeEvoture(address,uint256,uint256)": EventFragment;
    "Vest(address,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
    "WithdrawEvoture(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeEvoture"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Vest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawEvoture"): EventFragment;
}

export interface ClaimEventObject {
  user: string;
  claimAmount: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface StakeEvotureEventObject {
  user: string;
  evotureTokenId: BigNumber;
  multiplier: BigNumber;
}
export type StakeEvotureEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  StakeEvotureEventObject
>;

export type StakeEvotureEventFilter = TypedEventFilter<StakeEvotureEvent>;

export interface VestEventObject {
  user: string;
  vestAmount: BigNumber;
}
export type VestEvent = TypedEvent<[string, BigNumber], VestEventObject>;

export type VestEventFilter = TypedEventFilter<VestEvent>;

export interface WithdrawEventObject {
  user: string;
  withdrawAmount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface WithdrawEvotureEventObject {
  user: string;
  evotureTokenId: BigNumber;
}
export type WithdrawEvotureEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEvotureEventObject
>;

export type WithdrawEvotureEventFilter = TypedEventFilter<WithdrawEvotureEvent>;

export interface DarwinVester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DarwinVesterInterface;

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
    INTEREST(overrides?: CallOverrides): Promise<[BigNumber]>;

    MONTHS(overrides?: CallOverrides): Promise<[BigNumber]>;

    VESTING_TIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { claimable: BigNumber }>;

    darwin(overrides?: CallOverrides): Promise<[string]>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    init(
      _darwin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startVesting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportedNFT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
      ] & {
        withdrawn: BigNumber;
        vested: BigNumber;
        vestTimestamp: BigNumber;
        claimed: BigNumber;
        boost: BigNumber;
        nft: string;
        tokenId: BigNumber;
      }
    >;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { withdrawable: BigNumber }>;
  };

  INTEREST(overrides?: CallOverrides): Promise<BigNumber>;

  MONTHS(overrides?: CallOverrides): Promise<BigNumber>;

  VESTING_TIME(overrides?: CallOverrides): Promise<BigNumber>;

  claimableDarwin(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  darwin(overrides?: CallOverrides): Promise<string>;

  deployer(overrides?: CallOverrides): Promise<string>;

  init(
    _darwin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startVesting(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportedNFT(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      BigNumber
    ] & {
      withdrawn: BigNumber;
      vested: BigNumber;
      vestTimestamp: BigNumber;
      claimed: BigNumber;
      boost: BigNumber;
      nft: string;
      tokenId: BigNumber;
    }
  >;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawableDarwin(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    INTEREST(overrides?: CallOverrides): Promise<BigNumber>;

    MONTHS(overrides?: CallOverrides): Promise<BigNumber>;

    VESTING_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    darwin(overrides?: CallOverrides): Promise<string>;

    deployer(overrides?: CallOverrides): Promise<string>;

    init(
      _darwin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    startVesting(overrides?: CallOverrides): Promise<void>;

    supportedNFT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber
      ] & {
        withdrawn: BigNumber;
        vested: BigNumber;
        vestTimestamp: BigNumber;
        claimed: BigNumber;
        boost: BigNumber;
        nft: string;
        tokenId: BigNumber;
      }
    >;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Claim(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      claimAmount?: PromiseOrValue<BigNumberish> | null
    ): ClaimEventFilter;
    Claim(
      user?: PromiseOrValue<string> | null,
      claimAmount?: PromiseOrValue<BigNumberish> | null
    ): ClaimEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "StakeEvoture(address,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      evotureTokenId?: PromiseOrValue<BigNumberish> | null,
      multiplier?: PromiseOrValue<BigNumberish> | null
    ): StakeEvotureEventFilter;
    StakeEvoture(
      user?: PromiseOrValue<string> | null,
      evotureTokenId?: PromiseOrValue<BigNumberish> | null,
      multiplier?: PromiseOrValue<BigNumberish> | null
    ): StakeEvotureEventFilter;

    "Vest(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      vestAmount?: PromiseOrValue<BigNumberish> | null
    ): VestEventFilter;
    Vest(
      user?: PromiseOrValue<string> | null,
      vestAmount?: PromiseOrValue<BigNumberish> | null
    ): VestEventFilter;

    "Withdraw(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      withdrawAmount?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      withdrawAmount?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;

    "WithdrawEvoture(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      evotureTokenId?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEvotureEventFilter;
    WithdrawEvoture(
      user?: PromiseOrValue<string> | null,
      evotureTokenId?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEvotureEventFilter;
  };

  estimateGas: {
    INTEREST(overrides?: CallOverrides): Promise<BigNumber>;

    MONTHS(overrides?: CallOverrides): Promise<BigNumber>;

    VESTING_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    darwin(overrides?: CallOverrides): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _darwin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startVesting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportedNFT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INTEREST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MONTHS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VESTING_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    darwin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(
      _darwin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startVesting(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportedNFT(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
