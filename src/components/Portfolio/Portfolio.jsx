import React from "react";
import rentmoto from "../Assets/rentmoto.jpg"
import template from "../Assets/template.jpg"
import { FaExternalLinkAlt } from "react-icons/fa";
import './Portfolio.css'


function Portfolio() {

    return (
        <div id="portfolio-section">
            <div class="portfolio">
                <h1 class="port-title">Portfolio</h1>
                <div class="work-list">
                    <div class="work">
                            <img class="portfolio-img"  src={rentmoto} alt="rent motorcycle" />
                        <div class="layer">
                            <h3>Motorcycle Renting Website</h3>
                            <a href="https://mcgel28.github.io/rent-moto/"><FaExternalLinkAlt /></a> 
                        </div>
                    </div>

                    <div class="work">
                        <img class="portfolio-img"  src={template} alt="rent motorcycle" />
                        <div class="layer">
                            <h3>In-Progress</h3>
                        </div>
                    </div>
                            
                    <div class="work">
                        <img class="portfolio-img"  src={template} alt="rent motorcycle" />
                        <div class="layer">
                            <h3>In-Progress</h3>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
    )
}

export default Portfolio;