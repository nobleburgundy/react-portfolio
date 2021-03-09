import React from "react";
import PageContainer from "../../components/PageContainer";
import "./style.css";
const portfolioImageSrc = "https://james-gould.herokuapp.com/assets/img/personal/PortfolioMe-5.jpg";

function Home() {
  return (
    <>
      <PageContainer>
        <img className="profile-image w-100" src={portfolioImageSrc} alt="Home page link" />
        <h1>JCG DEV</h1>
      </PageContainer>
    </>
  );
}

export default Home;
