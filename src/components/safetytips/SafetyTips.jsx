import React from "react";
import Heading from "./../../common/heading/Heading";
import "./SafetyTips.css";
//

const SafetyTips = () => {
  return (
    <div className="tips">
      <div className="tips-center">
        <Heading text="Safety Tips" />

        <p>
          Do not make any inspection fee without seeing the agent and property.
          Only pay Rental fee, Sales fee or any upfront payment after you verify
          the Landlord.
        </p>
        <p>
          Ensure you meet the Agent in an open location. The Agent does not
          represent us and we are not liable for any monetary transaction
          between you and the Agent.
        </p>
      </div>
    </div>
  );
};

export default SafetyTips;
