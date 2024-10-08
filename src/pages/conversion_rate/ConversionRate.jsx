import React from "react";
import "./conversionRate.css";
import {RateLine} from "./RateLine.jsx";
import MetroCoin from "../../assets/coins/MetroCoin.svg";
import TRAXCoin from "../../assets/coins/TRAXCoin.svg";
import CTACoin from "../../assets/coins/ctaCoin.svg";
import TCoin from "../../assets/coins/TCoin.svg";



function ConversionRate () {
  return (
    <div className={"rate-outer"}>
      <RateLine coin={MetroCoin} value={1.25}/>
      <RateLine coin={TRAXCoin} value={0.97}/>
      <RateLine coin={CTACoin} value={1.23}/>
      <RateLine coin={TCoin} value={0.47}/>
    </div>
  );
};

export { ConversionRate };