import React from "react";

const FreeResources = () => {
  const resources = [
    { title: "Open Source Libraries", type: "Tooling", count: "50+ items" },
    { title: "Design Kits (Figma)", type: "Design", count: "12 items" },
    { title: "Interview Cheat Sheets", type: "Career", count: "25 items" },
    { title: "API Collections", type: "Development", count: "100+ items" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Free Tech Resources</h1>
      <p className="lead text-muted mb-5">A collection of free tools, kits, and resources for the tech community.</p>

      <div className="row g-4">
        {resources.map((res, i) => (
          <div key={i} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">
              <div className="bg-light p-4 rounded-circle mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-gift-fill fs-3 text-primary"></i>
              </div>
              <h5 className="fw-bold">{res.title}</h5>
              <p className="small text-muted mb-3">{res.type} Section</p>
              <div className="mt-auto">
                <span className="text-primary small fw-bold">{res.count}</span>
                <hr className="my-2" />
                <button className="btn btn-link link-dark text-decoration-none small p-0">Browse Resources <i className="bi bi-chevron-right"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeResources;
