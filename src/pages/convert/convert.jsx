
import TRAXCoin from "../../assets/coins/TRAXCoin.svg";
import MetroCoin from "../../assets/coins/MetroCoin.svg";
import "./convert.css";

function Convert() {
    return (
       <div className={"convert-box"}>
        <div className={"tokens"}>
            <div className={"token-left"}>
                <img src={TRAXCoin} alt={"TRAX"} className={"token"}/>
            </div>
            <div className={"token-right"}>
                <img src={MetroCoin} alt={"Metro"} className={"token"}/>
            </div>
        </div>
           <div className={"confirmation-box"}>
               <div className={"confirmation"}>
                   <div className={"confirmation-text"}>
                       <p>Are you sure you want to convert?</p>
                   </div>
               </div>
               <div className={"confirmation-buttons"}>
                   <button className={"yes"}>Yes</button>
                   <button className={"no"}>No</button>
               </div>
           </div>
       </div>
    );
};

export {Convert}