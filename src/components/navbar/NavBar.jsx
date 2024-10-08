import { Menu, MenuItem, View } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';


export const NavBar = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    async function handleSignOut(){
        await signOut();
    }

    return (
    <View className="navBar">
        <Menu>
            <MenuItem onClick={() => handleButtonClick('/')}> Home </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/conversion_rates')}> Convert </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/ride_start')}> Start Ride </MenuItem>
            <MenuItem onClick={() => handleSignOut()}>  Sign Out </MenuItem>
        </Menu>
    </View>
  );
};