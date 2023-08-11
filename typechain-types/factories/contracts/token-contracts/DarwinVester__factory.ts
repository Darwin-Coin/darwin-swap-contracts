/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DarwinVester,
  DarwinVesterInterface,
} from "../../../contracts/token-contracts/DarwinVester";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_atLaunch",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_due",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_supportedNFTs",
        type: "address[]",
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
    inputs: [],
    name: "startVesting",
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
    name: "supportedNFT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
  "0x60806040523480156200001157600080fd5b50604051620013053803806200130583398101604081905262000034916200047e565b6001600055620000443362000212565b8151845114801562000057575082518251145b620000a85760405162461bcd60e51b815260206004820152601960248201527f5665737465723a20496e76616c6964205f75736572496e666f00000000000000604482015260640160405180910390fd5b60005b84518110156200015957838181518110620000ca57620000ca62000537565b6020026020010151838281518110620000e757620000e762000537565b6020026020010151620000fb919062000563565b6002600087848151811062000114576200011462000537565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060010181905550808062000150906200057d565b915050620000ab565b5083516200016f90600390602087019062000264565b50825162000185906004906020860190620002ce565b50600680546001600160a01b0319163317905560005b81518110156200020757600160076000848481518110620001c057620001c062000537565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620001fe816200057d565b9150506200019b565b505050505062000599565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054828255906000526020600020908101928215620002bc579160200282015b82811115620002bc57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000285565b50620002ca9291506200030c565b5090565b828054828255906000526020600020908101928215620002bc579160200282015b82811115620002bc578251825591602001919060010190620002ef565b5b80821115620002ca57600081556001016200030d565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000364576200036462000323565b604052919050565b60006001600160401b0382111562000388576200038862000323565b5060051b60200190565b600082601f830112620003a457600080fd5b81516020620003bd620003b7836200036c565b62000339565b82815260059290921b84018101918181019086841115620003dd57600080fd5b8286015b84811015620004115780516001600160a01b0381168114620004035760008081fd5b8352918301918301620003e1565b509695505050505050565b600082601f8301126200042e57600080fd5b8151602062000441620003b7836200036c565b82815260059290921b840181019181810190868411156200046157600080fd5b8286015b8481101562000411578051835291830191830162000465565b600080600080608085870312156200049557600080fd5b84516001600160401b0380821115620004ad57600080fd5b620004bb8883890162000392565b95506020870151915080821115620004d257600080fd5b620004e0888389016200041c565b94506040870151915080821115620004f757600080fd5b62000505888389016200041c565b935060608701519150808211156200051c57600080fd5b506200052b8782880162000392565b91505092959194509250565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000828210156200057857620005786200054d565b500390565b6000600182016200059257620005926200054d565b5060010190565b610d5c80620005a96000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638ce910a511610097578063deb36e3211610066578063deb36e3214610277578063eec414aa1461027f578063f2fde38b14610292578063ff60dfb6146102a557600080fd5b80638ce910a5146102385780638da5cb5b1461024b5780638fa626f21461025c578063d5f394881461026457600080fd5b80632e1a7d4d116100d35780632e1a7d4d146101bf5780633110c792146101d2578063566a7ac3146101fd578063715018a61461023057600080fd5b80630dea38b6146100fa5780631959a0021461011557806319ab453c146101aa575b600080fd5b6101026102ae565b6040519081526020015b60405180910390f35b61016c610123366004610c06565b600260208190526000918252604090912080546001820154928201546003830154600484015460058501546006909501549395949293919290916001600160a01b039091169087565b60408051978852602088019690965294860193909352606085019190915260808401526001600160a01b031660a083015260c082015260e00161010c565b6101bd6101b8366004610c06565b6102bf565b005b6101bd6101cd366004610c36565b610399565b6005546101e5906001600160a01b031681565b6040516001600160a01b03909116815260200161010c565b61022061020b366004610c06565b60076020526000908152604090205460ff1681565b604051901515815260200161010c565b6101bd61040c565b610102610246366004610c06565b610420565b6001546001600160a01b03166101e5565b610102600c81565b6006546101e5906001600160a01b031681565b6101bd6104c4565b61010261028d366004610c06565b610787565b6101bd6102a0366004610c06565b61083e565b61010261027181565b6102bc600c62278d00610c65565b81565b6006546001600160a01b0316331461031e5760405162461bcd60e51b815260206004820152601b60248201527f5665737465723a2043616c6c6572206e6f74204465706c6f796572000000000060448201526064015b60405180910390fd5b6005546001600160a01b0316156103775760405162461bcd60e51b815260206004820152601a60248201527f5665737465723a2044617277696e20616c7265616479207365740000000000006044820152606401610315565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60085460ff166103bc576040516321c4e35760e21b815260040160405180910390fd5b33600090815260026020526040902060010154156103ed576040516374da7f2f60e11b815260040160405180910390fd5b6103f56108b4565b6103ff338261090d565b6104096001600055565b50565b610414610a77565b61041e6000610ad1565b565b6001600160a01b03811660009081526002602052604081206001015480820361044c5750600092915050565b6001600160a01b038316600090815260026020819052604082206003810154910154909162278d0061047e8342610c84565b6104889190610c9b565b90508281620186a061049c61027188610c65565b6104a69190610c9b565b6104b09190610c65565b6104ba9190610c84565b9695505050505050565b60085460ff16156105175760405162461bcd60e51b815260206004820152601b60248201527f5665737465723a20416c726561647920696e697469616c697a656400000000006044820152606401610315565b6008805460ff1916600117905560005b60035481101561040957600260006003838154811061054857610548610cbd565b60009182526020808320909101546001600160a01b03168352820192909252604001902060010154600380548390811061058457610584610cbd565b60009182526020822001546040516001600160a01b03909116917fd4a50953e9ae2104f507446be8391c79b33e1e86e626473e34bb79eb5fea1f3e91a3600060026000600384815481106105da576105da610cbd565b9060005260206000200160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001908152602001600020600301819055506000600260006003848154811061063857610638610cbd565b60009182526020808320909101546001600160a01b0316835282019290925260400181209190915560038054429260029290918590811061067b5761067b610cbd565b60009182526020808320909101546001600160a01b03908116845290830193909352604090910190206002019190915560055460038054919092169163a9059cbb91849081106106cd576106cd610cbd565b600091825260209091200154600480546001600160a01b0390921691859081106106f9576106f9610cbd565b6000918252602090912001546040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610750573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107749190610cd3565b508061077f81610cf5565b915050610527565b6001600160a01b0381166000908152600260205260408120600101548082036107b35750600092915050565b6001600160a01b038316600090815260026020819052604082208054910154909162278d006107e28342610c84565b6107ec9190610c9b565b9050600c8111156107fb5750600c5b82600c826108098388610d0e565b6108139190610c65565b61081d9190610c9b565b6108279190610c84565b945083851115610835578394505b50505050919050565b610846610a77565b6001600160a01b0381166108ab5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610315565b61040981610ad1565b6002600054036109065760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610315565b6002600055565b61091682610b23565b8015610a7357600061092783610787565b90508082111561094a576040516304b28d1960e21b815260040160405180910390fd5b6001600160a01b03831660009081526002602052604081206001018054849290610975908490610c84565b90915550506001600160a01b038316600090815260026020526040812080548492906109a2908490610d0e565b909155505060055460405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590529091169063a9059cbb906044016020604051808303816000875af11580156109fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1e9190610cd3565b610a3b576040516312171d8360e31b815260040160405180910390fd5b60405182906001600160a01b038516907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a942436490600090a3505b5050565b6001546001600160a01b0316331461041e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610315565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610b2e33610420565b90508015610a73576001600160a01b03821660009081526002602052604081206003018054839290610b61908490610d0e565b90915550506005546040516340c10f1960e01b81526001600160a01b03848116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b158015610bb457600080fd5b505af1158015610bc8573d6000803e3d6000fd5b50506040518392506001600160a01b03851691507f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d490600090a35050565b600060208284031215610c1857600080fd5b81356001600160a01b0381168114610c2f57600080fd5b9392505050565b600060208284031215610c4857600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610c7f57610c7f610c4f565b500290565b600082821015610c9657610c96610c4f565b500390565b600082610cb857634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610ce557600080fd5b81518015158114610c2f57600080fd5b600060018201610d0757610d07610c4f565b5060010190565b60008219821115610d2157610d21610c4f565b50019056fea264697066735822122067e73be120c045729cba2f25d61bc4cb86c72735d70f8b5ef85756f568810d3064736f6c634300080e0033";

type DarwinVesterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DarwinVesterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DarwinVester__factory extends ContractFactory {
  constructor(...args: DarwinVesterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _users: PromiseOrValue<string>[],
    _atLaunch: PromiseOrValue<BigNumberish>[],
    _due: PromiseOrValue<BigNumberish>[],
    _supportedNFTs: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DarwinVester> {
    return super.deploy(
      _users,
      _atLaunch,
      _due,
      _supportedNFTs,
      overrides || {}
    ) as Promise<DarwinVester>;
  }
  override getDeployTransaction(
    _users: PromiseOrValue<string>[],
    _atLaunch: PromiseOrValue<BigNumberish>[],
    _due: PromiseOrValue<BigNumberish>[],
    _supportedNFTs: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _users,
      _atLaunch,
      _due,
      _supportedNFTs,
      overrides || {}
    );
  }
  override attach(address: string): DarwinVester {
    return super.attach(address) as DarwinVester;
  }
  override connect(signer: Signer): DarwinVester__factory {
    return super.connect(signer) as DarwinVester__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DarwinVesterInterface {
    return new utils.Interface(_abi) as DarwinVesterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DarwinVester {
    return new Contract(address, _abi, signerOrProvider) as DarwinVester;
  }
}
