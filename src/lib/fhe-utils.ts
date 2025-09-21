import { createFhevmInstance } from 'fhevmjs';

let fhevmInstance: any = null;

export async function initializeFHE() {
  if (!fhevmInstance) {
    try {
      fhevmInstance = await createFhevmInstance({
        chainId: 11155111, // Sepolia
        publicKey: {
          name: 'FHE',
          version: '1.0.0',
          publicKey: '0x...', // FHE public key
        },
      });
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
    const encryptedData = await instance.encrypt32(value);
    const inputProof = await instance.generateInputProof({
      publicKey: instance.getPublicKey(contractAddress),
      signature: await instance.signMessage(contractAddress, userAddress),
    });
    
    return {
      encryptedData: encryptedData,
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
    const proof = await instance.generateInputProof({
      publicKey: instance.getPublicKey(contractAddress),
      signature: await instance.signMessage(contractAddress, userAddress),
    });
    
    return proof;
  } catch (error) {
    console.error('Proof generation failed:', error);
    throw error;
  }
}
