import { useWriteContract, useReadContract, useAccount } from 'wagmi';
import { encryptAmount, generateProof } from '../lib/fhe-utils';

// Contract address - to be updated after deployment
const SECRET_FREIGHT_FINANCE_ADDRESS = '0x...' as const;

// Contract ABI - simplified for demonstration
const SECRET_FREIGHT_FINANCE_ABI = [
  {
    "inputs": [
      {"internalType": "string", "name": "_origin", "type": "string"},
      {"internalType": "string", "name": "_destination", "type": "string"},
      {"internalType": "bytes", "name": "_amount", "type": "bytes"},
      {"internalType": "bytes", "name": "_weight", "type": "bytes"},
      {"internalType": "bytes", "name": "_distance", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "createInvoice",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "invoiceId", "type": "uint256"},
      {"internalType": "bytes", "name": "_amount", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "payInvoice",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "payable",
    "type": "function"
  }
] as const;

export function useSecretFreightFinance() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const createInvoice = async (
    origin: string,
    destination: string,
    amount: number,
    weight: number,
    distance: number
  ) => {
    if (!address) throw new Error('Wallet not connected');

    try {
      // Encrypt the sensitive data
      const encryptedAmount = await encryptAmount(amount, SECRET_FREIGHT_FINANCE_ADDRESS, address);
      const encryptedWeight = await encryptAmount(weight, SECRET_FREIGHT_FINANCE_ADDRESS, address);
      const encryptedDistance = await encryptAmount(distance, SECRET_FREIGHT_FINANCE_ADDRESS, address);
      const inputProof = await generateProof(SECRET_FREIGHT_FINANCE_ADDRESS, address);

      return writeContract({
        address: SECRET_FREIGHT_FINANCE_ADDRESS,
        abi: SECRET_FREIGHT_FINANCE_ABI,
        functionName: 'createInvoice',
        args: [
          origin,
          destination,
          encryptedAmount.encryptedData,
          encryptedWeight.encryptedData,
          encryptedDistance.encryptedData,
          inputProof,
        ],
      });
    } catch (error) {
      console.error('Failed to create invoice:', error);
      throw error;
    }
  };

  const payInvoice = async (invoiceId: number, amount: number) => {
    if (!address) throw new Error('Wallet not connected');

    try {
      const encryptedAmount = await encryptAmount(amount, SECRET_FREIGHT_FINANCE_ADDRESS, address);
      const inputProof = await generateProof(SECRET_FREIGHT_FINANCE_ADDRESS, address);

      return writeContract({
        address: SECRET_FREIGHT_FINANCE_ADDRESS,
        abi: SECRET_FREIGHT_FINANCE_ABI,
        functionName: 'payInvoice',
        args: [invoiceId, encryptedAmount.encryptedData, inputProof],
        // Removed value parameter to avoid direct transfers
      });
    } catch (error) {
      console.error('Failed to pay invoice:', error);
      throw error;
    }
  };

  return {
    createInvoice,
    payInvoice,
  };
}
