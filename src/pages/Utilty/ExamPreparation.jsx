import React from "react";

const ExamPreparation = () => {
  return (
    <div className="container py-5">
      <div className="col-lg-10 mx-auto">
        <h1 className="fw-bold mb-4">Exam Preparation</h1>
        <p className="lead text-muted mb-5">Resources to help you ace your technical certifications and college exams.</p>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h4 className="fw-bold mb-3">Mock Tests</h4>
              <p className="text-muted">Simulate real exam environments with our timed mock tests and instant scoring.</p>
              <ul className="list-unstyled mb-4">
                <li><i className="bi bi-check-circle text-success me-2"></i> 500+ Practice Questions</li>
                <li><i className="bi bi-check-circle text-success me-2"></i> Real-time Performance Analytics</li>
                <li><i className="bi bi-check-circle text-success me-2"></i> Detailed Answer Explanations</li>
              </ul>
              <button className="btn btn-outline-dark mt-auto">Take a Mock Test</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4 h-100">
              <h4 className="fw-bold mb-3">Summarized Notes</h4>
              <p className="text-muted">Concise study materials and cheat sheets for quick revision before exams.</p>
              <ul className="list-unstyled mb-4">
                <li><i className="bi bi-check-circle text-success me-2"></i> Topic-wise Flashcards</li>
                <li><i className="bi bi-check-circle text-success me-2"></i> Key Formula Sheets</li>
                <li><i className="bi bi-check-circle text-success me-2"></i> Video Recaps</li>
              </ul>
              <button className="btn btn-outline-dark mt-auto">Browse Notes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPreparation;
