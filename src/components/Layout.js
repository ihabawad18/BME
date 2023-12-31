import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import BlueLogo from "../images/bme-logo-02.png" 
const Layout = ({ children }) => {
  return (
    <div className="boss">
      <Navbar image={BlueLogo} custom_nav={"custom-nav"}/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
