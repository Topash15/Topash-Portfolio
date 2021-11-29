import React from 'react';
import "./style.css";

const ContactForm= ()=> {

    return(
    <section className="contact-container">
        {/* <h1 className="contact-title">Contact Me</h1> */}
        <div className='email-div'>
            <h3 className="email-title">Email</h3>
            <h6 className="email-subtitle"> Preferred method </h6>
            <a className="email-link" href="emailto:Alextopash@gmail.com">Alextopash@gmail.com</a>
        </div>
        <div className='phone-div'>
            <h3 className="phone-title">Cell Phone</h3>
            <h6 className = "phone-subtitle">Call or text</h6>
            <a className="phone-number" href="tel:17178779709">(717)-877-9709</a>
        </div>
    </section>)
}

export default ContactForm