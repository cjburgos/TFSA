import { Menu, MenuItem, View, ThemeProvider, Theme } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';

const theme: Theme = {
    name: 'menu-theme',
    tokens: {
      components: {
        menu: {
          backgroundColor: { value: 'd9d9d93d' },
          borderRadius: { value: '0' },
          item: {
            minHeight: { value: '5rem' },
          },
        },
      },
    },
  };

export const NavBar = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    async function handleSignOut(){
        await signOut();
    }

    return (
    <View>
        <Menu>
            <MenuItem onClick={() => handleButtonClick('/')}> Home </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/conversion_rates')}> Convert </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/ride_start')}> Start Ride </MenuItem>
            <MenuItem onClick={() => handleSignOut()}>  Sign Out </MenuItem>
        </Menu>
    </View>
  );
};