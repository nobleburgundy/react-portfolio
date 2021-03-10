import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import api from "../../utils/api";

function ProjectDetail() {
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api
      .getProjectById(id)
      .then((res) => {
        setProject(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <PageContainer>
        <Link to="/portfolio">back</Link>
        <h1>{project.title}</h1>
        <img className="card-img-top p-3" src={project.thumbnailPath} alt="card cap" />
        <Link to={project.link}>{project.title}</Link>
        <p className="card-text mt-3">{project.description}</p>
      </PageContainer>
    </>
  );
}

export default ProjectDetail;
