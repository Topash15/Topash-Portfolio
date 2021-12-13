import React from "react";
import "./style.css";

const About = () => {
    return(
        <section className="about-me">
            <h2 className="about-me-title">About Me</h2>
            <p className = "about-me-text">Hello! My name is Alex Topash and I am a full stack web developer. I am a recent graduate of a full stack web development bootcamp with UCF where I learned many skills inluding: 
            html, css, javascript, jquery, SQL, React, MongoDB, React.js, and more. If you take a look at the 'My Projects' page, you can see some of my work.
                <br />
                Before coding, I spent the last year working as IT support and consider myself a tech enthusiast. I enjoy the hardware side of things and love that I'm learning how to create software as well. When I'm not working, I usually spend my time gaming, playing with my menace of a dog, and spending time with my girlfriend.
                <br />
                Feel free to reach out if you're looking to collaborate on a project or need a site developed!
            </p>
        </section>
    )

}
export default About;