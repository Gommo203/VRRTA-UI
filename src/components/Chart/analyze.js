import React from "react";
import SimpleDate from "./simpleDate";
import "./DateStyles.css"; // Make sure this is correctly linked

export default function DateComponent() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  const handleStartChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndChange = (newValue) => {
    setEndDate(newValue);
  };

  const onButtonClick = () => {
    console.log("Analyzing data from:", startDate, "to", endDate);
    // Here you can add logic to handle the date analysis
  };

  return (
    <div className="date-container">
      <div className="date-input">
        <label className="date-label">Start date</label>
        <SimpleDate value={startDate} onChange={handleStartChange} />
      </div>
      <div className="date-input">
        <label className="date-label">End date</label>
        <SimpleDate value={endDate} onChange={handleEndChange} />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <button className="analyze-button" onClick={onButtonClick}>
          Analyze vehicle data
        </button>
      </div>
    </div>
  );
}
