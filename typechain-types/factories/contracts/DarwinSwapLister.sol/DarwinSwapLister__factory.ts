/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DarwinSwapLister,
  DarwinSwapListerInterface,
} from "../../../contracts/DarwinSwapLister.sol/DarwinSwapLister";

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
                name: "tokenB1SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToADG",
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
            internalType: "uint256",
            name: "antiDumpTriggerPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
          },
        ],
        indexed: true,
        internalType: "struct IDarwinSwapLister.TokenInfo",
        name: "proposalInfo",
        type: "tuple",
      },
    ],
    name: "TokenProposed",
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
    ],
    name: "TokenValidated",
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
    name: "listDarwinWithBNB",
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
                name: "tokenB1SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToADG",
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
            internalType: "uint256",
            name: "antiDumpTriggerPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
          },
        ],
        internalType: "struct IDarwinSwapLister.TokenInfo",
        name: "proposalInfo",
        type: "tuple",
      },
    ],
    name: "proposeToken",
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
                name: "tokenB1SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB1BuyToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2SellToADG",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenB2BuyToADG",
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
            internalType: "uint256",
            name: "antiDumpTriggerPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "purpose",
            type: "string",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenToValidate",
        type: "address",
      },
      {
        internalType: "enum IDarwinSwapLister.TokenStatus",
        name: "outcome",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isTokenValid",
        type: "bool",
      },
    ],
    name: "validateToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782558152600560205260409020805460ff191660011790556107d06002556103e86003556122ad806100566000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063a1c0aa0c116100ad578063d477f05f11610071578063d477f05f14610249578063d6e4b4dc1461025c578063f5dab7111461028f578063facca62c146102af578063facd743b146102c257600080fd5b8063a1c0aa0c146101ea578063a3832546146101fd578063afcd025d14610210578063c45a015514610223578063c9c653961461023657600080fd5b80632d508c7f116100f45780632d508c7f1461017d5780634623c91d146101865780635bb478081461019957806391cca3db146101ac578063989da3ed146101d757600080fd5b806306c6cd4514610126578063089c2ae81461013b5780631316bc6a146101575780632a93a4aa1461016a575b600080fd5b6101396101343660046117f6565b6102e5565b005b61014460035481565b6040519081526020015b60405180910390f35b610139610165366004611a5e565b610568565b610139610178366004611b7f565b610b24565b61014460025481565b610139610194366004611b9c565b610b9f565b6101396101a7366004611b7f565b610bf4565b6000546101bf906001600160a01b031681565b6040516001600160a01b03909116815260200161014e565b6101396101e5366004611bd5565b610c40565b6101396101f8366004611bd5565b610c6f565b61013961020b366004611bee565b610c9e565b61013961021e366004611b9c565b610fc1565b6001546101bf906001600160a01b031681565b6101bf610244366004611c2c565b61101b565b610139610257366004611b7f565b6112a4565b61027f61026a366004611b7f565b60066020526000908152604090205460ff1681565b604051901515815260200161014e565b6102a261029d366004611b7f565b6112f0565b60405161014e9190611d7b565b6101396102bd366004611b9c565b61150b565b61027f6102d0366004611b7f565b60056020526000908152604090205460ff1681565b6000546001600160a01b031633146103185760405162461bcd60e51b815260040161030f90611e30565b60405180910390fd5b6001600160a01b0382811660008181526004602081815260408084206010808201805460026001600160a81b031991821633610100810291821783179094556012958601805461ffff60a01b191661010160a01b9081179091558f8d16808c52888c2060fa600882018190556009820155968701805490951690921790921790925593830180546011850180546001600160a01b0319169094179093556001600160b01b03199092168b8b16179093179055670de0b6b3a7640000601390910155600154825163e6a4390560e01b8152948501919091526024840195909552519294939093169263e6a43905926044808401938290030181865afa158015610424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104489190611e67565b90506001600160a01b0381166104d3576001546040516364e329cb60e11b81526001600160a01b03868116600483015285811660248301529091169063c9c65396906044016020604051808303816000875af11580156104ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d09190611e67565b90505b6040516362c6744360e11b81526001600160a01b03828116600483015285169063c58ce88690602401600060405180830381600087803b15801561051657600080fd5b505af115801561052a573d6000803e3d6000fd5b50506040516001600160a01b03871692507f0f50dcd6b4adb20f081a117cb2f299c191049e4577515f3ddab316c0214cf1b09150600090a250505050565b6001600160a01b0382161580159061058c575060a08101516001600160a01b031615155b6105d85760405162461bcd60e51b815260206004820152601860248201527f44617277696e537761703a205a45524f5f414444524553530000000000000000604482015260640161030f565b6000816101200151511161062e5760405162461bcd60e51b815260206004820152601960248201527f44617277696e537761703a20454d5054595f505552504f534500000000000000604482015260640161030f565b6001600160a01b03821660009081526004602052604081206010015460ff16600381111561065e5761065e611ce7565b1480610699575060026001600160a01b03831660009081526004602052604090206010015460ff16600381111561069757610697611ce7565b145b80156106b557503360009081526006602052604090205460ff16155b61070d5760405162461bcd60e51b8152602060048201526024808201527f44617277696e537761703a20544f4b454e5f50524f504f5345445f4f525f42416044820152631393915160e21b606482015260840161030f565b60006107188361158d565b9050336001600160a01b038216148061073b57506000546001600160a01b031633145b6107925760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a2043414c4c45525f4e4f545f544f4b454e5f4f574e60448201526122a960f11b606482015260840161030f565b6001600160a01b03811660808301526001604083018190525060006060830181905260c0830181905260e083018190526002546003546040516363f0381960e11b815273__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__9263c7e07032926108019288929190600401611e84565b602060405180830381865af415801561081e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108429190611f52565b9050806108a25760405162461bcd60e51b815260206004820152602860248201527f44617277696e537761703a20494e56414c49445f5245515545535445445f544f6044820152674b454e4f4d49435360c01b606482015260840161030f565b6020830151604051639acf9d7960e01b815273__$6a4709d1eab6e3f604fe8171dfdaaeb3a4$__91639acf9d79916108dd9190600401611f6f565b6101c060405180830381865af41580156108fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091f9190611f7e565b60208085019182526001600160a01b03861660009081526004808352604091829020875180518255840151600180830191909155945180516002830155938401516003808301919091558484015192820192909255606084015160058201556080840151600682015560a0840151600782015560c0840151600882015560e08401516009820155610100840151600a820155610120840151600b820155610140840151600c820155610160840151600d820155610180840151600e8201556101a090930151600f8401559086015160108301805488959293919260ff19909116918490811115610a1157610a11611ce7565b02179055506060820151601082018054610100600160a81b0319166101006001600160a01b0393841681029190911790915560808401516011840180546001600160a01b03191691841691909117905560a084015160128401805460c087015160e0880151939095166001600160a81b031990911617600160a01b941515949094029390931760ff60a81b1916600160a81b911515919091021790915582015160138201556101208201518051610ad291601484019160209091019061165e565b5050604051610ae391508490612069565b604051908190038120906001600160a01b038616907fd94eaafb9542e8e77368e865ebe93133e4272b07c9d7eccd4c8a714de80191c690600090a350505050565b3360009081526005602052604090205460ff16610b535760405162461bcd60e51b815260040161030f90612208565b6001600160a01b0316600090815260046020526040902060108101805460026001600160a81b0319909116336101000217179055601201805461ffff60a01b191661010160a01b179055565b6000546001600160a01b03163314610bc95760405162461bcd60e51b815260040161030f90611e30565b6001600160a01b03919091166000908152600560205260409020805460ff1916911515919091179055565b6000546001600160a01b03163314610c1e5760405162461bcd60e51b815260040161030f90611e30565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610c6a5760405162461bcd60e51b815260040161030f90611e30565b600355565b6000546001600160a01b03163314610c995760405162461bcd60e51b815260040161030f90611e30565b600255565b3360009081526005602052604090205460ff16610ccd5760405162461bcd60e51b815260040161030f90612208565b60016001600160a01b03841660009081526004602052604090206010015460ff166003811115610cff57610cff611ce7565b14610d4c5760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a20544f4b454e5f4e4f545f50524f504f5345440000604482015260640161030f565b6001826003811115610d6057610d60611ce7565b14158015610d8057506000826003811115610d7d57610d7d611ce7565b14155b610dcc5760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a20494e56414c49445f56414c49444154494f4e0000604482015260640161030f565b6001600160a01b038316600090815260046020526040902060128101805460ff60a01b1916600160a01b841515021790556010018054610100600160a81b03198116610100330290811783558492916001600160a81b03191660ff19909116176001836003811115610e4057610e40611ce7565b02179055506003826003811115610e5957610e59611ce7565b03610ecc576001600160a01b03808416600081815260046020818152604080842060110180548716855260068352818520805460ff1916600117905585855292909152905490519316927f70c941e71bd2ec15d61b91996cdc301fa6f523fb0acc41858bd0eb11f77000659190a3505050565b80610f8857610ed96116e2565b6001600160a01b038416600090815260046020818152604092839020845160028201559084015160038201559183015190820155606082015160058201556080820151600682015560a0820151600782015560c0820151600882015560e08201516009820155610100820151600a820155610120820151600b820155610140820151600c820155610160820151600d820155610180820151600e8201556101a090910151600f90910155505050565b6040516001600160a01b038416907f0f50dcd6b4adb20f081a117cb2f299c191049e4577515f3ddab316c0214cf1b090600090a2505050565b3360009081526005602052604090205460ff16610ff05760405162461bcd60e51b815260040161030f90612208565b6001600160a01b03919091166000908152600660205260409020805460ff1916911515919091179055565b600060036001600160a01b03841660009081526004602052604090206010015460ff16600381111561104f5761104f611ce7565b1415801561106d57503260009081526006602052604090205460ff16155b6110c55760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20544f4b454e415f4f525f43414c4c45525f42414e60448201526213915160ea1b606482015260840161030f565b60036001600160a01b03831660009081526004602052604090206010015460ff1660038111156110f7576110f7611ce7565b1415801561111557503260009081526006602052604090205460ff16155b61116d5760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20544f4b454e425f4f525f43414c4c45525f42414e60448201526213915160ea1b606482015260840161030f565b6001600160a01b03831660009081526004602052604081206010015460ff16600381111561119d5761119d611ce7565b036111c9576001600160a01b0383166000908152600460205260409020601001805460ff191660021790555b6001600160a01b03821660009081526004602052604081206010015460ff1660038111156111f9576111f9611ce7565b03611225576001600160a01b0382166000908152600460205260409020601001805460ff191660021790555b6001546040516364e329cb60e11b81526001600160a01b03858116600483015284811660248301529091169063c9c65396906044016020604051808303816000875af1158015611279573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129d9190611e67565b9392505050565b6000546001600160a01b031633146112ce5760405162461bcd60e51b815260040161030f90611e30565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6112f8611751565b6001600160a01b03821660009081526004602081815260409283902083516101808082018652825461014080840191825260018501546101608086019190915291845287516101c081018952600286015481526003808701548289015297860154818a01526005860154606082015260068601546080820152600786015460a0820152600886015460c0820152600986015460e0820152600a860154610100820152600b860154610120820152600c86015491810191909152600d85015491810191909152600e84015491810191909152600f8301546101a0820152928101929092526010810154919390929084019160ff16908111156113fb576113fb611ce7565b600381111561140c5761140c611ce7565b815260108201546001600160a01b03610100909104811660208301526011830154811660408301526012830154908116606083015260ff600160a01b8204811615156080840152600160a81b90910416151560a0820152601382015460c082015260148201805460e0909201916114829061223d565b80601f01602080910402602001604051908101604052809291908181526020018280546114ae9061223d565b80156114fb5780601f106114d0576101008083540402835291602001916114fb565b820191906000526020600020905b8154815290600101906020018083116114de57829003601f168201915b5050505050815250509050919050565b3360009081526005602052604090205460ff1661153a5760405162461bcd60e51b815260040161030f90612208565b801561156857506001600160a01b03166000908152600460205260409020601001805460ff19166003179055565b506001600160a01b03166000908152600460205260409020601001805460ff19169055565b6000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156115e9575060408051601f3d908101601f191682019092526115e691810190611e67565b60015b61165357816001600160a01b031663893d20e86040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611647575060408051601f3d908101601f1916820190925261164491810190611e67565b60015b61165357506000919050565b92915050565b919050565b82805461166a9061223d565b90600052602060002090601f01602090048101928261168c57600085556116d2565b82601f106116a557805160ff19168380011785556116d2565b828001600101855582156116d2579182015b828111156116d25782518255916020019190600101906116b7565b506116de9291506117be565b5090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040805161018081019091526000610140820181815261016083019190915281526020810161177e6116e2565b8152602001600081526000602082018190526040820181905260608083018290526080830182905260a0830182905260c083019190915260e09091015290565b5b808211156116de57600081556001016117bf565b6001600160a01b03811681146117e857600080fd5b50565b8035611659816117d3565b60008060006060848603121561180b57600080fd5b8335611816816117d3565b92506020840135611826816117d3565b91506040840135611836816117d3565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561187b5761187b611841565b60405290565b604051610140810167ffffffffffffffff8111828210171561187b5761187b611841565b6000604082840312156118b757600080fd5b6040516040810181811067ffffffffffffffff821117156118da576118da611841565b604052823581526020928301359281019290925250919050565b60006101c0828403121561190757600080fd5b61190f611857565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b80356004811061165957600080fd5b80151581146117e857600080fd5b8035611659816119b8565b600082601f8301126119e257600080fd5b813567ffffffffffffffff808211156119fd576119fd611841565b604051601f8301601f19908116603f01168101908282118183101715611a2557611a25611841565b81604052838152866020858801011115611a3e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611a7157600080fd5b8235611a7c816117d3565b9150602083013567ffffffffffffffff80821115611a9957600080fd5b908401906103008287031215611aae57600080fd5b611ab6611881565b611ac087846118a5565b8152611acf87604085016118f4565b6020820152611ae161020084016119a9565b6040820152611af361022084016117eb565b6060820152611b0561024084016117eb565b6080820152611b1761026084016117eb565b60a0820152611b2961028084016119c6565b60c0820152611b3b6102a084016119c6565b60e08201526102c08301356101008201526102e083013582811115611b5f57600080fd5b611b6b888286016119d1565b610120830152508093505050509250929050565b600060208284031215611b9157600080fd5b813561129d816117d3565b60008060408385031215611baf57600080fd5b8235611bba816117d3565b91506020830135611bca816119b8565b809150509250929050565b600060208284031215611be757600080fd5b5035919050565b600080600060608486031215611c0357600080fd5b8335611c0e816117d3565b9250611c1c602085016119a9565b91506040840135611836816119b8565b60008060408385031215611c3f57600080fd5b8235611c4a816117d3565b91506020830135611bca816117d3565b805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012080820151908301526101408082015190830152610160808201519083015261018080820151908301526101a090810151910152565b634e487b7160e01b600052602160045260246000fd5b60048110611d1b57634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015611d3a578181015183820152602001611d22565b83811115611d49576000848401525b50505050565b60008151808452611d67816020860160208601611d1f565b601f01601f19169290920160200192915050565b602080825282518051838301520151604082015260006020830151611da36060840182611c5a565b506040830151611db7610220840182611cfd565b5060608301516001600160a01b039081166102408401526080840151811661026084015260a08401511661028083015260c083015115156102a083015260e083015115156102c08301526101008301516102e083015261012083015161030080840152611e28610320840182611d4f565b949350505050565b6020808252601a908201527f44617277696e537761703a2043414c4c45525f4e4f545f444556000000000000604082015260600190565b600060208284031215611e7957600080fd5b815161129d816117d3565b60608152611ea060608201855180518252602090810151910152565b60006020850151611eb460a0840182611c5a565b506040850151611ec8610260840182611cfd565b5060608501516001600160a01b03908116610280840152608086015181166102a084015260a0860151166102c083015260c085015115156102e083015260e0850151151561030080840191909152610100860151610320840152610120860151610340840191909152611f3f610360840182611d4f565b6020840195909552505060400152919050565b600060208284031215611f6457600080fd5b815161129d816119b8565b6101c081016116538284611c5a565b60006101c08284031215611f9157600080fd5b611f99611857565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152506101a08084015181830152508091505092915050565b61203f8282611cfd565b5060200190565b60008151612058818560208601611d1f565b601f01601f19169290920192915050565b81518051825260209081015181830152820151805160408301526000906120fa6120ed6120e06120d36120c66120b96120ac60608a016020890151815260200190565b6040880151815260200190565b6060870151815260200190565b6080860151815260200190565b60a0850151815260200190565b60c0840151815260200190565b60e0830151815260200190565b610100820151815260208101905061012061215f6121516121436121356121278686890151815260200190565b610140880151815260200190565b610160870151815260200190565b610180860151815260200190565b6101a0850151815260200190565b506121fe6121f56121e76121d86121c96121b361219d6121876102008d0160408f0151612035565b60608e01516001600160a01b0316815260200190565b60808d01516001600160a01b0316815260200190565b60a08c01516001600160a01b0316815260200190565b60c08b01511515815260200190565b60e08a01511515815260200190565b610100890151815260200190565b82880151612046565b9695505050505050565b6020808252818101527f44617277696e537761703a2043414c4c45525f4e4f545f56414c494441544f52604082015260600190565b600181811c9082168061225157607f821691505b60208210810361227157634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220ccf8395bd51af8ed4575dab51231d3bfde53abbedf67ba7567e26647d3d370f864736f6c634300080e0033";

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
