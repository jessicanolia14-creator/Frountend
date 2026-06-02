import React from "react";
import logo from "../assets/logo.png";
import "./Logo.css";

const Logo = ({ size = 52 }) => {
  return (
    <img
      src={logo}
      alt="VolunteerHub Logo"
      className="logo-img"
      style={{ width: size, height: size }}
    />
  );
};

export default Logo;