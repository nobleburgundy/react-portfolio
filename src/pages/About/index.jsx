import React from "react";
import PageContainer from "../../components/PageContainer";

function About() {
  const aboutImageSrc = "https://james-gould.herokuapp.com/assets/img/personal/piano.jpg";
  return (
    <>
      <PageContainer>
        <h1>About</h1>
        <img className="w-100" src={aboutImageSrc} alt="About" />
      </PageContainer>
    </>
  );
}

export default About;
