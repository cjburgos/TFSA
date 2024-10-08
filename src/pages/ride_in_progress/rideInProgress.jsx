
import MetroToken from "../../assets/coins/Metro.svg";
import "./rideInProgress.css";

function RideInProgress() {
    return (
        <div className="box">
                <div className="overlap">
                    <div className="rectangle-7" />
                    <div className="route-progress">

                            <div className="rectangle-8" />
                            <div className="token" />
                            <div className="token-2" />
                            <div className="token-3" />
                            <div className="token-4" />
                            <div className="token-5" />
                            <div className="token-6" />
                            <div className="token-7" />
                            <div className="token-8" />

                    </div>
                    <div className="metro-coin">

                            <img className="image" alt="Image" src={MetroToken} />
                        </div>
                    </div>

        </div>
    );
};

export {RideInProgress};