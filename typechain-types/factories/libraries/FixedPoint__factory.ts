/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FixedPoint,
  FixedPointInterface,
} from "../../libraries/FixedPoint";

const _abi = [
  {
    inputs: [],
    name: "Q112",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESOLUTION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60ad610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80633bf7a83e146042578063552f888a14605f575b600080fd5b604c600160701b81565b6040519081526020015b60405180910390f35b6066607081565b60405160ff9091168152602001605656fea2646970667358221220ff13997700f3fde358dc9376eaa1e4800c620baa1f02ea8634b3214ae1bc66e764736f6c634300080e0033";

type FixedPointConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPointConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPoint__factory extends ContractFactory {
  constructor(...args: FixedPointConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FixedPoint> {
    return super.deploy(overrides || {}) as Promise<FixedPoint>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FixedPoint {
    return super.attach(address) as FixedPoint;
  }
  override connect(signer: Signer): FixedPoint__factory {
    return super.connect(signer) as FixedPoint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointInterface {
    return new utils.Interface(_abi) as FixedPointInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPoint {
    return new Contract(address, _abi, signerOrProvider) as FixedPoint;
  }
}
