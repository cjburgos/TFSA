import React from 'react';
import {AmountBox} from "./AmountBox.jsx";
import "./convert.css";
import TFSACoin from "../../assets/coins/TFSACoin.svg";


function TokenFocus(props) {

    return (
        <div className={"token-box"}>
            <div className={"left-token"}>
                <img src={TFSACoin} alt="coin"/>
                <AmountBox amount={props.value}/>
            </div>
            <div className={"right-token"}>
                <img src={props.coin} alt="coin"/>
                <AmountBox amount={props.value}/>
            </div>
        </div>
    )
}

export {TokenFocus};