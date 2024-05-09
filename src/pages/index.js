import React from "react";
import image from "../assets/homepage.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1, minHeight: "100%", padding: "5px" }}>
        <img
          style={{ width: "100%", height: "100%", resize: "contain" }}
          src={image}
          alt="Homepage visualization"
        />
      </div>
      <div style={{ flex: 1, padding: "5px", fontSize: "1.7em", width: "60%" }}>
        <ul>
          <li>
            This tool provides a comprehensive assessment of fleet operations in
            alignment with Natural Resources Canada’s Green Freight Program. Its
            purpose is to analyze and minimize greenhouse gas (GHG) emissions
            from fleets.
          </li>
          <li style={{ marginTop: "30px" }}>
            The tool examines fuel usage, calculates GHG emissions, identifies
            fuel-saving opportunities, evaluates retrofit equipment
            effectiveness, and conducts intra-fleet and inter-fleet comparisons.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
