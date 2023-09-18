/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DarwinSwapERC20,
  DarwinSwapERC20Interface,
} from "../../contracts/DarwinSwapERC20";

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
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604080518082018252600f81526e2230b93bb4b729bbb0b8102830b4b960891b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f04c1d0b7fe2e236eeafcf5d4a85670f32c93c8edd289cc39d8b7ff661e5e2d84818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355610a57806100f66000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b4114610207578063a9059cbb14610243578063d505accf14610256578063dd62ed3e1461026b57600080fd5b80633644e515146101be57806370a08231146101c75780637ecebe00146101e757600080fd5b806323b872dd116100bd57806323b872dd1461016a57806330adf81f1461017d578063313ce567146101a457600080fd5b806306fdde03146100e4578063095ea7b31461013657806318160ddd14610159575b600080fd5b6101206040518060400160405280600f81526020017f44617277696e537761702050616972000000000000000000000000000000000081525081565b60405161012d91906107c1565b60405180910390f35b61014961014436600461085d565b610296565b604051901515815260200161012d565b60005b60405190815260200161012d565b610149610178366004610887565b6102ac565b61015c7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6101ac601281565b60405160ff909116815260200161012d565b61015c60035481565b61015c6101d53660046108c3565b60016020526000908152604090205481565b61015c6101f53660046108c3565b60046020526000908152604090205481565b6101206040518060400160405280600981526020017f44415257494e2d4c50000000000000000000000000000000000000000000000081525081565b61014961025136600461085d565b610386565b6102696102643660046108e5565b610393565b005b61015c610279366004610958565b600260209081526000928352604080842090915290825290205481565b60006102a3338484610683565b50600192915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff146103715773ffffffffffffffffffffffffffffffffffffffff8416600090815260026020908152604080832033845290915290205461033f9083906109ba565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602090815260408083203384529091529020555b61037c8484846106f2565b5060019392505050565b60006102a33384846106f2565b42841015610402576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f44617277696e537761703a20455850495245440000000000000000000000000060448201526064015b60405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff8816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b919087610462836109d1565b9091555060408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810187905260e001604051602081830303815290604052805190602001206040516020016105039291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561058c573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580159061060757508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f44617277696e537761703a20494e56414c49445f5349474e415455524500000060448201526064016103f9565b610678898989610683565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160205260409020546107239082906109ba565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600160205260408082209390935590841681522054610760908290610a09565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106e59085815260200190565b600060208083528351808285015260005b818110156107ee578581018301518582016040015282016107d2565b81811115610800576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461085857600080fd5b919050565b6000806040838503121561087057600080fd5b61087983610834565b946020939093013593505050565b60008060006060848603121561089c57600080fd5b6108a584610834565b92506108b360208501610834565b9150604084013590509250925092565b6000602082840312156108d557600080fd5b6108de82610834565b9392505050565b600080600080600080600060e0888a03121561090057600080fd5b61090988610834565b965061091760208901610834565b95506040880135945060608801359350608088013560ff8116811461093b57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561096b57600080fd5b61097483610834565b915061098260208401610834565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156109cc576109cc61098b565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610a0257610a0261098b565b5060010190565b60008219821115610a1c57610a1c61098b565b50019056fea2646970667358221220fc3d05ba6a6efd29b7fcdf2c5c31eaae45f42caacfadde2a3586b057aa43be8164736f6c634300080e0033";

type DarwinSwapERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DarwinSwapERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DarwinSwapERC20__factory extends ContractFactory {
  constructor(...args: DarwinSwapERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DarwinSwapERC20> {
    return super.deploy(overrides || {}) as Promise<DarwinSwapERC20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DarwinSwapERC20 {
    return super.attach(address) as DarwinSwapERC20;
  }
  override connect(signer: Signer): DarwinSwapERC20__factory {
    return super.connect(signer) as DarwinSwapERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DarwinSwapERC20Interface {
    return new utils.Interface(_abi) as DarwinSwapERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DarwinSwapERC20 {
    return new Contract(address, _abi, signerOrProvider) as DarwinSwapERC20;
  }
}
