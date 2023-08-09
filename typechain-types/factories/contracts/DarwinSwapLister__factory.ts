/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DarwinSwapLister,
  DarwinSwapListerInterface,
} from "../../contracts/DarwinSwapLister";

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
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newUnlockDate",
        type: "uint256",
      },
    ],
    name: "TaxLockPeriodUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
    ],
    name: "TokenBanned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenTaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenTaxOnBuy",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.OwnTokenomicsInfo",
            name: "ownToks",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenA1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1SellToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToLI",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.TokenomicsInfo",
            name: "addedToks",
            type: "tuple",
          },
          {
            internalType: "enum IDarwinSwapLister.TokenStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "validator",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeReceiver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "valid",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "official",
            type: "bool",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "unlockTime",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct IDarwinSwapLister.TokenInfo",
        name: "listingInfo",
        type: "tuple",
      },
    ],
    name: "TokenListed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_newUnlockDate",
        type: "uint256",
      },
    ],
    name: "increaseLockPeriod",
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
    name: "isUserBannedFromListing",
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
        name: "",
        type: "address",
      },
    ],
    name: "isValidator",
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
        name: "darwin",
        type: "address",
      },
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "darwinCommunity",
        type: "address",
      },
    ],
    name: "listDarwinWithWETH",
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
    ],
    name: "listOfficialToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenTaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenTaxOnBuy",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.OwnTokenomicsInfo",
            name: "ownToks",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenA1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1SellToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToLI",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.TokenomicsInfo",
            name: "addedToks",
            type: "tuple",
          },
          {
            internalType: "enum IDarwinSwapLister.TokenStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "validator",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeReceiver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "valid",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "official",
            type: "bool",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "unlockTime",
            type: "uint256",
          },
        ],
        internalType: "struct IDarwinSwapLister.TokenInfo",
        name: "listingInfo",
        type: "tuple",
      },
    ],
    name: "listToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTok1Tax",
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
    name: "maxTok2Tax",
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
    name: "maxTotalTax",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_ban",
        type: "bool",
      },
    ],
    name: "setBanToken",
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
      {
        internalType: "bool",
        name: "_ban",
        type: "bool",
      },
    ],
    name: "setBanUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dev",
        type: "address",
      },
    ],
    name: "setDev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxTok1Tax",
        type: "uint256",
      },
    ],
    name: "setMaxTok1Tax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxTok2Tax",
        type: "uint256",
      },
    ],
    name: "setMaxTok2Tax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxTotalTax",
        type: "uint256",
      },
    ],
    name: "setMaxTotalTax",
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
      {
        internalType: "bool",
        name: "_isValidator",
        type: "bool",
      },
    ],
    name: "setValidator",
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
    ],
    name: "tokenInfo",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenTaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenTaxOnBuy",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.OwnTokenomicsInfo",
            name: "ownToks",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenA1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenA2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2TaxOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnSell",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "refundOnBuy",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1SellToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToLI",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToLI",
                type: "uint256",
              },
            ],
            internalType: "struct IDarwinSwapLister.TokenomicsInfo",
            name: "addedToks",
            type: "tuple",
          },
          {
            internalType: "enum IDarwinSwapLister.TokenStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "validator",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeReceiver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "valid",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "official",
            type: "bool",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "unlockTime",
            type: "uint256",
          },
        ],
        internalType: "struct IDarwinSwapLister.TokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782558152600660205260409020805460ff191660011790556107d06004556103e86002556101f4600355611ffe8061005c6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063a1c0aa0c116100b8578063d477f05f1161007c578063d477f05f14610268578063d6e4b4dc1461027b578063f5dab711146102ae578063f8250a4a146102ce578063facca62c146102e1578063facd743b146102f457600080fd5b8063a1c0aa0c14610209578063afcd025d1461021c578063b6bedef51461022f578063c45a015514610242578063c9c653961461025557600080fd5b80635bb47808116100ff5780635bb478081461019257806373bcd686146101a55780638d9193ee146101b857806391cca3db146101cb578063989da3ed146101f657600080fd5b8063089c2ae81461013c5780632a93a4aa146101585780632d508c7f1461016d5780634623c91d1461017657806347727fe214610189575b600080fd5b61014560035481565b6040519081526020015b60405180910390f35b61016b6101663660046114fb565b610317565b005b61014560025481565b61016b610184366004611531565b61039b565b61014560045481565b61016b6101a03660046114fb565b6103f0565b61016b6101b336600461156a565b61043c565b61016b6101c6366004611583565b61046b565b6000546101de906001600160a01b031681565b6040516001600160a01b03909116815260200161014f565b61016b61020436600461156a565b610672565b61016b61021736600461156a565b6106a1565b61016b61022a366004611531565b6106d0565b61016b61023d3660046117d2565b61072a565b6001546101de906001600160a01b031681565b6101de6102633660046118f3565b610ccc565b61016b6102763660046114fb565b610e9d565b61029e6102893660046114fb565b60076020526000908152604090205460ff1681565b604051901515815260200161014f565b6102c16102bc3660046114fb565b610ee9565b60405161014f9190611a42565b61016b6102dc366004611afc565b611104565b61016b6102ef366004611531565b611208565b61029e6103023660046114fb565b60066020526000908152604090205460ff1681565b3360009081526006602052604090205460ff1661034f5760405162461bcd60e51b815260040161034690611b28565b60405180910390fd5b6001600160a01b0316600090815260056020526040902060108101805460016001600160a81b0319909116336101000217179055601201805461ffff60a01b191661010160a01b179055565b6000546001600160a01b031633146103c55760405162461bcd60e51b815260040161034690611b5d565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b6000546001600160a01b0316331461041a5760405162461bcd60e51b815260040161034690611b5d565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146104665760405162461bcd60e51b815260040161034690611b5d565b600455565b6000546001600160a01b031633146104955760405162461bcd60e51b815260040161034690611b5d565b6001600160a01b0383811660008181526005602052604080822060c860088201819055601082018054610100339081026001600160a81b03199092169190911760019081179092556012840180546011860180546001600160a01b0319169093179092558989166001600160b01b03199092169190911761010160a01b179055600c9092015554905163e6a4390560e01b8152600481019390935285841660248401529092169063e6a4390590604401602060405180830381865afa158015610562573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105869190611b94565b90506001600160a01b038116610611576001546040516364e329cb60e11b81526001600160a01b03868116600483015285811660248301529091169063c9c65396906044016020604051808303816000875af11580156105ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060e9190611b94565b90505b6040516362c6744360e11b81526001600160a01b03828116600483015285169063c58ce88690602401600060405180830381600087803b15801561065457600080fd5b505af1158015610668573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b0316331461069c5760405162461bcd60e51b815260040161034690611b5d565b600355565b6000546001600160a01b031633146106cb5760405162461bcd60e51b815260040161034690611b5d565b600255565b3360009081526006602052604090205460ff166106ff5760405162461bcd60e51b815260040161034690611b28565b6001600160a01b03919091166000908152600760205260409020805460ff1916911515919091179055565b6001600160a01b03821660009081526005602052604090206014015442116107945760405162461bcd60e51b815260206004820152601860248201527f44617277696e537761703a2054415845535f4c4f434b454400000000000000006044820152606401610346565b6001600160a01b0382166107ea5760405162461bcd60e51b815260206004820152601860248201527f44617277696e537761703a205a45524f5f4144445245535300000000000000006044820152606401610346565b600081610100015151116108405760405162461bcd60e51b815260206004820152601960248201527f44617277696e537761703a20454d5054595f505552504f5345000000000000006044820152606401610346565b60026001600160a01b03831660009081526005602052604090206010015460ff166002811115610872576108726119ae565b1415801561089057503360009081526007602052604090205460ff16155b6108dc5760405162461bcd60e51b815260206004820152601b60248201527f44617277696e537761703a20544f4b454e5f4f525f42414e4e454400000000006044820152606401610346565b60006108e783611299565b9050336001600160a01b038216148061090f57503360009081526006602052604090205460ff165b61092b5760405162461bcd60e51b815260040161034690611bb1565b6001600160a01b03818116608084015260016040840181905260c0840152600060e084015260a083015116610961573360a08301525b600254600354600480546040516356df23bb60e01b815260009473__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__946356df23bb946109a5948a94909101611c00565b602060405180830381865af41580156109c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e69190611cd8565b905080610a465760405162461bcd60e51b815260206004820152602860248201527f44617277696e537761703a20494e56414c49445f5245515545535445445f544f6044820152674b454e4f4d49435360c01b6064820152608401610346565b6020830151604051639acf9d7960e01b815273__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__91639acf9d7991610a819190600401611cf5565b6101c060405180830381865af4158015610a9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac39190611d04565b60208085019182526001600160a01b03861660009081526005808352604091829020875180518255840151600180830191909155945180516002808401919091559481015160038301558084015160048301556060810151928201929092556080820151600682015560a0820151600782015560c0820151600882015560e08201516009820155610100820151600a820155610120820151600b820155610140820151600c820155610160820151600d820155610180820151600e8201556101a090910151600f82015590860151601082018054889593949293919260ff1990911691908490811115610bb857610bb86119ae565b02179055506060820151601082018054610100600160a81b0319166101006001600160a01b0393841681029190911790915560808401516011840180546001600160a01b03191691841691909117905560a084015160128401805460c087015160e0880151939095166001600160a81b031990911617600160a01b941515949094029390931760ff60a81b1916600160a81b91151591909102179091558201518051610c6e91601384019160209091019061136a565b50610120820151816014015590505082604051610c8b9190611def565b604051908190038120906001600160a01b038616907f060c1d738bd5215bd30cc8c656dd056952a6656f41966f90d37c1442ff459df890600090a350505050565b600060026001600160a01b03841660009081526005602052604090206010015460ff166002811115610d0057610d006119ae565b14158015610d1e57503260009081526007602052604090205460ff16155b610d765760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20544f4b454e415f4f525f43414c4c45525f42414e60448201526213915160ea1b6064820152608401610346565b60026001600160a01b03831660009081526005602052604090206010015460ff166002811115610da857610da86119ae565b14158015610dc657503260009081526007602052604090205460ff16155b610e1e5760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20544f4b454e425f4f525f43414c4c45525f42414e60448201526213915160ea1b6064820152608401610346565b6001546040516364e329cb60e11b81526001600160a01b03858116600483015284811660248301529091169063c9c65396906044016020604051808303816000875af1158015610e72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e969190611b94565b9392505050565b6000546001600160a01b03163314610ec75760405162461bcd60e51b815260040161034690611b5d565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b610ef16113ee565b6001600160a01b03821660009081526005602081815260409283902083516101808082018652825461014080840191825260018501546101608086019190915291845287516101c08101895260028087015482526003870154828901526004870154828b015297860154606082015260068601546080820152600786015460a0820152600886015460c0820152600986015460e0820152600a860154610100820152600b860154610120820152600c86015491810191909152600d85015491810191909152600e84015491810191909152600f8301546101a0820152928101929092526010810154919390929084019160ff1690811115610ff457610ff46119ae565b6002811115611005576110056119ae565b815260108201546001600160a01b03610100909104811660208301526011830154811660408301526012830154908116606083015260ff600160a01b8204811615156080840152600160a81b90910416151560a082015260138201805460c09092019161107190611f8e565b80601f016020809104026020016040519081016040528092919081815260200182805461109d90611f8e565b80156110ea5780601f106110bf576101008083540402835291602001916110ea565b820191906000526020600020905b8154815290600101906020018083116110cd57829003601f168201915b505050505081526020016014820154815250509050919050565b6001600160a01b038216600090815260056020526040902060140154811161116e5760405162461bcd60e51b815260206004820181905260248201527f44617277696e537761703a204c4f434b5f4245464f52455f4c4f434b5f454e446044820152606401610346565b600061117983611299565b9050336001600160a01b03821614806111a157503360009081526006602052604090205460ff165b6111bd5760405162461bcd60e51b815260040161034690611bb1565b6001600160a01b038316600081815260056020526040808220601401859055518492917f883523d2954a03fa2721b02fcb9084ecaac900563a7b5c0a18e720970c921c5491a3505050565b3360009081526006602052604090205460ff166112375760405162461bcd60e51b815260040161034690611b28565b801561127457506001600160a01b0316600090815260056020526040902060108101805460ff19166002179055601201805460ff60a01b19169055565b506001600160a01b03166000908152600560205260409020601001805460ff19169055565b6000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156112f5575060408051601f3d908101601f191682019092526112f291810190611b94565b60015b61135f57816001600160a01b031663893d20e86040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611353575060408051601f3d908101601f1916820190925261135091810190611b94565b60015b61135f57506000919050565b92915050565b919050565b82805461137690611f8e565b90600052602060002090601f01602090048101928261139857600085556113de565b82601f106113b157805160ff19168380011785556113de565b828001600101855582156113de579182015b828111156113de5782518255916020019190600101906113c3565b506113ea9291506114c3565b5090565b6040805161018081019091526000610140820181815261016083019190915281908152602001611486604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8152602001600081526000602082018190526040820181905260608083018290526080830182905260a0830182905260c083015260e09091015290565b5b808211156113ea57600081556001016114c4565b6001600160a01b03811681146114ed57600080fd5b50565b8035611365816114d8565b60006020828403121561150d57600080fd5b8135610e96816114d8565b80151581146114ed57600080fd5b803561136581611518565b6000806040838503121561154457600080fd5b823561154f816114d8565b9150602083013561155f81611518565b809150509250929050565b60006020828403121561157c57600080fd5b5035919050565b60008060006060848603121561159857600080fd5b83356115a3816114d8565b925060208401356115b3816114d8565b915060408401356115c3816114d8565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff81118282101715611608576116086115ce565b60405290565b604051610140810167ffffffffffffffff81118282101715611608576116086115ce565b60006040828403121561164457600080fd5b6040516040810181811067ffffffffffffffff82111715611667576116676115ce565b604052823581526020928301359281019290925250919050565b60006101c0828403121561169457600080fd5b61169c6115e4565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b80356003811061136557600080fd5b600082601f83011261175657600080fd5b813567ffffffffffffffff80821115611771576117716115ce565b604051601f8301601f19908116603f01168101908282118183101715611799576117996115ce565b816040528381528660208588010111156117b257600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156117e557600080fd5b82356117f0816114d8565b9150602083013567ffffffffffffffff8082111561180d57600080fd5b90840190610300828703121561182257600080fd5b61182a61160e565b6118348784611632565b81526118438760408501611681565b60208201526118556102008401611736565b604082015261186761022084016114f0565b606082015261187961024084016114f0565b608082015261188b61026084016114f0565b60a082015261189d6102808401611526565b60c08201526118af6102a08401611526565b60e08201526102c0830135828111156118c757600080fd5b6118d388828601611745565b610100830152506102e08301356101208201528093505050509250929050565b6000806040838503121561190657600080fd5b8235611911816114d8565b9150602083013561155f816114d8565b805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b634e487b7160e01b600052602160045260246000fd5b600381106119e257634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015611a015781810151838201526020016119e9565b83811115611a10576000848401525b50505050565b60008151808452611a2e8160208601602086016119e6565b601f01601f19169290920160200192915050565b602080825282518051838301520151604082015260006020830151611a6a6060840182611921565b506040830151611a7e6102208401826119c4565b5060608301516001600160a01b039081166102408401526080840151811661026084015260a08401511661028083015260c083015115156102a083015260e083015115156102c08301526101008301516103006102e08401819052611ae7610320850183611a16565b61012095909501519301929092525090919050565b60008060408385031215611b0f57600080fd5b8235611b1a816114d8565b946020939093013593505050565b6020808252818101527f44617277696e537761703a2043414c4c45525f4e4f545f56414c494441544f52604082015260600190565b6020808252601a908201527f44617277696e537761703a2043414c4c45525f4e4f545f444556000000000000604082015260600190565b600060208284031215611ba657600080fd5b8151610e96816114d8565b6020808252602f908201527f44617277696e537761703a2043414c4c45525f4e4f545f544f4b454e5f4f574e60408201526e22a92fa7a92fab20a624a220aa27a960891b606082015260800190565b60808152611c1c60808201865180518252602090810151910152565b60006020860151611c3060c0840182611921565b506040860151611c446102808401826119c4565b5060608601516001600160a01b039081166102a0840152608087015181166102c084015260a0870151166102e083015260c086015115156103008084019190915260e08701511515610320840152610100870151610340840191909152611caf610380840182611a16565b610120979097015161036084015250506020810193909352604083019190915260609091015290565b600060208284031215611cea57600080fd5b8151610e9681611518565b6101c0810161135f8284611921565b60006101c08284031215611d1757600080fd5b611d1f6115e4565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152506101a08084015181830152508091505092915050565b611dc582826119c4565b5060200190565b60008151611dde8185602086016119e6565b601f01601f19169290920192915050565b8151805182526020908101518183015282015180516040830152600090611e80611e73611e66611e59611e4c611e3f611e3260608a016020890151815260200190565b6040880151815260200190565b6060870151815260200190565b6080860151815260200190565b60a0850151815260200190565b60c0840151815260200190565b60e0830151815260200190565b6101008201518152602081019050610120611ee5611ed7611ec9611ebb611ead8686890151815260200190565b610140880151815260200190565b610160870151815260200190565b610180860151815260200190565b6101a0850151815260200190565b50611f84611f78611f6d611f5e611f4f611f39611f23611f0d6102008d0160408f0151611dbb565b60608e01516001600160a01b0316815260200190565b60808d01516001600160a01b0316815260200190565b60a08c01516001600160a01b0316815260200190565b60c08b01511515815260200190565b60e08a01511515815260200190565b610100890151611dcc565b82880151815260200190565b9695505050505050565b600181811c90821680611fa257607f821691505b602082108103611fc257634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212207d4759a8429d4b1baf2eb4a0144d3b619fd45f12fb079cbff2b4350ef3774fcb64736f6c634300080e0033";

type DarwinSwapListerConstructorParams =
  | [linkLibraryAddresses: DarwinSwapListerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DarwinSwapListerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DarwinSwapLister__factory extends ContractFactory {
  constructor(...args: DarwinSwapListerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DarwinSwapLister__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DarwinSwapListerLibraryAddresses
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
  ): Promise<DarwinSwapLister> {
    return super.deploy(overrides || {}) as Promise<DarwinSwapLister>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DarwinSwapLister {
    return super.attach(address) as DarwinSwapLister;
  }
  override connect(signer: Signer): DarwinSwapLister__factory {
    return super.connect(signer) as DarwinSwapLister__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DarwinSwapListerInterface {
    return new utils.Interface(_abi) as DarwinSwapListerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DarwinSwapLister {
    return new Contract(address, _abi, signerOrProvider) as DarwinSwapLister;
  }
}

export interface DarwinSwapListerLibraryAddresses {
  ["contracts/libraries/Tokenomics2Library.sol:Tokenomics2Library"]: string;
}
