import { Menu, MenuItem, View, ThemeProvider } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import './NavBar.css';

const theme = {
    name: 'menu-theme',
    tokens: {
      components: {
        menu: {
            color: { value: '#ffffff' },
          backgroundColor: { value: '#242424' }, 
          borderRadius: { value: '0' },
          item: {
            minHeight: { value: '1rem' },

          },

        },
        text: {
            color: { value: '#ffffff'}
          }
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
        <ThemeProvider theme={theme}>
        <Menu className="navBar" triggerClassName='navBarTrigger'>
            <MenuItem onClick={() => handleButtonClick('/')}> Home </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/conversion_rates')}> Convert </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/ride_start')}> Start Ride </MenuItem>
            <MenuItem onClick={() => handleSignOut()}>  Sign Out </MenuItem>
        </Menu>
        </ThemeProvider>
    </View>
  );
};