import React from "react";

const Default = () => {
  const currentPathName = window.location.href;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1>404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL{" "}
            <span className="text-danger">{currentPathName}</span> was not found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Default;
