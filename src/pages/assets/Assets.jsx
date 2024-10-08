import {AssetLine} from "./AssetLine.jsx";
import "./assets.css"
import MetroToken from "../../assets/coins/Metro.svg";
import MTAToken from "../../assets/coins/MTA.svg"
import TFSA from "../../assets/coins/TFSA.svg";

function Assets() {

    return (
        <div className={"asset-line-container"}>
            <AssetLine token={MetroToken} value={433.68} />
            <AssetLine token={MTAToken} value={104.12} />
            <AssetLine token={TFSA} value={3.00} />
        </div>
    )
}

export {Assets};