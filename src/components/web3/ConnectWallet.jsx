import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import { config } from '../../wagmi';
import './ConnectWallet.css';

const client = new QueryClient();

export const ConnectWallet = () => {
    return (    
    <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
            <RainbowKitProvider>
                {/* app body goes here */}
                <ConnectButton className="connect-button" label="Connect Wallet" showBalance={true} />
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  );
};