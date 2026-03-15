import React from "react";

const Press = () => {
  const releases = [
    { date: "March 10, 2026", title: "The Tech Times Surpasses 2 Million Monthly Active Readers" },
    { date: "February 15, 2026", title: "Announcing Our Strategic Partnership with Global Tech Innovators" },
    { date: "January 20, 2026", title: "The Tech Times Launches New Specialized AI & Robotics Vertical" },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4">Press Room</h1>
      <p className="lead text-muted mb-5">
        Official company news, announcements, and resources for journalists.
      </p>

      <div className="row g-5">
        <div className="col-lg-8">
          <h3 className="mb-4">Latest Press Releases</h3>
          <div className="list-group list-group-flush">
            {releases.map((release, i) => (
              <div key={i} className="list-group-item px-0 py-4 border-bottom">
                <span className="text-muted small d-block mb-1">{release.date}</span>
                <h5 className="mb-2"><a href="#" className="text-dark text-decoration-none hover-danger">{release.title}</a></h5>
                <p className="text-muted small">Read more about this milestone and what it means for our readers...</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 bg-light p-4 mb-4">
            <h4>Media Inquiries</h4>
            <p className="small text-muted mt-2">
              For interview requests, executive quotes, or brand assets, please contact our PR team.
            </p>
            <p className="fw-bold mb-0">press@thetechtimes.com</p>
          </div>

          <div className="card border-0 shadow-sm p-4">
            <h4>Brand Assets</h4>
            <p className="small text-muted mt-2">
              Download our official logos, executive headshots, and company fact sheet.
            </p>
            <button className="btn btn-outline-dark w-100">Download Assets</button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hover-danger:hover {
          color: #B00020 !important;
        }
      `}</style>
    </div>
  );
};

export default Press;
