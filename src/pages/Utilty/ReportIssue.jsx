import React from "react";

const ReportIssue = () => {
  return (
    <div className="container my-5">
      <div className="col-lg-8 mx-auto">
        <h1 className="mb-4">Report an Issue</h1>
        <p className="text-muted mb-5">Encountered a bug or a technical glitch? Tell us about it so we can fix it.</p>

        <form className="card border-0 shadow-sm p-4" onSubmit={(e) => { e.preventDefault(); alert('Issue reported!'); }}>
          <div className="row g-3">
            <div className="col-md-6 text-start">
              <label className="form-label small fw-bold">Issue Category</label>
              <select className="form-select">
                <option>Page Load Error</option>
                <option>Login/Auth Issue</option>
                <option>Broken Link</option>
                <option>Image Not Loading</option>
                <option>Spelling/Grammar</option>
                <option>Security Vulnerability</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-6 text-start">
              <label className="form-label small fw-bold">Severity</label>
              <select className="form-select">
                <option>Low (Minor annoyance)</option>
                <option>Medium (Functionality impaired)</option>
                <option>High (Broken site)</option>
                <option>Critical (Data risk)</option>
              </select>
            </div>
            <div className="col-12 text-start">
              <label className="form-label small fw-bold">Description</label>
              <textarea className="form-control" rows="5" placeholder="Please provide as much detail as possible (what you were doing, what went wrong, etc.)"></textarea>
            </div>
            <div className="col-12 text-start">
              <label className="form-label small fw-bold">URL of the page with the issue</label>
              <input type="text" className="form-control" placeholder="https://thetechtimes.com/..." />
            </div>
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-dark w-100 py-3" style={{ backgroundColor: "#B00020", border: 'none' }}>Submit Report</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
