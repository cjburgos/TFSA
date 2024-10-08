import AppHome from '../home/AppHome.jsx'
import {ConnectWallet} from "../../components/common/ConnectWallet.jsx";
import { useNavigate } from 'react-router-dom';

export default function InitialConnectWallet() {
  const navigate = useNavigate();

  const { isConnected } = useAccount();

  if (isConnected) navigate("/");;

  return <ConnectWallet/>
}