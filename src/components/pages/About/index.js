import React from "react";

const About = () => {
    return(
        <section className="about-me">
            <h2>About Me</h2>
            <img className = "about-me-img"src={require("../../../assets/headshot.png").default} alt="headshot"></img>
            <p className = "about-me-text">Hello! My name is Alex Topash and I am a full stack web developer. I am currently a student with the UCF Full-Stack Web Development Bootcamp. I've been participating in the bootcamp since June and expect to complete it by the end of November. We have gone through many different concepts such as html, css, javascript, jquery, SQL, React, MongoDB and more. If you take a look at the 'My Projects' page, you can see some of my work.
                <br />
                Before coding, I spent the last year working as IT support and consider myself a tech enthusiast. I enjoy the hardware side of things and love that I'm learning how to create software as well. When I'm not working, I usually spend my time gaming, playing with my menace of a dog, and spending time with my girlfriend.
            </p>
        </section>
    )

}
export default About;