import React from "react";
import "./conversionRate.css";
import {RateLine} from "./RateLine.jsx";

import TokenMeta from "../../../tokenMeta.json"
import {useLocation} from "react-router-dom";


function ConversionRate () {
    const location = useLocation();
    const {token, amountAvailable} = location.state;
    // if (!token.shortName || !amountAvailable) {
    //     return <div>Error: Missing token or amount available data.</div>;
    // }

    const filteredItems = Object.values(TokenMeta).filter(item => item.shortName !== token.shortName);

    return (
    <div className={"rate-outer"}>
        {filteredItems.map(item => (
            <RateLine balanceToken={token} token={item}  balanceAvailable={amountAvailable} amountAvailable={amountAvailable} key={item.shortName}/>
        ))}
    </div>
  );
};

export { ConversionRate };