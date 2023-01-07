import React from "react";
// import Heading from '../../common/heading/Heading';

//
import "./Enjoy.css";
import service from "../../assets/service.svg";
import charges from "../../assets/charges.svg";
import navigation from "../../assets/navigation.svg";

const Enjoy = () => {
  return (
    <div className="enjoy">
      <h1 data-aos="fade-down" data-aos-once="true">
        What you tend to enjoy
      </h1>

      <div className="enjoy-center">
        <div className="enjoy-box" data-aos="zoom-in" data-aos-once="true">
          <div className="enjoy-box-image blue">
            <img src={service} alt="" />
          </div>

          <h3>Verified Apartments</h3>
          <p>
            Browse through a list of properties that have been verified by us
          </p>
        </div>

        <div className="enjoy-box" data-aos="zoom-out" data-aos-once="true">
          <div className="enjoy-box-image green">
            <img src={charges} alt="" />
          </div>

          <h3>Lease Property</h3>
          <p>
            Do you want to rent out your property? List them on Hapartment and
            get renters knocking.
          </p>
        </div>

        <div className="enjoy-box" data-aos="zoom-in" data-aos-once="true">
          <div className="enjoy-box-image yellow">
            <img src={navigation} alt="" />
          </div>

          <h3>Map Locator</h3>
          <p>
            Experience your potential apartment by viewing the address on the
            map.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
