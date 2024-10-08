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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Social Media</h2>
            <ul>
              <li>
                <Link
                  to={
                    "https://www.instagram.com/bridgemena/?utm_source=ig_web_button_share_sheet"
                  }
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.linkedin.com/company/bridge-middle-east/"}
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Find Us</h2>
            <ul className="custom-ul">
              <li>
                <div className="flexing">
                  <i className="fas fa-phone"></i>
                  <p>+9714342 4764</p>
                </div>
              </li>
              <li>
                <div className="flexing">
                  <i className="fas fa-envelope"></i>
                  <p>info@bridgemena.com</p>
                </div>
              </li>
              <li className="custom-li">
                <div className="flexing">
                  {/* <i className="fa fa-location-arrow" aria-hidden="true"></i> */}
                  {/* <p>The Meydan Hotel, Nad Al Sheba, Dubai, UAE</p> */}
                  <i className="fa-solid fa-location-dot"></i>
                  <p>The Meydan Hotel, Nad Al Sheba, Dubai, UAE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
