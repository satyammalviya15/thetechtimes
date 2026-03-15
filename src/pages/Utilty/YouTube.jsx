import React from "react";
import { Youtube as YoutubeIcon, PlayCircle, Film, Radio } from "lucide-react";

const YouTube = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="bg-danger text-white p-5 rounded-4 shadow-lg mb-5">
          <YoutubeIcon size={80} className="mb-4" />
          <h1 className="fw-bold display-4">Subscribe to our YouTube</h1>
          <p className="lead opacity-90">Deep dive reviews, build logs, and interviews with Silicon Valley icons.</p>
          <button className="btn btn-light btn-lg px-5 py-3 fw-bold mt-3 text-danger shadow">Watch & Subscribe</button>
        </div>

        <div className="row g-4">
          <div className="col-md-12">
            <div className="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden border">
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        
        <div className="row mt-4 g-4 text-start text-dark">
            <div className="col-md-4">
                <h6 className="fw-bold"><Film className="me-2" size={18}/> Review Series</h6>
                <p className="small text-muted">Exposing the truth about the latest hardware.</p>
            </div>
            <div className="col-md-4">
                <h6 className="fw-bold"><Radio className="me-2" size={18}/> Tech Live</h6>
                <p className="small text-muted">Weekly live Q&A every Thursday at 8 PM.</p>
            </div>
            <div className="col-md-4">
                <h6 className="fw-bold"><PlayCircle className="me-2" size={18}/> Shorts</h6>
                <p className="small text-muted">60-second news bites for busy pros.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
