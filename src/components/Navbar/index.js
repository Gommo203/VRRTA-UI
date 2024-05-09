import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/VRTTA.png";

const Navbar = () => {
  return (
    <nav className="Nav">
      <div className="NavLogo">
        <NavLink to="https://www.vrtta.green/">
          <img src={logo} alt="VRTTA Logo" />
        </NavLink>
      </div>
      <div className="NavMenu">
        <NavLink to="/home" className="NavLink">
          Home
        </NavLink>
        <NavLink to="/intra-fleet" className="NavLink">
          Intra-Fleet
        </NavLink>
        <NavLink to="/inter-fleet" className="NavLink">
          Inter-Fleet
        </NavLink>
        <NavLink to="/vehiclePerformance" className="NavLink">
          Vehicle Performance
        </NavLink>
        <NavLink to="/electrification" className="NavLink">
          Electrification
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
