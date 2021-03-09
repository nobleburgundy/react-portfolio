import React from "react";
import PageContainer from "../../components/PageContainer";
// import api from "../../utils/api";
import "./style.css";
const portfolioImageSrc = "https://james-gould.herokuapp.com/assets/img/personal/PortfolioMe-5.jpg";

function Home() {
  return (
    <>
      <PageContainer>
        <h2 className="text-center text-monospace">Musician/Engineer</h2>
        <img className="profile-image w-100" src={portfolioImageSrc} alt="Home page link" />
      </PageContainer>
    </>
  );
}

export default Home;
