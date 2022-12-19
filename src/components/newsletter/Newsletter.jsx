import React, { useState } from "react";

// COMPONENTS
import "./Newsletter.css";
import banner from "../../assets/banner.png";
import { FaTimesCircle } from "react-icons/fa";
import { postDataAPI } from "./../../utils/fetchData";
import { useToasts } from "react-toast-notifications";

//

const Newsletter = ({ download, setDownload }) => {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  // The handlesubmit method
  const handleSubmit = async (e) => {
    e.preventDefault();

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

      setLoading(true);

      await postDataAPI("/newsletter", data);
      addToast(
        "You have been added to our waitlist. Thanks for your interest in us.",
        {
          appearance: "success",
        }
      );
      setEmail("");
      setLoading(false);
      setDownload(false);
    } catch (error) {
      console.log(error.response);
      addToast(error.response.data.msg, { appearance: "error" });
      setEmail("");
      setLoading(false);
    }
  };

  return (
    <div className="modalBackground">
      <div className="main-container">
        <div className="modalContainer">
          <div className="modal-left">
            <img src={banner} alt="" />
          </div>

          <div className="modal-right">
            <h3>Our mobile app is still under development</h3>
            <p>Kindly drop your email so we can alert you when we launch</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button>{loading ? "Please wait ...." : "Subscribe"}</button>
            </form>

            <small>
              Are you looking for prospective tenants to occupy your vacant
              house ? List your property on Hapartment and get it occupied in
              just few days.
            </small>

            <FaTimesCircle
              className="cancels"
              onClick={() => setDownload(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
