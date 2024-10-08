import {AssetLine} from "./AssetLine.jsx";
import "./assets.css"
import TokenMeta from "../../../tokenMeta.json"
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../../wagmi';
import {ConnectWallet} from "../../components/web3/ConnectWallet.jsx";

const client = new QueryClient();


function HandleCases() {
    const navigate = useNavigate();
    const handleButtonClick = (path) => {
      console.log("clicked");
      navigate(path);
    };
  
    const { isConnected } = useAccount();
  
    if (isConnected) {
      return (
        <div className={"asset-line-container"}>
            <AssetLine token={TokenMeta.MetroToken} value={433.34}/>
            <AssetLine token={TokenMeta.MTAToken} value={104.12} />
            <AssetLine token={TokenMeta.TFSA} value={3.00} />
        </div>);
    }
    else {
      return <ConnectWallet />;
    }
    
  }

function Assets() {

    return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
        <HandleCases />
        </QueryClientProvider>
    </WagmiProvider>)
}

export {Assets};