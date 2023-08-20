/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ConfirmedOwner,
  ConfirmedOwnerInterface,
} from "../../../../contracts/token-contracts/VRFv2Consumer.sol/ConfirmedOwner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102c73803806102c783398101604081905261002f916100ae565b6001600160a01b0381166100895760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b03929092169190911790556100de565b6000602082840312156100c057600080fd5b81516001600160a01b03811681146100d757600080fd5b9392505050565b6101da806100ed6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b1461005a575b600080fd5b600054604080516001600160a01b039092168252519081900360200190f35b61006d610068366004610174565b61006f565b005b61007761011f565b336001600160a01b038216036100d45760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b6000546001600160a01b031633146101725760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b60448201526064016100cb565b565b60006020828403121561018657600080fd5b81356001600160a01b038116811461019d57600080fd5b939250505056fea2646970667358221220fab9c978ade26ef7381f6f95a94ba36f4f64a2bdcaf5043e62382515b86a975e64736f6c634300080e0033";

type ConfirmedOwnerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfirmedOwnerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConfirmedOwner__factory extends ContractFactory {
  constructor(...args: ConfirmedOwnerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConfirmedOwner> {
    return super.deploy(newOwner, overrides || {}) as Promise<ConfirmedOwner>;
  }
  override getDeployTransaction(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(newOwner, overrides || {});
  }
  override attach(address: string): ConfirmedOwner {
    return super.attach(address) as ConfirmedOwner;
  }
  override connect(signer: Signer): ConfirmedOwner__factory {
    return super.connect(signer) as ConfirmedOwner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfirmedOwnerInterface {
    return new utils.Interface(_abi) as ConfirmedOwnerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConfirmedOwner {
    return new Contract(address, _abi, signerOrProvider) as ConfirmedOwner;
  }
}
