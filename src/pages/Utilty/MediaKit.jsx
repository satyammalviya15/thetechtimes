import React from "react";

const MediaKit = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="mb-4 font-weight-bold">Media Kit</h1>
          <p className="lead text-muted mb-5">
            Everything you need to know about The Tech Times brand, audience, and identity.
          </p>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="border p-4 rounded-3 h-100">
                <h4 className="mb-3">Our Identity</h4>
                <p className="text-muted">
                  The Tech Times logo represents precision and the rapid flow of information. Our signature color, "Tech Red" (#B00020), symbolizes passion and urgency.
                </p>
                <div className="d-flex gap-2">
                  <div className="p-4 rounded-2" style={{ backgroundColor: "#B00020", width: "40px", height: "40px" }}></div>
                  <div className="p-4 rounded-2 border" style={{ backgroundColor: "#ffffff", width: "40px", height: "40px" }}></div>
                  <div className="p-4 rounded-2" style={{ backgroundColor: "#000000", width: "40px", height: "40px" }}></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border p-4 rounded-3 h-100">
                <h4 className="mb-3">Brand Voice</h4>
                <p className="text-muted">
                  We are authoritative yet accessible, intellectual but never elitist. We believe in high-context reporting that respects the reader's intelligence.
                </p>
              </div>
            </div>
          </div>

          <h3 className="mb-4">Logo Usage</h3>
          <p>Please do not alter our logo in any way. Ensure there is sufficient clear space around the logo and that it is placed on a background that provides good contrast.</p>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="bg-light p-5 text-center rounded">Logo Light</div>
            </div>
            <div className="col-md-4">
              <div className="bg-dark p-5 text-center text-white rounded">Logo Dark</div>
            </div>
            <div className="col-md-4">
              <div className="bg-danger p-5 text-center text-white rounded">Logo Mono</div>
            </div>
          </div>

          <div className="mt-5 p-5 bg-light rounded text-center">
            <h3>Download Full Kit</h3>
            <p>Includes high-resolution logos, brand guidelines (PDF), and executive profiles.</p>
            <button className="btn btn-dark btn-lg mt-3" style={{ backgroundColor: "#B00020", border: "none" }}>Download .ZIP (45 MB)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;
