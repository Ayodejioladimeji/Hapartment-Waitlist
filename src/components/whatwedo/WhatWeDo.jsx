import React from "react";
import Heading from "./../../common/heading/Heading";

//
import "./WhatWeDo.css";
import what from "../../assets/what.svg";
import Button from "../../common/button/Button";
import { useNavigate } from "react-router-dom";
//

const WhatWeDo = () => {
  const navigate = useNavigate();
  return (
    <div className="what">
      <Heading
        text="Reach quality renters and
fill vacancies faster."
      />

      <div className="what-center">
        <div className="what-left">
          <div>
            <h1>The safest & easiest way to search</h1>
            <p>
              Hapartment delivers the safest apartment search experience on both
              web and app. View apartment listings directly from top property
              managers, pricing and availability updated daily, and your
              information immediately delivered to the property!
            </p>
            <Button
              onClick={() => navigate("/subscribe")}
              text="Search apartment"
              background="var(--secondary-color)"
              border="2px solid var(--primary-color)"
            />
          </div>
        </div>

        <div className="what-right">
          <img src={what} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
