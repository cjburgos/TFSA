
import TFSACoin from "../../assets/coins/tfsa-coin.svg";
import ellipse2 from "../../assets/pageSpecific/ConversionRate/img/ellipse-2.svg";
import ellipse5 from "../../assets/pageSpecific/ConversionRate/img/ellipse-5.svg";
import image1 from "../../assets/pageSpecific/ConversionRate/img/image-1.png";
import image2 from "../../assets/pageSpecific/ConversionRate/img/image-2.png";
import image3 from "../../assets/pageSpecific/ConversionRate/img/image-3.png";
import line2 from "../../assets/pageSpecific/ConversionRate/img/line-2.svg";
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
                                            <div className="ellipse" />
                                            <div className="ellipse-2" />
                                            <img className="image" alt="Image" src={image3} />
                                            <img className="img" alt="Ellipse" src={ellipse2} />
                                            <img className="ellipse-3" alt="Ellipse" src={ellipse5} />
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
                                    <div className="muni-coin">
                                        <div className="overlap-5">
                                            <div className="metro-coin">
                                                <div className="ellipse-wrapper">
                                                    <div className="ellipse-4" />
                                                </div>
                                            </div>
                                            <img className="image-2" alt="Image" src={image2} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="exchange-coin-3">
                                <div className="overlap-2">
                                    <div className="exchange-coin-2" />
                                    <div className="swipe-continer-2">
                                        <div className="overlap-group-2">
                                            <div className="rectangle-3" />
                                            <div className="rectangle-4" />
                                            <div className="swipe-background" />
                                        </div>
                                    </div>
                                    <div className="rate">
                                        <div className="overlap-3">
                                            <div className="rectangle-2" />
                                            <div className="text-wrapper-2">1.24</div>
                                        </div>
                                    </div>
                                    <div className="metro-coin-2">
                                        <div className="overlap-5">
                                            <div className="metro-coin">
                                                <div className="overlap-group-3">
                                                    <div className="ellipse-5" />
                                                </div>
                                            </div>
                                            <img className="image-3" alt="Image" src={image1} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="line-2" alt="Line" src={line2} />
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