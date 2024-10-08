import React from "react";
import "./conversionRate.css";
import {RateLine} from "./RateLine.jsx";
import MetroCoin from "../../assets/coins/Metro.svg";
import TRAXCoin from "../../assets/coins/TRAX.svg";
import CTACoin from "../../assets/coins/CTA.svg";
import TCoin from "../../assets/coins/T.svg";



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