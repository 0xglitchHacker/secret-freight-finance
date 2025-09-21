# 🚛 Secret Freight Finance

A revolutionary decentralized freight finance platform leveraging Fully Homomorphic Encryption (FHE) technology to ensure complete privacy while enabling secure financial transactions in the freight industry.

## ✨ Core Features

- **FHE-Encrypted Transactions**: All financial data remains encrypted during computation
- **Multi-Wallet Integration**: Seamless support for Rainbow, MetaMask, and other Web3 wallets
- **Smart Contract Automation**: Automated freight financing with encrypted data processing
- **Privacy-First Architecture**: Complete data confidentiality without compromising functionality
- **Real-time Analytics**: Encrypted financial metrics and performance tracking

## 🛠 Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, Tailwind CSS
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Wallet Integration**: Rainbow Kit, Wagmi, Viem
- **Smart Contracts**: Solidity with FHE support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Web3 wallet (MetaMask, Rainbow, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/0xglitchHacker/secret-freight-finance.git

# Navigate to the project directory
cd secret-freight-finance

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Configuration

Create a `.env.local` file in the root directory:

```env
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_KEY
```

## 🔐 Smart Contract Features

The platform includes FHE-enabled smart contracts for:

- **Encrypted Invoice Management**: Private freight invoice processing
- **Secure Loan Processing**: Encrypted lending and borrowing mechanisms
- **Insurance Claim Handling**: Private claim processing with FHE
- **Credit Scoring System**: Encrypted risk assessment and scoring
- **Reputation Management**: Private reputation tracking

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── WalletConnect.tsx
│   ├── WalletProvider.tsx
│   └── Header.tsx
├── hooks/         # Custom React hooks
│   └── useSecretFreightFinance.ts
├── lib/           # Utility functions
│   └── fhe-utils.ts
├── config/        # Configuration files
│   └── wallet.ts
└── contracts/     # Smart contract interfaces
    └── SecretFreightFinance.sol
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Import Project**: Connect your GitHub repository to Vercel
2. **Configure Environment Variables**:
   ```
   VITE_CHAIN_ID=11155111
   VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
   VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_ID
   VITE_INFURA_API_KEY=YOUR_INFURA_KEY
   ```
3. **Deploy**: Click deploy and wait for build completion
4. **Custom Domain**: Configure custom domain in Vercel dashboard (optional)

### Manual Deployment

```bash
npm run build
npm run preview
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### FHE Integration

The platform uses FHE for:
- Encrypting sensitive financial data
- Performing computations on encrypted data
- Maintaining privacy while enabling functionality
- Secure multi-party computations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

## 🔒 Security

This project implements FHE (Fully Homomorphic Encryption) to ensure:
- Complete privacy of financial data
- Secure computations on encrypted data
- Zero-knowledge proof capabilities
- End-to-end encryption for all sensitive operations

## 🌟 Key Benefits

- **Privacy**: Complete data confidentiality
- **Transparency**: Public blockchain verification
- **Efficiency**: Automated smart contract execution
- **Security**: FHE-encrypted data processing
- **Scalability**: Decentralized architecture

---

Built with ❤️ by the Secret Freight Finance team