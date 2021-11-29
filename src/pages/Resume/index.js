import React from "react";
import "./style.css";

const Resume = () => {
  return (
    <section className="container">
      <div className="row resume-div">
        <h2 className="resume-title">Resume</h2>
        <p className="resume-text">
          Looking for my resume to learn more? You've come to the right place!
        </p>
        <a
          className="resume-link"
          href="https://1drv.ms/b/s!Ahrza5HOAqiXprAnweWr2Uzo_ldn6w?e=cEDFoq"
        >
          Click here to download my resume
        </a>
        <iframe
          classname="resume-iframe"
          title="Resume-Viewer"
          src="https://onedrive.live.com/embed?cid=97A802CE916BF31A&resid=97A802CE916BF31A%21628775&authkey=AH2A-MiG6YPzFno&em=2"
          height="500"
          frameborder="0"
          scrolling="no"
        ></iframe>{" "}
      </div>
    </section>
  );
};

export default Resume;
