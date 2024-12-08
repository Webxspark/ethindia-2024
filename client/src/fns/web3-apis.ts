// web3-apis.ts

import { contractABI, factoryAddress } from "@/config/consts";
import { config } from "@/config/wallet-config";
import { readContract, simulateContract, writeContract } from "@wagmi/core";

// Types
export interface UserCoin {
  coinAddress: string;
  name: string;
  premintSupply: bigint;
  status: number;
  network: string;
}

// Check if user exists
export const isUserExits = async (address: string): Promise<boolean> => {
  const result = await readContract(config, {
    abi: contractABI,
    address: factoryAddress,
    functionName: "isUserExists",
    args: [address],
  });
  return result;
};

// Create new user
export const createUser = async (address: string): Promise<`0x${string}`> => {
  const { request } = await simulateContract(config, {
    abi: contractABI,
    address: factoryAddress,
    functionName: "createUser",
    args: [address],
  });
  const hash = await writeContract(config, request);
  return hash;
};

// Fetch user's coins
export const fetchUserCoins = async (address: string): Promise<UserCoin[]> => {
  const result = await readContract(config, {
    abi: contractABI,
    address: factoryAddress,
    functionName: "fetchCoin",
    args: [address],
  });
  return result;
};

// Fetch all coins
export const fetchAllCoins = async (): Promise<UserCoin[]> => {
  const result = await readContract(config, {
    abi: contractABI,
    address: factoryAddress,
    functionName: "fetchAll",
    args: [],
  });
  return result;
};

// Add new coin
export const addCoin = async (
  address: string,
  name: string,
  symbol: string,
  premintSupply: number,
  network: string,
  initialPrice: number
): Promise<`0x${string}`> => {
  const { request } = await simulateContract(config, {
    abi: contractABI,
    address: factoryAddress,
    functionName: "addCoin",
    args: [address, name, symbol, premintSupply, network, initialPrice],
  });
  const hash = await writeContract(config, request);
  console.log(request, hash);
  return hash;
};

// Wait for transaction
export const waitForTransaction = async (hash: `0x${string}`) => {
  return await waitForTransactionReceipt(config, {
    hash: hash,
  });
};