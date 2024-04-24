import React from "react";
import html from "../Assets/techlogo/html.png"
import css from "../Assets/techlogo/css.png"
import javascript from "../Assets/techlogo/javascript.png"
import bootstrap from "../Assets/techlogo/bootstrap.png"
import react from "../Assets/techlogo/react.png"
import tailwind from "../Assets/techlogo/tailwind.png"
import frontend from "../Assets/fontend.png"
import backend from "../Assets/backend.png"
import other from "../Assets/other.png"
import github from "../Assets/techlogo/github.png"
import figma from "../Assets/techlogo/figma.png"
import webflow from "../Assets/techlogo/webflow.png"
import seo from "../Assets/techlogo/seo.png"
import postman from "../Assets/techlogo/postman.png"
import nodejs from "../Assets/techlogo/nodejs.png"
import expressjs from "../Assets/techlogo/expressjs.png"
import mongodb from "../Assets/techlogo/mongodb.png"
import './TechStack.css'


function TechStack() {
    return (
            <section id="tech-stack">
           
                <div className="skills">
                <h1>Skills</h1>
                <p>My Technical Level</p>
                </div>
                
                <div className="skills-container">

                    <div className="skill-box">
                        <div className="title">
                            <img className="logo" src={frontend} alt="code-logo"/>
                            <h2>Front-end Developer</h2>
                        </div>
                            <div className="tech-container">
                                <ul><img src={html} alt="html logo" /><p>HTML</p></ul>
                                <ul><img src={css} alt="css logo" /><p>CSS</p></ul>
                                <ul><img src={javascript} alt="javascript logo" /><p>JavaScript</p></ul>
                                <ul><img src={tailwind} alt="tailwind logo" /><p>Tailwind</p></ul>
                                <ul><img src={bootstrap} alt="bootstrap logo" /><p>Bootstrap</p></ul>
                                <ul><img src={react} alt="react logo" /><p>ReactJs</p></ul>
                            </div>
                    </div>

                    <div className="skill-box">
                        <div className="title">
                            <img className="logo" src={backend} alt="code-logo"/>
                            <h2>Back-end Developer</h2>
                        </div>
                            <div className="tech-container">
                                <ul><img src={nodejs} alt="html logo" /><p>NodeJs</p></ul>
                                <ul><img src={expressjs} alt="css logo" /><p>ExpressJs</p></ul>
                                <ul><img src={mongodb} alt="javascript logo" /><p>MongoDB</p></ul>
                            </div>
                    </div>

                    <div className="skill-box">
                        <div className="title">
                            <img className="logo" src={other} alt="other-logo"/>
                            <h2>Others</h2>
                        </div>
                            <div className="tech-container">
                                <ul><img src={github} alt="github logo" /><p>Github</p></ul>
                                <ul><img src={figma} alt="figma logo" /><p>Figma</p></ul>
                                <ul><img src={webflow} alt="webflow logo" /><p>Webflow</p></ul>
                                <ul><img src={postman} alt="postman logo" /><p>Postman</p></ul>
                                <ul><img src={seo} alt="seo" /><p>SEO</p></ul>
                            </div>
                    </div>
                </div>
             
            </section>
     
    )
}

export default TechStack;