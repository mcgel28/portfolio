import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import handcoding from "../Assets/handcoding.png";
import './Contact.css';
import { MdInsertEmoticon } from "react-icons/md";



const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_x7hvn5f', 'template_kep1a67', form.current, {
          publicKey: 'HX8ymaxIeabDmoPa8',
        })
        .then(
          () => {
            // Display window alert on success
            window.alert("Thank you for your message!");
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };
  


    return (
        <div id="contact-section">
            <div className="contact">
                <h1 className="contact-title">Get in Touch</h1>
                <div className="contact-container">
                    <div className="contact-handcoding"> 
                        <img className="handcoding" src={handcoding} alt="hand coding" />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder=" Enter your name" required></input>
                        <textarea id='message' rows="6" name="message" placeholder=" What is your message?" required></textarea>
                        <p className='note'>Note: Include your e-mail in your message <MdInsertEmoticon /> </p>
                        <div className="button-container">
                            <button type="submit" className="contact-button">SEND MESSAGE</button>
                            

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
