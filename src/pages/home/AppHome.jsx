
import {ConversionRate} from "../conversion_rate/ConversionRate.jsx";
import {Convert} from "../convert/convert.jsx";
import {RideStart} from "../ride_start/rideStart.jsx";
import {RideInProgress} from "../ride_in_progress/rideInProgress.jsx";
import {RideComplete} from "../ride_complete/rideComplete.jsx";
import {Assets} from "../assets/Assets.jsx";
import {Route, Routes} from "react-router-dom";
// import {NavBar} from "../../components/common/NavBar.jsx";
import {Header} from "../../components/common/Header.jsx";

// // for wallet connect button
// import '@rainbow-me/rainbowkit/styles.css';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { WagmiProvider } from 'wagmi';
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { config } from '../../wagmi';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

// const client = new QueryClient();

function AppHome () {
    return (
        <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Assets/>}/>
            <Route path="/conversion_rates" element={<ConversionRate/>}/>
            <Route path="/convert" element={<Convert/>}/>
            <Route path="/ride_start" element={<RideStart/>}/>
            <Route path="/ride_in_progress" element={<RideInProgress/>}/>
            <Route path="/ride_complete" element={<RideComplete/>}/>
            {/* <Route path={"/assets"} element={<Assets/>}/> */}
        </Routes>
        </div>
    );
}

export default AppHome ;