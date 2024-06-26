import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2500, amt: 2200 },
  { name: "Page C", uv: 350, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 450, pv: 2600, amt: 2800 },
  { name: "Page E", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 400, pv: 2400, amt: 2400 },
];

const RenderLineChart = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 40, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default RenderLineChart;
