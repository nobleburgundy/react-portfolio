import React from "react";
import { useParams } from "react-router";
import projects from "../Portfolio/portfolio-data";

function ProjectDetail() {
  let { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  return (
    <>
      <h1>{project.title}</h1>
      <h2>{project.description}</h2>
      <img src={project.thumbnail} alt={project.title} />
      <h2>Technologies Used:</h2>
      <ul>
        {project.technologies.map((tech, id) => {
          return <li key={id}>{tech}</li>;
        })}
      </ul>
    </>
  );
}

export default ProjectDetail;
