import {NavBar} from "../../components/navbar/NavBar.jsx";

import './Header.css';
import '../navbar/Navbar.css';

const Header = () => {
    return (
    <div className='menu-header'>
        <NavBar className="navBar" />
    </div>
  );
};

Header.displayName = 'Header';

export default Header;