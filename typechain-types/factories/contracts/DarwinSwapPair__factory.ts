/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DarwinSwapPair,
  DarwinSwapPairInterface,
} from "../../contracts/DarwinSwapPair";

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
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve1",
        type: "uint256",
      },
    ],
    name: "Sync",
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
    name: "MINIMUM_LIQUIDITY",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "factory",
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
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "reserve0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserve1",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidityInjector",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
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
    name: "liquidityInjector",
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
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
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
    name: "price0CumulativeLast",
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
    name: "price1CumulativeLast",
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
    name: "router",
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
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address[2]",
        name: "firstAndLastInPath",
        type: "address[2]",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "swapWithoutToks",
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
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
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
    name: "token1",
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
  "0x608060405260016010553480156200001657600080fd5b50604080518082018252600f81526e2230b93bb4b729bbb0b8102830b4b960891b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f04c1d0b7fe2e236eeafcf5d4a85670f32c93c8edd289cc39d8b7ff661e5e2d84818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c08201808552815191840191909120600355600680546001600160a01b031916339081179091556303e21fa960e61b909152925163f887ea409260c4808401939192918290030181865afa1580156200013b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000161919062000187565b600780546001600160a01b0319166001600160a01b0392909216919091179055620001b9565b6000602082840312156200019a57600080fd5b81516001600160a01b0381168114620001b257600080fd5b9392505050565b6127df80620001c96000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80637ecebe0011610104578063bc25cf77116100a2578063d505accf11610071578063d505accf1461046b578063dd62ed3e1461047e578063f887ea40146104a9578063fff6cae9146104bc57600080fd5b8063bc25cf771461041f578063c0c53b8b14610432578063c45a015514610445578063d21220a71461045857600080fd5b8063a87db923116100de578063a87db923146103dd578063a9059cbb146103f0578063b677813414610403578063ba9a7a561461041657600080fd5b80637ecebe001461036d57806389afcb441461038d57806395d89b41146103b557600080fd5b8063313ce5671161017c5780635a3d54931161014b5780635a3d5493146103285780636a6278421461033157806370a08231146103445780637464fc3d1461036457600080fd5b8063313ce567146102e75780633644e515146103015780633b9dd6c11461030a5780635909c0d51461031f57600080fd5b80630dfe1681116101b85780630dfe16811461027057806318160ddd1461029b57806323b872dd146102ad57806330adf81f146102c057600080fd5b806306fdde03146101df5780630902f1ac14610223578063095ea7b31461024d575b600080fd5b61020d6040518060400160405280600f81526020016e2230b93bb4b729bbb0b8102830b4b960891b81525081565b60405161021a91906122f2565b60405180910390f35b600a54600b54600c5460408051938452602084019290925263ffffffff169082015260600161021a565b61026061025b366004612348565b6104c4565b604051901515815260200161021a565b600854610283906001600160a01b031681565b6040516001600160a01b03909116815260200161021a565b6000545b60405190815260200161021a565b6102606102bb366004612374565b6104da565b61029f7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6102ef601281565b60405160ff909116815260200161021a565b61029f60035481565b61031d6103183660046123b5565b61056f565b005b61029f600d5481565b61029f600e5481565b61029f61033f3660046124c5565b610d26565b61029f6103523660046124c5565b60016020526000908152604090205481565b61029f600f5481565b61029f61037b3660046124c5565b60046020526000908152604090205481565b6103a061039b3660046124c5565b610fca565b6040805192835260208301919091520161021a565b61020d60405180604001604052806009815260200168044415257494e2d4c560bc1b81525081565b61031d6103eb366004612348565b6112c4565b6102606103fe366004612348565b61158a565b600554610283906001600160a01b031681565b61029f6103e881565b61031d61042d3660046124c5565b611597565b61031d6104403660046124e2565b611693565b600654610283906001600160a01b031681565b600954610283906001600160a01b031681565b61031d61047936600461252d565b611724565b61029f61048c3660046125a4565b600260209081526000928352604080842090915290825290205481565b600754610283906001600160a01b031681565b61031d611939565b60006104d1338484611999565b50600192915050565b6001600160a01b03831660009081526002602090815260408083203384529091528120546000191461055a576001600160a01b03841660009081526002602090815260408083203384529091529020546105359083906125f3565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b6105658484846119fb565b5060019392505050565b60105460011461059a5760405162461bcd60e51b81526004016105919061260a565b60405180910390fd5b60006010556007546001600160a01b031633146105f95760405162461bcd60e51b815260206004820152601b60248201527f44617277696e537761703a3a737761703a20464f5242494444454e00000000006044820152606401610591565b60008611806106085750600085115b6106635760405162461bcd60e51b815260206004820152602660248201527f44617277696e537761703a20494e53554646494349454e545f4f55545055545f604482015265105353d5539560d21b6064820152608401610591565b600a54600b54818810801561067757508087105b6106ce5760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015261545960f01b6064820152608401610591565b60085460095460009182916001600160a01b0391821691908116908a16821480159061070c5750806001600160a01b03168a6001600160a01b031614155b6107515760405162461bcd60e51b815260206004820152601660248201527544617277696e537761703a20494e56414c49445f544f60501b6044820152606401610591565b8b1561076b5761076b828b8e8a60005b6020020151611aa3565b8a1561077f5761077f818b8d8a6000610761565b87156107ec57896001600160a01b03166355ed23ba338e8e8d8d6040518663ffffffff1660e01b81526004016107b9959493929190612636565b600060405180830381600087803b1580156107d357600080fd5b505af11580156107e7573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa158015610830573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108549190612682565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a0823190602401602060405180830381865afa15801561089b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bf9190612682565b9250505060008a856108d191906125f3565b83116108de5760006108f2565b6108e88b866125f3565b6108f290846125f3565b905060006109008b866125f3565b831161090d576000610921565b6109178b866125f3565b61092190846125f3565b905060008211806109325750600081115b61098c5760405162461bcd60e51b815260206004820152602560248201527f44617277696e537761703a20494e53554646494349454e545f494e5055545f416044820152641353d5539560da1b6064820152608401610591565b60208701516001600160a01b031615610b425773__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__633e545f31600084116109d2576009546001600160a01b03166109df565b6008546001600160a01b03165b8385116109ec57836109ee565b845b60208b01516006546040516001600160e01b031960e087901b1681526001600160a01b0394851660048201526024810193909352908316604483015291909116606482015260840160006040518083038186803b158015610a4e57600080fd5b505af4158015610a62573d6000803e3d6000fd5b50506008546040516370a0823160e01b81523060048201526001600160a01b0390911692506370a082319150602401602060405180830381865afa158015610aae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad29190612682565b6009546040516370a0823160e01b81523060048201529195506001600160a01b0316906370a0823190602401602060405180830381865afa158015610b1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3f9190612682565b92505b86516001600160a01b031615610cfa5773__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__6398958dd160008e11610b85576009546001600160a01b0316610b92565b6008546001600160a01b03165b8d8f11610b9f578d610ba1565b8e5b8a5160065460405160e086901b6001600160e01b03191681526001600160a01b039485166004820152602481019390935290831660448301528e8316606483015291909116608482015260a40160006040518083038186803b158015610c0657600080fd5b505af4158015610c1a573d6000803e3d6000fd5b50506008546040516370a0823160e01b81523060048201526001600160a01b0390911692506370a082319150602401602060405180830381865afa158015610c66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8a9190612682565b6009546040516370a0823160e01b81523060048201529195506001600160a01b0316906370a0823190602401602060405180830381865afa158015610cd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf79190612682565b92505b610d0684848888611ca2565b610d1382828e8e8e611db6565b5050600160105550505050505050505050565b6000601054600114610d4a5760405162461bcd60e51b81526004016105919061260a565b60006010819055600a54600b54600854604080516370a0823160e01b81523060048201529051939492936001600160a01b03909216916370a08231916024808201926020929091908290030181865afa158015610dab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcf9190612682565b6009546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190612682565b90506000610e4f85846125f3565b90506000610e5d85846125f3565b90506000610e6b8787611e12565b90506000610e7860005490565b905080600003610eb5576103e8610e97610e92858761269b565b611ffb565b610ea191906125f3565b9850610eb060006103e861206b565b610eea565b610ee788610ec3838761269b565b610ecd91906126d0565b88610ed8848761269b565b610ee291906126d0565b6120fc565b98505b60008911610f4c5760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015268151657d3525395115160ba1b6064820152608401610591565b610f568a8a61206b565b610f6286868a8a611ca2565b8115610f7c57600b54600a54610f78919061269b565b600f555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a25050600160105550949695505050505050565b600080601054600114610fef5760405162461bcd60e51b81526004016105919061260a565b60006010819055600a54600b54600c5483929190506008546009546040516370a0823160e01b81523060048201529395509193506001600160a01b039081169291169060009083906370a0823190602401602060405180830381865afa15801561105d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110819190612682565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156110cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ef9190612682565b3060009081526001602052604081205491925061110c8888611e12565b9050600061111960005490565b905080611126868561269b565b61113091906126d0565b9a508061113d858561269b565b61114791906126d0565b99506111533084612114565b611160878d8d6000611aa3565b61116d868d8c6000611aa3565b6040516370a0823160e01b81523060048201526001600160a01b038816906370a0823190602401602060405180830381865afa1580156111b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d59190612682565b6040516370a0823160e01b81523060048201529095506001600160a01b038716906370a0823190602401602060405180830381865afa15801561121c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112409190612682565b935061124e85858b8b611ca2565b811561126857600b54600a54611264919061269b565b600f555b604080518c8152602081018c90526001600160a01b038e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001601081905550915091565b6010546001146112e65760405162461bcd60e51b81526004016105919061260a565b60006010556005546001600160a01b031633146113515760405162461bcd60e51b815260206004820152602360248201527f44617277696e53776170506169723a2043414c4c45525f4e4f545f414e5449446044820152620554d560ec1b6064820152608401610591565b600854600090819081906001600160a01b0386811691161461138457600b54600a546008546001600160a01b0316611397565b600a54600b546009546001600160a01b03165b92509250925060006113aa8585856121a0565b6040516323b872dd60e01b8152336004820152306024820152604481018790529091506001600160a01b038716906323b872dd906064016020604051808303816000875af1158015611400573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142491906126e4565b5060405163a9059cbb60e01b8152336004820152602481018290526001600160a01b0383169063a9059cbb906044016020604051808303816000875af1158015611472573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149691906126e4565b506008546040516370a0823160e01b815230600482015261157d916001600160a01b0316906370a08231906024015b602060405180830381865afa1580156114e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115069190612682565b6009546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa15801561154e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115729190612682565b600a54600b54611ca2565b5050600160105550505050565b60006104d13384846119fb565b6010546001146115b95760405162461bcd60e51b81526004016105919061260a565b6000601055600854600954600a546040516370a0823160e01b81523060048201526001600160a01b03938416939092169161165191849186919083906370a08231906024015b602060405180830381865afa15801561161c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116409190612682565b61164a91906125f3565b6000611aa3565b600b546040516370a0823160e01b81523060048201526116899183918691906001600160a01b038416906370a08231906024016115ff565b5050600160105550565b6006546001600160a01b031633146116e55760405162461bcd60e51b81526020600482015260156024820152742230b93bb4b729bbb0b81d102327a92124a22222a760591b6044820152606401610591565b600880546001600160a01b039485166001600160a01b031991821617909155600980549385169382169390931790925560058054919093169116179055565b4284101561176a5760405162461bcd60e51b815260206004820152601360248201527211185c9dda5b94ddd85c0e8811561412549151606a1b6044820152606401610591565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876117bd83612706565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161183692919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118a1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906118d75750886001600160a01b0316816001600160a01b0316145b6119235760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a20494e56414c49445f5349474e41545552450000006044820152606401610591565b61192e898989611999565b505050505050505050565b60105460011461195b5760405162461bcd60e51b81526004016105919061260a565b60006010556008546040516370a0823160e01b8152306004820152611992916001600160a01b0316906370a08231906024016114c5565b6001601055565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316600090815260016020526040902054611a1f9082906125f3565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611a4f90829061271f565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906119ee9085815260200190565b6001600160a01b03811615611b5657600654604051632052479360e01b81526001600160a01b038087166004830152602482018590528084166044830152909116606482015273__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__90632052479390608401602060405180830381865af4158015611b25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b499190612682565b611b5390836125f3565b91505b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0386811660248301526044808301879052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392881691611be29190612737565b6000604051808303816000865af19150503d8060008114611c1f576040519150601f19603f3d011682016040523d82523d6000602084013e611c24565b606091505b5091509150818015611c4e575080511580611c4e575080806020019051810190611c4e91906126e4565b611c9a5760405162461bcd60e51b815260206004820152601b60248201527f44617277696e537761703a205452414e534645525f4641494c454400000000006044820152606401610591565b505050505050565b6000611cb364010000000042612753565b600c54909150600090611ccc9063ffffffff1683612767565b905060008163ffffffff16118015611ce357508315155b8015611cee57508215155b15611d565763ffffffff8116611d0485856126d0565b611d0e919061269b565b600d6000828254611d1f919061271f565b909155505063ffffffff8116611d3584866126d0565b611d3f919061269b565b600e6000828254611d50919061271f565b90915550505b600a869055600b859055600c805463ffffffff191663ffffffff841617905560408051878152602081018790527fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a910160405180910390a1505050505050565b6040805186815260208101869052908101849052606081018390526001600160a01b0382169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a35050505050565b600080600660009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e8c919061278c565b600f546001600160a01b038216158015945091925090611fe7578015611fe2576000611ebb610e92868861269b565b90506000611ec883611ffb565b905080821115611fdf576000611ede82846125f3565b600054611eeb919061269b565b90506000611ef9838561271f565b90506000611f0782846126d0565b90508015611f1957611f19878261206b565b50505060008183611f2a91906125f3565b600054611f37919061269b565b90506000611f4683600561269b565b611f50908561271f565b90506000611f5e82846126d0565b90508015611fdb5760065460408051639a0109db60e01b81529051611fdb926001600160a01b031691639a0109db9160048083019260209291908290030181865afa158015611fb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fd5919061278c565b8261206b565b5050505b50505b611ff3565b8015611ff3576000600f555b505092915050565b6000600382111561205c57508060006120156002836126d0565b61202090600161271f565b90505b818110156120565790508060028161203b81866126d0565b612045919061271f565b61204f91906126d0565b9050612023565b50919050565b8115612066575060015b919050565b80600054612079919061271f565b60009081556001600160a01b03831681526001602052604090205461209f90829061271f565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906120f09085815260200190565b60405180910390a35050565b600081831061210b578161210d565b825b9392505050565b6001600160a01b0382166000908152600160205260409020546121389082906125f3565b6001600160a01b038316600090815260016020526040812091909155546121609082906125f3565b60009081556040518281526001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016120f0565b60008084116122065760405162461bcd60e51b815260206004820152602c60248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f60448201526b125394155517d05353d5539560a21b6064820152608401610591565b6000831180156122165750600082115b6122745760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f6044820152684c495155494449545960b81b6064820152608401610591565b6000612282856103e561269b565b90506000612290848361269b565b90506000826122a1876103e861269b565b6122ab919061271f565b90506122b781836126d0565b979650505050505050565b60005b838110156122dd5781810151838201526020016122c5565b838111156122ec576000848401525b50505050565b60208152600082518060208401526123118160408501602087016122c2565b601f01601f19169190910160400192915050565b6001600160a01b038116811461233a57600080fd5b50565b803561206681612325565b6000806040838503121561235b57600080fd5b823561236681612325565b946020939093013593505050565b60008060006060848603121561238957600080fd5b833561239481612325565b925060208401356123a481612325565b929592945050506040919091013590565b60008060008060008060c087890312156123ce57600080fd5b86359550602080880135955060408801356123e881612325565b9450606088013567ffffffffffffffff8082111561240557600080fd5b818a0191508a601f83011261241957600080fd5b81358181111561242857600080fd5b8b8482850101111561243957600080fd5b82840196509450609f8a018b1361244f57600080fd5b604051915060408201828110828211171561247a57634e487b7160e01b600052604160045260246000fd5b604052508060c08a018b81111561249057600080fd5b60808b015b818110156124b3576124a68161233d565b8352918401918401612495565b50505080925050509295509295509295565b6000602082840312156124d757600080fd5b813561210d81612325565b6000806000606084860312156124f757600080fd5b833561250281612325565b9250602084013561251281612325565b9150604084013561252281612325565b809150509250925092565b600080600080600080600060e0888a03121561254857600080fd5b873561255381612325565b9650602088013561256381612325565b95506040880135945060608801359350608088013560ff8116811461258757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156125b757600080fd5b82356125c281612325565b915060208301356125d281612325565b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b600082821015612605576126056125dd565b500390565b60208082526012908201527111185c9dda5b94ddd85c0e881313d0d2d15160721b604082015260600190565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b60006020828403121561269457600080fd5b5051919050565b60008160001904831182151516156126b5576126b56125dd565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826126df576126df6126ba565b500490565b6000602082840312156126f657600080fd5b8151801515811461210d57600080fd5b600060018201612718576127186125dd565b5060010190565b60008219821115612732576127326125dd565b500190565b600082516127498184602087016122c2565b9190910192915050565b600082612762576127626126ba565b500690565b600063ffffffff83811690831681811015612784576127846125dd565b039392505050565b60006020828403121561279e57600080fd5b815161210d8161232556fea2646970667358221220989f409c21870984e5d887dee1eb417bcb4dc18631d7ab10eb9991b240f4534364736f6c634300080e0033";

type DarwinSwapPairConstructorParams =
  | [linkLibraryAddresses: DarwinSwapPairLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DarwinSwapPairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DarwinSwapPair__factory extends ContractFactory {
  constructor(...args: DarwinSwapPairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DarwinSwapPair__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DarwinSwapPairLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$6a4709d1eab6e3f604fe8171dfdaaeb3a4\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/Tokenomics2Library.sol:Tokenomics2Library"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DarwinSwapPair> {
    return super.deploy(overrides || {}) as Promise<DarwinSwapPair>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DarwinSwapPair {
    return super.attach(address) as DarwinSwapPair;
  }
  override connect(signer: Signer): DarwinSwapPair__factory {
    return super.connect(signer) as DarwinSwapPair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DarwinSwapPairInterface {
    return new utils.Interface(_abi) as DarwinSwapPairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DarwinSwapPair {
    return new Contract(address, _abi, signerOrProvider) as DarwinSwapPair;
  }
}

export interface DarwinSwapPairLibraryAddresses {
  ["contracts/libraries/Tokenomics2Library.sol:Tokenomics2Library"]: string;
}
