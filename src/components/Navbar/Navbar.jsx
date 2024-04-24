import React, { useState } from 'react';
import logo from "../Assets/logo.png"
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div id="navigation-section">
      <div className='container'>
        <nav className="navigation">
          <img className="logo" src={logo} alt="logo.png"/>
          <ul id="menu" className={clicked ? "#menu active" : "menu"}>
            <li><Link to="hero-section" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about-section" smooth={true} duration={700}>About</Link></li>
            <li><Link to="portfolio-section" smooth={true} duration={600}>Portfolio</Link></li>
            <li><Link to="contact-section" smooth={true} duration={800}>Contact</Link></li>
          </ul>
          <div id='mobile' onClick={handleClick}>
            <span id='bars' className={clicked ? 'active' : ''}>
              {clicked ? <FaTimes /> : <FaBars />}
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;