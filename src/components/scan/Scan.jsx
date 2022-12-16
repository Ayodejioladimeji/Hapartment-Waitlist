import React, { useState } from "react";
import how from "../../assets/how.png";
import "./Scan.css";
import ios from "../../assets/ios.png";
import android from "../../assets/android.png";
import playstore from "../../assets/playstore.jpg";
import appstore from "../../assets/appstore.jpg";
import Modal from "./../../common/modal/Modal";

//

const Scan = () => {
  const [download, setDownload] = useState(false);

  console.log(download);

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
              onClick={() => setDownload(true)}
            />
          </div>

          <div className="android">
            <img src={android} alt="" className="ios-image" />
            <img
              src={playstore}
              alt=""
              className="playstore-image"
              onClick={() => setDownload(true)}
            />
          </div>
        </div>
      </div>

      {download && <Modal download={download} setDownload={setDownload} />}
    </div>
  );
};

export default Scan;
