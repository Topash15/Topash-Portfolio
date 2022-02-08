import React from "react";
import "./style.css";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
    "MongoDB",
    "SQL",
    "React",
  ];

  return (
    <section className="about-me">
      <h2 className="about-me-title">About Me</h2>
      <p className="about-me-text">
        Hello! My name is Alex Topash and I am a full stack web developer.
        <br />
        <br />
        Before coding, I spent the last year working as IT support and consider
        myself a tech enthusiast. I enjoy the hardware side of things and love
        that I'm learning how to create software as well. When I'm not working,
        I usually spend my time gaming, woodworking, or creating things with my
        3D printer. I love to learn new techniques or methods that help me to
        improve my work whether it be a table, a 3D-printed drawer, or a
        website.
        <br />
        Some of my technical skills include:
      </p>
      <ul className="about-me-skill-list">
        {skills.map((skill, index) => (
          <li className="skill-list-item" key={index}>
            <p className="skill-text">{skill}</p>
          </li>
        ))}
      </ul>
      <p className="about-me-text">
        Feel free to reach out if you're looking to collaborate on a project or
        need a site developed!
      </p>
    </section>
  );
};
export default About;
