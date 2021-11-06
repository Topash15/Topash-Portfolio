import React from "react";

const Project = () => {
  const projects = [
    {
      name: "Reading Corner",
      description: "This is a project",
      image: "reading-corner",
      link: "",
    },
    {
      name: "Fresh Finds",
      description: "This is a project",
      image: "fresh-finds",
      link: "",
    },
    {
      name: "Reading Corner",
      description: "This is a project",
      image: "reading-corner",
      link: "",
    },
    {
      name: "Reading Corner",
      description: "This is a project",
      image: "reading-corner",
      link: "",
    },
    {
      name: "Reading Corner",
      description: "This is a project",
      image: "reading-corner",
      link: "",
    },
    {
      name: "Reading Corner",
      description: "This is a project",
      image: "reading-corner",
      link: "",
    },
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <div className="container">
        <div className="card-group">
          <div className="row">
            {projects.map((project) => (
              <div class="card col-4">
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
                  <a href={project.link} className="text-muted">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//     <div className="container">
//     <div className="row">
//       <div className="col-7">
//         <ul className="">
//           {projects.map((project) => (
//             <li className="" key={project}>
//               <a href = {project.link}>
//                 <img
//                     alt={project.alt}
//                     className = {project.source}
//                     src= {require(`../../assets/footer/${project.source}.png`).default}
//                     ></img>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>

export default Project;
