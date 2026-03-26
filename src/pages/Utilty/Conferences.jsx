import React from "react";

const Conferences = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <h1 className="fw-bold mb-4">Tech Conferences</h1>
        <p className="lead text-muted mb-5">Discover world-class conferences bringing together the brightest minds in tech.</p>
        
        <div className="card border-0 shadow-lg bg-dark text-white p-5 rounded-4 mb-5 overflow-hidden position-relative">
          <div className="position-relative z-index-1">
            <h2 className="display-5 fw-bold mb-3">The Tech Expo 2026</h2>
            <p className="mb-4">There are no active conferences right now </p>
            <button className="btn btn-primary btn-lg px-5">Explore Conference</button>
          </div>
        </div>

        <div className="row g-4 text-start">
          <div className="col-md-6 text-start">
            <div className="p-4 border rounded-3 bg-light">
              <h4>Call for Speakers</h4>
              <p className="small text-muted">Submit your talk for upcoming conferences in 2026.</p>
              <a href="#" className="text-danger fw-bold text-decoration-none">Apply Here <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <div className="p-4 border rounded-3 bg-light">
              <h4>Sponsorship</h4>
              <p className="small text-muted">Partner with us to reach thousands of tech professionals.</p>
              <a href="#" className="text-danger fw-bold text-decoration-none">View Packages <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
