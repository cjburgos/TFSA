import CheckMark from "../../assets/common/check.svg";
import "./rideComplete.css";

function RideComplete () {
    return (
        <div className="box">
            <div className="overlap">
                <img src={CheckMark} alt="checkmark" className="checkmark"/>
                <div className="coin-group">
                    <div className="coin-slot">
                        <div className="slot">

                            <div className="rectangle"/>
                            <div className="rectangle-2"/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export {RideComplete}