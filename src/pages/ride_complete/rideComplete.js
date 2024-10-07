
import { HomeIndicator } from "./HomeIndicator";
import { IphonePro } from "./IphonePro";
import "./style.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="end-ride">
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
                        <div className="coin-slot">
                            <div className="slot">
                                <div className="rectangle" />
                                <div className="rectangle-2" />
                            </div>
                        </div>
                    </div>
                    <div className="token-amount">
                        <div className="overlap-2">
                            <div className="rectangle-3" />
                            <div className="rectangle-4" />
                            <div className="text-wrapper">10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
