import React from "react";
import "./Rent.css";
import { useNavigate } from "react-router-dom";

//
const Rent = () => {
  const navigate = useNavigate();
  return (
    <div className="rent">
      <div>
        <h1 data-aos="fade-down" data-aos-once="true">
          Renting Made Simple
        </h1>
        <p data-aos="zoom-in" data-aos-once="true">
          Discover a place that checks all of your boxes. Filter your rental
          search, and find exactly what you’re looking for.{" "}
          <span>Hapartment</span> makes it easy for you to find your perfect
          home. Check prices, see photo displays, floor plans, amenities, and
          more!
        </p>

        <button onClick={() => navigate("/subscribe")}>Explore search</button>
      </div>
    </div>
  );
};

export default Rent;
