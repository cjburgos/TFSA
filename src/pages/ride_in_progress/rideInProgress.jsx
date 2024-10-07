
import { HomeIndicator } from "./HomeIndicator";
import { IphonePro } from "./IphonePro";
import image1 from "./image-1.png";
import "./style.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="ride-in-progress">
                <div className="overlap">
                    <div className="phone">
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
                            <div className="fast">
                                <div className="rectangle" />
                                <div className="rectangle-2" />
                                <div className="rectangle-3" />
                                <div className="rectangle-4" />
                                <div className="rectangle-5" />
                                <div className="rectangle-6" />
                            </div>
                        </div>
                    </div>
                    <div className="rectangle-7" />
                    <div className="route-progress">
                        <div className="overlap-2">
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
                    </div>
                    <div className="metro-coin">
                        <div className="overlap-3">
                            <div className="overlap-group-wrapper">
                                <div className="ellipse-wrapper">
                                    <div className="ellipse" />
                                </div>
                            </div>
                            <img className="image" alt="Image" src={image1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
