import React from "react";

const Careers = () => {
  const openings = [
    { title: "Senior Tech Journalist", location: "Remote / Mumbai", category: "Editorial" },
    { title: "Frontend Developer (React)", location: "Remote", category: "Engineering" },
    { title: "Cybersecurity Analyst", location: "Bangalore", category: "Research" },
    { title: "Social Media Manager", location: "Mumbai", category: "Marketing" },
  ];

  return (
    <div className="container my-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="fw-bold">Build the Future of Tech News</h1>
          <p className="lead text-muted">
            Join our team of explorers, thinkers, and builders. We're on a mission to document the most important stories of our generation.
          </p>
          <button className="btn btn-dark btn-lg mt-3 shadow-none px-4" style={{ backgroundColor: "#B00020", border: "none" }}>View Openings</button>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" className="img-fluid rounded shadow-lg" alt="Team" />
        </div>
      </div>

      <div className="py-5">
        <h2 className="mb-4">Current Openings</h2>
        <div className="row g-4">
          {openings.map((job, i) => (
            <div key={i} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 hover-lift">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span className="badge bg-light text-dark border">{job.category}</span>
                  <span className="text-muted small"><i className="bi bi-geo-alt"></i> {job.location}</span>
                </div>
                <h4 className="card-title">{job.title}</h4>
                <p className="text-muted small">We are looking for someone with 3+ years of experience and a passion for technology.</p>
                <a href="#" className="text-danger fw-bold text-decoration-none small">Apply Now <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-light p-5 rounded-4 mt-5 text-center">
        <h2>Don't see a perfect fit?</h2>
        <p className="text-muted">We're always looking for talented people. Send your resume to <strong>hr@thetechtimes.com</strong> and we'll keep you in mind for future openings.</p>
      </div>

      <style jsx>{`
        .hover-lift {
          transition: transform 0.2s;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default Careers;
