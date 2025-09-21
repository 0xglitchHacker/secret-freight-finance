# 🚀 Deployment Guide

## Vercel Deployment

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `0xglitchHacker/secret-freight-finance`
4. Click "Import" to proceed

### Step 2: Configure Environment Variables
Add the following environment variables in the Vercel dashboard:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_KEY
```

**To add environment variables:**
1. Go to Project Settings → Environment Variables
2. Add each variable with your actual values
3. Set them for "Production", "Preview", and "Development"

### Step 3: Deploy
1. Click "Deploy" in the Vercel dashboard
2. Wait for the build process to complete
3. Your application will be available at the provided Vercel URL

### Step 4: Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel
4. Wait for SSL certificate to be issued

## Environment Variables Setup

### Required Variables
- `VITE_CHAIN_ID`: Ethereum chain ID (11155111 for Sepolia)
- `VITE_RPC_URL`: RPC endpoint URL
- `VITE_WALLET_CONNECT_PROJECT_ID`: WalletConnect project ID
- `VITE_INFURA_API_KEY`: Infura API key

### How to Get Values
1. **Infura API Key**: Sign up at [infura.io](https://infura.io) and create a new project
2. **WalletConnect Project ID**: Get from [cloud.walletconnect.com](https://cloud.walletconnect.com)
3. **RPC URL**: Use your Infura endpoint or other RPC provider

## Build Configuration

### Vercel Configuration
The project includes a `vercel.json` file with:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Environment variables

### Manual Build
```bash
npm install
npm run build
npm run preview
```

## Troubleshooting

### Common Issues

#### Build Failures
- Ensure all dependencies are installed
- Check environment variables are set correctly
- Verify Node.js version compatibility

#### Wallet Connection Issues
- Verify WalletConnect Project ID is correct
- Check network configuration
- Ensure HTTPS is enabled (required for wallet connections)

#### Network Issues
- Verify RPC URL is correct and accessible
- Check Infura API key is valid
- Ensure network configuration matches

## Performance Optimization

1. **Enable Vercel Analytics**
   - Go to Project Settings → Analytics
   - Enable Web Analytics for performance monitoring

2. **Configure Caching**
   - Add appropriate cache headers for static assets
   - Configure CDN settings for optimal performance

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to version control
   - Use Vercel's environment variable system
   - Rotate keys regularly

2. **HTTPS**
   - Vercel automatically provides HTTPS
   - Ensure all external API calls use HTTPS

## Maintenance

### Regular Updates
1. **Dependencies**: Keep all dependencies updated
2. **Environment Variables**: Rotate keys periodically
3. **Monitoring**: Check deployment logs regularly

### Scaling
1. **Auto-scaling**: Vercel handles this automatically
2. **Edge Functions**: Consider using Vercel Edge Functions for better performance
3. **CDN**: Vercel's global CDN is automatically configured

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues**: Create issues in the repository for bugs
- **Community**: Join Vercel Discord for community support
