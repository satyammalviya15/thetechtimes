import React from "react";

const SkillDevelopment = () => {
  const roadmaps = ["Frontend Development", "Backend Systems", "Mobile Engineering", "Artificial Intelligence", "DevOps & SRE"];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Skill Development</h1>
      <p className="lead text-muted mb-5">Master the skills needed for the next generation of technology jobs.</p>

      <div className="row g-5">
        <div className="col-lg-8">
          <h3 className="fw-bold mb-4">Learning Roadmaps</h3>
          <div className="roadmap-list">
            {roadmaps.map((map, i) => (
              <div key={i} className="d-flex align-items-center bg-white shadow-sm p-4 rounded-4 mb-3 hover-lift border">
                <div className="bg-light p-3 rounded-circle me-4 fw-bold text-danger">{i + 1}</div>
                <h5 className="mb-0 fw-bold">{map}</h5>
                <i className="bi bi-arrow-right ms-auto"></i>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 bg-dark text-white p-4 shadow-lg rounded-4 overflow-hidden position-relative">
            <div className="position-relative z-index-1">
              <h4 className="fw-bold mb-3">Skill Assessment</h4>
              <p className="small opacity-75 mb-4">Measure your proficiency in 20+ tech stacks and identify areas for growth.</p>
              <button className="btn btn-primary w-100">Start Assessment</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-lift { transition: all 0.2s; cursor: pointer; }
        .hover-lift:hover { transform: translateX(10px); background-color: #f8f9fa !important; border-color: #B00020 !important; }
      `}</style>
    </div>
  );
};

export default SkillDevelopment;
