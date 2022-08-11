import React from "react";
import "./style.css";

const About = (props) => {
  return (
    <section className="about-me">
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-text">
        Hello! My name is Alex Topash and I am a full stack web developer.
        <br />
        <br />I am here to bring your web application to life. I utilize
        <b className="technology-highlight"> TypeScript </b>
        and <b className="technology-highlight"> JavaScript </b> with
        <b className="technology-highlight"> React </b> or{" "}
        <b className="technology-highlight"> Angular </b> frameworks to create
        websites. As for the backend servers, I am familiar with{" "}
        <b className="technology-highlight">Node.js</b>,{" "}
        <b className="technology-highlight"> Express.js</b>,{" "}
        <b className="technology-highlight"> Apollo </b> as well as{" "}
        <b className="technology-highlight"> MongoDB</b> and{" "}
        <b className="technology-highlight">MySQL</b>. Want to see what I can
        do?{" "}
        <a
          href="#my projects"
          onClick={() => props.handlePageChange("My Projects")}
        >
          Click here to see my work!
        </a>
        <br />
        <br />
        Outside of coding, I enjoy a multitude of hobbies. One might say that my
        hobby is having hobbies. I like to learn new things and my interests can
        bounce around leaving me to learn some things about a lot of different
        topics. Recently, I have taken to astrophotography and rocket
        photography. I combine my hobbies with web development to continue
        furthering my skills. For my photography, I created my own{" "}
        <a href="https://astroamateur.space">website</a> to host my photos and
        journey rather than using a pre-made option.
        <br />
        <br />
        Other hobbies that I spend my time with include video games, watching
        baseball, 3D printing, playing with my dog, restoring retro video games,
        and whatever sounds like fun that day.
      </p>
      <p className="about-me-text">
        Feel free to reach out if you're looking to collaborate on a project or
        need a site developed!
      </p>
    </section>
  );
};
export default About;
