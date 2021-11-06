import React from "react";

const Nav = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h1>Alexander Topsh</h1>
          <h2>Full Stack Web Devloper</h2>
        </div>
        <div className="col-7">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                My Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
