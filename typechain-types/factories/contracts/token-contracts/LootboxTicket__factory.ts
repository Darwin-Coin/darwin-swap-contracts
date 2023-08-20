/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LootboxTicket,
  LootboxTicketInterface,
} from "../../../contracts/token-contracts/LootboxTicket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_darwin",
        type: "address",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "darwin",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "lastTicketId",
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
        name: "_to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
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
        internalType: "uint256",
        name: "_ticketId",
        type: "uint256",
      },
    ],
    name: "openLootBox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a0d38038062001a0d8339810160408190526200003491620001d8565b604080518082018252600f81526e4c6f6f74626f78205469636b65747360881b6020808301918252835180850190945260078452665449434b45545360c81b9084015281519192916200008a9160009162000132565b508051620000a090600190602084019062000132565b5050506001600160a01b038116620000fe5760405162461bcd60e51b815260206004820152601b60248201527f4c6f6f74626f785469636b65743a205a45524f5f414444524553530000000000604482015260640160405180910390fd5b60078054336001600160a01b031991821617909155600680549091166001600160a01b039290921691909117905562000246565b82805462000140906200020a565b90600052602060002090601f016020900481019282620001645760008555620001af565b82601f106200017f57805160ff1916838001178555620001af565b82800160010185558215620001af579182015b82811115620001af57825182559160200191906001019062000192565b50620001bd929150620001c1565b5090565b5b80821115620001bd5760008155600101620001c2565b600060208284031215620001eb57600080fd5b81516001600160a01b03811681146200020357600080fd5b9392505050565b600181811c908216806200021f57607f821691505b6020821081036200024057634e487b7160e01b600052602260045260246000fd5b50919050565b6117b780620002566000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80636352211e116100a257806395d89b411161007157806395d89b4114610247578063a22cb4651461024f578063b88d4fde14610262578063c87b56dd14610275578063e985e9c51461028857600080fd5b80636352211e146101fb5780636a6278421461020e57806370a082311461022157806391cca3db1461023457600080fd5b806323b872dd116100e957806323b872dd146101985780633110c792146101ab578063366deaf4146101be57806342842e0e146101d557806355a02c2d146101e857600080fd5b806301ffc9a71461011b57806306fdde0314610143578063081812fc14610158578063095ea7b314610183575b600080fd5b61012e610129366004611273565b6102c4565b60405190151581526020015b60405180910390f35b61014b610316565b60405161013a91906112e8565b61016b6101663660046112fb565b6103a8565b6040516001600160a01b03909116815260200161013a565b610196610191366004611330565b6103cf565b005b6101966101a636600461135a565b6104e9565b60065461016b906001600160a01b031681565b6101c760085481565b60405190815260200161013a565b6101966101e336600461135a565b61051b565b6101966101f63660046112fb565b610536565b61016b6102093660046112fb565b6105c4565b61019661021c366004611396565b610624565b6101c761022f366004611396565b6106a2565b60075461016b906001600160a01b031681565b61014b610728565b61019661025d3660046113bf565b610737565b61019661027036600461140c565b610742565b61014b6102833660046112fb565b61077a565b61012e6102963660046114e8565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b14806102f557506001600160e01b03198216635b5e139f60e01b145b8061031057506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546103259061151b565b80601f01602080910402602001604051908101604052809291908181526020018280546103519061151b565b801561039e5780601f106103735761010080835404028352916020019161039e565b820191906000526020600020905b81548152906001019060200180831161038157829003601f168201915b5050505050905090565b60006103b3826107ee565b506000908152600460205260409020546001600160a01b031690565b60006103da826105c4565b9050806001600160a01b0316836001600160a01b03160361044c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061046857506104688133610296565b6104da5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610443565b6104e48383610850565b505050565b6104f4335b826108be565b6105105760405162461bcd60e51b815260040161044390611555565b6104e483838361093d565b6104e483838360405180602001604052806000815250610742565b6000610540610aa1565b60065460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610592573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b691906115a2565b506105c082610abf565b5050565b6000818152600260205260408120546001600160a01b0316806103105760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610443565b6007546001600160a01b0316331461067e5760405162461bcd60e51b815260206004820181905260248201527f4c6f6f74626f785469636b65743a2043414c4c45525f49535f4e4f545f4445566044820152606401610443565b61068a81600854610b2c565b6008805490600061069a836115d5565b919050555050565b60006001600160a01b03821661070c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610443565b506001600160a01b031660009081526003602052604090205490565b6060600180546103259061151b565b6105c0338383610b46565b61074c33836108be565b6107685760405162461bcd60e51b815260040161044390611555565b61077484848484610c14565b50505050565b6060610785826107ee565b600061079c60408051602081019091526000815290565b905060008151116107bc57604051806020016040528060008152506107e7565b806107c684610c47565b6040516020016107d79291906115ee565b6040516020818303038152906040525b9392505050565b6000818152600260205260409020546001600160a01b031661084d5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610443565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610885826105c4565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806108ca836105c4565b9050806001600160a01b0316846001600160a01b0316148061091157506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806109355750836001600160a01b031661092a846103a8565b6001600160a01b0316145b949350505050565b826001600160a01b0316610950826105c4565b6001600160a01b0316146109765760405162461bcd60e51b81526004016104439061161d565b6001600160a01b0382166109d85760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610443565b826001600160a01b03166109eb826105c4565b6001600160a01b031614610a115760405162461bcd60e51b81526004016104439061161d565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600080610aac610cda565b9050610ab9816001611662565b91505090565b610ac8336104ee565b610b235760405162461bcd60e51b815260206004820152602660248201527f4c6f6f74626f785469636b65743a2043414c4c45525f4e4f545f5449434b45546044820152652fa7aba722a960d11b6064820152608401610443565b61084d81610e31565b6105c0828260405180602001604052806000815250610ec6565b816001600160a01b0316836001600160a01b031603610ba75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610443565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610c1f84848461093d565b610c2b84848484610ef9565b6107745760405162461bcd60e51b81526004016104439061167a565b60606000610c5483610ffa565b600101905060008167ffffffffffffffff811115610c7457610c746113f6565b6040519080825280601f01601f191660200182016040528015610c9e576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610ca857509392505050565b6000804233604051602001610cef91906116e2565b6040516020818303038152906040528051906020012060001c610d1291906116ff565b4230604051602001610d2491906116e2565b6040516020818303038152906040528051906020012060001c610d4791906116ff565b434232604051602001610d5a91906116e2565b6040516020818303038152906040528051906020012060001c610d7d91906116ff565b454241604051602001610d9091906116e2565b6040516020818303038152906040528051906020012060001c610db391906116ff565b610dbd4442611662565b610dc79190611662565b610dd19190611662565b610ddb9190611662565b610de59190611662565b610def9190611662565b610df99190611662565b604051602001610e0b91815260200190565b60408051601f1981840301815291905280516020909101209050610ab96103e882611713565b6000610e3c826105c4565b9050610e47826105c4565b600083815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526003845282852080546000190190558785526002909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b610ed083836110d2565b610edd6000848484610ef9565b6104e45760405162461bcd60e51b81526004016104439061167a565b60006001600160a01b0384163b15610fef57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f3d903390899088908890600401611727565b6020604051808303816000875af1925050508015610f78575060408051601f3d908101601f19168201909252610f7591810190611764565b60015b610fd5573d808015610fa6576040519150601f19603f3d011682016040523d82523d6000602084013e610fab565b606091505b508051600003610fcd5760405162461bcd60e51b81526004016104439061167a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610935565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106110395772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611065576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061108357662386f26fc10000830492506010015b6305f5e100831061109b576305f5e100830492506008015b61271083106110af57612710830492506004015b606483106110c1576064830492506002015b600a83106103105760010192915050565b6001600160a01b0382166111285760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610443565b6000818152600260205260409020546001600160a01b03161561118d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610443565b6000818152600260205260409020546001600160a01b0316156111f25760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610443565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b03198116811461084d57600080fd5b60006020828403121561128557600080fd5b81356107e78161125d565b60005b838110156112ab578181015183820152602001611293565b838111156107745750506000910152565b600081518084526112d4816020860160208601611290565b601f01601f19169290920160200192915050565b6020815260006107e760208301846112bc565b60006020828403121561130d57600080fd5b5035919050565b80356001600160a01b038116811461132b57600080fd5b919050565b6000806040838503121561134357600080fd5b61134c83611314565b946020939093013593505050565b60008060006060848603121561136f57600080fd5b61137884611314565b925061138660208501611314565b9150604084013590509250925092565b6000602082840312156113a857600080fd5b6107e782611314565b801515811461084d57600080fd5b600080604083850312156113d257600080fd5b6113db83611314565b915060208301356113eb816113b1565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561142257600080fd5b61142b85611314565b935061143960208601611314565b925060408501359150606085013567ffffffffffffffff8082111561145d57600080fd5b818701915087601f83011261147157600080fd5b813581811115611483576114836113f6565b604051601f8201601f19908116603f011681019083821181831017156114ab576114ab6113f6565b816040528281528a60208487010111156114c457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156114fb57600080fd5b61150483611314565b915061151260208401611314565b90509250929050565b600181811c9082168061152f57607f821691505b60208210810361154f57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000602082840312156115b457600080fd5b81516107e7816113b1565b634e487b7160e01b600052601160045260246000fd5b6000600182016115e7576115e76115bf565b5060010190565b60008351611600818460208801611290565b835190830190611614818360208801611290565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60008219821115611675576116756115bf565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60609190911b6bffffffffffffffffffffffff1916815260140190565b60008261170e5761170e6116cc565b500490565b600082611722576117226116cc565b500690565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061175a908301846112bc565b9695505050505050565b60006020828403121561177657600080fd5b81516107e78161125d56fea2646970667358221220401af13c394fc4b1e9941cc58b3092b1ea429191c5cb5b4752b823b6f4b35b2264736f6c634300080e0033";

type LootboxTicketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LootboxTicketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LootboxTicket__factory extends ContractFactory {
  constructor(...args: LootboxTicketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _darwin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LootboxTicket> {
    return super.deploy(_darwin, overrides || {}) as Promise<LootboxTicket>;
  }
  override getDeployTransaction(
    _darwin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_darwin, overrides || {});
  }
  override attach(address: string): LootboxTicket {
    return super.attach(address) as LootboxTicket;
  }
  override connect(signer: Signer): LootboxTicket__factory {
    return super.connect(signer) as LootboxTicket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LootboxTicketInterface {
    return new utils.Interface(_abi) as LootboxTicketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LootboxTicket {
    return new Contract(address, _abi, signerOrProvider) as LootboxTicket;
  }
}
