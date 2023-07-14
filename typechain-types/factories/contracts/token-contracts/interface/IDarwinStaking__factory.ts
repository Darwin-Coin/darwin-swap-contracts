/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDarwinStaking,
  IDarwinStakingInterface,
} from "../../../../contracts/token-contracts/interface/IDarwinStaking";

const _abi = [
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
        name: "evotureTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "multiplier",
        type: "uint256",
      },
    ],
    name: "StakeEvoture",
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
        name: "evotureTokenId",
        type: "uint256",
      },
    ],
    name: "WithdrawEvoture",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserInfo",
    outputs: [
      {
        components: [
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
          {
            internalType: "uint256",
            name: "boost",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IDarwinStaking.UserInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IDarwinStaking__factory {
  static readonly abi = _abi;
  static createInterface(): IDarwinStakingInterface {
    return new utils.Interface(_abi) as IDarwinStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDarwinStaking {
    return new Contract(address, _abi, signerOrProvider) as IDarwinStaking;
  }
}