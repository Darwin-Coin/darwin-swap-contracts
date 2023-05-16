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
        name: "otherTokenB2OtherToADG",
        type: "uint256",
      },
    ],
    name: "handleADGRefill",
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
  "0x6133d661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c806398958dd11161006557806398958dd1146100f45780639acf9d7914610114578063b2fb7564146101c5578063c7e07032146101e557600080fd5b8063205247931461008c5780633e545f31146100bf57806374d4e5a2146100e1575b600080fd5b81801561009857600080fd5b506100ac6100a7366004612a8b565b610208565b6040519081526020015b60405180910390f35b8180156100cb57600080fd5b506100df6100da366004612a8b565b610980565b005b6100ac6100ef366004612ade565b611208565b81801561010057600080fd5b506100df61010f366004612b39565b61124b565b610127610122366004612ba1565b611ac8565b6040516100b69190815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018080830151908201526101a091820151918101919091526101c00190565b8180156101d157600080fd5b506100ac6101e0366004612bba565b611dcc565b6101f86101f3366004612e50565b612557565b60405190151581526020016100b6565b600080826001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015610249573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026d9190612f6c565b60405163f5dab71160e01b81526001600160a01b038881166004830152919091169063f5dab71190602401600060405180830381865afa1580156102b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102dd9190810190613108565b90506000836001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa15801561031f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103439190612f6c565b60405163f5dab71160e01b81526001600160a01b038781166004830152919091169063f5dab71190602401600060405180830381865afa15801561038b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103b39190810190613108565b90508160c0015180156103c757508060e001515b1561055b576000612710836020015160400151886103e5919061321e565b6103ef919061323d565b9050801561054d576040805180820182526019815260008051602061338183398151915260209091015260a0840151905160009182916001600160a01b038c16916000805160206133618339815191529161044f9190879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161048d9190613278565b6000604051808303816000865af19150503d80600081146104ca576040519150601f19603f3d011682016040523d82523d6000602084013e6104cf565b606091505b50915091508180156104f95750805115806104f95750808060200190518101906104f99190613294565b61054a5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f413100000060448201526064015b60405180910390fd5b50505b61055781856132b1565b9350505b8060c00151801561056d57508160e001515b156109765760405163e6a4390560e01b81526001600160a01b03868116600483015288811660248301526000919086169063e6a4390590604401602060405180830381865afa1580156105c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e89190612f6c565b905060008260200151610140015111801561060b57506001600160a01b03811615155b156107eb5760006106288988888b87602001516101400151611208565b90506000826001600160a01b0316631d73f9a56040518163ffffffff1660e01b8152600401602060405180830381865afa15801561066a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068e9190612f6c565b604080518082018252601981526000805160206133818339815191526020909101525190915060009081906001600160a01b038d1690600080516020613361833981519152906106e4908690889060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516107229190613278565b6000604051808303816000865af19150503d806000811461075f576040519150601f19603f3d011682016040523d82523d6000602084013e610764565b606091505b509150915081801561078e57508051158061078e57508080602001905181019061078e9190613294565b6107e65760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20414e544944554d505f4641494c45445f53454c4c6044820152625f423160e81b6064820152608401610541565b505050505b600061271083602001516020015189610804919061321e565b61080e919061323d565b90508015610967576040805180820182526019815260008051602061338183398151915260209091015260a0840151905160009182916001600160a01b038d16916000805160206133618339815191529161086e9190879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516108ac9190613278565b6000604051808303816000865af19150503d80600081146108e9576040519150601f19603f3d011682016040523d82523d6000602084013e6108ee565b606091505b50915091508180156109185750805115806109185750808060200190518101906109189190613294565b6109645760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f423100006044820152606401610541565b50505b61097181866132b1565b945050505b5050949350505050565b6000816001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e49190612f6c565b60405163f5dab71160e01b81526001600160a01b03878116600483015291925060009183169063f5dab71190602401600060405180830381865afa158015610a30573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a589190810190613108565b60405163f5dab71160e01b81526001600160a01b03868116600483015291925060009184169063f5dab71190602401600060405180830381865afa158015610aa4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610acc9190810190613108565b90508160c001518015610ae057508060e001515b1561106a576020820151610100015115610c725760006127108360200151610100015188610b0e919061321e565b610b18919061323d565b604080518082018252601981526000805160206133818339815191526020909101525190915060009081906001600160a01b038b169060008051602061336183398151915290610b6e903290879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610bac9190613278565b6000604051808303816000865af19150503d8060008114610be9576040519150601f19603f3d011682016040523d82523d6000602084013e610bee565b606091505b5091509150818015610c18575080511580610c18575080806020019051810190610c189190613294565b610c6e5760405162461bcd60e51b815260206004820152602160248201527f44617277696e537761703a20524546554e445f4641494c45445f53454c4c5f416044820152601960f91b6064820152608401610541565b5050505b60405163e6a4390560e01b81526001600160a01b03888116600483015286811660248301526000919086169063e6a4390590604401602060405180830381865afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce89190612f6c565b9050600083602001516101800151118015610d0b57506001600160a01b03811615155b15610eeb576000610d28878a888b88602001516101800151611208565b90506000826001600160a01b0316631d73f9a56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8e9190612f6c565b604080518082018252601981526000805160206133818339815191526020909101525190915060009081906001600160a01b038b169060008051602061336183398151915290610de4908690889060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610e229190613278565b6000604051808303816000865af19150503d8060008114610e5f576040519150601f19603f3d011682016040523d82523d6000602084013e610e64565b606091505b5091509150818015610e8e575080511580610e8e575080806020019051810190610e8e9190613294565b610ee65760405162461bcd60e51b815260206004820152602360248201527f44617277696e537761703a20414e544944554d505f4641494c45445f53454c4c6044820152622fa11960e91b6064820152608401610541565b505050505b600061271084602001516080015189610f04919061321e565b610f0e919061323d565b90508015611067576040805180820182526019815260008051602061338183398151915260209091015260a0850151905160009182916001600160a01b038d169160008051602061336183398151915291610f6e9190879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610fac9190613278565b6000604051808303816000865af19150503d8060008114610fe9576040519150601f19603f3d011682016040523d82523d6000602084013e610fee565b606091505b50915091508180156110185750805115806110185750808060200190518101906110189190613294565b6110645760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f413200006044820152606401610541565b50505b50505b8060c00151801561107c57508160e001515b156111ff576000612710826020015160e001518861109a919061321e565b6110a4919061323d565b905080156111fd576040805180820182526019815260008051602061338183398151915260209091015260a0830151905160009182916001600160a01b038c1691600080516020613361833981519152916111049190879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516111429190613278565b6000604051808303816000865af19150503d806000811461117f576040519150601f19603f3d011682016040523d82523d6000602084013e611184565b606091505b50915091508180156111ae5750805115806111ae5750808060200190518101906111ae9190613294565b6111fa5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f42320000006044820152606401610541565b50505b505b50505050505050565b600080600061121886898961267d565b915091506127108461122b878486612735565b611235919061321e565b61123f919061323d565b98975050505050505050565b6000816001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa15801561128b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112af9190612f6c565b60405163f5dab71160e01b81526001600160a01b03888116600483015291925060009183169063f5dab71190602401600060405180830381865afa1580156112fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113239190810190613108565b60405163f5dab71160e01b81526001600160a01b03878116600483015291925060009184169063f5dab71190602401600060405180830381865afa15801561136f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113979190810190613108565b90508160c0015180156113ab57508060e001515b1561192a57602082015161012001511561153357600061271083602001516101200151896113d9919061321e565b6113e3919061323d565b604080518082018252601981526000805160206133818339815191526020909101525190915060009081906001600160a01b038c169060008051602061336183398151915290611439908b90879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516114779190613278565b6000604051808303816000865af19150503d80600081146114b4576040519150601f19603f3d011682016040523d82523d6000602084013e6114b9565b606091505b50915091508180156114e35750805115806114e35750808060200190518101906114e39190613294565b61152f5760405162461bcd60e51b815260206004820181905260248201527f44617277696e537761703a20524546554e445f4641494c45445f4255595f41326044820152606401610541565b5050505b60405163e6a4390560e01b81526001600160a01b03878116600483015289811660248301526000919086169063e6a4390590604401602060405180830381865afa158015611585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a99190612f6c565b9050600083602001516101a001511180156115cc57506001600160a01b03811615155b156117ab5760006115e9888b888c88602001516101a00151611208565b90506000826001600160a01b0316631d73f9a56040518163ffffffff1660e01b8152600401602060405180830381865afa15801561162b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164f9190612f6c565b604080518082018252601981526000805160206133818339815191526020909101525190915060009081906001600160a01b038c1690600080516020613361833981519152906116a5908690889060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516116e39190613278565b6000604051808303816000865af19150503d8060008114611720576040519150601f19603f3d011682016040523d82523d6000602084013e611725565b606091505b509150915081801561174f57508051158061174f57508080602001905181019061174f9190613294565b6117a65760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20414e544944554d505f4641494c45445f4255595f604482015261211960f11b6064820152608401610541565b505050505b6000612710846020015160c001518a6117c4919061321e565b6117ce919061323d565b90508015611927576040805180820182526019815260008051602061338183398151915260209091015260a0850151905160009182916001600160a01b038e16916000805160206133618339815191529161182e9190879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161186c9190613278565b6000604051808303816000865af19150503d80600081146118a9576040519150601f19603f3d011682016040523d82523d6000602084013e6118ae565b606091505b50915091508180156118d85750805115806118d85750808060200190518101906118d89190613294565b6119245760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f41320000006044820152606401610541565b50505b50505b8060c00151801561193c57508160e001515b156111fd576000612710826020015160a001518961195a919061321e565b611964919061323d565b90508015611abd576040805180820182526019815260008051602061338183398151915260209091015260a0830151905160009182916001600160a01b038d1691600080516020613361833981519152916119c49190879060240161325f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611a029190613278565b6000604051808303816000865af19150503d8060008114611a3f576040519150601f19603f3d011682016040523d82523d6000602084013e611a44565b606091505b5091509150818015611a6e575080511580611a6e575080806020019051810190611a6e9190613294565b611aba5760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f423200006044820152606401610541565b50505b505050505050505050565b611b3a604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6064611b4b6040840135600561321e565b611b55919061323d565b611b639060408401356132c9565b60408201526064611b768335600561321e565b611b80919061323d565b611b8b9083356132c9565b81526064611b9e60c0840135600561321e565b611ba8919061323d565b611bb69060c08401356132c9565b60c08201526064611bcc6080840135600561321e565b611bd6919061323d565b611be49060808401356132c9565b60808201526064611bfa6060840135600561321e565b611c04919061323d565b611c129060608401356132c9565b60608201526064611c286020840135600561321e565b611c32919061323d565b611c409060208401356132c9565b60208201526064611c5660e0840135600561321e565b611c60919061323d565b611c6e9060e08401356132c9565b60e08201526064611c8460a0840135600561321e565b611c8e919061323d565b611c9c9060a08401356132c9565b60a08201526064611cb3610120840135600561321e565b611cbd919061323d565b611ccc906101208401356132c9565b6101208201526064611ce4610100840135600561321e565b611cee919061323d565b611cfd906101008401356132c9565b6101008201526064611d15610140840135600561321e565b611d1f919061323d565b611d2e906101408401356132c9565b6101408201526064611d46610160840135600561321e565b611d50919061323d565b611d5f906101608401356132c9565b6101608201526064611d77610180840135600561321e565b611d81919061323d565b611d90906101808401356132c9565b6101808201526064611da86101a0840135600561321e565b611db2919061323d565b611dc1906101a08401356132c9565b6101a0820152919050565b600080826001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e319190612f6c565b60405163f5dab71160e01b81526001600160a01b038981166004830152919091169063f5dab71190602401600060405180830381865afa158015611e79573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611ea19190810190613108565b90506000836001600160a01b0316632cdc1c746040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ee3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f079190612f6c565b60405163f5dab71160e01b81526001600160a01b038781166004830152919091169063f5dab71190602401600060405180830381865afa158015611f4f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611f779190810190613108565b90508160c001518015611f8b57508060e001515b156121185760208201515160009061271090611fa7908961321e565b611fb1919061323d565b9050801561210a576000808a6001600160a01b031660405180606001604052806025815260200161333c60259139805160209091012060a08701516040516001600160a01b03808f16602483015290911660448201526064810186905260840160408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161204f9190613278565b6000604051808303816000865af19150503d806000811461208c576040519150601f19603f3d011682016040523d82523d6000602084013e612091565b606091505b50915091508180156120bb5750805115806120bb5750808060200190518101906120bb9190613294565b6121075760405162461bcd60e51b815260206004820152601e60248201527f44617277696e537761703a205441585f4641494c45445f53454c4c5f413100006044820152606401610541565b50505b61211481856132b1565b9350505b8060c00151801561212a57508160e001515b1561254c5760405163e6a4390560e01b81526001600160a01b03898116600483015286811660248301526000919086169063e6a4390590604401602060405180830381865afa158015612181573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121a59190612f6c565b90506000826020015161016001511180156121c857506001600160a01b03811615155b156123b45760006121e58a88888b87602001516101600151611208565b90506000826001600160a01b0316631d73f9a56040518163ffffffff1660e01b8152600401602060405180830381865afa158015612227573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224b9190612f6c565b90506000808c6001600160a01b031660405180606001604052806025815260200161333c60259139805190602001208d85876040516024016122ae939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516122ec9190613278565b6000604051808303816000865af19150503d8060008114612329576040519150601f19603f3d011682016040523d82523d6000602084013e61232e565b606091505b50915091508180156123585750805115806123585750808060200190518101906123589190613294565b6123af5760405162461bcd60e51b815260206004820152602260248201527f44617277696e537761703a20414e544944554d505f4641494c45445f4255595f604482015261423160f01b6064820152608401610541565b505050505b6000612710836020015160600151896123cd919061321e565b6123d7919061323d565b9050801561253d576000808b6001600160a01b031660405180606001604052806025815260200161333c60259139805190602001208c8760a0015186604051602401612444939291906001600160a01b039384168152919092166020820152604081019190915260600190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516124829190613278565b6000604051808303816000865af19150503d80600081146124bf576040519150601f19603f3d011682016040523d82523d6000602084013e6124c4565b606091505b50915091508180156124ee5750805115806124ee5750808060200190518101906124ee9190613294565b61253a5760405162461bcd60e51b815260206004820152601d60248201527f44617277696e537761703a205441585f4641494c45445f4255595f42310000006044820152606401610541565b50505b61254781866132b1565b945050505b505095945050505050565b60208084015184516101408201519282015182516000948592909161257c91906132b1565b61258691906132b1565b90506000836101600151846060015185604001516125a491906132b1565b6125ae91906132b1565b905060008461018001518561010001518660a0015187608001516125d291906132b1565b6125dc91906132b1565b6125e691906132b1565b90506000856101a001518661012001518760e001518860c0015161260a91906132b1565b61261491906132b1565b61261e91906132b1565b90508884111580156126305750888311155b801561263c5750878211155b80156126485750878111155b801561265a5750845161010087015111155b801561266f5750846020015186610120015111155b9a9950505050505050505050565b600080600061268c8585612857565b50905060008061269d88888861294f565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa1580156126da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126fe91906132e0565b5091509150826001600160a01b0316876001600160a01b031614612723578082612726565b81815b90999098509650505050505050565b600080841161279b5760405162461bcd60e51b815260206004820152602c60248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f60448201526b125394155517d05353d5539560a21b6064820152608401610541565b6000831180156127ab5750600082115b6128095760405162461bcd60e51b815260206004820152602960248201527f44617277696e537761704c6962726172793a20494e53554646494349454e545f6044820152684c495155494449545960b81b6064820152608401610541565b6000612817856103e561321e565b90506000612825848361321e565b9050600082612836876103e861321e565b61284091906132b1565b905061284c818361323d565b979650505050505050565b600080826001600160a01b0316846001600160a01b0316036128ca5760405162461bcd60e51b815260206004820152602660248201527f44617277696e537761704c6962726172793a204944454e544943414c5f41444460448201526552455353455360d01b6064820152608401610541565b826001600160a01b0316846001600160a01b0316106128ea5782846128ed565b83835b90925090506001600160a01b0382166129485760405162461bcd60e51b815260206004820152601f60248201527f44617277696e537761704c6962726172793a205a45524f5f41444452455353006044820152606401610541565b9250929050565b600080600061295e8585612857565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b1660348201529193509150869060480160405160208183030381529060405280519060200120876001600160a01b031663257671f56040518163ffffffff1660e01b8152600401602060405180830381865afa1580156129e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a069190613322565b6040516001600160f81b0319602082015260609390931b6bffffffffffffffffffffffff191660218401526035830191909152605582015260750160408051601f1981840301815291905280516020909101209695505050505050565b6001600160a01b0381168114612a7857600080fd5b50565b8035612a8681612a63565b919050565b60008060008060808587031215612aa157600080fd5b8435612aac81612a63565b9350602085013592506040850135612ac381612a63565b91506060850135612ad381612a63565b939692955090935050565b600080600080600060a08688031215612af657600080fd5b8535612b0181612a63565b94506020860135612b1181612a63565b93506040860135612b2181612a63565b94979396509394606081013594506080013592915050565b600080600080600060a08688031215612b5157600080fd5b8535612b5c81612a63565b9450602086013593506040860135612b7381612a63565b92506060860135612b8381612a63565b91506080860135612b9381612a63565b809150509295509295909350565b60006101c08284031215612bb457600080fd5b50919050565b600080600080600060a08688031215612bd257600080fd5b8535612bdd81612a63565b94506020860135612bed81612a63565b9350604086013592506060860135612b8381612a63565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612c3d57612c3d612c04565b60405290565b6040516101c0810167ffffffffffffffff81118282101715612c3d57612c3d612c04565b604051610120810167ffffffffffffffff81118282101715612c3d57612c3d612c04565b604051601f8201601f1916810167ffffffffffffffff81118282101715612cb457612cb4612c04565b604052919050565b600060408284031215612cce57600080fd5b612cd6612c1a565b9050813581526020820135602082015292915050565b60006101c08284031215612cff57600080fd5b612d07612c43565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e08201526101008083013581830152506101208083013581830152506101408083013581830152506101608083013581830152506101808083013581830152506101a080830135818301525092915050565b60048110612a7857600080fd5b8035612a8681612da1565b8015158114612a7857600080fd5b8035612a8681612db9565b600067ffffffffffffffff821115612dec57612dec612c04565b50601f01601f191660200190565b600082601f830112612e0b57600080fd5b8135612e1e612e1982612dd2565b612c8b565b818152846020838601011115612e3357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215612e6557600080fd5b833567ffffffffffffffff80821115612e7d57600080fd5b908501906102e08288031215612e9257600080fd5b612e9a612c67565b612ea48884612cbc565b8152612eb38860408501612cec565b6020820152612ec56102008401612dae565b6040820152612ed76102208401612a7b565b6060820152612ee96102408401612a7b565b6080820152612efb6102608401612a7b565b60a0820152612f0d6102808401612dc7565b60c0820152612f1f6102a08401612dc7565b60e08201526102c083013582811115612f3757600080fd5b612f4389828601612dfa565b61010083015250976020870135975060409096013595945050505050565b8051612a8681612a63565b600060208284031215612f7e57600080fd5b8151612f8981612a63565b9392505050565b600060408284031215612fa257600080fd5b612faa612c1a565b9050815181526020820151602082015292915050565b60006101c08284031215612fd357600080fd5b612fdb612c43565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e08201526101008083015181830152506101208083015181830152506101408083015181830152506101608083015181830152506101808083015181830152506101a080830151818301525092915050565b8051612a8681612da1565b8051612a8681612db9565b60005b838110156130a657818101518382015260200161308e565b838111156130b5576000848401525b50505050565b600082601f8301126130cc57600080fd5b81516130da612e1982612dd2565b8181528460208386010111156130ef57600080fd5b61310082602083016020870161308b565b949350505050565b60006020828403121561311a57600080fd5b815167ffffffffffffffff8082111561313257600080fd5b908301906102e0828603121561314757600080fd5b61314f612c67565b6131598684612f90565b81526131688660408501612fc0565b602082015261317a6102008401613075565b604082015261318c6102208401612f61565b606082015261319e6102408401612f61565b60808201526131b06102608401612f61565b60a08201526131c26102808401613080565b60c08201526131d46102a08401613080565b60e08201526102c0830151828111156131ec57600080fd5b6131f8878286016130bb565b6101008301525095945050505050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561323857613238613208565b500290565b60008261325a57634e487b7160e01b600052601260045260246000fd5b500490565b6001600160a01b03929092168252602082015260400190565b6000825161328a81846020870161308b565b9190910192915050565b6000602082840312156132a657600080fd5b8151612f8981612db9565b600082198211156132c4576132c4613208565b500190565b6000828210156132db576132db613208565b500390565b6000806000606084860312156132f557600080fd5b8351925060208401519150604084015163ffffffff8116811461331757600080fd5b809150509250925092565b60006020828403121561333457600080fd5b505191905056fe7472616e7366657246726f6d28616464726573732c616464726573732c75696e7432353629a9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b7472616e7366657228616464726573732c75696e743235362900000000000000a2646970667358221220667b8838c457e9ea897dbb714cde60472443ebc8458030b314f7332dcfce85fd64736f6c634300080e0033";

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
