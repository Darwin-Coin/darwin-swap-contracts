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

export interface DarwinStakingInterface extends utils.Interface {
  functions: {
    "BASE_APR()": FunctionFragment;
    "LOCK_BONUS_APR()": FunctionFragment;
    "claimableDarwin(address)": FunctionFragment;
    "darwin()": FunctionFragment;
    "stake(uint256,uint256)": FunctionFragment;
    "stakedDarwin()": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASE_APR"
      | "LOCK_BONUS_APR"
      | "claimableDarwin"
      | "darwin"
      | "stake"
      | "stakedDarwin"
      | "userInfo"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASE_APR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "LOCK_BONUS_APR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimableDarwin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "darwin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedDarwin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "BASE_APR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LOCK_BONUS_APR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableDarwin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "darwin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakedDarwin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Stake(address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Stake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface StakeEventObject {
  user: string;
  amount: BigNumber;
}
export type StakeEvent = TypedEvent<[string, BigNumber], StakeEventObject>;

export type StakeEventFilter = TypedEventFilter<StakeEvent>;

export interface WithdrawEventObject {
  user: string;
  amount: BigNumber;
  rewards: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface DarwinStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DarwinStakingInterface;

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
    BASE_APR(overrides?: CallOverrides): Promise<[BigNumber]>;

    LOCK_BONUS_APR(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { claimable: BigNumber }>;

    darwin(overrides?: CallOverrides): Promise<[string]>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakedDarwin(overrides?: CallOverrides): Promise<[string]>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        lastClaimTimestamp: BigNumber;
        lockEnd: BigNumber;
      }
    >;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  BASE_APR(overrides?: CallOverrides): Promise<BigNumber>;

  LOCK_BONUS_APR(overrides?: CallOverrides): Promise<BigNumber>;

  claimableDarwin(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  darwin(overrides?: CallOverrides): Promise<string>;

  stake(
    _amount: PromiseOrValue<BigNumberish>,
    _lockPeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakedDarwin(overrides?: CallOverrides): Promise<string>;

  userInfo(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      lastClaimTimestamp: BigNumber;
      lockEnd: BigNumber;
    }
  >;

  withdraw(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASE_APR(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK_BONUS_APR(overrides?: CallOverrides): Promise<BigNumber>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    darwin(overrides?: CallOverrides): Promise<string>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedDarwin(overrides?: CallOverrides): Promise<string>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        lastClaimTimestamp: BigNumber;
        lockEnd: BigNumber;
      }
    >;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Stake(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): StakeEventFilter;
    Stake(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): StakeEventFilter;

    "Withdraw(address,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      rewards?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null,
      rewards?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    BASE_APR(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK_BONUS_APR(overrides?: CallOverrides): Promise<BigNumber>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    darwin(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakedDarwin(overrides?: CallOverrides): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_APR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCK_BONUS_APR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimableDarwin(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    darwin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _amount: PromiseOrValue<BigNumberish>,
      _lockPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakedDarwin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}