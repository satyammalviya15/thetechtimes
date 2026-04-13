import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

export default function TheBook() {
  return (
    <div className="min-vh-100 bg-white d-flex align-items-center justify-content-center py-5">
      <SEO 
        title="The Book - Stay Tuned"
        description="Our premium tech eBooks and resources are arriving soon. Get ready for The Tech Times Book library."
        keywords="tech books, digital library, tech times ebooks, coming soon"
      />
      
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mt-5">
            <div className="position-relative d-inline-block mb-5">
              <div className="p-4 bg-light rounded-circle shadow-sm" style={{ border: '2px dashed #dc3545' }}>
                <BookOpen size={80} className="text-danger" />
              </div>
              <div className="position-absolute top-0 end-0">
                <Sparkles size={32} className="text-warning animate-bounce" />
              </div>
            </div>
            
            <h1 className="display-3 fw-bold mb-4 text-dark" style={{ letterSpacing: '-0.03em' }}>
              WE are Ready <span className="text-danger text-gradient">very soon</span>
            </h1>
            
            <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px', lineHeight: '1.8' }}>
              We're curating a collection of deep-dive tech insights, expert tutorials, and industry-leading eBooks designed for the modern developer and tech enthusiast.
            </p>
            
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <div className="input-group mb-3 mb-sm-0 shadow-sm rounded-pill overflow-hidden" style={{ maxWidth: '400px' }}>
                <input 
                  type="email" 
                  className="form-control border-0 ps-4 py-3" 
                  placeholder="Enter your email for early access"
                />
                <button className="btn btn-danger px-4 py-3 fw-bold">
                  NOTIFY ME
                </button>
              </div>
            </div>

            <div className="mt-5 pt-4 text-muted small border-top d-inline-block w-100">
               Follow us for updates: 
               <span className="ms-2 fw-semibold text-dark">@TheTechTimes</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(45deg, #dc3545, #fd7e14);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

