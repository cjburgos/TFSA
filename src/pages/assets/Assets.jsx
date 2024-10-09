import { useEffect, useState } from 'react';
import { AssetLine } from './AssetLine.jsx';
import './assets.css';
import TokenMeta from '../../../tokenMeta.json';
import { useAccount } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../../wagmi';
import { ConnectWallet } from '../../components/web3/ConnectWallet.jsx';
import { getBalance } from '@wagmi/core';

const client = new QueryClient();
const tokenList = [TokenMeta.TFSA, TokenMeta.TRAXToken, TokenMeta.MetroToken]; // Add other tokens as needed

function HandleCases() {
  const { address, isConnected } = useAccount(); // Get the connected wallet information
  const [tokenBalances, setTokenBalances] = useState(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalances = async () => {
      if (isConnected && address) {
        const balances = new Map();

        for (let i = 0; i < tokenList.length; i++) {
            console.log("printing addr");
            console.log(address);
            const params = {
                address: address,
                token: tokenList[i].tokenContractAddr,
              };
            console.log(params);
        //   try {
            const balanceObj = await getBalance(config, params);
            const formattedBalance = Number(balanceObj.value) / 10**balanceObj.decimals;
            balances.set(tokenList[i].shortName, formattedBalance);
        //   } catch (error) {
        //     balances.set(tokenList[i].shortName, 0.0);

        //     console.error(`Error fetching balance for ${tokenList[i].shortName}:`, error);
        //   }
        }
        setTokenBalances(balances);
        setLoading(false);
      }
    };

    fetchBalances();
  }, [address, isConnected]); // Fetch balances when the account or connection status changes

  if (!isConnected) {
    return <ConnectWallet />;
  }

  if (loading) {
    return <p>Loading balances...</p>; // Show a loading state while fetching
  }

  return (
    <div className={"asset-line-container"}>
        <AssetLine token={TokenMeta.TFSA} value={tokenBalances.get(TokenMeta.TFSA.shortName)}/>
        <AssetLine token={TokenMeta.TRAXToken} value={tokenBalances.get(TokenMeta.TRAXToken.shortName)}/>
        <AssetLine token={TokenMeta.MetroToken} value={tokenBalances.get(TokenMeta.MetroToken.shortName)}/>
    </div>
  );
}

function Assets() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <HandleCases />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export { Assets };
