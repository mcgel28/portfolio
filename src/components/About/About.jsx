import React from 'react';
import me2 from "../Assets/me2.jpg";
import './About.css'


function About() {
    return (
        <div id="about-section">
                <div className="about">
                    <div className="about-col-1">
                        <img className="me2" src={me2} alt="img of Adrian" />
                    </div>
                    <div className="about-text">
                        <h2 className="about-col-2">About Me</h2>
                        <p>I am a web developer. Armed with a knack for creativity and an ability to transform designs into seamless functional digital experiences. My goal is to not only meet but exceed expectations, making visually and intuitively responsive websites that leave a lasting impression on users. <br /><br />My main stack is currently React.js in combination with Tailwind CSS. </p>
                        <div className="about-row">
                            <div className="about-row-1">
                                <li>
                                    <h5>NAME</h5>
                                    <p>Adrian Miguel Arellano</p>
                                </li>
                                <li>
                                    <h5>E-MAIL</h5>
                                    <p>gel.adrian28@gmail.com</p>
                                </li>
                            </div>
                            <div className="about-row-2">
                                <li>
                                    <h5>EMPLOYMENT</h5>
                                    <p>Open</p>
                                </li>
                                <li>
                                    <h5>EDUCATION</h5>
                                    <p>BS Computer Science<br />(In Progress)</p>
                                    <p>BS Aircraft Maintenance<br />(2021)</p>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default About;