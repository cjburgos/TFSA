import { Menu, MenuItem, View, ThemeProvider } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import './Navbar.css';
import { pad } from 'viem';

const theme = {
    name: 'menu-theme',
    tokens: {
      components: {
        menu: {
          padding: { value: '20' },
          margin: '20',
          color: { value: '#ffffff' },
          backgroundColor: { value: '#242424' }, 
          borderRadius: { value: '0' },
          item: {
            minHeight: { value: '1rem' },
          },
        },
        button: {
          color: { value: '#ffffff' },
          backgroundColor: { value: '#242424' },
          borderRadius: { value: '0' },
          hover: {
            backgroundColor: { value: '#242424' },
          },
          focus: {
            backgroundColor: { value: '#242424' },
          },
          active: {
            backgroundColor: { value: '#242424' },
          },
          disabled: {
            backgroundColor: { value: '#242424' },
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
        <Menu triggerClassName='navBarTrigger'>
            <MenuItem onClick={() => handleButtonClick('/')}> Home </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/conversion_rates')}> Convert </MenuItem>
            {/* <MenuItem onClick={() => handleButtonClick('/ride_start')}> Start Ride </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/ride_in_progress')}> In-Progress Rides </MenuItem>
            <MenuItem onClick={() => handleButtonClick('/ride_complete')}> Complete Ride </MenuItem> */}

            <MenuItem onClick={() => handleSignOut()}>  Sign Out </MenuItem>
        </Menu>
        </ThemeProvider>
    </View>
  );
};