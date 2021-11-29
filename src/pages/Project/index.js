import React from "react";
import "./style.css";

const Project = () => {
  const projects = [
    {
      name: "Newna Bros",
      description: "Newna Bros is a concept page for a small business. It features a homepage with contact information and the backstory for the business. The second portion is an ecommerce shop that utilizes Stripe to complete payments.",
      image: "newna-bros",
      link: "https://newna-bros-ski-shop.herokuapp.com/",
      repo: "https://github.com/Electrolion/Newna-Slopes",
    },
    {
      name: "Reading Corner",
      description: "Reading Corner was my second time working with a team and the process saw much improvement. The application is a reading journal which allows a user to log and save their thoughts as they progress through a book.",
      image: "reading-corner",
      link: "https://reading-corner-project.herokuapp.com/",
      repo: "https://github.com/Electrolion/Reading-corner",
    },
    {
      name: "Fresh Finds",
      description: "Fresh Finds was the first application built while coordinating with a team. It utilizes the SpotifyAPI to pick a random song based off a genre. It plays a demo of the song and displays the lyrics as well.",
      image: "fresh-finds",
      link: "https://imspires.github.io/fresh-finds/",
      repo: "https://github.com/imSpires/fresh-finds",
    },
    {
      name: "Budget Tracker",
      description: "Budget tracker is a minimalistic app that allows one to add an expense or deposit to their budget. The app is a Progressive Web App (PWA) and has offline capabilities.",
      image: "budget-tracker",
      link: "https://this-budget-tracker.herokuapp.com/",
      repo: "https://github.com/Topash15/Budget-Tracker",
    },    {
      name: "Tech Blog",
      description: "Tech blog is a blog application that allows a user to create and account, post, and comment on posts. Data is saved to a SQL database.",
      image: "tech-blog",
      link: "https://tech-blog-topash.herokuapp.com/",
      repo: "https://github.com/Topash15/Tech-Blog",
    },    {
      name: "Social Media API",
      description: "This project uses MongoDB and RESTful API routes to create the back-end of a social media website.",
      image: "social-media-api",
      repo: "https://github.com/Topash15/social-media-api",
      link: "https://youtu.be/JXGrrIG8mBs",
    },    {
      name: "Notetaker",
      description: "Notetaker is a simple application that utilizes express.js to save notes to a server through an intuitive UI.",
      image: "notetaker",
      link: "https://stark-bastion-00510.herokuapp.com/",
      repo: "https://github.com/Topash15/Note-Master",
    },
  ];

  return (
    <section>
      <h2 className="my-projects-title">My Projects</h2>
      <div className="container">
        <div className="card-group">
          <div className="row">
            {projects.map((project) => (
              <div class="card col-sm-4">
                <img
                  className="card-img-top card-image"
                  src={
                    require(`../../assets/project/${project.image}.png`)
                      .default
                  }
                  alt={project.name}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <div>
                    <a href={project.link} className="text-muted">
                        View Project
                    </a>
                  </div>
                  <a href={project.repo} className="text-muted">
                    View Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
