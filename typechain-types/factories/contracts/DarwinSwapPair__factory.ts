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
  "0x60806040526001600f5534801561001557600080fd5b50604080518082018252600f81526e2230b93bb4b729bbb0b8102830b4b960891b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f04c1d0b7fe2e236eeafcf5d4a85670f32c93c8edd289cc39d8b7ff661e5e2d84818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c09091019092528151910120600355600680546001600160a01b031916331790556128728061010d6000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806370a0823111610104578063ba9a7a56116100a2578063d21220a711610071578063d21220a714610452578063d505accf14610465578063dd62ed3e14610478578063fff6cae9146104a357600080fd5b8063ba9a7a5614610410578063bc25cf7714610419578063c0c53b8b1461042c578063c45a01551461043f57600080fd5b806389afcb44116100de57806389afcb441461039a57806395d89b41146103c2578063a87db923146103ea578063a9059cbb146103fd57600080fd5b806370a08231146103515780637464fc3d146103715780637ecebe001461037a57600080fd5b806330adf81f116101715780633b9dd6c11161014b5780633b9dd6c1146103175780635909c0d51461032c5780635a3d5493146103355780636a6278421461033e57600080fd5b806330adf81f146102cd578063313ce567146102f45780633644e5151461030e57600080fd5b80630dfe1681116101ad5780630dfe16811461026557806318160ddd146102905780631d73f9a5146102a757806323b872dd146102ba57600080fd5b806306fdde03146101d45780630902f1ac14610218578063095ea7b314610242575b600080fd5b6102026040518060400160405280600f81526020016e2230b93bb4b729bbb0b8102830b4b960891b81525081565b60405161020f9190612385565b60405180910390f35b600954600a54600b5460408051938452602084019290925263ffffffff169082015260600161020f565b6102556102503660046123db565b6104ab565b604051901515815260200161020f565b600754610278906001600160a01b031681565b6040516001600160a01b03909116815260200161020f565b61029960005481565b60405190815260200161020f565b600554610278906001600160a01b031681565b6102556102c8366004612407565b6104c1565b6102997f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6102fc601281565b60405160ff909116815260200161020f565b61029960035481565b61032a610325366004612448565b610556565b005b610299600c5481565b610299600d5481565b61029961034c366004612558565b610d5d565b61029961035f366004612558565b60016020526000908152604090205481565b610299600e5481565b610299610388366004612558565b60046020526000908152604090205481565b6103ad6103a8366004612558565b610ff8565b6040805192835260208301919091520161020f565b61020260405180604001604052806009815260200168044415257494e2d4c560bc1b81525081565b61032a6103f83660046123db565b611357565b61025561040b3660046123db565b61161d565b6102996103e881565b61032a610427366004612558565b61162a565b61032a61043a366004612575565b611726565b600654610278906001600160a01b031681565b600854610278906001600160a01b031681565b61032a6104733660046125c0565b6117b7565b610299610486366004612637565b600260209081526000928352604080842090915290825290205481565b61032a6119cc565b60006104b8338484611a2c565b50600192915050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610541576001600160a01b038416600090815260026020908152604080832033845290915290205461051c908390612686565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b61054c848484611a8e565b5060019392505050565b600f546001146105815760405162461bcd60e51b81526004016105789061269d565b60405180910390fd5b6000600f55851515806105945750600085115b6105ef5760405162461bcd60e51b815260206004820152602660248201527f44617277696e537761703a20494e53554646494349454e545f4f55545055545f604482015265105353d5539560d21b6064820152608401610578565b600954600a54818810801561060357508087105b61065a5760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015261545960f01b6064820152608401610578565b60075460085460009182916001600160a01b0391821691908116908a1682148015906106985750806001600160a01b03168a6001600160a01b031614155b6106dd5760405162461bcd60e51b815260206004820152601660248201527544617277696e537761703a20494e56414c49445f544f60501b6044820152606401610578565b8b156106f7576106f7828b8e8a60005b6020020151611b36565b8a1561070b5761070b818b8d8a60006106ed565b871561077857896001600160a01b03166355ed23ba338e8e8d8d6040518663ffffffff1660e01b81526004016107459594939291906126c9565b600060405180830381600087803b15801561075f57600080fd5b505af1158015610773573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa1580156107bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e09190612715565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a0823190602401602060405180830381865afa158015610827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084b9190612715565b9250505060008a8561085d9190612686565b831161086a57600061087e565b6108748b86612686565b61087e9084612686565b9050600061088c8b86612686565b83116108995760006108ad565b6108a38b86612686565b6108ad9084612686565b905060008211806108be5750600081115b6109185760405162461bcd60e51b815260206004820152602560248201527f44617277696e537761703a20494e53554646494349454e545f494e5055545f416044820152641353d5539560da1b6064820152608401610578565b600061092583600361272e565b610931866103e861272e565b61093b9190612686565b9050600061094a83600361272e565b610956866103e861272e565b6109609190612686565b905061096c878961272e565b61097990620f424061272e565b610983828461272e565b10156109c15760405162461bcd60e51b815260206004820152600d60248201526c44617277696e537761703a204b60981b6044820152606401610578565b505060208701516001600160a01b031615610b795773__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__633e545f3160008411610a09576008546001600160a01b0316610a16565b6007546001600160a01b03165b838511610a235783610a25565b845b60208b01516006546040516001600160e01b031960e087901b1681526001600160a01b0394851660048201526024810193909352908316604483015291909116606482015260840160006040518083038186803b158015610a8557600080fd5b505af4158015610a99573d6000803e3d6000fd5b50506007546040516370a0823160e01b81523060048201526001600160a01b0390911692506370a082319150602401602060405180830381865afa158015610ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b099190612715565b6008546040516370a0823160e01b81523060048201529195506001600160a01b0316906370a0823190602401602060405180830381865afa158015610b52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b769190612715565b92505b86516001600160a01b031615610d315773__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__6398958dd160008e11610bbc576008546001600160a01b0316610bc9565b6007546001600160a01b03165b8d8f11610bd6578d610bd8565b8e5b8a5160065460405160e086901b6001600160e01b03191681526001600160a01b039485166004820152602481019390935290831660448301528e8316606483015291909116608482015260a40160006040518083038186803b158015610c3d57600080fd5b505af4158015610c51573d6000803e3d6000fd5b50506007546040516370a0823160e01b81523060048201526001600160a01b0390911692506370a082319150602401602060405180830381865afa158015610c9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc19190612715565b6008546040516370a0823160e01b81523060048201529195506001600160a01b0316906370a0823190602401602060405180830381865afa158015610d0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2e9190612715565b92505b610d3d84848888611d35565b610d4a82828e8e8e611e49565b50506001600f5550505050505050505050565b6000600f54600114610d815760405162461bcd60e51b81526004016105789061269d565b6000600f819055600954600a54600754604080516370a0823160e01b81523060048201529051939492936001600160a01b03909216916370a08231916024808201926020929091908290030181865afa158015610de2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e069190612715565b6008546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e789190612715565b90506000610e868584612686565b90506000610e948584612686565b90506000610ea28787611ea5565b60008054919250819003610ee3576103e8610ec5610ec0858761272e565b61208e565b610ecf9190612686565b9850610ede60006103e86120fe565b610f18565b610f1588610ef1838761272e565b610efb9190612763565b88610f06848761272e565b610f109190612763565b61218f565b98505b60008911610f7a5760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015268151657d3525395115160ba1b6064820152608401610578565b610f848a8a6120fe565b610f9086868a8a611d35565b8115610faa57600a54600954610fa6919061272e565b600e555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250506001600f5550949695505050505050565b600080600f5460011461101d5760405162461bcd60e51b81526004016105789061269d565b6000600f819055600954600a54600b5483929190506007546008546040516370a0823160e01b81523060048201529395509193506001600160a01b039081169291169060009083906370a0823190602401602060405180830381865afa15801561108b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110af9190612715565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156110f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111d9190612715565b3060009081526001602052604081205491925061113a8888611ea5565b6000549091508061114b868561272e565b6111559190612763565b9a5080611162858561272e565b61116c9190612763565b995060008b11801561117e575060008a115b6111dc5760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761703a20494e53554646494349454e545f4c495155494449604482015268151657d0955493915160ba1b6064820152608401610578565b6111e630846121a7565b6111f3878d8d6000611b36565b611200868d8c6000611b36565b6040516370a0823160e01b81523060048201526001600160a01b038816906370a0823190602401602060405180830381865afa158015611244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112689190612715565b6040516370a0823160e01b81523060048201529095506001600160a01b038716906370a0823190602401602060405180830381865afa1580156112af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d39190612715565b93506112e185858b8b611d35565b81156112fb57600a546009546112f7919061272e565b600e555b604080518c8152602081018c90526001600160a01b038e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001600f81905550915091565b600f546001146113795760405162461bcd60e51b81526004016105789061269d565b6000600f556005546001600160a01b031633146113e45760405162461bcd60e51b815260206004820152602360248201527f44617277696e53776170506169723a2043414c4c45525f4e4f545f414e5449446044820152620554d560ec1b6064820152608401610578565b600754600090819081906001600160a01b0386811691161461141757600a546009546007546001600160a01b031661142a565b600954600a546008546001600160a01b03165b925092509250600061143d858585612233565b6040516323b872dd60e01b8152336004820152306024820152604481018790529091506001600160a01b038716906323b872dd906064016020604051808303816000875af1158015611493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114b79190612777565b5060405163a9059cbb60e01b8152336004820152602481018290526001600160a01b0383169063a9059cbb906044016020604051808303816000875af1158015611505573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115299190612777565b506007546040516370a0823160e01b8152306004820152611610916001600160a01b0316906370a08231906024015b602060405180830381865afa158015611575573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115999190612715565b6008546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156115e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116059190612715565b600954600a54611d35565b50506001600f5550505050565b60006104b8338484611a8e565b600f5460011461164c5760405162461bcd60e51b81526004016105789061269d565b6000600f556007546008546009546040516370a0823160e01b81523060048201526001600160a01b0393841693909216916116e491849186919083906370a08231906024015b602060405180830381865afa1580156116af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d39190612715565b6116dd9190612686565b6000611b36565b600a546040516370a0823160e01b815230600482015261171c9183918691906001600160a01b038416906370a0823190602401611692565b50506001600f5550565b6006546001600160a01b031633146117785760405162461bcd60e51b81526020600482015260156024820152742230b93bb4b729bbb0b81d102327a92124a22222a760591b6044820152606401610578565b600780546001600160a01b039485166001600160a01b031991821617909155600880549385169382169390931790925560058054919093169116179055565b428410156117fd5760405162461bcd60e51b815260206004820152601360248201527211185c9dda5b94ddd85c0e8811561412549151606a1b6044820152606401610578565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b91908761185083612799565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e001604051602081830303815290604052805190602001206040516020016118c992919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611934573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061196a5750886001600160a01b0316816001600160a01b0316145b6119b65760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a20494e56414c49445f5349474e41545552450000006044820152606401610578565b6119c1898989611a2c565b505050505050505050565b600f546001146119ee5760405162461bcd60e51b81526004016105789061269d565b6000600f556007546040516370a0823160e01b8152306004820152611a25916001600160a01b0316906370a0823190602401611558565b6001600f55565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316600090815260016020526040902054611ab2908290612686565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611ae29082906127b2565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611a819085815260200190565b6001600160a01b03811615611be957600654604051632052479360e01b81526001600160a01b038087166004830152602482018590528084166044830152909116606482015273__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__90632052479390608401602060405180830381865af4158015611bb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bdc9190612715565b611be69083612686565b91505b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0386811660248301526044808301879052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392881691611c7591906127ca565b6000604051808303816000865af19150503d8060008114611cb2576040519150601f19603f3d011682016040523d82523d6000602084013e611cb7565b606091505b5091509150818015611ce1575080511580611ce1575080806020019051810190611ce19190612777565b611d2d5760405162461bcd60e51b815260206004820152601b60248201527f44617277696e537761703a205452414e534645525f4641494c454400000000006044820152606401610578565b505050505050565b6000611d46640100000000426127e6565b600b54909150600090611d5f9063ffffffff16836127fa565b905060008163ffffffff16118015611d7657508315155b8015611d8157508215155b15611de95763ffffffff8116611d978585612763565b611da1919061272e565b600c6000828254611db291906127b2565b909155505063ffffffff8116611dc88486612763565b611dd2919061272e565b600d6000828254611de391906127b2565b90915550505b6009869055600a859055600b805463ffffffff191663ffffffff841617905560408051878152602081018790527fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a910160405180910390a1505050505050565b6040805186815260208101869052908101849052606081018390526001600160a01b0382169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a35050505050565b600080600660009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611efb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f1f919061281f565b600e546001600160a01b03821615801594509192509061207a578015612075576000611f4e610ec0868861272e565b90506000611f5b8361208e565b905080821115612072576000611f718284612686565b600054611f7e919061272e565b90506000611f8c83856127b2565b90506000611f9a8284612763565b90508015611fac57611fac87826120fe565b50505060008183611fbd9190612686565b600054611fca919061272e565b90506000611fd983600561272e565b611fe390856127b2565b90506000611ff18284612763565b9050801561206e5760065460408051639a0109db60e01b8152905161206e926001600160a01b031691639a0109db9160048083019260209291908290030181865afa158015612044573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612068919061281f565b826120fe565b5050505b50505b612086565b8015612086576000600e555b505092915050565b600060038211156120ef57508060006120a8600283612763565b6120b39060016127b2565b90505b818110156120e9579050806002816120ce8186612763565b6120d891906127b2565b6120e29190612763565b90506120b6565b50919050565b81156120f9575060015b919050565b8060005461210c91906127b2565b60009081556001600160a01b0383168152600160205260409020546121329082906127b2565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906121839085815260200190565b60405180910390a35050565b600081831061219e57816121a0565b825b9392505050565b6001600160a01b0382166000908152600160205260409020546121cb908290612686565b6001600160a01b038316600090815260016020526040812091909155546121f3908290612686565b60009081556040518281526001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001612183565b60008084116122995760405162461bcd60e51b815260206004820152602c60248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f60448201526b125394155517d05353d5539560a21b6064820152608401610578565b6000831180156122a95750600082115b6123075760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f6044820152684c495155494449545960b81b6064820152608401610578565b6000612315856103e561272e565b90506000612323848361272e565b9050600082612334876103e861272e565b61233e91906127b2565b905061234a8183612763565b979650505050505050565b60005b83811015612370578181015183820152602001612358565b8381111561237f576000848401525b50505050565b60208152600082518060208401526123a4816040850160208701612355565b601f01601f19169190910160400192915050565b6001600160a01b03811681146123cd57600080fd5b50565b80356120f9816123b8565b600080604083850312156123ee57600080fd5b82356123f9816123b8565b946020939093013593505050565b60008060006060848603121561241c57600080fd5b8335612427816123b8565b92506020840135612437816123b8565b929592945050506040919091013590565b60008060008060008060c0878903121561246157600080fd5b863595506020808801359550604088013561247b816123b8565b9450606088013567ffffffffffffffff8082111561249857600080fd5b818a0191508a601f8301126124ac57600080fd5b8135818111156124bb57600080fd5b8b848285010111156124cc57600080fd5b82840196509450609f8a018b136124e257600080fd5b604051915060408201828110828211171561250d57634e487b7160e01b600052604160045260246000fd5b604052508060c08a018b81111561252357600080fd5b60808b015b8181101561254657612539816123d0565b8352918401918401612528565b50505080925050509295509295509295565b60006020828403121561256a57600080fd5b81356121a0816123b8565b60008060006060848603121561258a57600080fd5b8335612595816123b8565b925060208401356125a5816123b8565b915060408401356125b5816123b8565b809150509250925092565b600080600080600080600060e0888a0312156125db57600080fd5b87356125e6816123b8565b965060208801356125f6816123b8565b95506040880135945060608801359350608088013560ff8116811461261a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561264a57600080fd5b8235612655816123b8565b91506020830135612665816123b8565b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b60008282101561269857612698612670565b500390565b60208082526012908201527111185c9dda5b94ddd85c0e881313d0d2d15160721b604082015260600190565b60018060a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b60006020828403121561272757600080fd5b5051919050565b600081600019048311821515161561274857612748612670565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826127725761277261274d565b500490565b60006020828403121561278957600080fd5b815180151581146121a057600080fd5b6000600182016127ab576127ab612670565b5060010190565b600082198211156127c5576127c5612670565b500190565b600082516127dc818460208701612355565b9190910192915050565b6000826127f5576127f561274d565b500690565b600063ffffffff8381169083168181101561281757612817612670565b039392505050565b60006020828403121561283157600080fd5b81516121a0816123b856fea26469706673582212205fb0bffa77f2e1353622e3fae992daf354e632f9fcc696bf9ee23ba0403b784b64736f6c634300080e0033";

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
