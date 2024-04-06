import React from "react";
import handcoding from "../Assets/handcoding.png"
import './Contact.css'

function Contact() {
    return (
        <div id="contact-section">
            <div className="contact">
                <h1 className="contact-title">Get in Touch</h1>
                    <div className="contact-container">
                        <div className="contact-handcoding"> 
                            <img className="handcoding" src={handcoding} alt="hand coding" />
                        </div>
                        <div className="form">
                            <input type="text" name="name" placeholder=" Enter your name"></input>
                            <input type="email" name="email" placeholder=" Enter your e-mail"></input>
                            <textarea type="message" rows="6" name="message" placeholder=" What is your message?"></textarea>
                            <div className="button-container">
                            <button type="submit" className="contact-button">SEND MESSAGE</button>
                            </div>
                        </div>
                        </div>
            </div>
        </div>
    )
}

export default Contact;