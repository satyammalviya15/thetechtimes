import React from "react";

const Hackathons = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Global Hackathons</h1>
      <p className="lead text-muted mb-5">Build innovative solutions and compete for prizes in our featured hackathons.</p>

      <div className="bg-light p-5 rounded-4 border">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">AI for Good Hack 2026</h2>
            <p className="mb-4 text-muted">Collaborate on AI-driven solutions for environmental sustainability. $50,000 in prizes!</p>
            <div className="d-flex gap-3 mb-4">
              <span className="badge bg-white text-dark border p-2 px-3">Status: Open</span>
              <span className="badge bg-white text-dark border p-2 px-3">Theme: Sustainability</span>
            </div>
            <button className="btn btn-dark px-4" style={{ backgroundColor: "#B00020", border: 'none' }}>Join Hackathon</button>
          </div>
          <div className="col-md-4 text-center mt-4 mt-md-0">
            <i className="bi bi-code-slash text-danger display-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
