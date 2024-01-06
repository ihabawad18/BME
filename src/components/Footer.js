import React from "react";
import Logo from "../images/white-logo-03.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="logo" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='about-us'>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Social Media</h2>
            <ul>
              <li>
                <Link>Instagram</Link>
              </li>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>LinkedIn</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Find Us</h2>
            <ul className="custom-ul">
              <li>+971 768 987 098</li>
              <li>info@bridgemena.com</li>
              <li className="custom-li">
                The Meydan Hotel, Nad Al Sheba, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
