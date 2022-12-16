import React from "react";

// COMPONENTS
import "./Modal.css";
import banner from "../../assets/banner.png";

//

const Modal = () => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-left">
          <img src={banner} alt="" />
        </div>

        <div className="modal-right">
          <h3>Our mobile app is still under development</h3>
          <p>Kindly drop your email so we can alert you when we launch</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
