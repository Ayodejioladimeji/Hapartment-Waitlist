import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({ text, background, border }) => {
  const navigate = useNavigate();
  return (
    <button
      data-aos="fade-up"
      data-aos-once="true"
      className="button"
      onClick={() => navigate("/subscribe")}
    >
      {text}
    </button>
  );
};

export default Button;
