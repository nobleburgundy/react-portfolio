import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import api from "../../utils/api";
import "./style.css";

function ProjectDetail() {
  const [project, setProject] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .getProjectById(id)
      .then((res) => {
        setProject(res);
        setTechnologies(res.technologies);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <PageContainer>
        <div className="container">
          <div className="row">
            <Link className="pl-4" to="/portfolio">
              back
            </Link>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img className="card-img-top p-3" src={project.thumbnailPath} alt="card cap" />
            </div>
            <div className="col-md-6">
              <h1>{project.title}</h1>
              <p className="card-text mt-3">{project.description}</p>
              <ul>
                {technologies.map((tech, id) => {
                  return <li key={id}>{tech}</li>;
                })}
              </ul>
              <a className="d-block pb-3" target="_blank" rel="noreferrer" href={project.link}>
                Live Link
              </a>
              <a target="_blank" rel="noreferrer" href={project.github}>
                Github
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default ProjectDetail;
