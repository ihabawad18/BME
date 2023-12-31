import React from "react";
import "./Services.css";

import image from "../images/bg-image.jpg";

const Services = () => {
  return (
    <div className="services-section">
      <h1 className="services-header">OUR SERVICES</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="side-image" src={image} alt="image" />
          </div>
          <div className="col-md-6">
            <h1 className="services-side">
              <span>“</span>THINK OF BME AS YOUR PARTNER FOR MIDDLE EASTERN
              EXPANSION.<span>”</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-contain">
        <div className="inside-container">
          <p>01</p>
          <button>Regional Business Development Services</button>
        </div>
        <div className="inside-container">
          <p>02</p>
          <button>Sales Strategy Development</button>
        </div>
        <div className="inside-container">
          <p>03</p>
          <button>Marketing Advisory</button>
        </div>
        <div className="inside-container">
          <p>04</p>
          <button>Collaboration with Companies in the Region</button>
        </div>
        <div className="inside-container">
          <p>05</p>
          <button>Market Research</button>
        </div>
        <div className="inside-container">
          <p>06</p>
          <button>Professional Mentoring and Counseling</button>
        </div>
        <div className="inside-container">
          <p>07</p>
          <button>Setup of local branches and/or offices</button>
        </div>
        <div className="inside-container">
          <p>08</p>
          <button>Extensive Networking Opportunities</button>
        </div>
        <div className="inside-container">
          <p>09</p>
          <button>Partnership Opportunities</button>
        </div>
        <div className="inside-container">
          <p>10</p>
          <button>Access to innovative International Corporations</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
