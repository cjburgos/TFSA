
import { ArrowRight } from "./ArrowRight";
import { HomeIndicator } from "./HomeIndicator";
import { IphonePro } from "./IphonePro";
import cancelButton from "./cancel-button.png";
import confirmButton from "./confirm-button.png";
import image1 from "./image-1.png";
import image2 from "./image-2.png";
import "./style.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="convert">
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
                    <div className="confirm-deny">
                        <img className="cancel-button" alt="Cancel button" src={cancelButton} />
                        <img className="confirm-button" alt="Confirm button" src={confirmButton} />
                    </div>
                    <div className="exchange-coin" />
                    <div className="sign-info">
                        <div className="overlap-2">
                            <div className="exchange-coin-2" />
                            <p className="confirmation-text">Exchange 1 Metro Token for 1.04 MUNI Token?</p>
                        </div>
                        <div className="conversion-rate" />
                    </div>
                    <div className="exchange-focus">
                        <div className="metro-coin">
                            <div className="overlap-3">
                                <div className="div-wrapper">
                                    <div className="ellipse-wrapper">
                                        <div className="ellipse" />
                                    </div>
                                </div>
                                <img className="image" alt="Image" src={image1} />
                            </div>
                        </div>
                        <div className="overlap-4">
                            <ArrowRight className="arrow-right" color="#FEF7FF" />
                            <div className="muni-coin">
                                <div className="overlap-3">
                                    <div className="div-wrapper">
                                        <div className="overlap-group-2">
                                            <div className="ellipse-2" />
                                        </div>
                                    </div>
                                    <img className="img" alt="Image" src={image2} />
                                </div>
                            </div>
                        </div>
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
    );
};
