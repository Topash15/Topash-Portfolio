import React from "react";

const Nav = (props) => {
  const tabs = ["About Me", "My Projects", "Contact Me", "Resume"];

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h1>Alexander Topash</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="col-7">
          <ul className="nav nav-tabs">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab}>
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
      </div>
    </div>
  );
};

export default Nav;
