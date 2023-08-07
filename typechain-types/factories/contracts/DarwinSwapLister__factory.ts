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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782558152600660205260409020805460ff191660011790556107d06004556103e86002556101f4600355611ea98061005c6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063a1c0aa0c116100ad578063d477f05f11610071578063d477f05f1461025d578063d6e4b4dc14610270578063f5dab711146102a3578063facca62c146102c3578063facd743b146102d657600080fd5b8063a1c0aa0c146101fe578063afcd025d14610211578063b6bedef514610224578063c45a015514610237578063c9c653961461024a57600080fd5b80635bb47808116100f45780635bb478081461018757806373bcd6861461019a5780638d9193ee146101ad57806391cca3db146101c0578063989da3ed146101eb57600080fd5b8063089c2ae8146101315780632a93a4aa1461014d5780632d508c7f146101625780634623c91d1461016b57806347727fe21461017e575b600080fd5b61013a60035481565b6040519081526020015b60405180910390f35b61016061015b366004611421565b6102f9565b005b61013a60025481565b610160610179366004611457565b61037d565b61013a60045481565b610160610195366004611421565b6103d2565b6101606101a8366004611490565b61041e565b6101606101bb3660046114a9565b61044d565b6000546101d3906001600160a01b031681565b6040516001600160a01b039091168152602001610144565b6101606101f9366004611490565b610654565b61016061020c366004611490565b610683565b61016061021f366004611457565b6106b2565b6101606102323660046116f8565b61070c565b6001546101d3906001600160a01b031681565b6101d3610258366004611819565b610cf6565b61016061026b366004611421565b610ec7565b61029361027e366004611421565b60076020526000908152604090205460ff1681565b6040519015158152602001610144565b6102b66102b1366004611421565b610f13565b6040516101449190611968565b6101606102d1366004611457565b61112e565b6102936102e4366004611421565b60066020526000908152604090205460ff1681565b3360009081526006602052604090205460ff166103315760405162461bcd60e51b815260040161032890611a22565b60405180910390fd5b6001600160a01b0316600090815260056020526040902060108101805460016001600160a81b0319909116336101000217179055601201805461ffff60a01b191661010160a01b179055565b6000546001600160a01b031633146103a75760405162461bcd60e51b815260040161032890611a57565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b6000546001600160a01b031633146103fc5760405162461bcd60e51b815260040161032890611a57565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146104485760405162461bcd60e51b815260040161032890611a57565b600455565b6000546001600160a01b031633146104775760405162461bcd60e51b815260040161032890611a57565b6001600160a01b0383811660008181526005602052604080822060c860088201819055601082018054610100339081026001600160a81b03199092169190911760019081179092556012840180546011860180546001600160a01b0319169093179092558989166001600160b01b03199092169190911761010160a01b179055600c9092015554905163e6a4390560e01b8152600481019390935285841660248401529092169063e6a4390590604401602060405180830381865afa158015610544573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105689190611a8e565b90506001600160a01b0381166105f3576001546040516364e329cb60e11b81526001600160a01b03868116600483015285811660248301529091169063c9c65396906044016020604051808303816000875af11580156105cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f09190611a8e565b90505b6040516362c6744360e11b81526001600160a01b03828116600483015285169063c58ce88690602401600060405180830381600087803b15801561063657600080fd5b505af115801561064a573d6000803e3d6000fd5b5050505050505050565b6000546001600160a01b0316331461067e5760405162461bcd60e51b815260040161032890611a57565b600355565b6000546001600160a01b031633146106ad5760405162461bcd60e51b815260040161032890611a57565b600255565b3360009081526006602052604090205460ff166106e15760405162461bcd60e51b815260040161032890611a22565b6001600160a01b03919091166000908152600760205260409020805460ff1916911515919091179055565b6001600160a01b03821660009081526005602052604090206014015442116107765760405162461bcd60e51b815260206004820152601860248201527f44617277696e537761703a2054415845535f4c4f434b454400000000000000006044820152606401610328565b6001600160a01b0382166107cc5760405162461bcd60e51b815260206004820152601860248201527f44617277696e537761703a205a45524f5f4144445245535300000000000000006044820152606401610328565b600081610100015151116108225760405162461bcd60e51b815260206004820152601960248201527f44617277696e537761703a20454d5054595f505552504f5345000000000000006044820152606401610328565b60026001600160a01b03831660009081526005602052604090206010015460ff166002811115610854576108546118d4565b1415801561087257503360009081526007602052604090205460ff16155b6108be5760405162461bcd60e51b815260206004820152601b60248201527f44617277696e537761703a20544f4b454e5f4f525f42414e4e454400000000006044820152606401610328565b60006108c9836111bf565b9050336001600160a01b03821614806108f157503360009081526006602052604090205460ff165b6109555760405162461bcd60e51b815260206004820152602f60248201527f44617277696e537761703a2043414c4c45525f4e4f545f544f4b454e5f4f574e60448201526e22a92fa7a92fab20a624a220aa27a960891b6064820152608401610328565b6001600160a01b03818116608084015260016040840181905260c0840152600060e084015260a08301511661098b573360a08301525b600254600354600480546040516356df23bb60e01b815260009473__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__946356df23bb946109cf948a94909101611aab565b602060405180830381865af41580156109ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a109190611b83565b905080610a705760405162461bcd60e51b815260206004820152602860248201527f44617277696e537761703a20494e56414c49445f5245515545535445445f544f6044820152674b454e4f4d49435360c01b6064820152608401610328565b6020830151604051639acf9d7960e01b815273__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__91639acf9d7991610aab9190600401611ba0565b6101c060405180830381865af4158015610ac9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aed9190611baf565b60208085019182526001600160a01b03861660009081526005808352604091829020875180518255840151600180830191909155945180516002808401919091559481015160038301558084015160048301556060810151928201929092556080820151600682015560a0820151600782015560c0820151600882015560e08201516009820155610100820151600a820155610120820151600b820155610140820151600c820155610160820151600d820155610180820151600e8201556101a090910151600f82015590860151601082018054889593949293919260ff1990911691908490811115610be257610be26118d4565b02179055506060820151601082018054610100600160a81b0319166101006001600160a01b0393841681029190911790915560808401516011840180546001600160a01b03191691841691909117905560a084015160128401805460c087015160e0880151939095166001600160a81b031990911617600160a01b941515949094029390931760ff60a81b1916600160a81b91151591909102179091558201518051610c98916013840191602090910190611290565b50610120820151816014015590505082604051610cb59190611c9a565b604051908190038120906001600160a01b038616907f060c1d738bd5215bd30cc8c656dd056952a6656f41966f90d37c1442ff459df890600090a350505050565b600060026001600160a01b03841660009081526005602052604090206010015460ff166002811115610d2a57610d2a6118d4565b14158015610d4857503260009081526007602052604090205460ff16155b610da05760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20544f4b454e415f4f525f43414c4c45525f42414e60448201526213915160ea1b6064820152608401610328565b60026001600160a01b03831660009081526005602052604090206010015460ff166002811115610dd257610dd26118d4565b14158015610df057503260009081526007602052604090205460ff16155b610e485760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20544f4b454e425f4f525f43414c4c45525f42414e60448201526213915160ea1b6064820152608401610328565b6001546040516364e329cb60e11b81526001600160a01b03858116600483015284811660248301529091169063c9c65396906044016020604051808303816000875af1158015610e9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec09190611a8e565b9392505050565b6000546001600160a01b03163314610ef15760405162461bcd60e51b815260040161032890611a57565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b610f1b611314565b6001600160a01b03821660009081526005602081815260409283902083516101808082018652825461014080840191825260018501546101608086019190915291845287516101c08101895260028087015482526003870154828901526004870154828b015297860154606082015260068601546080820152600786015460a0820152600886015460c0820152600986015460e0820152600a860154610100820152600b860154610120820152600c86015491810191909152600d85015491810191909152600e84015491810191909152600f8301546101a0820152928101929092526010810154919390929084019160ff169081111561101e5761101e6118d4565b600281111561102f5761102f6118d4565b815260108201546001600160a01b03610100909104811660208301526011830154811660408301526012830154908116606083015260ff600160a01b8204811615156080840152600160a81b90910416151560a082015260138201805460c09092019161109b90611e39565b80601f01602080910402602001604051908101604052809291908181526020018280546110c790611e39565b80156111145780601f106110e957610100808354040283529160200191611114565b820191906000526020600020905b8154815290600101906020018083116110f757829003601f168201915b505050505081526020016014820154815250509050919050565b3360009081526006602052604090205460ff1661115d5760405162461bcd60e51b815260040161032890611a22565b801561119a57506001600160a01b0316600090815260056020526040902060108101805460ff19166002179055601201805460ff60a01b19169055565b506001600160a01b03166000908152600560205260409020601001805460ff19169055565b6000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561121b575060408051601f3d908101601f1916820190925261121891810190611a8e565b60015b61128557816001600160a01b031663893d20e86040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611279575060408051601f3d908101601f1916820190925261127691810190611a8e565b60015b61128557506000919050565b92915050565b919050565b82805461129c90611e39565b90600052602060002090601f0160209004810192826112be5760008555611304565b82601f106112d757805160ff1916838001178555611304565b82800160010185558215611304579182015b828111156113045782518255916020019190600101906112e9565b506113109291506113e9565b5090565b60408051610180810190915260006101408201818152610160830191909152819081526020016113ac604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8152602001600081526000602082018190526040820181905260608083018290526080830182905260a0830182905260c083015260e09091015290565b5b8082111561131057600081556001016113ea565b6001600160a01b038116811461141357600080fd5b50565b803561128b816113fe565b60006020828403121561143357600080fd5b8135610ec0816113fe565b801515811461141357600080fd5b803561128b8161143e565b6000806040838503121561146a57600080fd5b8235611475816113fe565b915060208301356114858161143e565b809150509250929050565b6000602082840312156114a257600080fd5b5035919050565b6000806000606084860312156114be57600080fd5b83356114c9816113fe565b925060208401356114d9816113fe565b915060408401356114e9816113fe565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561152e5761152e6114f4565b60405290565b604051610140810167ffffffffffffffff8111828210171561152e5761152e6114f4565b60006040828403121561156a57600080fd5b6040516040810181811067ffffffffffffffff8211171561158d5761158d6114f4565b604052823581526020928301359281019290925250919050565b60006101c082840312156115ba57600080fd5b6115c261150a565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b80356003811061128b57600080fd5b600082601f83011261167c57600080fd5b813567ffffffffffffffff80821115611697576116976114f4565b604051601f8301601f19908116603f011681019082821181831017156116bf576116bf6114f4565b816040528381528660208588010111156116d857600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561170b57600080fd5b8235611716816113fe565b9150602083013567ffffffffffffffff8082111561173357600080fd5b90840190610300828703121561174857600080fd5b611750611534565b61175a8784611558565b815261176987604085016115a7565b602082015261177b610200840161165c565b604082015261178d6102208401611416565b606082015261179f6102408401611416565b60808201526117b16102608401611416565b60a08201526117c3610280840161144c565b60c08201526117d56102a0840161144c565b60e08201526102c0830135828111156117ed57600080fd5b6117f98882860161166b565b610100830152506102e08301356101208201528093505050509250929050565b6000806040838503121561182c57600080fd5b8235611837816113fe565b91506020830135611485816113fe565b805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b634e487b7160e01b600052602160045260246000fd5b6003811061190857634e487b7160e01b600052602160045260246000fd5b9052565b60005b8381101561192757818101518382015260200161190f565b83811115611936576000848401525b50505050565b6000815180845261195481602086016020860161190c565b601f01601f19169290920160200192915050565b6020808252825180518383015201516040820152600060208301516119906060840182611847565b5060408301516119a46102208401826118ea565b5060608301516001600160a01b039081166102408401526080840151811661026084015260a08401511661028083015260c083015115156102a083015260e083015115156102c08301526101008301516103006102e08401819052611a0d61032085018361193c565b61012095909501519301929092525090919050565b6020808252818101527f44617277696e537761703a2043414c4c45525f4e4f545f56414c494441544f52604082015260600190565b6020808252601a908201527f44617277696e537761703a2043414c4c45525f4e4f545f444556000000000000604082015260600190565b600060208284031215611aa057600080fd5b8151610ec0816113fe565b60808152611ac760808201865180518252602090810151910152565b60006020860151611adb60c0840182611847565b506040860151611aef6102808401826118ea565b5060608601516001600160a01b039081166102a0840152608087015181166102c084015260a0870151166102e083015260c086015115156103008084019190915260e08701511515610320840152610100870151610340840191909152611b5a61038084018261193c565b610120979097015161036084015250506020810193909352604083019190915260609091015290565b600060208284031215611b9557600080fd5b8151610ec08161143e565b6101c081016112858284611847565b60006101c08284031215611bc257600080fd5b611bca61150a565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152506101a08084015181830152508091505092915050565b611c7082826118ea565b5060200190565b60008151611c8981856020860161190c565b601f01601f19169290920192915050565b8151805182526020908101518183015282015180516040830152600090611d2b611d1e611d11611d04611cf7611cea611cdd60608a016020890151815260200190565b6040880151815260200190565b6060870151815260200190565b6080860151815260200190565b60a0850151815260200190565b60c0840151815260200190565b60e0830151815260200190565b6101008201518152602081019050610120611d90611d82611d74611d66611d588686890151815260200190565b610140880151815260200190565b610160870151815260200190565b610180860151815260200190565b6101a0850151815260200190565b50611e2f611e23611e18611e09611dfa611de4611dce611db86102008d0160408f0151611c66565b60608e01516001600160a01b0316815260200190565b60808d01516001600160a01b0316815260200190565b60a08c01516001600160a01b0316815260200190565b60c08b01511515815260200190565b60e08a01511515815260200190565b610100890151611c77565b82880151815260200190565b9695505050505050565b600181811c90821680611e4d57607f821691505b602082108103611e6d57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212203bd1ebffd9c0aaf04437619a197c313635c106d067323775123f328b6a7f478064736f6c634300080e0033";

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
