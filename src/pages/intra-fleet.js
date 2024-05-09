import React from "react";
import RenderLineChart from "../components/Chart/chart";
import BasicTable from "../components/Chart/table";
import DateComponent from "../components/Chart/analyze";
import ApiCall from "../components/Chart/apiCall";
import "./intrafleet.css";

const IntraFleet = () => {
  return (
    <div className="container">
      <div className="api-call">
        <ApiCall />
      </div>
      <div className="chart">
        <RenderLineChart />
      </div>
      <div className="table">
        <BasicTable />
      </div>
      <div className="date-component">
        <DateComponent />
      </div>
    </div>
  );
};

export default IntraFleet;
