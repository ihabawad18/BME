import React, { useState } from "react";
import whiteLogo from "../images/white-logo-02.png";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = ({image,custom_nav,custom_burger}) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="nav">
      <Link to="/"> <img src={image?image:whiteLogo} alt="logo" /></Link>
     
      <div className={`burger-icon ${custom_burger}`} onClick={toggleLinks}>
        <i className={`fas ${showLinks ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`nav-links ${showLinks ? "show" : ""}`}>
        <li>
          <Link className={`${custom_nav}`} to="/about-us">ABOUT US</Link>
        </li>
        <li>
          {/* <Link className={`${custom_nav}`} to="/services">Services</Link> */}
        </li>
        <li>
          <Link className={`${custom_nav}`} to="/why-bme">WHY BME?</Link>
        </li>
        <li>
          <Link className={`${custom_nav}`} to="/contact-us">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
