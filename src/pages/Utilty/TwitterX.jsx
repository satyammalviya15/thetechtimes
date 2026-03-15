import React from "react";
import { Twitter, Zap, Hash, MessageSquare } from "lucide-react";

const TwitterX = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="bg-dark text-white p-5 rounded-4 shadow-lg mb-5 border border-secondary">
          <Twitter size={80} className="mb-4" />
          <h1 className="fw-bold display-4">The Tech Times on X</h1>
          <p className="lead opacity-75">Instant updates, breaking news, and real-time tech conversations.</p>
          <button className="btn btn-primary btn-lg px-5 py-3 fw-bold mt-3 border-0" style={{ backgroundColor: '#1DA1F2' }}>Follow @TheTechTimes</button>
        </div>

        <div className="row g-4 text-start text-dark">
          <div className="col-md-6">
            <div className="p-4 border rounded-4 bg-light h-100">
              <Zap className="text-warning mb-3" size={32} />
              <h5 className="fw-bold">Breaking News Alerts</h5>
              <p className="small text-muted mb-0">Be the first to know when massive cyber attacks or big acquisitions happen.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 border rounded-4 bg-light h-100">
              <Hash className="text-info mb-3" size={32} />
              <h5 className="fw-bold">Tech Threads</h5>
              <p className="small text-muted mb-0">Deep dives and analysis delivered in easy-to-read Twitter threads.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterX;
