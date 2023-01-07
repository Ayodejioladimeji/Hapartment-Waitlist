import React from "react";

//
import "./Heading.css";

const Heading = ({ text }) => {
  return (
    <h3 className="heading" data-aos="fade-down" data-aos-once="true">
      {text}
    </h3>
  );
};

export default Heading;
