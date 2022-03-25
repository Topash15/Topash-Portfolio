import React from "react";
import "./style.css";
import Footer from "../Footer";

const Nav = (props) => {
  const tabs = ["About Me", "My Projects", "Resume", "Contact Me"];

  return (
    <nav className="nav-container">      
      <div className="nav-upper">
        <h1 className="myName">Alexander Topash</h1>
        <h2 className="myTitle">Full Stack Web Developer</h2>
        <img
          className="headshot"
          src={require("../../assets/headshot.png").default}
          alt="headshot"
        />
      </div>
      <div className="nav-tabs-container">
        <ul className="nav-list">
          {tabs.map((tab) => (
            <li className="nav-tab" key={tab}>
              <a
                href={"#" + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link active" : "nav-link"
                }
              >
                {tab}
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
