import React from "react";

const Webinars = () => {
  const webinars = [
    { title: "Mastering React Server Components", speaker: "Dr. Jane Smith", date: "March 25, 2026" },
    { title: "The Future of Cybersecurity", speaker: "Mark Thompson", date: "April 05, 2026" },
    { title: "Scaling AI Infrastructure", speaker: "Elena Rodriguez", date: "April 15, 2026" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Live Webinars</h1>
      <p className="lead text-muted mb-5">Expert-led sessions on the latest tech trends and practical skills.</p>

      <div className="row g-4">
        {webinars.map((web, i) => (
          <div key={i} className="col-lg-12">
            <div className="card border-0 shadow-sm p-4 d-flex flex-row align-items-center">
              <div className="bg-light p-3 rounded-circle me-4 text-danger fs-1">
                <i className="bi bi-camera-video"></i>
              </div>
              <div className="flex-grow-1">
                <h4 className="fw-bold mb-1">{web.title}</h4>
                <p className="text-muted small mb-0">with {web.speaker} • {web.date}</p>
              </div>
              <button className="btn btn-outline-dark px-4 rounded-pill">Set Reminder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinars;
