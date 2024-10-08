import React from 'react';
import {useNavigate} from "react-router-dom";


function RateLine(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/convert", {state: {
            leftCoin: {
                balanceToken: props.balanceToken,
                available: props.balanceAvailable
            },
            rightCoin: {
                coin: props.token,
            }

            }});
    }


    return (
        <div className="rate-line">
            <div className="rate-coin">
                <img src={props.token.img} alt={props.token.longName} onClick={handleClick} />
            </div>
            <div className="rate-value">
                {props.token.conversionValue}
            </div>
        </div>
    );
}

export { RateLine };