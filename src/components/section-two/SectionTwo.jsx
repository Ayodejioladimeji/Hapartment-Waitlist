import React from "react";
import "./SectionTwo.css";
import apartment from "../../assets/apartment1.jpg";
import Button from "../../common/button/Button";

//
const SectionThree = () => {
  //
  return (
    <div className="section-two">
      <div className="section-two-left">
        <h1 data-aos="slide-down" data-aos-once="true">
          Advertise your property
        </h1>
        <p data-aos="slide-up" data-aos-once="true">
          Are you looking for prospective tenants to occupy your vacant house ?
        </p>
        <p data-aos="slide-up" data-aos-once="true">
          List your property to get it occupied in just few days.
        </p>
        <p data-aos="slide-up" data-aos-once="true">
          Connect with more than 75 million renters looking for new homes using
          our comprehensive platform.
        </p>

        <Button text="List your property" background="var(--secondary-color)" />
      </div>

      <div className="section-two-right">
        <img data-aos="zoom-in" data-aos-once="true" src={apartment} alt="" />
      </div>
    </div>
  );
};

export default SectionThree;
