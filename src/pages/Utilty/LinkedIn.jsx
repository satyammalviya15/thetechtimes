import React from "react";
import { Linkedin as LinkedinIcon, Briefcase, Globe, TrendingUp } from "lucide-react";

const LinkedIn = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="bg-info bg-opacity-10 p-5 rounded-4 shadow-sm mb-5 border border-info border-opacity-25">
          <LinkedinIcon size={80} className="mb-4 text-primary" />
          <h1 className="fw-bold display-4 text-primary">The Tech Times Professional</h1>
          <p className="lead text-dark">Join our professional network for industry analysis, recruitment trends, and corporate shifts.</p>
          <button className="btn btn-primary btn-lg px-5 py-3 fw-bold mt-3 shadow">Connect on LinkedIn</button>
        </div>

        <div className="row g-4 text-start">
          <div className="col-md-6">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100 d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 p-3 rounded me-4"><Briefcase className="text-primary" /></div>
              <div>
                <h5 className="fw-bold mb-1">Hiring News</h5>
                <p className="small text-muted mb-0">Updates on tech hiring and layoff trends.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100 d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 p-3 rounded me-4"><TrendingUp className="text-primary" /></div>
              <div>
                <h5 className="fw-bold mb-1">B2B Insights</h5>
                <p className="small text-muted mb-0">Strategic analysis for business leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
