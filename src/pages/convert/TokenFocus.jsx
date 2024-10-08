import React from 'react';
import {AmountBox} from "./AmountBox.jsx";
import "./convert.css";
import TFSACoin from "../../assets/coins/TFSA.svg";


function TokenFocus(props) {
    console.log(props)

    return (
        <div className={"token-box"}>
            <div className={"left-token"}>
                <img src={props.leftCoin.balanceToken.img} alt="coin"/>
                <AmountBox amount={props.leftCoin.balanceToken.shortName}/>
            </div>
            <div className={"right-token"}>
                <img src={props.rightCoin.coin.img} alt="coin"/>
                <AmountBox amount={props.rightCoin.coin.conversionValue}/>
            </div>
        </div>
    )
}

export {TokenFocus};