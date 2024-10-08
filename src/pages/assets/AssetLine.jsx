import {getCoinName} from "../../lib.js";
import "./assets.css"
import {useNavigate} from "react-router-dom";

function AssetLine(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/conversion_rates", {state: {
                coin: props.token,
                rate: props.value
            }});
    }
    return (
        <div className={"asset-line"} onClick={handleClick}>
            <img src={props.token} className={"asset-line-item"} alt={"Token"}/>
            <p className={"asset-line-item"}>{getCoinName(props.token)}</p>
            <p className={"asset-line-item"}>{props.value}</p>
        </div>
    )
}

export {AssetLine}