import React from "react";
import me from "../Assets/me.jpg"
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import TypingEffect from "../../utilities/TypingEffect";
import './Hero.css'


function Hero() {

    return (
            <div id="hero-section">
                    <div className="hero">
                        <div className="hero-text">
                            <p>Hi, I'm Adrian</p>
                            <h1>Front-end</h1>
                            <h1><TypingEffect /></h1>
                                <div className="soocial-icons">
                                    <div className="icon-container">
                                    <a className="icon" href="https://www.facebook.com/xyion.gel" alt="facebook"><FaFacebook /></a>
                                    <a className="icon "href="https://www.linkedin.com/in/adrianmiguelarellano/" alt="linkedin"><IoLogoLinkedin /></a>
                                    <a className="icon" href="https://github.com/mcgel28" alt="github"><IoLogoGithub /></a>
                                </div>
                        </div>
                    </div>

                    <div className="me-area">
                            <img className="me" src={me} alt="img of Adrian"/>
                        </div>
                    </div>
            </div>
    )
}

export default Hero;