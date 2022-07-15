import React from 'react';
import "./style.css";

const ContactForm= ()=> {

    return(
    <section className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <div className='contact-text-div'>
            <h2 className="contact-title">Email</h2>
            <p className="contact-subtitle"> Preferred method </p>
            <a className="contact-link" href="emailto:Alextopash@gmail.com">Alextopash@gmail.com</a>
        </div>
        <div className='contact-text-div'>
            <h2 className="contact-title">Cell Phone</h2>
            <p className = "contact-subtitle">Call or text</p>
            <a className="contact-link" href="tel:17178779709">(717)-877-9709</a>
        </div>
    </section>)
}

export default ContactForm