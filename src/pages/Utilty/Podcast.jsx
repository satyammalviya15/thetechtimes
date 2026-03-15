import React from "react";
import { Mic, Headphones, Play, List } from "lucide-react";

const episodes = [
  { id: 1, title: "The Future of Artificial General Intelligence", guest: "Sam Altman?", duration: "45 mins", date: "Oct 12" },
  { id: 2, title: "Why Web3 Failed to Mass Adopt", guest: "Vitalik Buterin?", duration: "38 mins", date: "Oct 05" },
  { id: 3, title: "Silicon Valley's New Golden Era", guest: "Marc Andreessen?", duration: "52 mins", date: "Sep 28" },
  { id: 4, title: "The Hardware Revolution in India", guest: "K. Vijay Raghavan", duration: "41 mins", date: "Sep 21" }
];

const Podcast = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-lg-5">
           <div className="bg-dark p-4 rounded-4 shadow-lg text-white text-center">
              <Mic size={64} className="mb-4 text-danger" />
              <h2 className="fw-bold">Tech Talk Today</h2>
              <p className="opacity-75 small">Available on Spotify, Apple Podcasts, & Google Podcasts.</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                 <button className="btn btn-outline-light btn-sm rounded-pill px-3">Spotify</button>
                 <button className="btn btn-outline-light btn-sm rounded-pill px-3">Apple</button>
              </div>
           </div>
        </div>
        <div className="col-lg-7 d-flex align-items-center">
           <div className="ps-lg-4 mt-4 mt-lg-0 text-center text-lg-start">
              <h1 className="fw-bold display-5">Podcast</h1>
              <p className="lead text-muted">Join the most influential voices in technology as we explore the inventions and ideas shaping our world.</p>
           </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white border-0 p-4">
           <h5 className="fw-bold m-0"><List size={18} className="me-2" /> Recent Episodes</h5>
        </div>
        <div className="card-body p-0">
          <div className="list-group list-group-flush">
            {episodes.map((ep, i) => (
              <div key={i} className="list-group-item p-4 hover-bg">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <button className="btn btn-danger rounded-circle p-3 d-flex align-items-center justify-content-center">
                      <Play size={20} fill="white" />
                    </button>
                  </div>
                  <div className="col">
                    <h6 className="fw-bold mb-1">{ep.title}</h6>
                    <p className="small text-muted mb-0">with {ep.guest} • {ep.duration}</p>
                  </div>
                  <div className="col-auto d-none d-md-block">
                    <span className="text-muted small">{ep.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-bg:hover { background-color: #f8f9fa; cursor: pointer; }
      `}</style>
    </div>
  );
};

export default Podcast;
