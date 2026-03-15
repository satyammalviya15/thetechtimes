import React from "react";
import { Files, Award, Star, TrendingUp } from "lucide-react";

const Specials = () => {
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center mb-5 gap-3">
         <div className="bg-warning p-3 rounded-4 shadow-sm">
            <Files size={32} className="text-dark" />
         </div>
         <div>
            <h1 className="fw-bold display-4 mb-0">Specials</h1>
            <p className="text-muted mb-0">Curated collections of our most impactful coverage.</p>
         </div>
      </div>

      <div className="row g-4">
         <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
               <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800" className="card-img-top" alt="AI" style={{ height: '300px', objectFit: 'cover' }} />
               <div className="card-body p-4 bg-dark text-white text-center">
                  <Star className="text-warning mb-3" />
                  <h4 className="fw-bold mb-3">The AI Millennium</h4>
                  <p className="small opacity-75">A 12-part investigative series on how AI took over the global workforce.</p>
                  <button className="btn btn-outline-warning btn-sm rounded-pill mt-3 px-4">EXPLORE SPECIAL</button>
               </div>
            </div>
         </div>
         <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
               <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800" className="card-img-top" alt="Cyber" style={{ height: '300px', objectFit: 'cover' }} />
               <div className="card-body p-4 bg-primary text-white text-center">
                  <Award className="text-white mb-3" />
                  <h4 className="fw-bold mb-3">Cyber Fortress</h4>
                  <p className="small opacity-75">Our definitive guide to protecting your identity in the quantum era.</p>
                  <button className="btn btn-outline-light btn-sm rounded-pill mt-3 px-4">EXPLORE SPECIAL</button>
               </div>
            </div>
         </div>
         <div className="col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
               <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" className="card-img-top" alt="Future" style={{ height: '300px', objectFit: 'cover' }} />
               <div className="card-body p-4 bg-success text-white text-center">
                  <TrendingUp className="text-white mb-3" />
                  <h4 className="fw-bold mb-3">2030 Roadmap</h4>
                  <p className="small opacity-75">The innovations that will define the next decade of human progress.</p>
                  <button className="btn btn-outline-light btn-sm rounded-pill mt-3 px-4">EXPLORE SPECIAL</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Specials;
