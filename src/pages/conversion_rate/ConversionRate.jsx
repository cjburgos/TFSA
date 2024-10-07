
import TFSACoin from "../../assets/coins/TFSACoin.svg";
import TRAXCoin from "../../assets/coins/TRAXCoin.svg";
import MetroCoin from "../../assets/coins/MetroCoin.svg";
import MuniCoin from "../../assets/coins/MuniCoin.svg";
import "./conversionRate.css";

function ConversionRate () {
    return (
        <div className="box">
            <div className="conversion-rate">
                <div className="overlap">
                    <div className="rate-container">
                        <div className="exchange-background">
                            <div className="exchange-coin">
                                <div className="overlap-2">
                                    <div className="exchange-coin-2" />
                                    <div className="swipe-continer">
                                        <div className="rectangle-wrapper">
                                            <div className="rectangle" />
                                        </div>
                                    </div>
                                    <div className="rate">
                                        <div className="overlap-3">
                                            <div className="rectangle-2" />
                                            <div className="text-wrapper">0.79</div>
                                        </div>
                                    </div>
                                    <div className="MTA-coin">
                                        <div className="overlap-4">
                                            <img className="image" alt="Image" src={TRAXCoin} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-2">
                                    <div className="exchange-coin-2" />
                                    <div className="overlap-group-wrapper">
                                        <div className="div-wrapper">
                                            <div className="rectangle" />
                                        </div>
                                    </div>
                                    <div className="rate">
                                        <div className="overlap-3">
                                            <div className="rectangle-2" />
                                            <div className="rate-2">0.84</div>
                                        </div>
                                    </div>
                                    <img className="img" alt="Ellipse" src={MetroCoin}/>
                                </div>
                            </div>
                            <div className="exchange-coin-3">
                                <div className="overlap-2">
                                    <div className="exchange-coin-2" />
                                    <div className="swipe-continer-2">
                                        <div className="overlap-group-2">
                                            <div className="rectangle-3"/>
                                            <div className="rectangle-4"/>
                                            <div className="swipe-background"/>
                                        </div>
                                        <img className="ellipse-3" alt="Ellipse" src={MuniCoin}/>
                                    </div>
                                    <div className="rate">
                                        <div className="overlap-3">
                                            <div className="rectangle-2" />
                                            <div className="text-wrapper-2">1.24</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <div className="overlap-6">
                            <div className="rectangle-5" />
                            <div className="text-wrapper-3">Conversion Rate</div>
                        </div>
                    </div>
                    <div className="TFSA-container">
                        <div className="overlap-7">
                            <div className="swipe-continer-3">
                                <div className="rectangle-6" />
                            </div>
                            <img className="TFSA-coin" alt="Tfsa coin" src={TFSACoin} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export { ConversionRate };