import React from "react";
import {ConversionRate} from "../pages/conversion_rate/ConversionRate.jsx";
import {Convert} from "../pages/convert/convert.jsx";
// import {Stake} from "../pages/stake/Stake.jsx";
import {RideStart} from "../pages/ride_start/rideStart.jsx";
import {RideInProgress} from "../pages/ride_in_progress/rideInProgress.jsx";
import {RideComplete} from "../pages/ride_complete/rideComplete.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function AppHome () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/conversion_rate" element={<ConversionRate/>}/>
                <Route path="/convert" element={<Convert/>}/>
                {/*<Route path="/stake" element={<Stake/>}/>*/}
                <Route path="/ride_start" element={<RideStart/>}/>
                <Route path="/ride_in_progress" element={<RideInProgress/>}/>
                <Route path="/ride_complete" element={<RideComplete/>}/>
            </Routes>
        </BrowserRouter>
        );
}

export default AppHome ;