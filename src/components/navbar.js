import React from 'react'
import whiteLogo from '../images/white-logo-02.png';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
        <img src={whiteLogo} alt='logo'/>
        <ul className='nav-links'>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/why-bme'>Why BME?</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;