import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import portfolio from "./portfolio-data";

function Portfolio(props) {
  return (
    <>
      <PageContainer>
        <h1>Portfolio</h1>
        <ul>
          {portfolio.map((project) => {
            return (
              <li key={project.id}>
                <Link to={"portfolio/" + project.id}>{project.title}</Link>
              </li>
            );
            // return <ProjectDetail title={project.title} description={project.description} src={project.imageSrc} />;
          })}
        </ul>
      </PageContainer>
    </>
  );
}

export default Portfolio;
