import {AssetLine} from "./AssetLine.jsx";
import "./assets.css"
import TokenMeta from "../../../tokenMeta.json"

// import { useBalance, useAccount } from 'wagmi'

function Assets() {

    // const { data: accountData } = useAccount();
    // console.log(accountData);
    // // if accountData.address;    

    // const balances = useBalance(accountData.address);

    // console.log(balances);

    // return (
    //     <div className={"asset-line-container"}>
    //         <AssetLine token={TokenMeta.MetroToken} value={433.34}/>
    //         <AssetLine token={TokenMeta.MTAToken} value={104.12} />
    //         <AssetLine token={TokenMeta.TFSA} value={3.00} />
    //     </div>
    // )

    return (
        <div className={"asset-line-container"}>
            <AssetLine token={TokenMeta.MetroToken} value={433.34}/>
            <AssetLine token={TokenMeta.MTAToken} value={104.12} />
            <AssetLine token={TokenMeta.TFSA} value={3.00} />
        </div>
    )
}

export {Assets};