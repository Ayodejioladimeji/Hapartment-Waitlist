import React from "react";
import "./SectionOne.css";

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="section-div" data-aos="slide-down" data-aos-once="true">
        <h1>1</h1>
        <h3>Find apartments for rent</h3>
      </div>
      <div className="section-div" data-aos="slide-up" data-aos-once="true">
        <h1>2</h1>
        <h3>Locate apartment on Map</h3>
      </div>
      <div className="section-div" data-aos="slide-down" data-aos-once="true">
        <h1>3</h1>
        <h3>Secure leases</h3>
      </div>
    </div>
  );
};

export default SectionOne;
