import React from "react";

// COMPONENTS
import "./Modal.css";
import banner from "../../assets/banner.png";
import { FaTimesCircle } from "react-icons/fa";

//

const Modal = ({ download, setDownload }) => {
  return (
    <div className="modalBackground">
      <div className={download ? "modalContainer" : "modalContainers"}>
        <div className="modal-left">
          <img src={banner} alt="" />
        </div>

        <div className="modal-right">
          <h3>Our mobile app is still under development</h3>
          <p>Kindly drop your email so we can alert you when we launch</p>

          <input type="text" placeholder="Enter your email here" />
          <button>Subscribe</button>

          <small>
            Are you looking for prospective tenants to occupy your vacant house
            ? List your property on Hapartment and get it occupied in just few
            days.
          </small>
        </div>

        <FaTimesCircle className="cancel" onClick={() => setDownload(false)} />
      </div>
    </div>
  );
};

export default Modal;
