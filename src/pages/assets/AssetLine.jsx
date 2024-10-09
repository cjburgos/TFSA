
import "./assets.css"
import {useNavigate} from "react-router-dom";

function AssetLine(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/conversion_rates", {state: {
                token: props.token,
                amountAvailable: props.value
            }});
    }
    return (
        <div className={"asset-line"} onClick={handleClick}>
            <img src={props.token?.img} className={"asset-line-item"} alt={"Token"}/>
            <p className={"asset-line-item"}>{props.token?.shortName}</p>
            <p className={"asset-line-item"}>{props.value}</p>
        </div>
    )
}

export {AssetLine}