import React from "react";
import { Rocket, TrendingUp, Users, DollarSign } from "lucide-react";

const startups = [
  {
    title: "EcoDrive AI",
    founder: "Arjun Varma",
    funding: "$15M Series A",
    description: "Developing AI-powered energy management systems for electric vehicle fleets.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    category: "CleanTech"
  },
  {
    title: "HealthSphere",
    founder: "Sarah Jenkins",
    funding: "$5M Seed",
    description: "A decentralized platform for secure patient health record management.",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=800",
    category: "HealthTech"
  },
  {
    title: "FinFlow",
    founder: "Michael Chen",
    funding: "$22M Series B",
    description: "Automating cross-border payments for small and medium enterprises.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    category: "FinTech"
  }
];

const Startups = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3">Startup Spotlight</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Discover the most innovative startups disrupting industries and shaping the future of technology.
        </p>
      </div>

      <div className="row g-4">
        {startups.map((item, i) => (
          <div key={i} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden hover-lift">
              <div className="position-relative">
                <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '220px', objectFit: 'cover' }} />
                <span className="position-absolute top-0 end-0 m-3 badge bg-dark opacity-75">{item.category}</span>
              </div>
              <div className="card-body p-4">
                <h4 className="fw-bold mb-2">{item.title}</h4>
                <p className="text-muted small mb-3">{item.description}</p>
                <div className="border-top pt-3 mt-3">
                  <div className="d-flex justify-content-between small text-muted">
                    <span><Users size={14} className="me-1" /> {item.founder}</span>
                    <span className="text-success fw-bold"><DollarSign size={14} className="me-1" /> {item.funding}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-5 bg-light rounded-4 text-center">
        <h3 className="fw-bold">Are you a Founder?</h3>
        <p className="text-muted mb-4">Pitch your startup to us and get featured in our next spotlight series.</p>
        <button className="btn btn-dark px-5 py-2 fw-semibold" style={{ backgroundColor: "#B00020", border: 'none' }}>Submit Your Pitch</button>
      </div>

      <style jsx>{`
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-10px); box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important; }
      `}</style>
    </div>
  );
};

export default Startups;
