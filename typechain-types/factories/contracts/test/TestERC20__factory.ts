/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../contracts/test/TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
    name: "decimals",
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
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x60806040523480156200001157600080fd5b5060405162000d5d38038062000d5d83398101604081905262000034916200029a565b600080546001600160a01b0319163317905581516200005b90600190602085019062000127565b5080516200007190600290602084019062000127565b50620000883369d3c21bcecceda100000062000090565b505062000367565b80600354620000a0919062000304565b6003556001600160a01b038216600090815260046020526040902054620000c990829062000304565b6001600160a01b0383166000818152600460205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200011b9085815260200190565b60405180910390a35050565b82805462000135906200032b565b90600052602060002090601f016020900481019282620001595760008555620001a4565b82601f106200017457805160ff1916838001178555620001a4565b82800160010185558215620001a4579182015b82811115620001a457825182559160200191906001019062000187565b50620001b2929150620001b6565b5090565b5b80821115620001b25760008155600101620001b7565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001f557600080fd5b81516001600160401b0380821115620002125762000212620001cd565b604051601f8301601f19908116603f011681019082821181831017156200023d576200023d620001cd565b816040528381526020925086838588010111156200025a57600080fd5b600091505b838210156200027e57858201830151818301840152908201906200025f565b83821115620002905760008385830101525b9695505050505050565b60008060408385031215620002ae57600080fd5b82516001600160401b0380821115620002c657600080fd5b620002d486838701620001e3565b93506020850151915080821115620002eb57600080fd5b50620002fa85828601620001e3565b9150509250929050565b600082198211156200032657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034057607f821691505b6020821081036200036157634e487b7160e01b600052602260045260246000fd5b50919050565b6109e680620003776000396000f3fe6080604052600436106100ec5760003560e01c806340c10f191161008a578063a9059cbb11610059578063a9059cbb146102a1578063d0e30db0146102c1578063dd62ed3e146102c9578063f2fde38b1461030157600080fd5b806340c10f191461020757806370a08231146102275780638da5cb5b1461025457806395d89b411461028c57600080fd5b806323b872dd116100c657806323b872dd1461017f5780632e1a7d4d1461019f578063313ce567146101bf57806332cb6b0c146101e657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f9610321565b005b600080fd5b34801561010c57600080fd5b50610115610347565b60405161012291906107ec565b60405180910390f35b34801561013757600080fd5b5061014b61014636600461085d565b6103d5565b6040519015158152602001610122565b34801561016757600080fd5b5061017160035481565b604051908152602001610122565b34801561018b57600080fd5b5061014b61019a366004610887565b6103eb565b3480156101ab57600080fd5b506100f96101ba3660046108c3565b610480565b3480156101cb57600080fd5b506101d4601281565b60405160ff9091168152602001610122565b3480156101f257600080fd5b506101716c0c9f2c9cd04674edea4000000081565b34801561021357600080fd5b5061014b61022236600461085d565b610555565b34801561023357600080fd5b506101716102423660046108dc565b60046020526000908152604090205481565b34801561026057600080fd5b50600054610274906001600160a01b031681565b6040516001600160a01b039091168152602001610122565b34801561029857600080fd5b506101156105ba565b3480156102ad57600080fd5b5061014b6102bc36600461085d565b6105c7565b6100f9610321565b3480156102d557600080fd5b506101716102e43660046108fe565b600560209081526000928352604080842090915290825290205481565b34801561030d57600080fd5b506100f961031c3660046108dc565b6105d4565b3360009081526004602052604081208054349290610340908490610947565b9091555050565b600180546103549061095f565b80601f01602080910402602001604051908101604052809291908181526020018280546103809061095f565b80156103cd5780601f106103a2576101008083540402835291602001916103cd565b820191906000526020600020905b8154815290600101906020018083116103b057829003601f168201915b505050505081565b60006103e2338484610650565b50600192915050565b6001600160a01b03831660009081526005602090815260408083203384529091528120546000191461046b576001600160a01b0384166000908152600560209081526040808320338452909152902054610446908390610999565b6001600160a01b03851660009081526005602090815260408083203384529091529020555b6104768484846106b2565b5060019392505050565b336000908152600460205260408120805483929061049f908490610999565b9091555050604051600090339083908381818185875af1925050503d80600081146104e6576040519150601f19603f3d011682016040523d82523d6000602084013e6104eb565b606091505b50509050806105515760405162461bcd60e51b815260206004820152602760248201527f5465737445524332303a3a77697468647261773a20545241534e4645525f4554604482015266242fa2a92927a960c91b60648201526084015b60405180910390fd5b5050565b600080546001600160a01b031633146105b05760405162461bcd60e51b815260206004820152601b60248201527f5465737445524332303a2043414c4c45525f4e4f545f4f574e455200000000006044820152606401610548565b6103e2838361075a565b600280546103549061095f565b60006103e23384846106b2565b6000546001600160a01b0316331461062e5760405162461bcd60e51b815260206004820152601b60248201527f5465737445524332303a2043414c4c45525f4e4f545f4f574e455200000000006044820152606401610548565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383811660008181526005602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166000908152600460205260409020546106d6908290610999565b6001600160a01b038085166000908152600460205260408082209390935590841681522054610706908290610947565b6001600160a01b0380841660008181526004602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106a59085815260200190565b806003546107689190610947565b6003556001600160a01b03821660009081526004602052604090205461078f908290610947565b6001600160a01b0383166000818152600460205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107e09085815260200190565b60405180910390a35050565b600060208083528351808285015260005b81811015610819578581018301518582016040015282016107fd565b8181111561082b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461085857600080fd5b919050565b6000806040838503121561087057600080fd5b61087983610841565b946020939093013593505050565b60008060006060848603121561089c57600080fd5b6108a584610841565b92506108b360208501610841565b9150604084013590509250925092565b6000602082840312156108d557600080fd5b5035919050565b6000602082840312156108ee57600080fd5b6108f782610841565b9392505050565b6000806040838503121561091157600080fd5b61091a83610841565b915061092860208401610841565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561095a5761095a610931565b500190565b600181811c9082168061097357607f821691505b60208210810361099357634e487b7160e01b600052602260045260246000fd5b50919050565b6000828210156109ab576109ab610931565b50039056fea2646970667358221220a9e21957a32217b35e3866bbbcbcb9703867fd46cde204ccfa79e5037c9bf86764736f6c634300080e0033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
