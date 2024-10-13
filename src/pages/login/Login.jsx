import { Authenticator } from '@aws-amplify/ui-react';
import AppHome from '../home/AppHome.jsx'

import '@aws-amplify/ui-react/styles.css';
import './Login.css';


export default function App() {
  return (
    <Authenticator> 
      <AppHome/>
    </Authenticator>
  );
};