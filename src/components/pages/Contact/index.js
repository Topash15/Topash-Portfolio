import React, { useState } from 'react';
import {validateEmail} from '../../../utils/helpers'

const ContactForm= ()=> {

    const [ formState, setFormState ] = useState({ name: '', email: '', message: ''})
    const { name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        if (e.target.name === 'Email'){
            const isValid = validateEmail(e.target.value)
            if (!isValid){
                setErrorMessage('Please enter a valid email address.')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length){
                setErrorMessage(`${e.target.name} is a required field.`)
            } else {
                setErrorMessage('')
            }
        }
        if (!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form">
            {/* name input */}
            <div class="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name = "Name" defaultValue={name} onChange={handleChange}/>
            </div>
            {/* email input */}
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email"  name = "Email" defaultValue={email} onChange={handleChange}/>
            </div>
            {/* message text area */}
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="Message" className="form-control" rows="5" defaultValue={message} onChange={handleChange}/>
            </div>
            {/* displays if error message */}
            {errorMessage && (
                <div>
                    <p id='error-message'>{errorMessage}</p>
                </div>
            )}
            <div className="form-group">
                <button type="submit" className="contact-submit btn btn-light" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>)
}

export default ContactForm