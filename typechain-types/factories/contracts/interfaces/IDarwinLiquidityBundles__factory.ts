/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDarwinLiquidityBundles,
  IDarwinLiquidityBundlesInterface,
} from "../../../contracts/interfaces/IDarwinLiquidityBundles";

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
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockEnd",
        type: "uint256",
      },
    ],
    name: "EnterBundle",
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
        indexed: false,
        internalType: "uint256",
        name: "amountToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ExitBundle",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_darwinRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDarwinLiquidityBundles__factory {
  static readonly abi = _abi;
  static createInterface(): IDarwinLiquidityBundlesInterface {
    return new utils.Interface(_abi) as IDarwinLiquidityBundlesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDarwinLiquidityBundles {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDarwinLiquidityBundles;
  }
}