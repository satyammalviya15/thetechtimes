import React from "react";

const Certifications = () => {
  const certs = [
    { title: "AWS Solutions Architect", type: "Cloud", level: "Associate" },
    { title: "Google Professional Data Engineer", type: "Data", level: "Professional" },
    { title: "Certified Kubernetes Administrator (CKA)", type: "Infrastructure", level: "Expert" },
    { title: "CompTIA Security+", type: "Security", level: "Entry" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-5">Tech Certifications</h1>
      <div className="row g-4">
        {certs.map((cert, i) => (
          <div key={i} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 text-center bg-light">
              <div className="mb-3 text-warning fs-1">
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <h5 className="fw-bold mb-2">{cert.title}</h5>
              <p className="small text-muted mb-3">{cert.type} Tracking</p>
              <div className="mt-auto">
                <span className="badge bg-white text-dark border rounded-pill shadow-sm px-3">{cert.level} Level</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-5 p-5 border rounded-4 bg-white shadow-sm text-center">
        <h3>Prepare with Confidence</h3>
        <p className="text-muted">Access our official study guides and practice exams for top industry certifications.</p>
        <button className="btn btn-dark mt-3" style={{ backgroundColor: "#B00020", border: 'none' }}>Explore Study Guides</button>
      </div>
    </div>
  );
};

export default Certifications;
