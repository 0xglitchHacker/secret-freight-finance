import { initFhevm, FhevmInstance } from 'fhevmjs';

let fhevmInstance: FhevmInstance | null = null;

export async function initializeFHE() {
  if (!fhevmInstance) {
    try {
      fhevmInstance = await initFhevm();
    } catch (error) {
      console.error('Failed to initialize FHE:', error);
      throw error;
    }
  }
  return fhevmInstance;
}

export async function getFhevmInstance() {
  if (!fhevmInstance) {
    await initializeFHE();
  }
  return fhevmInstance;
}

export async function encryptAmount(
  value: number,
  contractAddress: string,
  userAddress: string
): Promise<{ encryptedData: string; inputProof: string }> {
  const instance = await getFhevmInstance();
  
  try {
    const { publicKey, signature } = instance.getPublicKey(contractAddress);
    const encryptedData = instance.encrypt(value, publicKey);
    const inputProof = signature;
    
    return {
      encryptedData: encryptedData.toString(),
      inputProof: inputProof,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw error;
  }
}

export async function generateProof(
  contractAddress: string,
  userAddress: string
): Promise<string> {
  const instance = await getFhevmInstance();
  
  try {
    const { signature } = instance.getPublicKey(contractAddress);
    return signature;
  } catch (error) {
    console.error('Proof generation failed:', error);
    throw error;
  }
}