import React from "react";

function PageContainer({ children }) {
  return (
    <>
      <div className="container-fluid">{children}</div>
    </>
  );
}

export default PageContainer;
