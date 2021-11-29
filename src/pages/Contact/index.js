import React from 'react';
import "./style.css";

const ContactForm= ()=> {

    return(
    <section className="contact-container">
        {/* <h1 className="contact-title">Contact Me</h1> */}
        <div className='email-div'>
            <h3 className="email-title">Email (preferred)</h3>
            <a className="email-link" href="emailto:Alextopash@gmail.com">Alextopash@gmail.com</a>
        </div>
        <div className='phone-div'>
            <h3 className="phone-title">Cell Phone</h3>
            <p className="phone-number">(717)-877-9709</p>
        </div>
    </section>)
}

export default ContactForm