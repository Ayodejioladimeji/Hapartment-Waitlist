import React from "react";
import how from "../../assets/how.png";
import "./Scan.css";
import android from "../../assets/android.png";
import playstore from "../../assets/playstore.jpg";
import appstore from "../../assets/appstore.jpg";
import { useNavigate } from "react-router-dom";

//

const Scan = () => {
  const navigate = useNavigate();

  //
  return (
    <div className="scan">
      <div className="scan-left">
        <div className="left-box" data-aos="fade-down" data-aos-once="true">
          <img src={how} alt="" data-aos="fade-up" data-aos-once="true" />
        </div>
      </div>

      <div className="scan-right">
        <h1 data-aos="fade-down" data-aos-once="true">
          Scan the <span>code</span> below to download our <span>App</span>
        </h1>
        <div className="scan-center">
          <div className="ios">
            <img
              src={android}
              alt=""
              className="ios-image"
              data-aos="zoom-in"
              data-aos-once="true"
            />
            <img
              src={appstore}
              alt=""
              className="appstore-image"
              onClick={() => navigate("/subscribe")}
              data-aos="zoom-out"
              data-aos-once="true"
            />
          </div>

          <div className="android">
            <img
              src={android}
              alt=""
              className="ios-image"
              data-aos="zoom-in"
              data-aos-once="true"
            />
            <img
              src={playstore}
              alt=""
              className="playstore-image"
              onClick={() => navigate("/subscribe")}
              data-aos="zoom-out"
              data-aos-once="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
