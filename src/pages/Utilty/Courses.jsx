import React from "react";

const Courses = () => {
  const courses = [
    { title: "Full Stack Mastery", provider: "Tech Times Academy", level: "Beginner", duration: "12 Weeks" },
    { title: "Advanced System Design", provider: "Engineering Experts", level: "Advanced", duration: "8 Weeks" },
    { title: "Data Science with Python", provider: "Analytics Hub", level: "Intermediate", duration: "10 Weeks" },
    { title: "Cybersecurity Pro", provider: "SecOps Training", level: "Beginner", duration: "14 Weeks" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-5">Online Tech Courses</h1>
      
      <div className="row g-4">
        {courses.map((course, i) => (
          <div key={i} className="col-lg-6">
            <div className="card border-0 shadow-sm overflow-hidden d-flex flex-row p-3">
              <div className="bg-light rounded p-4 d-flex align-items-center justify-content-center" style={{ width: "150px" }}>
                <i className="bi bi-mortarboard-fill fs-1 text-danger"></i>
              </div>
              <div className="ms-4 flex-grow-1 py-2">
                <div className="d-flex justify-content-between align-items-start">
                  <h4 className="fw-bold mb-1">{course.title}</h4>
                  <span className="badge bg-light text-dark border">{course.level}</span>
                </div>
                <p className="text-muted small mb-3">Provided by {course.provider}</p>
                <div className="d-flex gap-3 small text-muted">
                  <span><i className="bi bi-clock me-1"></i> {course.duration}</span>
                  <span><i className="bi bi-play-circle me-1"></i> 45+ Lessons</span>
                </div>
                <button className="btn btn-dark btn-sm mt-3" style={{ backgroundColor: "#B00020", border: 'none' }}>Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
