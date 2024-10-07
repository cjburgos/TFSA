import React from "react";
import "./conversionRate.css";

const MTACoin = "../../src/assets/coins/MTACoin.svg";
const TRAXCoin = "../../src/assets/coins/TRAXCoin.svg";
const MetroCoin = "../../src/assets/coins/MetroCoin.svg";


function ConversionRate () {
  return (
    <div className="box">
      <div className="conversion-rate">
        <div className="rate-container">
          <div className="exchange-background">
            <div className="exchange-coin">
              <div className="overlap">

                <div className="div" />
                <div className="swipe-continer">
                  <div className="overlap-group">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="rate">
                  <div className="overlap-2">
                    <div className="rectangle-2" />
                    <div className="text-wrapper">0.79</div>
                  </div>
                </div>
                <img className="MTA-coin" alt="Mta coin" src={MTACoin} />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="div" />
                <div className="overlap-group-wrapper">
                  <div className="rectangle-wrapper">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="rate">
                  <div className="overlap-2">
                    <div className="rectangle-2" />
                    <div className="rate-2">0.84</div>
                  </div>
                </div>
                <img className="TRAX-coin" alt="Trax coin" src={TRAXCoin} />
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap">
                <div className="div" />
                <div className="swipe-continer-2">
                  <div className="overlap-group-2">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <div className="swipe-background" />
                  </div>
                </div>
                <div className="rate">
                  <div className="overlap-2">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-2">1.24</div>
                  </div>
                </div>
                <img className="metro-coin" alt="Metro coin" src={MetroCoin} />
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <div className="overlap-3">
            <div className="rectangle-5" />
            <div className="text-wrapper-3">Conversion Rate</div>
          </div>
        </div>
        <div className="TFSA-container">
          <div className="swipe-continer-3">
            <div className="rectangle-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ConversionRate };