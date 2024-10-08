
import {TokenFocus} from "./TokenFocus.jsx";
import {useLocation} from "react-router-dom";
import {ConfirmationMsg} from "../../common/ConfirmationMsg.jsx";
import {useEffect, useState} from "react";
import {getCoinName} from "../../lib.js";



function Convert() {

    const [amount, setAmount] = useState(0.00);
    const [conversionValue, setConversionValue] = useState(0.00);

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    };

    useEffect(() => {
        setConversionValue(amount * rate);
    }, [amount]);

    const location = useLocation();
    const {coin, rate} = location.state;
    return (
       <div className={"convert-box"}>
           <TokenFocus coin={coin} rate={rate}/>
           <ConfirmationMsg msg={`Convert ${amount} TFSA to ${conversionValue} ${getCoinName(coin)}`}/>
              <h3>Amount To Convert</h3>
           <input
               type="number"
               value={amount}
               onChange={handleInputChange}
               placeholder="Enter amount"
           />
       </div>
    );
};

export {Convert}