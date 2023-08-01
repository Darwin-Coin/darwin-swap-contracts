/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MainnetNFTCounter,
  MainnetNFTCounterInterface,
} from "../../../contracts/token-contracts/MainnetNFTCounter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BOOSTER_PRICE",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EVOTURES_PRICE",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_evotures",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "_boosters",
        type: "uint8",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "dev",
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
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint8",
        name: "boosters",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "evotures",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50336080526080516106046100366000396000818160e4015261034701526106046000f3fe6080604052600436106100595760003560e01c80631959a002146100655780634ac89714146100bd57806391cca3db146100d2578063afd8e4fa1461011e578063d035770c14610152578063e086e5ec1461016d57600080fd5b3661006057005b600080fd5b34801561007157600080fd5b5061009e610080366004610472565b60006020819052908152604090205460ff8082169161010090041682565b6040805160ff9384168152929091166020830152015b60405180910390f35b6100d06100cb3660046104b8565b610182565b005b3480156100de57600080fd5b506101067f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100b4565b34801561012a57600080fd5b50610139668e1bc9bf04000081565b60405167ffffffffffffffff90911681526020016100b4565b34801561015e57600080fd5b50610139661550f7dca7000081565b34801561017957600080fd5b506100d061033c565b661550f7dca700006101948284610501565b60ff166101a1919061052a565b6101b5668e1bc9bf04000060ff851661052a565b6101bf919061055a565b67ffffffffffffffff163410156102285760405162461bcd60e51b815260206004820152602260248201527f45766f74757265734e46543a3a6275793a20494e53554646494349454e545f456044820152610a8960f31b60648201526084015b60405180910390fd5b3360009081526020819052604090205461024b90610100900460ff166003610586565b60ff168260ff1611158015610264575060058160ff1611155b6102b05760405162461bcd60e51b815260206004820152601b60248201527f45766f74757265734e46543a3a6275793a20464f5242494444454e0000000000604482015260640161021f565b33600090815260208190526040902080548391906001906102da908490610100900460ff166105a9565b92506101000a81548160ff021916908360ff16021790555080826102fe9190610501565b336000908152602081905260408120805490919061032090849060ff166105a9565b92506101000a81548160ff021916908360ff1602179055505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103c55760405162461bcd60e51b815260206004820152602860248201527f45766f74757265734e46543a3a77697468647261774554483a2043414c4c45526044820152672fa727aa2fa222ab60c11b606482015260840161021f565b604051600090339047908381818185875af1925050503d8060008114610407576040519150601f19603f3d011682016040523d82523d6000602084013e61040c565b606091505b505090508061046f5760405162461bcd60e51b815260206004820152602960248201527f45766f74757265734e46543a3a77697468647261774554483a205452414e5346604482015268115497d1905253115160ba1b606482015260840161021f565b50565b60006020828403121561048457600080fd5b81356001600160a01b038116811461049b57600080fd5b9392505050565b803560ff811681146104b357600080fd5b919050565b600080604083850312156104cb57600080fd5b6104d4836104a2565b91506104e2602084016104a2565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168160ff0481118215151615610522576105226104eb565b029392505050565b600067ffffffffffffffff80831681851681830481118215151615610551576105516104eb565b02949350505050565b600067ffffffffffffffff80831681851680830382111561057d5761057d6104eb565b01949350505050565b600060ff821660ff8416808210156105a0576105a06104eb565b90039392505050565b600060ff821660ff84168060ff038211156105c6576105c66104eb565b01939250505056fea2646970667358221220f8de359fe0892d18f6dbae1b196720d303dd13a6018759ccec269b283306111664736f6c634300080e0033";

type MainnetNFTCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MainnetNFTCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MainnetNFTCounter__factory extends ContractFactory {
  constructor(...args: MainnetNFTCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MainnetNFTCounter> {
    return super.deploy(overrides || {}) as Promise<MainnetNFTCounter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MainnetNFTCounter {
    return super.attach(address) as MainnetNFTCounter;
  }
  override connect(signer: Signer): MainnetNFTCounter__factory {
    return super.connect(signer) as MainnetNFTCounter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainnetNFTCounterInterface {
    return new utils.Interface(_abi) as MainnetNFTCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainnetNFTCounter {
    return new Contract(address, _abi, signerOrProvider) as MainnetNFTCounter;
  }
}
