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
  "0x61343a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c80638ff478e5116100655780638ff478e51461010457806398958dd1146101175780639acf9d7914610137578063b2fb7564146101e857600080fd5b8063205247931461008c5780633e545f31146100bf57806356df23bb146100e1575b600080fd5b81801561009857600080fd5b506100ac6100a7366004612acf565b610208565b6040519081526020015b60405180910390f35b8180156100cb57600080fd5b506100df6100da366004612acf565b610980565b005b6100f46100ef366004612d6e565b611208565b60405190151581526020016100b6565b6100ac610112366004612e92565b611372565b81801561012357600080fd5b506100df610132366004612eed565b6113b5565b61014a610145366004612f55565b611c32565b6040516100b69190815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a091820151918101919091526101c00190565b8180156101f457600080fd5b506100ac610203366004612f6e565b611f36565b600080826001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015610249573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026d9190612fc3565b60405163f5dab71160e01b81526001600160a01b038881166004830152919091169063f5dab71190602401600060405180830381865afa1580156102b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102dd919081019061315f565b90506000836001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa15801561031f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103439190612fc3565b60405163f5dab71160e01b81526001600160a01b038781166004830152919091169063f5dab71190602401600060405180830381865afa15801561038b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103b3919081019061315f565b90508160c0015180156103c757508060e001515b1561055b576000612710836020015160400151886103e59190613282565b6103ef91906132a1565b9050801561054d57604080518082018252601981526000805160206133e583398151915260209091015260a0840151905160009182916001600160a01b038c16916000805160206133c58339815191529161044f919087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161048d91906132dc565b6000604051808303816000865af19150503d80600081146104ca576040519150601f19603f3d011682016040523d82523d6000602084013e6104cf565b606091505b50915091508180156104f95750805115806104f95750808060200190518101906104f991906132f8565b61054a5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f413100000060448201526064015b60405180910390fd5b50505b6105578185613315565b9350505b8060c00151801561056d57508160e001515b156109765760405163e6a4390560e01b81526001600160a01b03868116600483015288811660248301526000919086169063e6a4390590604401602060405180830381865afa1580156105c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e89190612fc3565b905060008260200151610140015111801561060b57506001600160a01b03811615155b156107eb5760006106288988888b87602001516101400151611372565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa15801561066a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068e9190612fc3565b604080518082018252601981526000805160206133e58339815191526020909101525190915060009081906001600160a01b038d16906000805160206133c5833981519152906106e490869088906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161072291906132dc565b6000604051808303816000865af19150503d806000811461075f576040519150601f19603f3d011682016040523d82523d6000602084013e610764565b606091505b509150915081801561078e57508051158061078e57508080602001905181019061078e91906132f8565b6107e65760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20414e544944554d505f4641494c45445f53454c4c6044820152625f423160e81b6064820152608401610541565b505050505b6000612710836020015160200151896108049190613282565b61080e91906132a1565b9050801561096757604080518082018252601981526000805160206133e583398151915260209091015260a0840151905160009182916001600160a01b038d16916000805160206133c58339815191529161086e919087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516108ac91906132dc565b6000604051808303816000865af19150503d80600081146108e9576040519150601f19603f3d011682016040523d82523d6000602084013e6108ee565b606091505b509150915081801561091857508051158061091857508080602001905181019061091891906132f8565b6109645760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f423100006044820152606401610541565b50505b6109718186613315565b945050505b5050949350505050565b6000816001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e49190612fc3565b60405163f5dab71160e01b81526001600160a01b03878116600483015291925060009183169063f5dab71190602401600060405180830381865afa158015610a30573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a58919081019061315f565b60405163f5dab71160e01b81526001600160a01b03868116600483015291925060009184169063f5dab71190602401600060405180830381865afa158015610aa4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610acc919081019061315f565b90508160c001518015610ae057508060e001515b1561106a576020820151610100015115610c725760006127108360200151610100015188610b0e9190613282565b610b1891906132a1565b604080518082018252601981526000805160206133e58339815191526020909101525190915060009081906001600160a01b038b16906000805160206133c583398151915290610b6e90329087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610bac91906132dc565b6000604051808303816000865af19150503d8060008114610be9576040519150601f19603f3d011682016040523d82523d6000602084013e610bee565b606091505b5091509150818015610c18575080511580610c18575080806020019051810190610c1891906132f8565b610c6e5760405162461bcd60e51b815260206004820152602160248201527f44617277696e537761703a20524546554e445f4641494c45445f53454c4c5f416044820152601960f91b6064820152608401610541565b5050505b60405163e6a4390560e01b81526001600160a01b03888116600483015286811660248301526000919086169063e6a4390590604401602060405180830381865afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce89190612fc3565b9050600083602001516101800151118015610d0b57506001600160a01b03811615155b15610eeb576000610d28878a888b88602001516101800151611372565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8e9190612fc3565b604080518082018252601981526000805160206133e58339815191526020909101525190915060009081906001600160a01b038b16906000805160206133c583398151915290610de490869088906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610e2291906132dc565b6000604051808303816000865af19150503d8060008114610e5f576040519150601f19603f3d011682016040523d82523d6000602084013e610e64565b606091505b5091509150818015610e8e575080511580610e8e575080806020019051810190610e8e91906132f8565b610ee65760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20414e544944554d505f4641494c45445f53454c4c6044820152622fa11960e91b6064820152608401610541565b505050505b600061271084602001516080015189610f049190613282565b610f0e91906132a1565b9050801561106757604080518082018252601981526000805160206133e583398151915260209091015260a0850151905160009182916001600160a01b038d16916000805160206133c583398151915291610f6e919087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610fac91906132dc565b6000604051808303816000865af19150503d8060008114610fe9576040519150601f19603f3d011682016040523d82523d6000602084013e610fee565b606091505b509150915081801561101857508051158061101857508080602001905181019061101891906132f8565b6110645760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f413200006044820152606401610541565b50505b50505b8060c00151801561107c57508160e001515b156111ff576000612710826020015160e001518861109a9190613282565b6110a491906132a1565b905080156111fd57604080518082018252601981526000805160206133e583398151915260209091015260a0830151905160009182916001600160a01b038c16916000805160206133c583398151915291611104919087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161114291906132dc565b6000604051808303816000865af19150503d806000811461117f576040519150601f19603f3d011682016040523d82523d6000602084013e611184565b606091505b50915091508180156111ae5750805115806111ae5750808060200190518101906111ae91906132f8565b6111fa5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f42320000006044820152606401610541565b50505b505b50505050505050565b60208085015185516101408201519282015182516000948592909161122d9190613315565b6112379190613315565b90506000836101600151846060015185604001516112559190613315565b61125f9190613315565b905060008461018001518561010001518660a0015187608001516112839190613315565b61128d9190613315565b6112979190613315565b90506000856101a001518661012001518760e001518860c001516112bb9190613315565b6112c59190613315565b6112cf9190613315565b90508984111580156112e15750898311155b80156112ed5750888211155b80156112f95750888111155b80156113175750845161130e906002906132a1565b86610100015111155b801561133857506002856020015161132f91906132a1565b86610120015111155b8015611363575087828261134c8787613315565b6113569190613315565b6113609190613315565b11155b9b9a5050505050505050505050565b60008060006113828689896126c1565b9150915061271084611395878486612779565b61139f9190613282565b6113a991906132a1565b98975050505050505050565b6000816001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114199190612fc3565b60405163f5dab71160e01b81526001600160a01b03888116600483015291925060009183169063f5dab71190602401600060405180830381865afa158015611465573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261148d919081019061315f565b60405163f5dab71160e01b81526001600160a01b03878116600483015291925060009184169063f5dab71190602401600060405180830381865afa1580156114d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611501919081019061315f565b90508160c00151801561151557508060e001515b15611a9457602082015161012001511561169d57600061271083602001516101200151896115439190613282565b61154d91906132a1565b604080518082018252601981526000805160206133e58339815191526020909101525190915060009081906001600160a01b038c16906000805160206133c5833981519152906115a3908b9087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516115e191906132dc565b6000604051808303816000865af19150503d806000811461161e576040519150601f19603f3d011682016040523d82523d6000602084013e611623565b606091505b509150915081801561164d57508051158061164d57508080602001905181019061164d91906132f8565b6116995760405162461bcd60e51b815260206004820181905260248201527f44617277696e537761703a20524546554e445f4641494c45445f4255595f41326044820152606401610541565b5050505b60405163e6a4390560e01b81526001600160a01b03878116600483015289811660248301526000919086169063e6a4390590604401602060405180830381865afa1580156116ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117139190612fc3565b9050600083602001516101a0015111801561173657506001600160a01b03811615155b15611915576000611753888b888c88602001516101a00151611372565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa158015611795573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b99190612fc3565b604080518082018252601981526000805160206133e58339815191526020909101525190915060009081906001600160a01b038c16906000805160206133c58339815191529061180f90869088906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161184d91906132dc565b6000604051808303816000865af19150503d806000811461188a576040519150601f19603f3d011682016040523d82523d6000602084013e61188f565b606091505b50915091508180156118b95750805115806118b95750808060200190518101906118b991906132f8565b6119105760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20414e544944554d505f4641494c45445f4255595f604482015261211960f11b6064820152608401610541565b505050505b6000612710846020015160c001518a61192e9190613282565b61193891906132a1565b90508015611a9157604080518082018252601981526000805160206133e583398151915260209091015260a0850151905160009182916001600160a01b038e16916000805160206133c583398151915291611998919087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516119d691906132dc565b6000604051808303816000865af19150503d8060008114611a13576040519150601f19603f3d011682016040523d82523d6000602084013e611a18565b606091505b5091509150818015611a42575080511580611a42575080806020019051810190611a4291906132f8565b611a8e5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f41320000006044820152606401610541565b50505b50505b8060c001518015611aa657508160e001515b156111fd576000612710826020015160a0015189611ac49190613282565b611ace91906132a1565b90508015611c2757604080518082018252601981526000805160206133e583398151915260209091015260a0830151905160009182916001600160a01b038d16916000805160206133c583398151915291611b2e919087906024016132c3565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611b6c91906132dc565b6000604051808303816000865af19150503d8060008114611ba9576040519150601f19603f3d011682016040523d82523d6000602084013e611bae565b606091505b5091509150818015611bd8575080511580611bd8575080806020019051810190611bd891906132f8565b611c245760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f423200006044820152606401610541565b50505b505050505050505050565b611ca4604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6064611cb560408401356005613282565b611cbf91906132a1565b611ccd90604084013561332d565b60408201526064611ce083356005613282565b611cea91906132a1565b611cf590833561332d565b81526064611d0860c08401356005613282565b611d1291906132a1565b611d209060c084013561332d565b60c08201526064611d3660808401356005613282565b611d4091906132a1565b611d4e90608084013561332d565b60808201526064611d6460608401356005613282565b611d6e91906132a1565b611d7c90606084013561332d565b60608201526064611d9260208401356005613282565b611d9c91906132a1565b611daa90602084013561332d565b60208201526064611dc060e08401356005613282565b611dca91906132a1565b611dd89060e084013561332d565b60e08201526064611dee60a08401356005613282565b611df891906132a1565b611e069060a084013561332d565b60a08201526064611e1d6101208401356005613282565b611e2791906132a1565b611e369061012084013561332d565b6101208201526064611e4e6101008401356005613282565b611e5891906132a1565b611e679061010084013561332d565b6101008201526064611e7f6101408401356005613282565b611e8991906132a1565b611e989061014084013561332d565b6101408201526064611eb06101608401356005613282565b611eba91906132a1565b611ec99061016084013561332d565b6101608201526064611ee16101808401356005613282565b611eeb91906132a1565b611efa9061018084013561332d565b6101808201526064611f126101a08401356005613282565b611f1c91906132a1565b611f2b906101a084013561332d565b6101a0820152919050565b600080826001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015611f77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f9b9190612fc3565b60405163f5dab71160e01b81526001600160a01b038981166004830152919091169063f5dab71190602401600060405180830381865afa158015611fe3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261200b919081019061315f565b90506000836001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa15801561204d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120719190612fc3565b60405163f5dab71160e01b81526001600160a01b038781166004830152919091169063f5dab71190602401600060405180830381865afa1580156120b9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526120e1919081019061315f565b90508160c0015180156120f557508060e001515b1561228257602082015151600090612710906121119089613282565b61211b91906132a1565b90508015612274576000808a6001600160a01b03166040518060600160405280602581526020016133a060259139805160209091012060a08701516040516001600160a01b03808f16602483015290911660448201526064810186905260840160408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516121b991906132dc565b6000604051808303816000865af19150503d80600081146121f6576040519150601f19603f3d011682016040523d82523d6000602084013e6121fb565b606091505b509150915081801561222557508051158061222557508080602001905181019061222591906132f8565b6122715760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f413100006044820152606401610541565b50505b61227e8185613315565b9350505b8060c00151801561229457508160e001515b156126b65760405163e6a4390560e01b81526001600160a01b03898116600483015286811660248301526000919086169063e6a4390590604401602060405180830381865afa1580156122eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230f9190612fc3565b905060008260200151610160015111801561233257506001600160a01b03811615155b1561251e57600061234f8a88888b87602001516101600151611372565b90506000826001600160a01b031663b67781346040518163ffffffff1660e01b8152600401602060405180830381865afa158015612391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123b59190612fc3565b90506000808c6001600160a01b03166040518060600160405280602581526020016133a060259139805190602001208d8587604051602401612418939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161245691906132dc565b6000604051808303816000865af19150503d8060008114612493576040519150601f19603f3d011682016040523d82523d6000602084013e612498565b606091505b50915091508180156124c25750805115806124c25750808060200190518101906124c291906132f8565b6125195760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20414e544944554d505f4641494c45445f4255595f604482015261423160f01b6064820152608401610541565b505050505b6000612710836020015160600151896125379190613282565b61254191906132a1565b905080156126a7576000808b6001600160a01b03166040518060600160405280602581526020016133a060259139805190602001208c8760a00151866040516024016125ae939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516125ec91906132dc565b6000604051808303816000865af19150503d8060008114612629576040519150601f19603f3d011682016040523d82523d6000602084013e61262e565b606091505b509150915081801561265857508051158061265857508080602001905181019061265891906132f8565b6126a45760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f42310000006044820152606401610541565b50505b6126b18186613315565b945050505b505095945050505050565b60008060006126d0858561289b565b5090506000806126e1888888612993565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa15801561271e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127429190613344565b5091509150826001600160a01b0316876001600160a01b03161461276757808261276a565b81815b90999098509650505050505050565b60008084116127df5760405162461bcd60e51b815260206004820152602c60248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f60448201526b125394155517d05353d5539560a21b6064820152608401610541565b6000831180156127ef5750600082115b61284d5760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f6044820152684c495155494449545960b81b6064820152608401610541565b600061285b856103e5613282565b905060006128698483613282565b905060008261287a876103e8613282565b6128849190613315565b905061289081836132a1565b979650505050505050565b600080826001600160a01b0316846001600160a01b03160361290e5760405162461bcd60e51b815260206004820152602660248201527f44617277696e537761704c6962726172793a204944454e544943414c5f41444460448201526552455353455360d01b6064820152608401610541565b826001600160a01b0316846001600160a01b03161061292e578284612931565b83835b90925090506001600160a01b03821661298c5760405162461bcd60e51b815260206004820152601f60248201527f44617277696e537761704c6962726172793a205a45524f5f41444452455353006044820152606401610541565b9250929050565b60008060006129a2858561289b565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b1660348201529193509150869060480160405160208183030381529060405280519060200120876001600160a01b031663257671f56040518163ffffffff1660e01b8152600401602060405180830381865afa158015612a26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a4a9190613386565b6040516001600160f81b0319602082015260609390931b6bffffffffffffffffffffffff191660218401526035830191909152605582015260750160408051601f1981840301815291905280516020909101209695505050505050565b6001600160a01b0381168114612abc57600080fd5b50565b8035612aca81612aa7565b919050565b60008060008060808587031215612ae557600080fd5b8435612af081612aa7565b9350602085013592506040850135612b0781612aa7565b91506060850135612b1781612aa7565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612b5b57612b5b612b22565b60405290565b6040516101c0810167ffffffffffffffff81118282101715612b5b57612b5b612b22565b604051610140810167ffffffffffffffff81118282101715612b5b57612b5b612b22565b604051601f8201601f1916810167ffffffffffffffff81118282101715612bd257612bd2612b22565b604052919050565b600060408284031215612bec57600080fd5b612bf4612b38565b9050813581526020820135602082015292915050565b60006101c08284031215612c1d57600080fd5b612c25612b61565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b60038110612abc57600080fd5b8035612aca81612cbf565b8015158114612abc57600080fd5b8035612aca81612cd7565b600067ffffffffffffffff821115612d0a57612d0a612b22565b50601f01601f191660200190565b600082601f830112612d2957600080fd5b8135612d3c612d3782612cf0565b612ba9565b818152846020838601011115612d5157600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215612d8457600080fd5b843567ffffffffffffffff80821115612d9c57600080fd5b908601906103008289031215612db157600080fd5b612db9612b85565b612dc38984612bda565b8152612dd28960408501612c0a565b6020820152612de46102008401612ccc565b6040820152612df66102208401612abf565b6060820152612e086102408401612abf565b6080820152612e1a6102608401612abf565b60a0820152612e2c6102808401612ce5565b60c0820152612e3e6102a08401612ce5565b60e08201526102c083013582811115612e5657600080fd5b612e628a828601612d18565b610100830152506102e0929092013561012083015250966020860135965060408601359560600135945092505050565b600080600080600060a08688031215612eaa57600080fd5b8535612eb581612aa7565b94506020860135612ec581612aa7565b93506040860135612ed581612aa7565b94979396509394606081013594506080013592915050565b600080600080600060a08688031215612f0557600080fd5b8535612f1081612aa7565b9450602086013593506040860135612f2781612aa7565b92506060860135612f3781612aa7565b91506080860135612f4781612aa7565b809150509295509295909350565b60006101c08284031215612f6857600080fd5b50919050565b600080600080600060a08688031215612f8657600080fd5b8535612f9181612aa7565b94506020860135612fa181612aa7565b9350604086013592506060860135612f3781612aa7565b8051612aca81612aa7565b600060208284031215612fd557600080fd5b8151612fe081612aa7565b9392505050565b600060408284031215612ff957600080fd5b613001612b38565b9050815181526020820151602082015292915050565b60006101c0828403121561302a57600080fd5b613032612b61565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b8051612aca81612cbf565b8051612aca81612cd7565b60005b838110156130fd5781810151838201526020016130e5565b8381111561310c576000848401525b50505050565b600082601f83011261312357600080fd5b8151613131612d3782612cf0565b81815284602083860101111561314657600080fd5b6131578260208301602087016130e2565b949350505050565b60006020828403121561317157600080fd5b815167ffffffffffffffff8082111561318957600080fd5b90830190610300828603121561319e57600080fd5b6131a6612b85565b6131b08684612fe7565b81526131bf8660408501613017565b60208201526131d161020084016130cc565b60408201526131e36102208401612fb8565b60608201526131f56102408401612fb8565b60808201526132076102608401612fb8565b60a082015261321961028084016130d7565b60c082015261322b6102a084016130d7565b60e08201526102c08301518281111561324357600080fd5b61324f87828601613112565b610100830152506102e09290920151610120830152509392505050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561329c5761329c61326c565b500290565b6000826132be57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b03929092168252602082015260400190565b600082516132ee8184602087016130e2565b9190910192915050565b60006020828403121561330a57600080fd5b8151612fe081612cd7565b600082198211156133285761332861326c565b500190565b60008282101561333f5761333f61326c565b500390565b60008060006060848603121561335957600080fd5b8351925060208401519150604084015163ffffffff8116811461337b57600080fd5b809150509250925092565b60006020828403121561339857600080fd5b505191905056fe7472616e7366657246726f6d28616464726573732c616464726573732c75696e7432353629a9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b7472616e7366657228616464726573732c75696e743235362900000000000000a2646970667358221220b9228cd24b5933288ef3ed4137815012c5c2f3c59cec4633f33aac6ac6ed515564736f6c634300080e0033";

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
