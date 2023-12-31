import React, { useState } from "react";
import whiteLogo from "../images/white-logo-02.png";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="nav">
      <img src={whiteLogo} alt="logo" />
      <div className="burger-icon" onClick={toggleLinks}>
        <i className={`fas ${showLinks ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`nav-links ${showLinks ? "show" : ""}`}>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/why-bme">Why BME?</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
