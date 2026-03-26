import React from "react";

const CommunityStories = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Community Stories</h1>
      <p className="lead text-muted mb-5">Success stories, insights, and perspectives from our global community of readers.</p>

      <div className="row g-4">
        <div className="col-md-12">
          <div className="card border-0 shadow-sm p-5 bg-light rounded-4 border-start border-danger border-5">
            <h2 className="fw-bold mb-3 italic">"How The Tech Times helped me land my first job at a unicorn startup."</h2>
            <p className="text-muted">A story by <span className="fw-bold">Ravi Malakar</span>, Software Engineer</p>
            <p className="mt-4">"I started reading The Tech Times during my final year of college. The analysis of news helped me stay ahead of the curve and ultimately ace my interviews..."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityStories;
