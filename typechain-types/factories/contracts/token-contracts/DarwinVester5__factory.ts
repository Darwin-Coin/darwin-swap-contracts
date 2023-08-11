/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DarwinVester5,
  DarwinVester5Interface,
} from "../../../contracts/token-contracts/DarwinVester5";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vestUser",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountExceedsClaimable",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountExceedsWithdrawable",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPrivateSale",
    type: "error",
  },
  {
    inputs: [],
    name: "NotVestUser",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
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
        internalType: "uint256",
        name: "claimAmount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
        internalType: "uint256",
        name: "evotureTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "multiplier",
        type: "uint256",
      },
    ],
    name: "StakeEvoture",
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
        internalType: "uint256",
        name: "vestAmount",
        type: "uint256",
      },
    ],
    name: "Vest",
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
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
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
        internalType: "uint256",
        name: "evotureTokenId",
        type: "uint256",
      },
    ],
    name: "WithdrawEvoture",
    type: "event",
  },
  {
    inputs: [],
    name: "INTEREST",
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
    name: "MONTHS",
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
    name: "VESTING_TIME",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "claimableDarwin",
    outputs: [
      {
        internalType: "uint256",
        name: "claimable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "darwin",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
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
        name: "_darwin",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "withdrawn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "boost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestUser",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "withdrawableDarwin",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610cef380380610cef83398101604081905261002f916100e4565b600160005561003d33610092565b6001600160a01b0381166100645760405163d92e233d60e01b815260040160405180910390fd5b600480546001600160a01b039092166001600160a01b03199283161790556005805490911633179055610114565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156100f657600080fd5b81516001600160a01b038116811461010d57600080fd5b9392505050565b610bcc806101236000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063eec414aa11610066578063eec414aa14610239578063f2fde38b1461024c578063f3e8d1bc1461025f578063ff60dfb61461027257600080fd5b80638da5cb5b1461020d5780638fa626f21461021e578063d5f394881461022657600080fd5b80632e1a7d4d116100c85780632e1a7d4d146101b45780633110c792146101c7578063715018a6146101f25780638ce910a5146101fa57600080fd5b80630dea38b6146100ef5780631959a0021461010a57806319ab453c1461019f575b600080fd5b6100f761027b565b6040519081526020015b60405180910390f35b610161610118366004610a8c565b600260208190526000918252604090912080546001820154928201546003830154600484015460058501546006909501549395949293919290916001600160a01b039091169087565b60408051978852602088019690965294860193909352606085019190915260808401526001600160a01b031660a083015260c082015260e001610101565b6101b26101ad366004610a8c565b61028c565b005b6101b26101c2366004610abc565b6104e1565b6003546101da906001600160a01b031681565b6040516001600160a01b039091168152602001610101565b6101b2610555565b6100f7610208366004610a8c565b610569565b6001546001600160a01b03166101da565b6100f7600c81565b6005546101da906001600160a01b031681565b6100f7610247366004610a8c565b61060d565b6101b261025a366004610a8c565b6106c4565b6004546101da906001600160a01b031681565b6100f76101a081565b610289600c62278d00610aeb565b81565b6005546001600160a01b031633146102eb5760405162461bcd60e51b815260206004820152601c60248201527f566573746572353a2043616c6c6572206e6f74204465706c6f7965720000000060448201526064015b60405180910390fd5b600554600160a01b900460ff16156103455760405162461bcd60e51b815260206004820152601c60248201527f566573746572353a20416c726561647920696e697469616c697a65640000000060448201526064016102e2565b600380546001600160a01b0383166001600160a01b031990911681179091556005805460ff60a01b1916600160a01b1790556040516370a0823160e01b81523060048201526370a0823190602401602060405180830381865afa1580156103b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d49190610b0a565b6004546001600160a01b031660009081526002602052604081206001018054909190610401908490610b23565b9091555050600480546001600160a01b0390811660009081526002602081905260408083206003018390558454841683528083208390558454841683529182902042910155516370a0823160e01b815230928101929092528216906370a0823190602401602060405180830381865afa158015610482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a69190610b0a565b6004546040516001600160a01b03909116907fd4a50953e9ae2104f507446be8391c79b33e1e86e626473e34bb79eb5fea1f3e90600090a350565b600554600160a01b900460ff1661050b576040516321c4e35760e21b815260040160405180910390fd5b6004546001600160a01b03163314610536576040516374da7f2f60e11b815260040160405180910390fd5b61053e61073a565b6105483382610793565b6105526001600055565b50565b61055d6108fd565b6105676000610957565b565b6001600160a01b0381166000908152600260205260408120600101548082036105955750600092915050565b6001600160a01b038316600090815260026020819052604082206003810154910154909162278d006105c78342610b3b565b6105d19190610b52565b90508281620186a06105e56101a088610aeb565b6105ef9190610b52565b6105f99190610aeb565b6106039190610b3b565b9695505050505050565b6001600160a01b0381166000908152600260205260408120600101548082036106395750600092915050565b6001600160a01b038316600090815260026020819052604082208054910154909162278d006106688342610b3b565b6106729190610b52565b9050600c8111156106815750600c5b82600c8261068f8388610b23565b6106999190610aeb565b6106a39190610b52565b6106ad9190610b3b565b9450838511156106bb578394505b50505050919050565b6106cc6108fd565b6001600160a01b0381166107315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102e2565b61055281610957565b60026000540361078c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102e2565b6002600055565b61079c826109a9565b80156108f95760006107ad8361060d565b9050808211156107d0576040516304b28d1960e21b815260040160405180910390fd5b6001600160a01b038316600090815260026020526040812060010180548492906107fb908490610b3b565b90915550506001600160a01b03831660009081526002602052604081208054849290610828908490610b23565b909155505060035460405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590529091169063a9059cbb906044016020604051808303816000875af1158015610880573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a49190610b74565b6108c1576040516312171d8360e31b815260040160405180910390fd5b60405182906001600160a01b038516907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a942436490600090a3505b5050565b6001546001600160a01b031633146105675760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102e2565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006109b433610569565b905080156108f9576001600160a01b038216600090815260026020526040812060030180548392906109e7908490610b23565b90915550506003546040516340c10f1960e01b81526001600160a01b03848116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b158015610a3a57600080fd5b505af1158015610a4e573d6000803e3d6000fd5b50506040518392506001600160a01b03851691507f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d490600090a35050565b600060208284031215610a9e57600080fd5b81356001600160a01b0381168114610ab557600080fd5b9392505050565b600060208284031215610ace57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610b0557610b05610ad5565b500290565b600060208284031215610b1c57600080fd5b5051919050565b60008219821115610b3657610b36610ad5565b500190565b600082821015610b4d57610b4d610ad5565b500390565b600082610b6f57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610b8657600080fd5b81518015158114610ab557600080fdfea2646970667358221220277d8829ac77c423975ff7ea1bfd6afaaee5cb15b5819e6b59a308fdbe92333e64736f6c634300080e0033";

type DarwinVester5ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DarwinVester5ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DarwinVester5__factory extends ContractFactory {
  constructor(...args: DarwinVester5ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _vestUser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DarwinVester5> {
    return super.deploy(_vestUser, overrides || {}) as Promise<DarwinVester5>;
  }
  override getDeployTransaction(
    _vestUser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vestUser, overrides || {});
  }
  override attach(address: string): DarwinVester5 {
    return super.attach(address) as DarwinVester5;
  }
  override connect(signer: Signer): DarwinVester5__factory {
    return super.connect(signer) as DarwinVester5__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DarwinVester5Interface {
    return new utils.Interface(_abi) as DarwinVester5Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DarwinVester5 {
    return new Contract(address, _abi, signerOrProvider) as DarwinVester5;
  }
}
