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
            return (
              <div className="col-lg-3 col-md-6 mb-4" key={id}>
                <div className="card h-100">
                  <img className="card-img-top" src={project.thumbnailPath} alt="card cap" />
                  <Link to={project.link}>{project.title}</Link>
                  <p className="card-text">{project.description}</p>
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
