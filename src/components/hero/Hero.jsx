import React from "react";

//
import "./Hero.css";
import heroImg from "../assets/hero-img.png";
import Button from "../../common/button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-left">
          <div className="hero-left-div">
            <h1>
              Easy <span>way</span> to <br />
              find a perfect <span>home</span>
            </h1>
            <p>Search for your new apartment from your comfort zone...</p>
            <Button text="Stay updated" />
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
