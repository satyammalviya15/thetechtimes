import React from "react";
import { Mail, Send, Check, Shield, Grid } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="newsletter-page bg-light min-vh-100">
      {/* Hero Section */}
      <div className="bg-white my-5 py-md-0 border-bottom overflow-hidden" style={{ minHeight: '500px', display: 'flex', alignItems: 'center' }}>
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-7 text-dark mb-5 mb-lg-0 text-center text-lg-start">
              <span className="badge bg-danger rounded-pill px-3 py-2 mb-4 fw-bold letter-spacing-1">THE TECH TIMES EXCLUSIVE</span>
              <h1 className="display-3 fw-bold mb-4 text-dark">The Future, <br /><span className="text-danger">Decoded Daily.</span></h1>
              <p className="lead text-muted mb-5 pe-lg-5">
                Beyond the headlines. We navigate the noise to deliver the most critical tech insights, 
                startup breakthroughs, and industry shifts straight to your inbox. 
                <strong> No fluff. Just the signal.</strong>
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <div className="input-group input-group-lg shadow-sm" style={{ maxWidth: '450px' }}>
                  <input type="email" className="form-control border-secondary border-opacity-25 bg-white" placeholder="Enter your work email" />
                  <button className="btn btn-danger px-4 fw-bold">JOIN FREE</button>
                </div>
              </div>
              <p className="small text-muted mt-3">Trusted by 10,000+ early adopters. Free forever.</p>
            </div>
            <div className="col-lg-5 d-none d-lg-block text-center">
               <div className="bg-white p-5 rounded-5 border border-dark border-opacity-10 shadow-lg position-relative">
                  <div className="mb-4 d-flex justify-content-center">
                    <Mail size={120} className="text-danger" />
                  </div>
                  <div className="text-start">
                     <div className="mb-3 d-flex gap-2">
                        <Check className="text-success" size={20} />
                        <span className="text-muted small fw-medium">New technology breakthroughs</span>
                     </div>
                     <div className="mb-3 d-flex gap-2">
                        <Check className="text-success" size={20} />
                        <span className="text-muted small fw-medium">Market & Venture capital reports</span>
                     </div>
                     <div className="mb-0 d-flex gap-2">
                        <Check className="text-success" size={20} />
                        <span className="text-muted small fw-medium">Unbiased, data-driven analysis</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="container py-5 mt-5 text-dark">
        <div className="text-center mb-5">
           <h2 className="fw-bold h1">Why The Tech Times?</h2>
           <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>We are a new-age media house built by tech enthusiasts for tech professionals.</p>
        </div>
        
        <div className="row g-4 mb-5">
           {[
             {
               icon: <Send className="text-danger" size={32} />,
               title: "The Morning Signal",
               desc: "A 3-minute brief of overnight global tech shifts. Delivered every morning at 8:00 AM standard time."
             },
             {
               icon: <Shield className="text-primary" size={32} />,
               title: "Verified Intelligence",
               desc: "Every report is fact-checked. We prioritize accuracy over being 'first' to ensure your time is never wasted."
             },
             {
               icon: <Grid className="text-warning" size={32} />,
               title: "Curated Tracks",
               desc: "Optional deep dives into AI, Quantum Computing, and Fintech based on your specific interests."
             }
           ].map((feature, i) => (
             <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white transition-hover">
                   <div className="mb-3">{feature.icon}</div>
                   <h5 className="fw-bold mb-3">{feature.title}</h5>
                   <p className="text-muted small mb-0">{feature.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </div>

      <style jsx="true">{`
        .newsletter-page { font-family: 'Inter', sans-serif; }
        .letter-spacing-1 { letter-spacing: 1px; }
        .transition-hover:hover { transform: translateY(-5px); transition: all 0.3s ease; }
      `}</style>
    </div>
  );
};

export default Newsletter;
