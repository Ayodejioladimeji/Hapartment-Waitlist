import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <div className="error-center">
        <h1>Not Found</h1>
        <p>Can't find what you're looking for? </p>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
