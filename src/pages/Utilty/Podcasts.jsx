import React from "react";

const Podcasts = () => {
  const episodes = [
    { title: "Decoding Large Language Models", host: "Sarah Chen", length: "45m" },
    { title: "The Startup Founder Journey", host: "Alex Rivera", length: "52m" },
    { title: "Inside the World of Quantum Computing", host: "Dr. James Lee", length: "38m" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-5">The Tech Times Podcasts</h1>
      
      <div className="row g-4">
        {episodes.map((ep, i) => (
          <div key={i} className="col-lg-6">
            <div className="card border-0 shadow-sm p-3 hover-lift d-flex flex-row align-items-center bg-light">
              <div className="bg-dark text-white p-4 rounded me-4">
                <i className="bi bi-mic-fill fs-3"></i>
              </div>
              <div className="flex-grow-1">
                <h5 className="fw-bold mb-1">{ep.title}</h5>
                <p className="small text-muted mb-0">with {ep.host} • {ep.length}</p>
              </div>
              <button className="btn btn-danger btn-sm rounded-circle p-2" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-play-fill text-white"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hover-lift { transition: transform 0.2s; }
        .hover-lift:hover { transform: translateY(-5px); }
      `}</style>
    </div>
  );
};

export default Podcasts;
