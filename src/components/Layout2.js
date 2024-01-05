import React from "react";
import Navbar from "./navbar";
import "./common.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Layout2 = ({ children }) => {
  return (
    <div className="boss">
      <div className="home-section1">
        <Navbar />
        <div className="center-intro">
          <p>
            YOUR GATEWAY <br />
            TO SEAMLESS <br /> EXPANSION
          </p>
          <Link to="/contact-us"><button>WORK WITH US!</button></Link>
          
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout2;
