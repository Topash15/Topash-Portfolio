import React from "react";
import "./style.css";
import Footer from "../Footer";

const Nav = (props) => {
  const tabs = [
    { title: "About Me", link: "#about me" },
    { title: "My Projects", link: "#my projects" },
    {title: "Contact Me", link: "#contact me" },
    {title: "Resume", link: "https://drive.google.com/file/d/1S1EnshRgNGnSOTwfB52OTV3dyGwWVrGi/view?usp=sharing", redirect: false, target: "_blank" },
  ];

  return (
    <nav className="nav-container">
      <div className="nav-upper">
        <h1 className="myName">Alexander Topash</h1>
        <h2 className="myTitle">Full Stack Web Developer</h2>
        <img
          className="headshot"
          src={require("../../assets/headshot_transparent.png")}
          alt="headshot"
        />
      </div>
      <div className="nav-tabs-container">
        <ul className="nav-list">
          {tabs.map((tab) => (
            <li className="nav-tab" key={tab.title + tab.link}>
              <a
                href={tab.link}
                onClick={() => {tab.redirect !== false ? props.handlePageChange(tab.title) : props.handlePageChange(undefined)}}
                className={
                  props.currentPage === tab.title ? "nav-link active" : "nav-link"
                }
                target={tab.target ? tab.target : null}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </nav>
  );
};

export default Nav;
