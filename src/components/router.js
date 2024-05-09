import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages";
import InterFleet from "../pages/inter-fleet";
import IntraFleet from "../pages/intra-fleet";
import VehiclePerformance from "../pages/vehiclePerformance";
import Electrification from "../pages/electrification";
import Login from "../pages/login";

const RouterSetup = () => {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inter-fleet" element={<InterFleet />} />
        <Route path="/intra-fleet" element={<IntraFleet />} />
        <Route path="/vehiclePerformance" element={<VehiclePerformance />} />
        <Route path="/electrification" element={<Electrification />} />
      </Routes>
    </>
  );
};

export default RouterSetup;
