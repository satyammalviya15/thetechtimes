import React from "react";

const UnderConstruction = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "80vh", padding: "2rem" }}
    >
      <h1 className="display-4 mb-3">🚧 Page Under Construction 🚧</h1>
      <p className="lead mb-3">
        This page is currently being worked on. Please check back later!
      </p>
      <p className="text-muted">
        Go back to the <a href="/" className="text-decoration-none">Home Page</a>.
      </p>
    </div>
  );
};

export default UnderConstruction;
