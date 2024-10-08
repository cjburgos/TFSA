
import { HomeIndicator } from "./HomeIndicator";
import { IphonePro } from "./IphonePro";
import cancelButton from "./cancel-button.png";
import confirmButton from "./confirm-button.png";
import image2 from "./image-2.png";
import "./style.css";

function Stake() {
    return (
        <div className="box">
            <div className="stake">
                <div className="overlap">
                    <div className="phone">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                                <HomeIndicator
                                    className="home-indicator-instance"
                                    device="i-phone"
                                    homeIndicatorClassName="design-component-instance-node"
                                    orientation="portrait"
                                />
                                <IphonePro
                                    className="bezel"
                                    color="black-titanium"
                                    iphoneProBlack="image.png"
                                    iphoneProBlackClassName="iphone-16-pro"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sign-info">
                        <div className="overlap-2">
                            <div className="exchange-coin" />
                            <p className="confirmation-text">Stake 10 MUNI Tokens and receive&nbsp;&nbsp;8.4 TFSA?</p>
                        </div>
                    </div>
                    <div className="token-amount">
                        <div className="overlap-3">
                            <div className="rectangle" />
                            <div className="rectangle-2" />
                            <div className="text-wrapper">10</div>
                        </div>
                    </div>
                    <div className="confirm-deny">
                        <img className="cancel-button" alt="Cancel button" src={cancelButton} />
                        <img className="confirm-button" alt="Confirm button" src={confirmButton} />
                    </div>
                    <div className="muni-coin">
                        <div className="overlap-4">
                            <div className="metro-coin">
                                <div className="ellipse-wrapper">
                                    <div className="ellipse" />
                                </div>
                            </div>
                            <img className="image" alt="Image" src={image2} />
                        </div>
                    </div>
                    <div className="stake-icon">
                        <div className="puncture-wrapper">
                            <div className="puncture">
                                <div className="overlap-group-2">
                                    <div className="ellipse-2" />
                                    <div className="ellipse-3" />
                                    <div className="ellipse-4" />
                                    <div className="ellipse-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export {Stake}