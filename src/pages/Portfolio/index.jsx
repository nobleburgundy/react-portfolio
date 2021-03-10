import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import api from "../../utils/api";

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
        <div className="row">
          {portfolio.map((project, id) => {
            const projectIndex = id + 1;
            return (
              <div className="col-lg-3 col-md-6 mb-4" key={id}>
                <div className="card h-100 text-monospace p-3">
                  <img className="card-img-top p-3" src={project.thumbnailPath} alt="card cap" />
                  <Link to={"portfolio/" + projectIndex}>{project.title}</Link>
                  <p className="card-text mt-3">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </>
  );
}

export default Portfolio;
