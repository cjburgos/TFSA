import {NavBar} from "../../components/navbar/NavBar.jsx";
import {ConnectWallet} from "../../components/web3/ConnectWallet.jsx";

import './Header.css';
import '../navbar/Navbar.css';
import '../web3/ConnectWallet.css';

export const Header = () => {
    return (
    <div className='menu-header'>
        <NavBar className="navBar" />
        <ConnectWallet className="connectWallet" />
    </div>
  );
};