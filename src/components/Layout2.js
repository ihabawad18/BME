import React from "react";
import Navbar from "./navbar";
import "./common.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import BlueLogo from "../images/bme-logo-02.png" 

const Layout2 = ({ children }) => {
  return (
    <div className="boss">
      <div className="home-section1">
        <Navbar image={BlueLogo} custom_nav={"custom-nav"} custom_burger={"custom-burger"}/>
        <div className="center-intro">
          <p>
            YOUR GATEWAY <br />
            TO SEAMLESS <br /> EXPANSION
          </p>
          <Link to="/contact-us"><button>LET'S START</button></Link>
          
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout2;
