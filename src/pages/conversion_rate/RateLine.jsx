import React from 'react';
import {useNavigate} from "react-router-dom";


function RateLine(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/convert", {state: {
                coin: props.coin,
                rate: props.value
            }});
    }


    return (
        <div className="rate-line">
            <div className="rate-coin">
                <img src={props.coin} alt="coin" onClick={handleClick} />
            </div>
            <div className="rate-value">
                {props.value}
            </div>
        </div>
    );
}

export { RateLine };