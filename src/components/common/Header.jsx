import {NavBar} from "../../components/common/NavBar.jsx";
import {ConnectWallet} from "../../components/common/ConnectWallet.jsx";

export const Header = () => {
    return (
    <div class='menu-header'>
        <NavBar/>
        <ConnectWallet/>
    </div>
  );
};