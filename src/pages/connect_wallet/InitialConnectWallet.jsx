import {ConnectWallet} from "../../components/web3/ConnectWallet.jsx";
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../../wagmi';

const client = new QueryClient();

export default function InitialConnectWallet() {

  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <ConnectWallet />
        </QueryClientProvider>
    </WagmiProvider>
  )
}