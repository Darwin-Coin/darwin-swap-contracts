/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DarwinStaking,
  DarwinStakingInterface,
} from "../../contracts/DarwinStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_darwin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakedDarwin",
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
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_APR",
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
    name: "LOCK_BONUS_APR",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "claimableDarwin",
    outputs: [
      {
        internalType: "uint256",
        name: "claimable",
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
        internalType: "contract IERC20",
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockPeriod",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedDarwin",
    outputs: [
      {
        internalType: "contract IERC20",
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
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "lastClaimTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockEnd",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a79380380610a7983398101604081905261002f91610081565b6001600081905580546001600160a01b039384166001600160a01b031991821617909155600280549290931691161790556100b4565b80516001600160a01b038116811461007c57600080fd5b919050565b6000806040838503121561009457600080fd5b61009d83610065565b91506100ab60208401610065565b90509250929050565b6109b6806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634233531e1161005b5780634233531e1461012b5780637b0472f01461013e5780638ce910a514610151578063e4fd18c91461016457600080fd5b80631959a0021461008d5780632bc07e32146100ce5780632e1a7d4d146100eb5780633110c79214610100575b600080fd5b6100b461009b366004610854565b6003602052600090815260409020805460019091015482565b604080519283526020830191909152015b60405180910390f35b6100dd671bc16d674ec8000081565b6040519081526020016100c5565b6100fe6100f9366004610884565b610173565b005b600154610113906001600160a01b031681565b6040516001600160a01b0390911681526020016100c5565b600254610113906001600160a01b031681565b6100fe61014c36600461089d565b610423565b6100dd61015f366004610854565b6105fd565b6100dd674563918244f4000081565b61017b61076e565b60006101856107c7565b905081156103e657336000908152600360205260409020600101544210156101ec5760405162461bcd60e51b815260206004820152601560248201527411185c9dda5b94dd185ada5b99ce881313d0d2d151605a1b60448201526064015b60405180910390fd5b6002546040516370a0823160e01b81523360048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610234573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025891906108bf565b8211156102b15760405162461bcd60e51b815260206004820152602160248201527f44617277696e5374616b696e673a204e4f545f454e4f5547485f7344415257496044820152602760f91b60648201526084016101e3565b600254604051632770a7eb60e21b8152336004820152602481018490526001600160a01b0390911690639dc29fac90604401600060405180830381600087803b1580156102fd57600080fd5b505af1158015610311573d6000803e3d6000fd5b505060015460405163a9059cbb60e01b8152336004820152602481018690526001600160a01b03909116925063a9059cbb91506044016020604051808303816000875af1158015610366573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038a91906108d8565b6103e65760405162461bcd60e51b815260206004820152602760248201527f44617277696e5374616b696e673a2057495448445241575f5452414e5346455260448201526617d1905253115160ca1b60648201526084016101e3565b6040518190839033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b56890600090a4506104206001600055565b50565b61042b61076e565b6001546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a691906108d8565b6104f25760405162461bcd60e51b815260206004820152601b60248201527f44617277696e5374616b696e673a205354414b455f4641494c4544000000000060448201526064016101e3565b6104fa6107c7565b503360009081526003602052604090206001015442106105365761051e8142610910565b3360009081526003602052604090206001015561055e565b3360009081526003602052604081206001018054839290610558908490610910565b90915550505b6002546040516340c10f1960e01b8152336004820152602481018490526001600160a01b03909116906340c10f1990604401600060405180830381600087803b1580156105aa57600080fd5b505af11580156105be573d6000803e3d6000fd5b50506040518492503391507febedb8b3c678666e7f36970bc8f57abf6d8fa2e828c0da91ea5b75bf68ed101a90600090a36105f96001600055565b5050565b6002546040516370a0823160e01b81526001600160a01b03838116600483015260009283929116906370a0823190602401602060405180830381865afa15801561064b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066f91906108bf565b9050806000036106825750600092915050565b6001600160a01b0383166000908152600360205260408120805460019091015490916106ae8342610928565b905060008284101561071a576000844285116106ca57846106cc565b425b6106d69190610928565b90506106ef6301e1338068056bc75e2d6310000061093f565b81610702671bc16d674ec800008961093f565b61070c919061093f565b610716919061095e565b9150505b806107326301e1338068056bc75e2d6310000061093f565b83610745674563918244f400008961093f565b61074f919061093f565b610759919061095e565b6107639190610910565b979650505050505050565b6002600054036107c05760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016101e3565b6002600055565b60006107d2336105fd565b33600090815260036020526040902042905590508015610851576001546040516340c10f1960e01b8152336004820152602481018390526001600160a01b03909116906340c10f1990604401600060405180830381600087803b15801561083857600080fd5b505af115801561084c573d6000803e3d6000fd5b505050505b90565b60006020828403121561086657600080fd5b81356001600160a01b038116811461087d57600080fd5b9392505050565b60006020828403121561089657600080fd5b5035919050565b600080604083850312156108b057600080fd5b50508035926020909101359150565b6000602082840312156108d157600080fd5b5051919050565b6000602082840312156108ea57600080fd5b8151801515811461087d57600080fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115610923576109236108fa565b500190565b60008282101561093a5761093a6108fa565b500390565b6000816000190483118215151615610959576109596108fa565b500290565b60008261097b57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212208921f7082413ec23c115d397ace0dcb0501755865343ad2be797e54e3a0aa8ae64736f6c634300080e0033";

type DarwinStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DarwinStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DarwinStaking__factory extends ContractFactory {
  constructor(...args: DarwinStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _darwin: PromiseOrValue<string>,
    _stakedDarwin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DarwinStaking> {
    return super.deploy(
      _darwin,
      _stakedDarwin,
      overrides || {}
    ) as Promise<DarwinStaking>;
  }
  override getDeployTransaction(
    _darwin: PromiseOrValue<string>,
    _stakedDarwin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_darwin, _stakedDarwin, overrides || {});
  }
  override attach(address: string): DarwinStaking {
    return super.attach(address) as DarwinStaking;
  }
  override connect(signer: Signer): DarwinStaking__factory {
    return super.connect(signer) as DarwinStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DarwinStakingInterface {
    return new utils.Interface(_abi) as DarwinStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DarwinStaking {
    return new Contract(address, _abi, signerOrProvider) as DarwinStaking;
  }
}