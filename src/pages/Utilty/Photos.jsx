import React from "react";
import { Image, Camera, Grid, Heart } from "lucide-react";

const Photos = () => {
  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="fw-bold display-4 mb-2"><Image className="me-2" /> Photo Gallery</h1>
        <p className="lead text-muted">Capturing the aesthetic of innovation through our lens.</p>
      </div>

      <div className="row g-3">
        {[
          "https://images.unsplash.com/photo-1550741111-ccebbd3532f1?w=800",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800",
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
        ].map((url, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <div className="gallery-item rounded-4 overflow-hidden position-relative shadow-sm">
              <img src={url} className="img-fluid w-100 h-100" style={{ objectFit: 'cover', minHeight: '300px' }} alt={`Tech ${i}`} />
              <div className="gallery-overlay d-flex align-items-end p-4">
                 <div className="text-white">
                    <h6 className="fw-bold mb-1">Project Neon Pulse</h6>
                    <small className="opacity-75">Architecture & Design</small>
                 </div>
                 <Heart className="ms-auto text-white pointer" size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 text-center">
         <button className="btn btn-dark rounded-pill px-5 py-2 fw-semibold">LOAD MORE STORIES</button>
      </div>

      <style jsx>{`
        .gallery-item { cursor: pointer; transition: transform 0.3s; }
        .gallery-item:hover { transform: scale(1.02); }
        .gallery-overlay {
           position: absolute;
           inset: 0;
           background: linear-gradient(transparent, rgba(0,0,0,0.7));
           opacity: 0;
           transition: opacity 0.3s;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
      `}</style>
    </div>
  );
};

export default Photos;
