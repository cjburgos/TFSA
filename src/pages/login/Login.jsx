import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './Login.css';
import InitialConnectedWallet from '../connect_wallet/InitialConnectWallet.jsx'

export default function App() {
  return (
    <Authenticator> 
      <InitialConnectedWallet/>
    </Authenticator>
  );
};