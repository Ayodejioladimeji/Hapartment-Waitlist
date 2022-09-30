import React from "react";
import "./Button.css";

const Button = ({ text, background }) => {
  return (
    <button className="button" style={{ background: background && background }}>
      {text}
    </button>
  );
};

export default Button;
