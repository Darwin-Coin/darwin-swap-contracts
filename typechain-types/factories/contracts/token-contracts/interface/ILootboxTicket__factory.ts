/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILootboxTicket,
  ILootboxTicketInterface,
} from "../../../../contracts/token-contracts/interface/ILootboxTicket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dev",
        type: "address",
      },
      {
        internalType: "address",
        name: "_darwin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILootboxTicket__factory {
  static readonly abi = _abi;
  static createInterface(): ILootboxTicketInterface {
    return new utils.Interface(_abi) as ILootboxTicketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILootboxTicket {
    return new Contract(address, _abi, signerOrProvider) as ILootboxTicket;
  }
}
