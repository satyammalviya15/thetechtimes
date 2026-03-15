import React from "react";
import { PlayCircle, TrendingUp, Clock, Share2 } from "lucide-react";

const videoList = [
  { title: "Apple Vision Pro: One Year Later", duration: "12:45", views: "1.2M", thumbnail: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?w=800" },
  { title: "The Rise of Quantum Computing in 2026", duration: "10:20", views: "850K", thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800" },
  { title: "Building a Smart Home from Scratch", duration: "25:30", views: "2.5M", thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df8d7?w=800" },
  { title: "Inside the World's Fastest Data Center", duration: "15:00", views: "3.1M", thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?w=800" }
];

const Videos = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-end mb-5">
        <div>
          <h1 className="fw-bold display-4 mb-2">Videos</h1>
          <p className="lead text-muted mb-0">Original tech documentaries, reviews, and news summaries.</p>
        </div>
        <button className="btn btn-dark d-none d-md-block px-4 py-2">Subscribe to Channel</button>
      </div>

      <div className="row g-4">
        {videoList.map((video, i) => (
          <div key={i} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm overflow-hidden hover-lift">
              <div className="position-relative">
                <img src={video.thumbnail} className="card-img-top" alt={video.title} style={{ height: '180px', objectFit: 'cover' }} />
                <div className="position-absolute bottom-0 end-0 m-2 bg-dark text-white px-2 py-1 rounded small opacity-75">
                  {video.duration}
                </div>
                <div className="position-absolute top-50 start-50 translate-middle">
                   <PlayCircle size={48} className="text-white opacity-75 drop-shadow" />
                </div>
              </div>
              <div className="card-body p-3">
                <h6 className="fw-bold mb-2 line-clamp-2">{video.title}</h6>
                <div className="d-flex justify-content-between text-muted small mt-2">
                  <span><TrendingUp size={14} className="me-1" /> {video.views} views</span>
                  <span><Share2 size={14} className="pointer" /></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-5 bg-dark text-white rounded-5 text-center overflow-hidden position-relative">
         <div className="position-relative z-1">
            <h2 className="fw-bold mb-3">Live Tech Weekly</h2>
            <p className="opacity-75 mb-4">Join us every Friday for a deep dive into the week's biggest tech shifts.</p>
            <button className="btn btn-danger rounded-pill px-5 py-2 fw-bold">WATCH LIVE &rarr;</button>
         </div>
      </div>

      <style jsx>{`
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .drop-shadow { filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); }
      `}</style>
    </div>
  );
};

export default Videos;
