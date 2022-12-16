import React from "react";

// COMPONENTS
import "./Modal.css";
import banner from "../../assets/banner.png";
import { FaTimesCircle } from "react-icons/fa";
import { postDataAPI } from "./../../utils/fetchData";
import { useToasts } from "react-toast-notifications";

//

const Modal = ({ download, setDownload }) => {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();

  // The handlesubmit method
  const handleSubmit = async () => {
    const data = {
      email,
    };

    try {
      if (email === "") {
        addToast("Please enter your email", {
          appearance: "error",
        });
        return;
      }

      await postDataAPI("/newsletter/subscribe", data);
      addToast(
        "You have been added to our waitlist. Thanks for your interest in us.",
        {
          appearance: "success",
        }
      );
      setEmail("");
    } catch (error) {
      // console.log(error.response.data.error);
      addToast(error.response.data.error, { appearance: "error" });
      setEmail("");
    }
  };

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
