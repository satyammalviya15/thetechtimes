import React from "react";

const AdvertiseWithUs = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-dark text-white py-5 mb-4 position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)" }}>
        <div className="container position-relative z-1 py-4">
          <div className="row align-items-center mb-0">
             <div className="col-lg-8 mx-auto text-center">
                 <h1 className="fw-bold display-5 mb-3">Advertise with The Tech Times</h1>
                 <p className="lead mb-0" style={{opacity: 0.9}}>Connect your brand with the world's most influential and engaged technology audience.</p>
             </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row g-4">
          {/* Main Content Column */}
          <div className="col-lg-8">
            {/* Why Partner With Us Section */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                 <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-graph-up-arrow" style={{ fontSize: "1.5rem" }}></i>
                    </div>
                    <h3 className="mb-0 fw-bold">Why Partner With Us?</h3>
                 </div>
                 <div className="row g-4 text-center mt-2">
                    <div className="col-md-4">
                        <div className="mb-2"><i className="bi bi-rocket-takeoff text-danger" style={{ fontSize: "2rem" }}></i></div>
                        <span className="fw-bold d-block text-dark">Fast Growing</span>
                        <span className="text-muted small">Rapidly expanding readership</span>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-2"><i className="bi bi-globe-americas text-danger" style={{ fontSize: "2rem" }}></i></div>
                         <span className="fw-bold d-block text-dark">Global Reach</span>
                        <span className="text-muted small">Connecting across borders</span>
                    </div>
                    <div className="col-md-4">
                         <div className="mb-2"><i className="bi bi-lightning-charge text-danger" style={{ fontSize: "2rem" }}></i></div>
                         <span className="fw-bold d-block text-dark">High Engagement</span>
                        <span className="text-muted small">Active & dedicated users</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Advertising Solutions */}
            <h3 className="fw-bold mb-4 mt-5">Our Advertising Solutions</h3>
            <div className="row g-4">
               {/* Display Ad */}
               <div className="col-md-6">
                 <div className="card border-0 shadow-sm h-100 hover-card">
                   <div className="card-body p-4">
                     <i className="bi bi-window-desktop text-primary mb-3 d-block" style={{ fontSize: "2.5rem" }}></i>
                     <h5 className="fw-bold">Display Advertising</h5>
                     <p className="text-muted small mb-0" style={{lineHeight: 1.6}}>High-impact banner placements strategically located across our highest-traffic pages for maximum brand visibility.</p>
                   </div>
                 </div>
               </div>

               {/* Sponsored */}
               <div className="col-md-6">
                 <div className="card border-0 shadow-sm h-100 hover-card">
                   <div className="card-body p-4">
                     <i className="bi bi-file-earmark-text text-success mb-3 d-block" style={{ fontSize: "2.5rem" }}></i>
                     <h5 className="fw-bold">Sponsored Content</h5>
                     <p className="text-muted small mb-0" style={{lineHeight: 1.6}}>Native articles crafted by our brand studio to educate our audience about your innovative products and services.</p>
                   </div>
                 </div>
               </div>

               {/* Newsletter */}
               <div className="col-md-6">
                 <div className="card border-0 shadow-sm h-100 hover-card">
                   <div className="card-body p-4">
                     <i className="bi bi-envelope-paper text-warning mb-3 d-block" style={{ fontSize: "2.5rem" }}></i>
                     <h5 className="fw-bold">Newsletter Sponsorships</h5>
                     <p className="text-muted small mb-0" style={{lineHeight: 1.6}}>Direct, uncluttered reach into the inboxes of our most dedicated and highly engaged daily subscribers.</p>
                   </div>
                 </div>
               </div>

               {/* Video */}
               <div className="col-md-6">
                 <div className="card border-0 shadow-sm h-100 hover-card">
                   <div className="card-body p-4">
                     <i className="bi bi-play-btn text-danger mb-3 d-block" style={{ fontSize: "2.5rem" }}></i>
                     <h5 className="fw-bold">Video Ad Placements</h5>
                     <p className="text-muted small mb-0" style={{lineHeight: 1.6}}>Seamless integration with our trending tech video content, reaching audiences who prefer visual storytelling.</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Get Media Kit CTA */}
            <div className="card border-0 shadow-lg mb-4 hover-card" style={{ background: "linear-gradient(135deg, #B00020 0%, #8B0016 100%)" }}>
              <div className="card-body text-white p-4">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-file-earmark-pdf me-3" style={{ fontSize: "2rem", opacity: 0.9 }}></i>
                  <h5 className="mb-0 fw-bold">Media Kit 2026</h5>
                </div>
                <p className="small mb-4" style={{opacity: 0.85}}>Interested in detailed demographics, ad specs, and current rates? Download our comprehensive 2026 media kit.</p>
                <button className="btn btn-light w-100 fw-bold text-danger">Download Request</button>
              </div>
            </div>

            {/* Ready to Start */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-dark text-white py-3">
                <h6 className="mb-0 fw-bold"><i className="bi bi-rocket me-2"></i>Ready to Start?</h6>
              </div>
              <div className="card-body p-4 text-center">
                <p className="text-muted mb-4 small">Request a custom proposal tailored to your specific campaign goals and KPIs.</p>
                <div className="d-grid">
                  <a href="mailto:natrajtechstudio@gmail.com" className="btn btn-outline-dark pb-2 pt-2 fw-semibold">
                    <i className="bi bi-envelope me-2"></i>Contact Sales Team
                  </a>
                </div>
              </div>
            </div>

            {/* Audience Highlight */}
            <div className="card border-0 shadow-sm">
               <div className="card-body p-4 bg-light rounded">
                  <h6 className="fw-bold text-uppercase mb-3 text-secondary" style={{letterSpacing: "1px", fontSize: "0.75rem"}}>Our Core Target Audience</h6>
                  <ul className="list-unstyled mb-0 small text-dark fw-medium">
                    <li className="mb-3 d-flex align-items-center"><i className="bi bi-check2-circle text-success me-3 fs-5"></i>IT Decision Makers</li>
                    <li className="mb-3 d-flex align-items-center"><i className="bi bi-check2-circle text-success me-3 fs-5"></i>Software Engineers</li>
                    <li className="mb-3 d-flex align-items-center"><i className="bi bi-check2-circle text-success me-3 fs-5"></i>Tech Enthusiasts</li>
                    <li className="d-flex align-items-center"><i className="bi bi-check2-circle text-success me-3 fs-5"></i>Founders & Startup Leaders</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Styles */}
      <style jsx="true">{`
        .hover-card {
           transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 25px rgba(0,0,0,0.12) !important;
        }
      `}</style>
    </div>
  );
};

export default AdvertiseWithUs;
