import React from "react";
import { Mail, Send, Check, Shield } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
           <div className="bg-light p-5 rounded-5 border shadow-lg text-center position-relative overflow-hidden">
              <div className="position-absolute top-0 end-0 p-4 opacity-10">
                 <Mail size={160} />
              </div>
              
              <div className="position-relative z-1">
                 <span className="badge bg-danger rounded-pill px-3 py-2 mb-3">500,000+ SUBSCRIBERS</span>
                 <h1 className="fw-bold display-4 mb-3">Newsletter</h1>
                 <p className="lead text-muted mx-auto mb-5" style={{ maxWidth: '600px' }}>
                    The only newsletter you need to understand where the world is heading. 
                    Delivered daily, free forever.
                 </p>

                 <div className="mx-auto" style={{ maxWidth: '500px' }}>
                    <div className="input-group input-group-lg shadow-sm mb-3">
                       <input type="email" className="form-control border-0 px-4" placeholder="Enter your email address" style={{ fontSize: '0.9rem' }} />
                       <button className="btn btn-dark px-4 py-2 fw-bold">SUBSCRIBE</button>
                    </div>
                    <p className="small text-muted mb-5">By subscribing, you agree to our Terms & Privacy Policy.</p>
                 </div>

                 <div className="row g-4 text-start">
                    <div className="col-md-4">
                       <div className="d-flex h-100">
                          <Check className="text-success me-2 mt-1" size={18}/>
                          <div>
                             <h6 className="fw-bold mb-1">Daily Brief</h6>
                             <p className="small text-muted mb-0">5 minutes to read everything important from the last 24 hours.</p>
                          </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="d-flex h-100">
                          <Check className="text-success me-2 mt-1" size={18}/>
                          <div>
                             <h6 className="fw-bold mb-1">Deep Dives</h6>
                             <p className="small text-muted mb-0">Exclusive weekly analysis on the most impactful tech trends.</p>
                          </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="d-flex h-100">
                          <Check className="text-success me-2 mt-1" size={18}/>
                          <div>
                             <h6 className="fw-bold mb-1">Curated Links</h6>
                             <p className="small text-muted mb-0">The best articles, videos, and podcasts from across the web.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
