import React from 'react';
import './Footer.css'
import logo from '../Assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
    return (
        <div id='footer-section'>
                <div className='footer'>
                    <footer>
                    <img className="logo-footer" src={logo} alt="logo.png"/>
                        <div className="icon-container-footer">
                            <a className="icon" href="https://www.facebook.com/xyion.gel" alt="facebook"><FaFacebook /></a>
                            <a className="icon "href="https://www.linkedin.com/in/adrianmiguelarellano/" alt="linkedin"><IoLogoLinkedin /></a>
                            <a className="icon" href="https://github.com/mcgel28" alt="github"><IoLogoGithub /></a>
                        </div>
                    <p>Designed and Built by Adrian Miguel Arellano</p>
                    <p>Copyright © 2024 - All right reserved</p>
                    </footer>
                </div>
        </div>
    )
}

export default Footer;