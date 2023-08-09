/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Tokenomics2Library,
  Tokenomics2LibraryInterface,
} from "../../../contracts/libraries/Tokenomics2Library";

const _abi = [
  {
    inputs: [
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
    ],
    name: "adjustTokenomics",
    outputs: [
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
        name: "returnToks",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
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
            type: "IDarwinSwapLister.TokenStatus",
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
        name: "tokInfo",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "maxTok1Tax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTok2Tax",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTotalTax",
        type: "uint256",
      },
    ],
    name: "ensureTokenomics",
    outputs: [
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "antiDumpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "otherToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "otherTokenB2OtherToLI",
        type: "uint256",
      },
    ],
    name: "handleLIRefill",
    outputs: [
      {
        internalType: "uint256",
        name: "refill",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61342261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c80638ff478e5116100655780638ff478e51461010457806398958dd1146101175780639acf9d7914610137578063b2fb7564146101e857600080fd5b8063205247931461008c5780633e545f31146100bf57806356df23bb146100e1575b600080fd5b81801561009857600080fd5b506100ac6100a7366004612ab7565b610208565b6040519081526020015b60405180910390f35b8180156100cb57600080fd5b506100df6100da366004612ab7565b610980565b005b6100f46100ef366004612d56565b611208565b60405190151581526020016100b6565b6100ac610112366004612e7a565b61135a565b81801561012357600080fd5b506100df610132366004612ed5565b61139d565b61014a610145366004612f3d565b611c1a565b6040516100b69190815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a091820151918101919091526101c00190565b8180156101f457600080fd5b506100ac610203366004612f56565b611f1e565b600080826001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015610249573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026d9190612fab565b60405163f5dab71160e01b81526001600160a01b038881166004830152919091169063f5dab71190602401600060405180830381865afa1580156102b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102dd9190810190613147565b90506000836001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa15801561031f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103439190612fab565b60405163f5dab71160e01b81526001600160a01b038781166004830152919091169063f5dab71190602401600060405180830381865afa15801561038b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103b39190810190613147565b90508160c0015180156103c757508060e001515b1561055b576000612710836020015160400151886103e5919061326a565b6103ef9190613289565b9050801561054d57604080518082018252601981526000805160206133cd83398151915260209091015260a0840151905160009182916001600160a01b038c16916000805160206133ad8339815191529161044f919087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161048d91906132c4565b6000604051808303816000865af19150503d80600081146104ca576040519150601f19603f3d011682016040523d82523d6000602084013e6104cf565b606091505b50915091508180156104f95750805115806104f95750808060200190518101906104f991906132e0565b61054a5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f413100000060448201526064015b60405180910390fd5b50505b61055781856132fd565b9350505b8060c00151801561056d57508160e001515b156109765760405163e6a4390560e01b81526001600160a01b03868116600483015288811660248301526000919086169063e6a4390590604401602060405180830381865afa1580156105c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e89190612fab565b905060008260200151610140015111801561060b57506001600160a01b03811615155b156107eb5760006106288988888b8760200151610140015161135a565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa15801561066a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068e9190612fab565b604080518082018252601981526000805160206133cd8339815191526020909101525190915060009081906001600160a01b038d16906000805160206133ad833981519152906106e490869088906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161072291906132c4565b6000604051808303816000865af19150503d806000811461075f576040519150601f19603f3d011682016040523d82523d6000602084013e610764565b606091505b509150915081801561078e57508051158061078e57508080602001905181019061078e91906132e0565b6107e65760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20414e544944554d505f4641494c45445f53454c4c6044820152625f423160e81b6064820152608401610541565b505050505b600061271083602001516020015189610804919061326a565b61080e9190613289565b9050801561096757604080518082018252601981526000805160206133cd83398151915260209091015260a0840151905160009182916001600160a01b038d16916000805160206133ad8339815191529161086e919087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516108ac91906132c4565b6000604051808303816000865af19150503d80600081146108e9576040519150601f19603f3d011682016040523d82523d6000602084013e6108ee565b606091505b509150915081801561091857508051158061091857508080602001905181019061091891906132e0565b6109645760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f423100006044820152606401610541565b50505b61097181866132fd565b945050505b5050949350505050565b6000816001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e49190612fab565b60405163f5dab71160e01b81526001600160a01b03878116600483015291925060009183169063f5dab71190602401600060405180830381865afa158015610a30573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a589190810190613147565b60405163f5dab71160e01b81526001600160a01b03868116600483015291925060009184169063f5dab71190602401600060405180830381865afa158015610aa4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610acc9190810190613147565b90508160c001518015610ae057508060e001515b1561106a576020820151610100015115610c725760006127108360200151610100015188610b0e919061326a565b610b189190613289565b604080518082018252601981526000805160206133cd8339815191526020909101525190915060009081906001600160a01b038b16906000805160206133ad83398151915290610b6e90329087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610bac91906132c4565b6000604051808303816000865af19150503d8060008114610be9576040519150601f19603f3d011682016040523d82523d6000602084013e610bee565b606091505b5091509150818015610c18575080511580610c18575080806020019051810190610c1891906132e0565b610c6e5760405162461bcd60e51b815260206004820152602160248201527f44617277696e537761703a20524546554e445f4641494c45445f53454c4c5f416044820152601960f91b6064820152608401610541565b5050505b60405163e6a4390560e01b81526001600160a01b03888116600483015286811660248301526000919086169063e6a4390590604401602060405180830381865afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce89190612fab565b9050600083602001516101800151118015610d0b57506001600160a01b03811615155b15610eeb576000610d28878a888b8860200151610180015161135a565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8e9190612fab565b604080518082018252601981526000805160206133cd8339815191526020909101525190915060009081906001600160a01b038b16906000805160206133ad83398151915290610de490869088906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610e2291906132c4565b6000604051808303816000865af19150503d8060008114610e5f576040519150601f19603f3d011682016040523d82523d6000602084013e610e64565b606091505b5091509150818015610e8e575080511580610e8e575080806020019051810190610e8e91906132e0565b610ee65760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20414e544944554d505f4641494c45445f53454c4c6044820152622fa11960e91b6064820152608401610541565b505050505b600061271084602001516080015189610f04919061326a565b610f0e9190613289565b9050801561106757604080518082018252601981526000805160206133cd83398151915260209091015260a0850151905160009182916001600160a01b038d16916000805160206133ad83398151915291610f6e919087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610fac91906132c4565b6000604051808303816000865af19150503d8060008114610fe9576040519150601f19603f3d011682016040523d82523d6000602084013e610fee565b606091505b509150915081801561101857508051158061101857508080602001905181019061101891906132e0565b6110645760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f413200006044820152606401610541565b50505b50505b8060c00151801561107c57508160e001515b156111ff576000612710826020015160e001518861109a919061326a565b6110a49190613289565b905080156111fd57604080518082018252601981526000805160206133cd83398151915260209091015260a0830151905160009182916001600160a01b038c16916000805160206133ad83398151915291611104919087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161114291906132c4565b6000604051808303816000865af19150503d806000811461117f576040519150601f19603f3d011682016040523d82523d6000602084013e611184565b606091505b50915091508180156111ae5750805115806111ae5750808060200190518101906111ae91906132e0565b6111fa5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f42320000006044820152606401610541565b50505b505b50505050505050565b60208085015185516101408201519282015182516000948592909161122d91906132fd565b61123791906132fd565b905060008361016001518460600151856040015161125591906132fd565b61125f91906132fd565b905060008461018001518561010001518660a00151876080015161128391906132fd565b61128d91906132fd565b61129791906132fd565b90506000856101a001518661012001518760e001518860c001516112bb91906132fd565b6112c591906132fd565b6112cf91906132fd565b90508984111580156112e15750898311155b80156112ed5750888211155b80156112f95750888111155b801561130b5750845161010087015111155b80156113205750846020015186610120015111155b801561134b575087828261133487876132fd565b61133e91906132fd565b61134891906132fd565b11155b9b9a5050505050505050505050565b600080600061136a8689896126a9565b915091506127108461137d878486612761565b611387919061326a565b6113919190613289565b98975050505050505050565b6000816001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114019190612fab565b60405163f5dab71160e01b81526001600160a01b03888116600483015291925060009183169063f5dab71190602401600060405180830381865afa15801561144d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114759190810190613147565b60405163f5dab71160e01b81526001600160a01b03878116600483015291925060009184169063f5dab71190602401600060405180830381865afa1580156114c1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114e99190810190613147565b90508160c0015180156114fd57508060e001515b15611a7c576020820151610120015115611685576000612710836020015161012001518961152b919061326a565b6115359190613289565b604080518082018252601981526000805160206133cd8339815191526020909101525190915060009081906001600160a01b038c16906000805160206133ad8339815191529061158b908b9087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516115c991906132c4565b6000604051808303816000865af19150503d8060008114611606576040519150601f19603f3d011682016040523d82523d6000602084013e61160b565b606091505b509150915081801561163557508051158061163557508080602001905181019061163591906132e0565b6116815760405162461bcd60e51b815260206004820181905260248201527f44617277696e537761703a20524546554e445f4641494c45445f4255595f41326044820152606401610541565b5050505b60405163e6a4390560e01b81526001600160a01b03878116600483015289811660248301526000919086169063e6a4390590604401602060405180830381865afa1580156116d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116fb9190612fab565b9050600083602001516101a0015111801561171e57506001600160a01b03811615155b156118fd57600061173b888b888c88602001516101a0015161135a565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa15801561177d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a19190612fab565b604080518082018252601981526000805160206133cd8339815191526020909101525190915060009081906001600160a01b038c16906000805160206133ad833981519152906117f790869088906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161183591906132c4565b6000604051808303816000865af19150503d8060008114611872576040519150601f19603f3d011682016040523d82523d6000602084013e611877565b606091505b50915091508180156118a15750805115806118a15750808060200190518101906118a191906132e0565b6118f85760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20414e544944554d505f4641494c45445f4255595f604482015261211960f11b6064820152608401610541565b505050505b6000612710846020015160c001518a611916919061326a565b6119209190613289565b90508015611a7957604080518082018252601981526000805160206133cd83398151915260209091015260a0850151905160009182916001600160a01b038e16916000805160206133ad83398151915291611980919087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516119be91906132c4565b6000604051808303816000865af19150503d80600081146119fb576040519150601f19603f3d011682016040523d82523d6000602084013e611a00565b606091505b5091509150818015611a2a575080511580611a2a575080806020019051810190611a2a91906132e0565b611a765760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f41320000006044820152606401610541565b50505b50505b8060c001518015611a8e57508160e001515b156111fd576000612710826020015160a0015189611aac919061326a565b611ab69190613289565b90508015611c0f57604080518082018252601981526000805160206133cd83398151915260209091015260a0830151905160009182916001600160a01b038d16916000805160206133ad83398151915291611b16919087906024016132ab565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611b5491906132c4565b6000604051808303816000865af19150503d8060008114611b91576040519150601f19603f3d011682016040523d82523d6000602084013e611b96565b606091505b5091509150818015611bc0575080511580611bc0575080806020019051810190611bc091906132e0565b611c0c5760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f423200006044820152606401610541565b50505b505050505050505050565b611c8c604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6064611c9d6040840135600561326a565b611ca79190613289565b611cb5906040840135613315565b60408201526064611cc88335600561326a565b611cd29190613289565b611cdd908335613315565b81526064611cf060c0840135600561326a565b611cfa9190613289565b611d089060c0840135613315565b60c08201526064611d1e6080840135600561326a565b611d289190613289565b611d36906080840135613315565b60808201526064611d4c6060840135600561326a565b611d569190613289565b611d64906060840135613315565b60608201526064611d7a6020840135600561326a565b611d849190613289565b611d92906020840135613315565b60208201526064611da860e0840135600561326a565b611db29190613289565b611dc09060e0840135613315565b60e08201526064611dd660a0840135600561326a565b611de09190613289565b611dee9060a0840135613315565b60a08201526064611e05610120840135600561326a565b611e0f9190613289565b611e1e90610120840135613315565b6101208201526064611e36610100840135600561326a565b611e409190613289565b611e4f90610100840135613315565b6101008201526064611e67610140840135600561326a565b611e719190613289565b611e8090610140840135613315565b6101408201526064611e98610160840135600561326a565b611ea29190613289565b611eb190610160840135613315565b6101608201526064611ec9610180840135600561326a565b611ed39190613289565b611ee290610180840135613315565b6101808201526064611efa6101a0840135600561326a565b611f049190613289565b611f13906101a0840135613315565b6101a0820152919050565b600080826001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f839190612fab565b60405163f5dab71160e01b81526001600160a01b038981166004830152919091169063f5dab71190602401600060405180830381865afa158015611fcb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611ff39190810190613147565b90506000836001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015612035573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120599190612fab565b60405163f5dab71160e01b81526001600160a01b038781166004830152919091169063f5dab71190602401600060405180830381865afa1580156120a1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526120c99190810190613147565b90508160c0015180156120dd57508060e001515b1561226a57602082015151600090612710906120f9908961326a565b6121039190613289565b9050801561225c576000808a6001600160a01b031660405180606001604052806025815260200161338860259139805160209091012060a08701516040516001600160a01b03808f16602483015290911660448201526064810186905260840160408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516121a191906132c4565b6000604051808303816000865af19150503d80600081146121de576040519150601f19603f3d011682016040523d82523d6000602084013e6121e3565b606091505b509150915081801561220d57508051158061220d57508080602001905181019061220d91906132e0565b6122595760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f413100006044820152606401610541565b50505b61226681856132fd565b9350505b8060c00151801561227c57508160e001515b1561269e5760405163e6a4390560e01b81526001600160a01b03898116600483015286811660248301526000919086169063e6a4390590604401602060405180830381865afa1580156122d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f79190612fab565b905060008260200151610160015111801561231a57506001600160a01b03811615155b156125065760006123378a88888b8760200151610160015161135a565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa158015612379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061239d9190612fab565b90506000808c6001600160a01b031660405180606001604052806025815260200161338860259139805190602001208d8587604051602401612400939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161243e91906132c4565b6000604051808303816000865af19150503d806000811461247b576040519150601f19603f3d011682016040523d82523d6000602084013e612480565b606091505b50915091508180156124aa5750805115806124aa5750808060200190518101906124aa91906132e0565b6125015760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20414e544944554d505f4641494c45445f4255595f604482015261423160f01b6064820152608401610541565b505050505b60006127108360200151606001518961251f919061326a565b6125299190613289565b9050801561268f576000808b6001600160a01b031660405180606001604052806025815260200161338860259139805190602001208c8760a0015186604051602401612596939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516125d491906132c4565b6000604051808303816000865af19150503d8060008114612611576040519150601f19603f3d011682016040523d82523d6000602084013e612616565b606091505b509150915081801561264057508051158061264057508080602001905181019061264091906132e0565b61268c5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f42310000006044820152606401610541565b50505b61269981866132fd565b945050505b505095945050505050565b60008060006126b88585612883565b5090506000806126c988888861297b565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015612706573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061272a919061332c565b5091509150826001600160a01b0316876001600160a01b03161461274f578082612752565b81815b90999098509650505050505050565b60008084116127c75760405162461bcd60e51b815260206004820152602c60248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f60448201526b125394155517d05353d5539560a21b6064820152608401610541565b6000831180156127d75750600082115b6128355760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f6044820152684c495155494449545960b81b6064820152608401610541565b6000612843856103e561326a565b90506000612851848361326a565b9050600082612862876103e861326a565b61286c91906132fd565b90506128788183613289565b979650505050505050565b600080826001600160a01b0316846001600160a01b0316036128f65760405162461bcd60e51b815260206004820152602660248201527f44617277696e537761704c6962726172793a204944454e544943414c5f41444460448201526552455353455360d01b6064820152608401610541565b826001600160a01b0316846001600160a01b031610612916578284612919565b83835b90925090506001600160a01b0382166129745760405162461bcd60e51b815260206004820152601f60248201527f44617277696e537761704c6962726172793a205a45524f5f41444452455353006044820152606401610541565b9250929050565b600080600061298a8585612883565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b1660348201529193509150869060480160405160208183030381529060405280519060200120876001600160a01b031663257671f56040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a32919061336e565b6040516001600160f81b0319602082015260609390931b6bffffffffffffffffffffffff191660218401526035830191909152605582015260750160408051601f1981840301815291905280516020909101209695505050505050565b6001600160a01b0381168114612aa457600080fd5b50565b8035612ab281612a8f565b919050565b60008060008060808587031215612acd57600080fd5b8435612ad881612a8f565b9350602085013592506040850135612aef81612a8f565b91506060850135612aff81612a8f565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612b4357612b43612b0a565b60405290565b6040516101c0810167ffffffffffffffff81118282101715612b4357612b43612b0a565b604051610140810167ffffffffffffffff81118282101715612b4357612b43612b0a565b604051601f8201601f1916810167ffffffffffffffff81118282101715612bba57612bba612b0a565b604052919050565b600060408284031215612bd457600080fd5b612bdc612b20565b9050813581526020820135602082015292915050565b60006101c08284031215612c0557600080fd5b612c0d612b49565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b60038110612aa457600080fd5b8035612ab281612ca7565b8015158114612aa457600080fd5b8035612ab281612cbf565b600067ffffffffffffffff821115612cf257612cf2612b0a565b50601f01601f191660200190565b600082601f830112612d1157600080fd5b8135612d24612d1f82612cd8565b612b91565b818152846020838601011115612d3957600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215612d6c57600080fd5b843567ffffffffffffffff80821115612d8457600080fd5b908601906103008289031215612d9957600080fd5b612da1612b6d565b612dab8984612bc2565b8152612dba8960408501612bf2565b6020820152612dcc6102008401612cb4565b6040820152612dde6102208401612aa7565b6060820152612df06102408401612aa7565b6080820152612e026102608401612aa7565b60a0820152612e146102808401612ccd565b60c0820152612e266102a08401612ccd565b60e08201526102c083013582811115612e3e57600080fd5b612e4a8a828601612d00565b610100830152506102e0929092013561012083015250966020860135965060408601359560600135945092505050565b600080600080600060a08688031215612e9257600080fd5b8535612e9d81612a8f565b94506020860135612ead81612a8f565b93506040860135612ebd81612a8f565b94979396509394606081013594506080013592915050565b600080600080600060a08688031215612eed57600080fd5b8535612ef881612a8f565b9450602086013593506040860135612f0f81612a8f565b92506060860135612f1f81612a8f565b91506080860135612f2f81612a8f565b809150509295509295909350565b60006101c08284031215612f5057600080fd5b50919050565b600080600080600060a08688031215612f6e57600080fd5b8535612f7981612a8f565b94506020860135612f8981612a8f565b9350604086013592506060860135612f1f81612a8f565b8051612ab281612a8f565b600060208284031215612fbd57600080fd5b8151612fc881612a8f565b9392505050565b600060408284031215612fe157600080fd5b612fe9612b20565b9050815181526020820151602082015292915050565b60006101c0828403121561301257600080fd5b61301a612b49565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b8051612ab281612ca7565b8051612ab281612cbf565b60005b838110156130e55781810151838201526020016130cd565b838111156130f4576000848401525b50505050565b600082601f83011261310b57600080fd5b8151613119612d1f82612cd8565b81815284602083860101111561312e57600080fd5b61313f8260208301602087016130ca565b949350505050565b60006020828403121561315957600080fd5b815167ffffffffffffffff8082111561317157600080fd5b90830190610300828603121561318657600080fd5b61318e612b6d565b6131988684612fcf565b81526131a78660408501612fff565b60208201526131b961020084016130b4565b60408201526131cb6102208401612fa0565b60608201526131dd6102408401612fa0565b60808201526131ef6102608401612fa0565b60a082015261320161028084016130bf565b60c08201526132136102a084016130bf565b60e08201526102c08301518281111561322b57600080fd5b613237878286016130fa565b610100830152506102e09290920151610120830152509392505050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561328457613284613254565b500290565b6000826132a657634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b03929092168252602082015260400190565b600082516132d68184602087016130ca565b9190910192915050565b6000602082840312156132f257600080fd5b8151612fc881612cbf565b6000821982111561331057613310613254565b500190565b60008282101561332757613327613254565b500390565b60008060006060848603121561334157600080fd5b8351925060208401519150604084015163ffffffff8116811461336357600080fd5b809150509250925092565b60006020828403121561338057600080fd5b505191905056fe7472616e7366657246726f6d28616464726573732c616464726573732c75696e7432353629a9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b7472616e7366657228616464726573732c75696e743235362900000000000000a26469706673582212200571c2330fd4d5d318ce7d3194e9f5b53bebf4125b391453fbc16fd3ccceb20e64736f6c634300080e0033";

type Tokenomics2LibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Tokenomics2LibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Tokenomics2Library__factory extends ContractFactory {
  constructor(...args: Tokenomics2LibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Tokenomics2Library> {
    return super.deploy(overrides || {}) as Promise<Tokenomics2Library>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Tokenomics2Library {
    return super.attach(address) as Tokenomics2Library;
  }
  override connect(signer: Signer): Tokenomics2Library__factory {
    return super.connect(signer) as Tokenomics2Library__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Tokenomics2LibraryInterface {
    return new utils.Interface(_abi) as Tokenomics2LibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Tokenomics2Library {
    return new Contract(address, _abi, signerOrProvider) as Tokenomics2Library;
  }
}
