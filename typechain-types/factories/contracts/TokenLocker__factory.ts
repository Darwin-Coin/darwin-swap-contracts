/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TokenLocker,
  TokenLockerInterface,
} from "../../contracts/TokenLocker";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "_user",
        type: "address",
      },
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
    inputs: [],
    name: "masterChef",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "userLockedToken",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "locker",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ITokenLocker.LockedToken",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
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
  "0x60a060405234801561001057600080fd5b5033608052608051610bc26100366000396000818160ae01526105350152610bc26000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301e336671461005157806340cd6ad814610066578063575a86b2146100a9578063e4ddc77c146100e8575b600080fd5b61006461005f366004610a54565b6100fb565b005b610079610074366004610a90565b6103e3565b6040805182516001600160a01b031681526020808401519082015291810151908201526060015b60405180910390f35b6100d07f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a0565b6100646100f6366004610ac3565b61045d565b60015460ff16156101535760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e4c6f636b65723a205245454e5452414e545f43414c4c000000000060448201526064015b60405180910390fd5b6001805460ff19168117905580156103d4576001600160a01b0383811660009081526020818152604080832086851684529091529020541633146101d95760405162461bcd60e51b815260206004820152601f60248201527f546f6b656e4c6f636b65723a20464f5242494444454e5f574954484452415700604482015260640161014a565b6001600160a01b038084166000908152602081815260408083209386168352929052206001015442101561024f5760405162461bcd60e51b815260206004820152601f60248201527f546f6b656e4c6f636b65723a20544f4b454e5f5354494c4c5f4c4f434b454400604482015260640161014a565b6001600160a01b03808416600090815260208181526040808320938616835292905220600201548111156102d75760405162461bcd60e51b815260206004820152602960248201527f546f6b656e4c6f636b65723a20414d4f554e545f455843454544535f4c4f434b604482015268115117d05353d5539560ba1b606482015260840161014a565b6001600160a01b038084166000908152602081815260408083209386168352929052908120600201805483929061030f908490610b1b565b909155505060405163a9059cbb60e01b8152336004820152602481018290526001600160a01b0383169063a9059cbb906044016020604051808303816000875af1158015610361573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103859190610b32565b50816001600160a01b0316836001600160a01b03167f8210728e7c071f615b840ee026032693858fbcd5e5359e67e438c890f59e5620836040516103cb91815260200190565b60405180910390a35b50506001805460ff1916905550565b610410604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b506001600160a01b03918216600090815260208181526040808320938516835292815290829020825160608101845281549094168452600181015491840191909152600201549082015290565b60015460ff16156104b05760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e4c6f636b65723a205245454e5452414e545f43414c4c0000000000604482015260640161014a565b6001805460ff1916811790556001600160a01b0384811660009081526020818152604080832087851684529091529020541633148061055757506001600160a01b038481166000908152602081815260408083208785168452909152902054161580156105575750336001600160a01b03851614806105575750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b6105a35760405162461bcd60e51b815260206004820152601f60248201527f546f6b656e4c6f636b65723a20464f5242494444454e5f574954484452415700604482015260640161014a565b6040516370a0823160e01b815233600482015282906001600160a01b038516906370a0823190602401602060405180830381865afa1580156105e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060d9190610b5b565b10156106675760405162461bcd60e51b815260206004820152602360248201527f546f6b656e4c6f636b65723a20414d4f554e545f455843454544535f42414c416044820152624e434560e81b606482015260840161014a565b6001600160a01b0380851660009081526020818152604080832093871683529290522060020154156106ba5781156106a4576106a4848484610806565b80156106b5576106b584848361090d565b6107f6565b81156107f6576040805160608101909152338152602081016106dc8342610b74565b815260209081018490526001600160a01b038681166000908152808352604080822088841680845290855291819020855181546001600160a01b031916941693909317835592840151600183015592820151600290910155516323b872dd60e01b8152336004820152306024820152604481018490526323b872dd906064016020604051808303816000875af115801561077a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079e9190610b32565b50826001600160a01b0316846001600160a01b03167fd8a1c0afefbfb5f6da58761715434130bcc1b9da12dba1ab5b21e44f5ae4d27e84846040516107ed929190918252602082015260400190565b60405180910390a35b50506001805460ff191690555050565b6001600160a01b038084166000908152602081815260408083209386168352929052908120600201805483929061083e908490610b74565b90915550506040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af1158015610896573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ba9190610b32565b50816001600160a01b0316836001600160a01b03167fc29cac6236e8da5d246512d294d5c8acafa6ef6749bada322436fd5aa0035aba8360405161090091815260200190565b60405180910390a3505050565b6001600160a01b0380841660009081526020818152604080832093861683529290522060010154421161097d576001600160a01b0380841660009081526020818152604080832093861683529290529081206001018054839290610972908490610b74565b909155506109fb9050565b6001600160a01b03808416600090815260208181526040808320938616835292905220600101546109ae9042610b1b565b6109b89082610b74565b6001600160a01b038085166000908152602081815260408083209387168352929052908120600101805492935083929091906109f5908490610b74565b90915550505b6040518181526001600160a01b0383169033907f911f18b1e1f865755f534116d21376c06433c2c26ad6b5763ab80328682c036490602001610900565b80356001600160a01b0381168114610a4f57600080fd5b919050565b600080600060608486031215610a6957600080fd5b610a7284610a38565b9250610a8060208501610a38565b9150604084013590509250925092565b60008060408385031215610aa357600080fd5b610aac83610a38565b9150610aba60208401610a38565b90509250929050565b60008060008060808587031215610ad957600080fd5b610ae285610a38565b9350610af060208601610a38565b93969395505050506040820135916060013590565b634e487b7160e01b600052601160045260246000fd5b600082821015610b2d57610b2d610b05565b500390565b600060208284031215610b4457600080fd5b81518015158114610b5457600080fd5b9392505050565b600060208284031215610b6d57600080fd5b5051919050565b60008219821115610b8757610b87610b05565b50019056fea26469706673582212209f667f2f98fa963a8e3d919e33c5433a2a5788a4821e2ea53ef2813091319cab64736f6c634300080e0033";

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
