/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TokenLocker, TokenLockerInterface } from "../TokenLocker";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIncreased",
        type: "uint256",
      },
    ],
    name: "LockAmountIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "durationIncreased",
        type: "uint256",
      },
    ],
    name: "LockDurationIncreased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "TokenLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_increaseBy",
        type: "uint256",
      },
    ],
    name: "increaseLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "increaseLockedAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "lockToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a7c806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806304ca635614610051578063732726d114610066578063839972f9146100795780639e281a981461008c575b600080fd5b61006461005f36600461092b565b61009f565b005b61006461007436600461092b565b61015e565b610064610087366004610955565b610250565b61006461009a36600461092b565b6104e7565b60015460ff16156100cb5760405162461bcd60e51b81526004016100c290610988565b60405180910390fd5b6001805460ff191681178155336000908152602081815260408083206001600160a01b0387168452909152902001546101465760405162461bcd60e51b815260206004820152601d60248201527f546f6b656e4c6f636b65723a20544f4b454e5f4e4f545f4c4f434b454400000060448201526064016100c2565b6101508282610706565b50506001805460ff19169055565b60015460ff16156101815760405162461bcd60e51b81526004016100c290610988565b6001805460ff191681179055806101d55760405162461bcd60e51b8152602060048201526018602482015277151bdad95b931bd8dad95c8e8816915493d7d05353d5539560421b60448201526064016100c2565b336000908152602081815260408083206001600160a01b03861684529091529020600101546102465760405162461bcd60e51b815260206004820152601d60248201527f546f6b656e4c6f636b65723a20544f4b454e5f4e4f545f4c4f434b454400000060448201526064016100c2565b6101508282610821565b60015460ff16156102735760405162461bcd60e51b81526004016100c290610988565b6001805460ff191681179055816102c75760405162461bcd60e51b8152602060048201526018602482015277151bdad95b931bd8dad95c8e8816915493d7d05353d5539560421b60448201526064016100c2565b6040516370a0823160e01b815233600482015282906001600160a01b038516906370a0823190602401602060405180830381865afa15801561030d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033191906109bf565b101561038b5760405162461bcd60e51b815260206004820152602360248201527f546f6b656e4c6f636b65723a20414d4f554e545f455843454544535f42414c416044820152624e434560e81b60648201526084016100c2565b336000908152602081815260408083206001600160a01b0387168452909152902060010154156103ce576103bf8383610821565b6103c98382610706565b6104d8565b604051806040016040528082426103e591906109ee565b8152602090810184905233600081815280835260408082206001600160a01b0389168084529085529181902085518155949093015160019094019390935590516323b872dd60e01b81526004810191909152306024820152604481018490526323b872dd906064016020604051808303816000875af115801561046c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104909190610a06565b5060408051838152602081018390526001600160a01b0385169133917fd8a1c0afefbfb5f6da58761715434130bcc1b9da12dba1ab5b21e44f5ae4d27e910160405180910390a35b50506001805460ff1916905550565b60015460ff161561050a5760405162461bcd60e51b81526004016100c290610988565b6001805460ff191681179055336000908152602081815260408083206001600160a01b03861684529091529020544210156105875760405162461bcd60e51b815260206004820152601f60248201527f546f6b656e4c6f636b65723a20544f4b454e5f5354494c4c5f4c4f434b45440060448201526064016100c2565b336000908152602081815260408083206001600160a01b038616845290915290206001015481111561060d5760405162461bcd60e51b815260206004820152602960248201527f546f6b656e4c6f636b65723a20414d4f554e545f455843454544535f4c4f434b604482015268115117d05353d5539560ba1b60648201526084016100c2565b336000908152602081815260408083206001600160a01b038616845290915281206001018054839290610641908490610a2f565b909155505060405163a9059cbb60e01b8152336004820152602481018290526001600160a01b0383169063a9059cbb906044016020604051808303816000875af1158015610693573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b79190610a06565b506040518181526001600160a01b0383169033907f8210728e7c071f615b840ee026032693858fbcd5e5359e67e438c890f59e56209060200160405180910390a350506001805460ff19169055565b336000908152602081815260408083206001600160a01b0386168452909152902054421161076a57336000908152602081815260408083206001600160a01b03861684529091528120805483929061075f9084906109ee565b909155506107dc9050565b336000908152602081815260408083206001600160a01b03861684529091529020546107969042610a2f565b6107a090826109ee565b336000908152602081815260408083206001600160a01b03871684529091528120805492935083929091906107d69084906109ee565b90915550505b6040518181526001600160a01b0383169033907f911f18b1e1f865755f534116d21376c06433c2c26ad6b5763ab80328682c0364906020015b60405180910390a35050565b336000908152602081815260408083206001600160a01b0386168452909152812060010180548392906108559084906109ee565b90915550506040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af11580156108ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d19190610a06565b506040518181526001600160a01b0383169033907fc29cac6236e8da5d246512d294d5c8acafa6ef6749bada322436fd5aa0035aba90602001610815565b80356001600160a01b038116811461092657600080fd5b919050565b6000806040838503121561093e57600080fd5b6109478361090f565b946020939093013593505050565b60008060006060848603121561096a57600080fd5b6109738461090f565b95602085013595506040909401359392505050565b6020808252601b908201527f546f6b656e4c6f636b65723a205245454e5452414e545f43414c4c0000000000604082015260600190565b6000602082840312156109d157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610a0157610a016109d8565b500190565b600060208284031215610a1857600080fd5b81518015158114610a2857600080fd5b9392505050565b600082821015610a4157610a416109d8565b50039056fea264697066735822122097e5272cd1fd65c48ef67266e2f5ee3f87c52bd1ceba660679122f7eaf0a182064736f6c634300080e0033";

type TokenLockerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenLockerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenLocker__factory extends ContractFactory {
  constructor(...args: TokenLockerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenLocker> {
    return super.deploy(overrides || {}) as Promise<TokenLocker>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenLocker {
    return super.attach(address) as TokenLocker;
  }
  override connect(signer: Signer): TokenLocker__factory {
    return super.connect(signer) as TokenLocker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenLockerInterface {
    return new utils.Interface(_abi) as TokenLockerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenLocker {
    return new Contract(address, _abi, signerOrProvider) as TokenLocker;
  }
}