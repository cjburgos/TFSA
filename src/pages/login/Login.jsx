import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './Login.css';
import InitialConnectedWallet from '../connect_wallet/InitialConnectWallet.jsx'
import AppHome from '../home/AppHome.jsx'

export default function App() {
  return (
    <Authenticator> 
      <AppHome/>
    </Authenticator>
  );
};