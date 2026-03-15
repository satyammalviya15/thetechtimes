import React from "react";
import { PenTool, BookOpen, Quote, Coffee } from "lucide-react";

const LitForLife = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <PenTool size={64} className="mb-3 text-secondary" />
        <h1 className="fw-bold display-4 serif-font">Lit For Life</h1>
        <p className="lead text-muted italic">Where technology meets the human narrative.</p>
      </div>

      <div className="row g-12 justify-content-center">
        <div className="col-lg-9">
           <div className="card border-0 shadow-sm p-5 rounded-4 mb-5 bg-white border-top border-4 border-dark">
              <Quote size={40} className="text-dark opacity-10 mb-4" />
              <h2 className="serif-font fw-bold mb-4 display-6">The Soul of the Machine: My Year Without a Screen</h2>
              <p className="lead text-muted mb-4">An exploration of what it means to be alive in an era where we are increasingly becoming data points.</p>
              <div className="d-flex align-items-center mb-4 text-muted small">
                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" className="rounded-circle me-3" width={40} height={40} alt="Author" />
                 <span>By Jonathan Harker • 12 Min Read</span>
              </div>
              <p className="serif-font fs-5 opacity-75 lh-lg">
                 "I remember the first morning after I packed my phone in the drawer. The silence 
                 wasn't just quiet; it was heavy. I had forgotten what the world looked like without 
                 the constant itch to capture it..."
              </p>
              <div className="mt-4">
                 <button className="btn btn-dark rounded-pill px-5 py-2 fw-bold">CONTINUE READING</button>
              </div>
           </div>

           <div className="row g-4">
              <div className="col-md-6 text-center text-md-start">
                 <div className="p-4 bg-light rounded-4 h-100">
                    <BookOpen size={32} className="mb-3 opacity-50" />
                    <h5 className="fw-bold">Poetry in Code</h5>
                    <p className="small text-muted">A series on the elegant beauty of algorithms and their impact on our culture.</p>
                 </div>
              </div>
              <div className="col-md-6 text-center text-md-start">
                 <div className="p-4 bg-light rounded-4 h-100">
                    <Coffee size={32} className="mb-3 opacity-50" />
                    <h5 className="fw-bold">Sunday ESSAYS</h5>
                    <p className="small text-muted">Long-form reflections on the future of humanity and the digital divide.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <style jsx>{`
        .serif-font { font-family: 'Playfair Display', serif; }
        .italic { font-style: italic; }
      `}</style>
    </div>
  );
};

export default LitForLife;
