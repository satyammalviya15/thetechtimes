import React from "react";
import { Puzzle, Users, Zap, MessageSquare } from "lucide-react";

const TheHuddle = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="bg-light p-5 rounded-5 shadow-sm border mb-5">
          <Puzzle size={80} className="mb-4 text-warning" />
          <h1 className="fw-bold display-4">The Huddle</h1>
          <p className="lead text-muted">A collaborative space for tech leaders to brainstorm, network, and solve today's biggest challenges.</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
             <button className="btn btn-dark btn-lg px-5 py-2 fw-bold">Join the next Huddle</button>
          </div>
        </div>

        <div className="row g-4 text-start">
           <div className="col-md-6">
              <div className="p-4 border border-warning border-opacity-25 rounded-4 h-100 d-flex gap-3">
                 <Users className="text-warning flex-shrink-0" />
                 <div>
                    <h5 className="fw-bold">Think Tanks</h5>
                    <p className="small text-muted mb-0">Closed-door sessions with industry veterans discussing the "next big thing".</p>
                 </div>
              </div>
           </div>
           <div className="col-md-6">
              <div className="p-4 border border-warning border-opacity-25 rounded-4 h-100 d-flex gap-3">
                 <MessageSquare className="text-warning flex-shrink-0" />
                 <div>
                    <h5 className="fw-bold">AMA Sessions</h5>
                    <p className="small text-muted mb-0">Ask Me Anything sessions with startup founders and venture capitalists.</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="mt-5 text-muted small border-top pt-4">
           Upcoming: <span className="fw-bold text-dark">The AI Regulatory Huddle</span> • October 24th • Virtual & New York City
        </div>
      </div>
    </div>
  );
};

export default TheHuddle;
