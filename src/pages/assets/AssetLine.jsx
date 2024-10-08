import {getCoinName} from "../../lib.js";
import "./assets.css"

function AssetLine(props) {
    return (
        <div className={"asset-line"}>
            <img src={props.token} className={"asset-line-item"} alt={"Token"}/>
            <p className={"asset-line-item"}>{getCoinName(props.token)}</p>
            <p className={"asset-line-item"}>{props.value}</p>
        </div>
    )
}

export {AssetLine}