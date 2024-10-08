import MetroToken from "../../assets/coins/Metro.svg";
import "./rideStart.css";

function RideStart() {
    return (
        <div className="box">
            <div className="start-ride">
                <div className="overlap">
                    <div className="coin-group">
                        <div className="overlap-2">
                            <div className="coin-slot">
                                <div className="slot">
                                    <div className="overlap-3">
                                        <div className="rectangle" />
                                        <div className="metro-coin">
                                            <div className="overlap-4">
                                                <div className="div-wrapper">
                                                    <div className="ellipse-wrapper">
                                                        <div className="ellipse" />
                                                    </div>
                                                </div>
                                                <img className="image" alt="Image" src={MetroToken} />
                                            </div>
                                        </div>
                                        <div className="rectangle-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="fast">
                                <div className="rectangle-3" />
                                <div className="rectangle-4" />
                                <div className="rectangle-5" />
                                <div className="rectangle-6" />
                                <div className="rectangle-7" />
                                <div className="rectangle-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export {RideStart}