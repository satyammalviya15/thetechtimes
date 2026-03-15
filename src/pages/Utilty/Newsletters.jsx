import React from "react";

const Newsletters = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-7 mx-auto">
        <i className="bi bi-envelope-paper text-danger display-1 mb-4"></i>
        <h1 className="fw-bold mb-3">Our Newsletters</h1>
        <p className="lead text-muted mb-5">Subscribe to the briefings that matter most to you, delivered straight to your inbox.</p>
        
        <div className="row g-4 text-start">
          <div className="col-12">
            <div className="card p-4 border shadow-sm rounded-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-bold mb-1">Morning Brew</h4>
                  <p className="text-muted small mb-0">The daily snapshot of tech news you need to know start your day.</p>
                </div>
                <div className="form-check form-switch fs-4">
                  <input className="form-check-input shadow-none" type="checkbox" role="switch" checked />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card p-4 border shadow-sm rounded-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="fw-bold mb-1">Weekly Insider</h4>
                  <p className="text-muted small mb-0">Deep dives, analysis, and exclusive insights from the tech industry.</p>
                </div>
                <div className="form-check form-switch fs-4">
                  <input className="form-check-input shadow-none" type="checkbox" role="switch" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5 pt-4">
          <div className="input-group mb-3 shadow-none border rounded-pill overflow-hidden">
            <input type="text" className="form-control border-0 px-4 py-3 shadow-none" placeholder="Enter your email" />
            <button className="btn btn-dark px-5 fw-bold" style={{ backgroundColor: "#B00020", border: 'none' }}>Subscribe</button>
          </div>
          <p className="small text-muted">You can unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
