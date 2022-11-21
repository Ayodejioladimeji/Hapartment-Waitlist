import React from "react";
import Heading from "./../../common/heading/Heading";

//
import "./WhatWeDo.css";
import what from "../../assets/what.svg";
//

const WhatWeDo = () => {
  return (
    <div className="what">
      <Heading text="What we do" />

      <div className="what-center">
        <div className="what-left">
          <p>
            We help users search for apartment easily and provide them with
            adequate information to help them make well- informed decisions.
          </p>
        </div>

        <div className="what-right">
          <img src={what} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
