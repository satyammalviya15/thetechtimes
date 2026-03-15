import React from "react";
import { Instagram as InstagramIcon, Camera, Play, Heart } from "lucide-react";

const Instagram = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="p-5 rounded-4 shadow-lg mb-5 text-white" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
          <InstagramIcon size={80} className="mb-4" />
          <h1 className="fw-bold display-4">Follow Us on Instagram</h1>
          <p className="lead opacity-90">Visual stories from the heart of the tech world. Behind the scenes, and gadget reveals.</p>
          <button className="btn btn-light btn-lg px-5 py-3 fw-bold mt-3 text-danger shadow">Join our 500K Followers</button>
        </div>

        <div className="row g-2">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="col-4">
              <div className="bg-light rounded shadow-sm" style={{ height: '200px', backgroundImage: `url(https://images.unsplash.com/photo-1550741111-ccebbd3532f1?w=400&q=80&sig=${i})`, backgroundSize: 'cover' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
