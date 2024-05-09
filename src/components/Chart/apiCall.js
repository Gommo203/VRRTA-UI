import React, { useState } from "react";
import getCar from "./api";
import { Button } from "@mui/material";

export default function ApiCall() {
  const [cars, setCars] = useState([]);

  async function updateCars() {
    const carResult = await getCar();
    setCars(carResult);
  }
  return (
    <div>
      <Button
        onClick={updateCars}
        style={{
          backgroundColor: "#406876",
          color: "white",
          scale: "1.5",
          paddingLeft: "30px",
        }}
      >
        Get Porshes
      </Button>
      {cars?.map((car) => (
        <div style={{ paddingTop: "10px" }}>{car.model}</div>
      ))}
    </div>
  );
}
