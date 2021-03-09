import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import portfolio from "./portfolio-data";
const srcBase = "https://james-gould.herokuapp.com/assets/img/";

function Portfolio(props) {
  return (
    <>
      <PageContainer>
        <h1>Portfolio</h1>
        <div className="card-deck">
          {portfolio.map((project) => {
            return (
              <div className="card" key={project.id}>
                <img className="card-img-top" src={srcBase + project.thumbnail} alt="card cap" />
                <Link to={"portfolio/" + project.id}>{project.title}</Link>
                <p className="card-text">{project.description}</p>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </>
  );
}

export default Portfolio;
