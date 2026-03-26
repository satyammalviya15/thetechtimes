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
          <button className="btn btn-dark btn-lg mt-3 shadow-none px-4" style={{ backgroundColor: "#B00020", border: "none" }}>Apply Now</button>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" className="img-fluid rounded shadow-lg" alt="Team" />
        </div>
      </div>

      <div className="bg-light p-5 rounded-4 mt-5 text-center">
        <h2>Don't see a perfect fit?</h2>
        <p className="text-muted">We're always looking for talented people. Send your resume to <strong>natrajtechstudio@gmail.com</strong> and we'll keep you in mind for future openings.</p>
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
