import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import api from "../../utils/api";
// import portfolio from "./portfolio-data";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    function loadPortfolio() {
      api.getPortfolio().then((portfolio) => setPortfolio(portfolio));
    }

    loadPortfolio();
  }, []);
  return (
    <>
      <PageContainer>
        <h1>Portfolio</h1>
        <div className="card-deck">
          {portfolio.map((project, id) => {
            return (
              <div className="card" key={id}>
                <img className="card-img-top" src={project.thumbnailPath} alt="card cap" />
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
