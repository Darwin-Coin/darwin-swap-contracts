/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  DarwinSwapPair,
  DarwinSwapPairInterface,
} from "../DarwinSwapPair";

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
    inputs: [],
    name: "antiDumpGuard",
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
        name: "_antiDumpGuard",
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
  "0x60806040526001600f5534801561001557600080fd5b50604080518082018252600f81526e2230b93bb4b729bbb0b8102830b4b960891b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f04c1d0b7fe2e236eeafcf5d4a85670f32c93c8edd289cc39d8b7ff661e5e2d84818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600680546001600160a01b031916331790556127c68061010d6000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806370a0823111610104578063ba9a7a56116100a2578063d21220a711610071578063d21220a714610452578063d505accf14610465578063dd62ed3e14610478578063fff6cae9146104a357600080fd5b8063ba9a7a5614610410578063bc25cf7714610419578063c0c53b8b1461042c578063c45a01551461043f57600080fd5b806389afcb44116100de57806389afcb441461039a57806395d89b41146103c2578063a87db923146103ea578063a9059cbb146103fd57600080fd5b806370a08231146103515780637464fc3d146103715780637ecebe001461037a57600080fd5b806330adf81f116101715780633b9dd6c11161014b5780633b9dd6c1146103175780635909c0d51461032c5780635a3d5493146103355780636a6278421461033e57600080fd5b806330adf81f146102cd578063313ce567146102f45780633644e5151461030e57600080fd5b80630dfe1681116101ad5780630dfe16811461026557806318160ddd146102905780631d73f9a5146102a757806323b872dd146102ba57600080fd5b806306fdde03146101d45780630902f1ac14610218578063095ea7b314610242575b600080fd5b6102026040518060400160405280600f81526020016e2230b93bb4b729bbb0b8102830b4b960891b81525081565b60405161020f91906122d9565b60405180910390f35b600954600a54600b5460408051938452602084019290925263ffffffff169082015260600161020f565b61025561025036600461232f565b6104ab565b604051901515815260200161020f565b600754610278906001600160a01b031681565b6040516001600160a01b03909116815260200161020f565b61029960005481565b60405190815260200161020f565b600554610278906001600160a01b031681565b6102556102c836600461235b565b6104c1565b6102997f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6102fc601281565b60405160ff909116815260200161020f565b61029960035481565b61032a61032536600461239c565b610556565b005b610299600c5481565b610299600d5481565b61029961034c3660046124ac565b610d5d565b61029961035f3660046124ac565b60016020526000908152604090205481565b610299600e5481565b6102996103883660046124ac565b60046020526000908152604090205481565b6103ad6103a83660046124ac565b610ff8565b6040805192835260208301919091520161020f565b61020260405180604001604052806009815260200168044415257494e2d4c560bc1b81525081565b61032a6103f836600461232f565b611357565b61025561040b36600461232f565b61161d565b6102996103e881565b61032a6104273660046124ac565b61162a565b61032a61043a3660046124c9565b611726565b600654610278906001600160a01b031681565b600854610278906001600160a01b031681565b61032a610473366004612514565b6117b7565b61029961048636600461258b565b600260209081526000928352604080842090915290825290205481565b61032a6119cc565b60006104b8338484611a2c565b50600192915050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610541576001600160a01b038416600090815260026020908152604080832033845290915290205461051c9083906125da565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b61054c848484611a8e565b5060019392505050565b600f546001146105815760405162461bcd60e51b8152600401610578906125f1565b60405180910390fd5b6000600f55851515806105945750600085115b6105ef5760405162461bcd60e51b815260206004820152602660248201527f44617277696e537761703a20494e53554646494349454e545f4f55545055545f604482015265105353d5539560d21b6064820152608401610578565b600954600a54818810801561060357508087105b61065a5760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015261545960f01b6064820152608401610578565b60075460085460009182916001600160a01b0391821691908116908a1682148015906106985750806001600160a01b03168a6001600160a01b031614155b6106dd5760405162461bcd60e51b815260206004820152601660248201527544617277696e537761703a20494e56414c49445f544f60501b6044820152606401610578565b8b156106f7576106f7828b8e8a60005b6020020151611b36565b8a1561070b5761070b818b8d8a60006106ed565b871561077857896001600160a01b03166355ed23ba338e8e8d8d6040518663ffffffff1660e01b815260040161074595949392919061261d565b600060405180830381600087803b15801561075f57600080fd5b505af1158015610773573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa1580156107bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e09190612669565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a0823190602401602060405180830381865afa158015610827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084b9190612669565b9250505060008a8561085d91906125da565b831161086a57600061087e565b6108748b866125da565b61087e90846125da565b9050600061088c8b866125da565b83116108995760006108ad565b6108a38b866125da565b6108ad90846125da565b905060008211806108be5750600081115b6109185760405162461bcd60e51b815260206004820152602560248201527f44617277696e537761703a20494e53554646494349454e545f494e5055545f416044820152641353d5539560da1b6064820152608401610578565b6000610925836003612682565b610931866103e8612682565b61093b91906125da565b9050600061094a836003612682565b610956866103e8612682565b61096091906125da565b905061096c8789612682565b61097990620f4240612682565b6109838284612682565b10156109c15760405162461bcd60e51b815260206004820152600d60248201526c44617277696e537761703a204b60981b6044820152606401610578565b505060208701516001600160a01b031615610b795773__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__633e545f3160008411610a09576008546001600160a01b0316610a16565b6007546001600160a01b03165b838511610a235783610a25565b845b60208b01516006546040516001600160e01b031960e087901b1681526001600160a01b0394851660048201526024810193909352908316604483015291909116606482015260840160006040518083038186803b158015610a8557600080fd5b505af4158015610a99573d6000803e3d6000fd5b50506007546040516370a0823160e01b81523060048201526001600160a01b0390911692506370a082319150602401602060405180830381865afa158015610ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b099190612669565b6008546040516370a0823160e01b81523060048201529195506001600160a01b0316906370a0823190602401602060405180830381865afa158015610b52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b769190612669565b92505b86516001600160a01b031615610d315773__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__6398958dd160008e11610bbc576008546001600160a01b0316610bc9565b6007546001600160a01b03165b8d8f11610bd6578d610bd8565b8e5b8a5160065460405160e086901b6001600160e01b03191681526001600160a01b039485166004820152602481019390935290831660448301528e8316606483015291909116608482015260a40160006040518083038186803b158015610c3d57600080fd5b505af4158015610c51573d6000803e3d6000fd5b50506007546040516370a0823160e01b81523060048201526001600160a01b0390911692506370a082319150602401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc19190612669565b6008546040516370a0823160e01b81523060048201529195506001600160a01b0316906370a0823190602401602060405180830381865afa158015610d0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2e9190612669565b92505b610d3d84848888611d35565b610d4a82828e8e8e611e49565b50506001600f5550505050505050505050565b6000600f54600114610d815760405162461bcd60e51b8152600401610578906125f1565b6000600f819055600954600a54600754604080516370a0823160e01b81523060048201529051939492936001600160a01b03909216916370a08231916024808201926020929091908290030181865afa158015610de2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e069190612669565b6008546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190612669565b90506000610e8685846125da565b90506000610e9485846125da565b90506000610ea28787611ea5565b60008054919250819003610ee3576103e8610ec5610ec08587612682565b611fe2565b610ecf91906125da565b9850610ede60006103e8612052565b610f18565b610f1588610ef18387612682565b610efb91906126b7565b88610f068487612682565b610f1091906126b7565b6120e3565b98505b60008911610f7a5760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015268151657d3525395115160ba1b6064820152608401610578565b610f848a8a612052565b610f9086868a8a611d35565b8115610faa57600a54600954610fa69190612682565b600e555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250506001600f5550949695505050505050565b600080600f5460011461101d5760405162461bcd60e51b8152600401610578906125f1565b6000600f819055600954600a54600b5483929190506007546008546040516370a0823160e01b81523060048201529395509193506001600160a01b039081169291169060009083906370a0823190602401602060405180830381865afa15801561108b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110af9190612669565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156110f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111d9190612669565b3060009081526001602052604081205491925061113a8888611ea5565b6000549091508061114b8685612682565b61115591906126b7565b9a50806111628585612682565b61116c91906126b7565b995060008b11801561117e575060008a115b6111dc5760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015268151657d0955493915160ba1b6064820152608401610578565b6111e630846120fb565b6111f3878d8d6000611b36565b611200868d8c6000611b36565b6040516370a0823160e01b81523060048201526001600160a01b038816906370a0823190602401602060405180830381865afa158015611244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112689190612669565b6040516370a0823160e01b81523060048201529095506001600160a01b038716906370a0823190602401602060405180830381865afa1580156112af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d39190612669565b93506112e185858b8b611d35565b81156112fb57600a546009546112f79190612682565b600e555b604080518c8152602081018c90526001600160a01b038e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001600f81905550915091565b600f546001146113795760405162461bcd60e51b8152600401610578906125f1565b6000600f556005546001600160a01b031633146113e45760405162461bcd60e51b815260206004820152602360248201527f44617277696e53776170506169723a2043414c4c45525f4e4f545f414e5449446044820152620554d560ec1b6064820152608401610578565b600754600090819081906001600160a01b0386811691161461141757600a546009546007546001600160a01b031661142a565b600954600a546008546001600160a01b03165b925092509250600061143d858585612187565b6040516323b872dd60e01b8152336004820152306024820152604481018790529091506001600160a01b038716906323b872dd906064016020604051808303816000875af1158015611493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b791906126cb565b5060405163a9059cbb60e01b8152336004820152602481018290526001600160a01b0383169063a9059cbb906044016020604051808303816000875af1158015611505573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061152991906126cb565b506007546040516370a0823160e01b8152306004820152611610916001600160a01b0316906370a08231906024015b602060405180830381865afa158015611575573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115999190612669565b6008546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156115e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116059190612669565b600954600a54611d35565b50506001600f5550505050565b60006104b8338484611a8e565b600f5460011461164c5760405162461bcd60e51b8152600401610578906125f1565b6000600f556007546008546009546040516370a0823160e01b81523060048201526001600160a01b0393841693909216916116e491849186919083906370a08231906024015b602060405180830381865afa1580156116af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d39190612669565b6116dd91906125da565b6000611b36565b600a546040516370a0823160e01b815230600482015261171c9183918691906001600160a01b038416906370a0823190602401611692565b50506001600f5550565b6006546001600160a01b031633146117785760405162461bcd60e51b81526020600482015260156024820152742230b93bb4b729bbb0b81d102327a92124a22222a760591b6044820152606401610578565b600780546001600160a01b039485166001600160a01b031991821617909155600880549385169382169390931790925560058054919093169116179055565b428410156117fd5760405162461bcd60e51b815260206004820152601360248201527211185c9dda5b94ddd85c0e8811561412549151606a1b6044820152606401610578565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b919087611850836126ed565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e001604051602081830303815290604052805190602001206040516020016118c992919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611934573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061196a5750886001600160a01b0316816001600160a01b0316145b6119b65760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a20494e56414c49445f5349474e41545552450000006044820152606401610578565b6119c1898989611a2c565b505050505050505050565b600f546001146119ee5760405162461bcd60e51b8152600401610578906125f1565b6000600f556007546040516370a0823160e01b8152306004820152611a25916001600160a01b0316906370a0823190602401611558565b6001600f55565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316600090815260016020526040902054611ab29082906125da565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611ae2908290612706565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611a819085815260200190565b6001600160a01b03811615611be957600654604051632052479360e01b81526001600160a01b038087166004830152602482018590528084166044830152909116606482015273__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__90632052479390608401602060405180830381865af4158015611bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdc9190612669565b611be690836125da565b91505b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0386811660248301526044808301879052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392881691611c75919061271e565b6000604051808303816000865af19150503d8060008114611cb2576040519150601f19603f3d011682016040523d82523d6000602084013e611cb7565b606091505b5091509150818015611ce1575080511580611ce1575080806020019051810190611ce191906126cb565b611d2d5760405162461bcd60e51b815260206004820152601b60248201527f44617277696e537761703a205452414e534645525f4641494c454400000000006044820152606401610578565b505050505050565b6000611d466401000000004261273a565b600b54909150600090611d5f9063ffffffff168361274e565b905060008163ffffffff16118015611d7657508315155b8015611d8157508215155b15611de95763ffffffff8116611d9785856126b7565b611da19190612682565b600c6000828254611db29190612706565b909155505063ffffffff8116611dc884866126b7565b611dd29190612682565b600d6000828254611de39190612706565b90915550505b6009869055600a859055600b805463ffffffff191663ffffffff841617905560408051878152602081018790527fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a910160405180910390a1505050505050565b6040805186815260208101869052908101849052606081018390526001600160a01b0382169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a35050505050565b600080600660009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611efb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1f9190612773565b600e546001600160a01b038216158015945091925090611fce578015611fc9576000611f4e610ec08688612682565b90506000611f5b83611fe2565b905080821115611fc6576000611f7182846125da565b600054611f7e9190612682565b611f89906002612682565b90506000611f98836002612682565b611fa29085612706565b90506000611fb082846126b7565b90508015611fc257611fc28782612052565b5050505b50505b611fda565b8015611fda576000600e555b505092915050565b600060038211156120435750806000611ffc6002836126b7565b612007906001612706565b90505b8181101561203d5790508060028161202281866126b7565b61202c9190612706565b61203691906126b7565b905061200a565b50919050565b811561204d575060015b919050565b806000546120609190612706565b60009081556001600160a01b038316815260016020526040902054612086908290612706565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906120d79085815260200190565b60405180910390a35050565b60008183106120f257816120f4565b825b9392505050565b6001600160a01b03821660009081526001602052604090205461211f9082906125da565b6001600160a01b038316600090815260016020526040812091909155546121479082906125da565b60009081556040518281526001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016120d7565b60008084116121ed5760405162461bcd60e51b815260206004820152602c60248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f60448201526b125394155517d05353d5539560a21b6064820152608401610578565b6000831180156121fd5750600082115b61225b5760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f6044820152684c495155494449545960b81b6064820152608401610578565b6000612269856103e5612682565b905060006122778483612682565b9050600082612288876103e8612682565b6122929190612706565b905061229e81836126b7565b979650505050505050565b60005b838110156122c45781810151838201526020016122ac565b838111156122d3576000848401525b50505050565b60208152600082518060208401526122f88160408501602087016122a9565b601f01601f19169190910160400192915050565b6001600160a01b038116811461232157600080fd5b50565b803561204d8161230c565b6000806040838503121561234257600080fd5b823561234d8161230c565b946020939093013593505050565b60008060006060848603121561237057600080fd5b833561237b8161230c565b9250602084013561238b8161230c565b929592945050506040919091013590565b60008060008060008060c087890312156123b557600080fd5b86359550602080880135955060408801356123cf8161230c565b9450606088013567ffffffffffffffff808211156123ec57600080fd5b818a0191508a601f83011261240057600080fd5b81358181111561240f57600080fd5b8b8482850101111561242057600080fd5b82840196509450609f8a018b1361243657600080fd5b604051915060408201828110828211171561246157634e487b7160e01b600052604160045260246000fd5b604052508060c08a018b81111561247757600080fd5b60808b015b8181101561249a5761248d81612324565b835291840191840161247c565b50505080925050509295509295509295565b6000602082840312156124be57600080fd5b81356120f48161230c565b6000806000606084860312156124de57600080fd5b83356124e98161230c565b925060208401356124f98161230c565b915060408401356125098161230c565b809150509250925092565b600080600080600080600060e0888a03121561252f57600080fd5b873561253a8161230c565b9650602088013561254a8161230c565b95506040880135945060608801359350608088013560ff8116811461256e57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561259e57600080fd5b82356125a98161230c565b915060208301356125b98161230c565b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b6000828210156125ec576125ec6125c4565b500390565b60208082526012908201527111185c9dda5b94ddd85c0e881313d0d2d15160721b604082015260600190565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b60006020828403121561267b57600080fd5b5051919050565b600081600019048311821515161561269c5761269c6125c4565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826126c6576126c66126a1565b500490565b6000602082840312156126dd57600080fd5b815180151581146120f457600080fd5b6000600182016126ff576126ff6125c4565b5060010190565b60008219821115612719576127196125c4565b500190565b600082516127308184602087016122a9565b9190910192915050565b600082612749576127496126a1565b500690565b600063ffffffff8381169083168181101561276b5761276b6125c4565b039392505050565b60006020828403121561278557600080fd5b81516120f48161230c56fea26469706673582212204ce9bdb20831169b9718c615fc61bae3f0ae6577d87931ea319e3031b6249fe964736f6c634300080e0033";

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