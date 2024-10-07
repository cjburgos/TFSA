
import { HomeIndicator } from "./HomeIndicator";
import { IphonePro } from "./IphonePro";
import image1 from "./image-1.png";
import "./style.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="start-ride">
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
                                                <img className="image" alt="Image" src={image1} />
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
