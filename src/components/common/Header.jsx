import {NavBar} from "../../components/common/NavBar.jsx";
import {ConnectWallet} from "../../components/common/ConnectWallet.jsx";

export const Header = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    async function handleSignOut(){
        await signOut();
    }

    return (
    <div class='menu-header'>
        <NavBar/>
        <ConnectWallet/>
    </div>
  );
};