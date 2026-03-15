import React from "react";
import { Eye, Smartphone, Zap, MoveRight } from "lucide-react";

const VisualStory = () => {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="min-vh-100 bg-dark text-white position-relative">
        <div className="position-absolute h-100 w-100">
           <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600" className="w-100 h-100" style={{ objectFit: 'cover', opacity: '0.4' }} alt="Background" />
        </div>
        
        <div className="container position-relative z-1 min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
           <span className="badge bg-warning text-dark px-3 py-2 mb-4 d-flex align-items-center"><Smartphone size={14} className="me-2" /> TAP FOR NEXT</span>
           <h1 className="fw-bold display-2 mb-3">Visual Story</h1>
           <p className="lead opacity-75 mb-5" style={{ maxWidth: '600px' }}>Experience the news through an immersive, full-screen visual journey optimized for your curiosity.</p>
           
           <div className="row g-4 w-100 justify-content-center">
              {[1, 2, 3].map(i => (
                <div key={i} className="col-md-3">
                   <div className="card h-100 bg-transparent border border-light border-opacity-25 rounded-4 overflow-hidden shadow">
                      <div className="card-body p-4 d-flex flex-column">
                         <h4 className="fw-bold mb-3">The Silicon Valley Paradigm Shift {i}</h4>
                         <p className="small opacity-75 flex-grow-1">How 2026 became the year everything changed for chip manufacturing.</p>
                         <button className="btn btn-outline-light rounded-pill btn-sm mt-3 fw-bold">START STORY <MoveRight size={14} className="ms-1" /></button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="position-absolute bottom-0 w-100 p-4 bg-gradient-dark">
           <div className="container d-flex justify-content-between align-items-center">
              <span className="small opacity-50">THE TECH TIMES VISUALS</span>
              <div className="d-flex gap-2">
                 {[1,2,3,4,5].map(i => <div key={i} className={`rounded-pill bg-white ${i === 1 ? 'opacity-100' : 'opacity-25'}`} style={{ width: '40px', height: '4px' }}></div>)}
              </div>
           </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-gradient-dark { background: linear-gradient(transparent, rgba(0,0,0,0.8)); }
      `}</style>
    </div>
  );
};

export default VisualStory;
