import React from "react";

const Project = () => {
  const projects = [
    {
      name: "Reading Corner",
      description: "This is a project",
      image: "reading-corner",
      link: "",
      repo: "",
    },
    {
      name: "Fresh Finds",
      description: "This is a project",
      image: "fresh-finds",
      link: "",
      repo: "",
    },
    {
        name: "Reading Corner",
        description: "This is a project",
        image: "reading-corner",
        link: "",
        repo: "",
      },    {
        name: "Reading Corner",
        description: "This is a project",
        image: "reading-corner",
        link: "",
        repo: "",
      },    {
        name: "Reading Corner",
        description: "This is a project",
        image: "reading-corner",
        link: "",
        repo: "",
      },    {
        name: "Reading Corner",
        description: "This is a project",
        image: "reading-corner",
        link: "",
        repo: "",
      },
  ];

  return (
    <section>
      <h2>My Projects</h2>
      <div className="container">
        <div className="card-group">
          <div className="row">
            {projects.map((project) => (
              <div class="card col-sm-4">
                <img
                  className="card-img-top card-image"
                  src={
                    require(`../../../assets/project/${project.image}.png`)
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
