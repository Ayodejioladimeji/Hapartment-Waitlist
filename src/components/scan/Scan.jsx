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
        <div className="left-box">
          <img src={how} alt="" />
        </div>
      </div>

      <div className="scan-right">
        <h1>
          Scan the <span>code</span> below to download our <span>App</span>
        </h1>
        <div className="scan-center">
          <div className="ios">
            <img src={android} alt="" className="ios-image" />
            <img
              src={appstore}
              alt=""
              className="appstore-image"
              onClick={() => navigate("/subscribe")}
            />
          </div>

          <div className="android">
            <img src={android} alt="" className="ios-image" />
            <img
              src={playstore}
              alt=""
              className="playstore-image"
              onClick={() => navigate("/subscribe")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
