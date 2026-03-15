import React from "react";

const Tutorials = () => {
  const tutorials = [
    { title: "Build a Real-time Chat with Socket.io", category: "Web Dev", difficulty: "Intermediate" },
    { title: "Getting Started with Rust for CLI Tools", category: "Programming", difficulty: "Beginner" },
    { title: "Deploying Apps with Docker & Kubernetes", category: "DevOps", difficulty: "Advanced" },
    { title: "Understanding React Server Components", category: "Web Dev", difficulty: "Advanced" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Step-by-Step Tutorials</h1>
      <p className="lead text-muted mb-5">Practical, hands-on guides for the modern developer.</p>

      <div className="row g-4">
        {tutorials.map((tut, i) => (
          <div key={i} className="col-md-6">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted small fw-bold text-uppercase ls-1">{tut.category}</span>
                <span className={`small ${tut.difficulty === 'Advanced' ? 'text-danger' : 'text-primary'}`}>{tut.difficulty}</span>
              </div>
              <h3 className="fw-bold mb-3">{tut.title}</h3>
              <p className="text-muted">In this tutorial, we'll cover the fundamental concepts and build a working project from scratch.</p>
              <div className="mt-auto d-flex align-items-center justify-content-between border-top pt-3">
                <span className="small text-muted"><i className="bi bi-clock me-1"></i> 15 min read</span>
                <button className="btn btn-outline-dark btn-sm rounded-pill px-4">Read Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
