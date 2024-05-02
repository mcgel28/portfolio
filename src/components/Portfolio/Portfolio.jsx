import React from "react";
import highgear from '../Assets/highgearimg.jpg'
import template from "../Assets/template.jpg"
import { FaExternalLinkAlt } from "react-icons/fa";
import './Portfolio.css'


function Portfolio() {

    return (
        <div id="portfolio-section">
            <div className="portfolio">
                <h1 className="port-title">Portfolio</h1>
                <div className="work-list">
                    <div className="work">
                            <img className="portfolio-img"  src={highgear} alt="high gear motorcycles" />
                        <div className="layer">
                            <h3>High Gear Motorcycles<br/>Website</h3>
                            <a href="https://mcgel28.github.io/high-gear"><FaExternalLinkAlt /></a> 
                        </div>
                    </div>

                    <div className="work">
                        <img className="portfolio-img"  src={template} alt="rent motorcycle" />
                        <div className="layer">
                            <h3>In-Progress</h3>
                        </div>
                    </div>
                            
                    <div className="work">
                        <img className="portfolio-img"  src={template} alt="rent motorcycle" />
                        <div className="layer">
                            <h3>In-Progress</h3>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
    )
}

export default Portfolio;
