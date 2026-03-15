import React from "react";
import { Smartphone, Tablet, Watch, Layers } from "lucide-react";

const platforms = [
  { name: "iOS Development", status: "Growing", color: "bg-dark" },
  { name: "Android Ecosystem", status: "Stable", color: "bg-success" },
  { name: "Cross-Platform", status: "Explosive", color: "bg-primary" },
  { name: "Wearable Tech", status: "Emerging", color: "bg-info" }
];

const MobileApps = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Mobile & Apps</h1>
      <p className="lead text-muted mb-5">Insightful coverage of the mobile landscape, from OS updates to app store trends and mobile engineering.</p>

      <div className="row g-4 mb-5">
        {platforms.map((platform, i) => (
          <div key={i} className="col-md-3">
            <div className="p-4 rounded-4 shadow-sm border bg-white d-flex align-items-center">
              <div className={`p-3 rounded-3 me-3 ${platform.color} text-white`}>
                <Smartphone size={24} />
              </div>
              <div>
                <h6 className="fw-bold mb-0">{platform.name}</h6>
                <small className="text-muted">{platform.status}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm overflow-hidden mb-4 rounded-4">
             <div className="card-body p-0">
                <div className="row g-0">
                   <div className="col-md-5">
                      <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800" className="img-fluid h-100" style={{ objectFit: 'cover' }} alt="Mobile" />
                   </div>
                   <div className="col-md-7 p-4">
                      <span className="badge bg-danger mb-2">Editor's Choice</span>
                      <h3 className="fw-bold mb-3">The Future of Mobile UX in the AI Era</h3>
                      <p className="text-muted small">How generative AI is reshaping the way users interact with their devices, moving from taps to intent-based actions.</p>
                      <button className="btn btn-dark btn-sm rounded-pill px-4 mt-2">Read Article</button>
                   </div>
                </div>
             </div>
          </div>
        </div>
        <div className="col-lg-4">
           <div className="card border-0 shadow-sm p-4 rounded-4 bg-light">
              <h5 className="fw-bold mb-4">Top Rated Apps This Month</h5>
              <div className="d-flex align-items-center mb-3">
                 <div className="bg-white p-2 rounded shadow-sm me-3">1</div>
                 <div className="flex-grow-1 border-bottom pb-2">
                    <h6 className="mb-0 fw-bold">MindFocus AI</h6>
                    <small className="text-muted">Productivity</small>
                 </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                 <div className="bg-white p-2 rounded shadow-sm me-3">2</div>
                 <div className="flex-grow-1 border-bottom pb-2">
                    <h6 className="mb-0 fw-bold">CryptoTrack Pro</h6>
                    <small className="text-muted">Finance</small>
                 </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                 <div className="bg-white p-2 rounded shadow-sm me-3">3</div>
                 <div className="flex-grow-1">
                    <h6 className="mb-0 fw-bold">ZenSleep</h6>
                    <small className="text-muted">Health</small>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
