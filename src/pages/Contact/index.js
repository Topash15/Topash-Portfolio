import React from 'react';

const ContactForm= ()=> {

    return(
    <section>
        <h1>Contact Me</h1>
        <div className='email-div'>
            <h3>Email (preferred)</h3>
            <a href="emailto:Alextopash@gmail.com">Alextopash@gmail.com</a>
        </div>
        <div className='phone-div'>
            <h3>Cell Phone</h3>
            <p>(717)-877-9709</p>
        </div>
    </section>)
}

export default ContactForm