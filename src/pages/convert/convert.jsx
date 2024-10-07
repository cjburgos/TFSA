
import TRAXCoin from "../../assets/coins/TRAXCoin.svg";
import MetroCoin from "../../assets/coins/MetroCoin.svg";
import "./convert.css";

function Convert() {
    return (
        <div className="box">
            <div className="convert">
                <div className="overlap">
                    <div className="confirm-deny">
                        <button className={"cancel-button"}>Confirm</button>
                        <button className={"confirm-button"}>Confirm</button>
                    </div>
                    <div className="exchange-coin"/>
                    <div className="sign-info">
                        <div className="overlap-2">
                            <div className="exchange-coin-2" />
                            <p className="confirmation-text">Exchange 1 Metro Token for 1.04 MUNI Token?</p>
                        </div>
                        <div className="conversion-rate" />
                    </div>
                    <div className="exchange-focus">
                        <div className="left-coin">
                            <img className="image" alt="Image" src={TRAXCoin}/>
                        </div>
                        <div className={"right_name"}>
                            <img className="image" alt="Image" src={MetroCoin}/>
                        </div>
                        <div className="left-box">
                        <div className="overlap-5">
                            <div className="rectangle" />
                            <div className="rectangle-2" />
                            <div className="left-amount">1</div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="overlap-6">
                            <div className="rectangle" />
                            <div className="rectangle-3" />
                            <div className="right-amount">1.04</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export {Convert}