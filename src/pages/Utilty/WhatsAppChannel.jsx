import React from "react";
import { MessageSquare, CheckCircle, Share2, Users } from "lucide-react";

const WhatsAppChannel = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="p-5 rounded-4 shadow-lg mb-5 text-white" style={{ background: '#25D366' }}>
          <MessageSquare size={80} className="mb-4" />
          <h1 className="fw-bold display-4">WhatsApp Channel</h1>
          <p className="lead opacity-90">Stay updated with The Tech Times directly within WhatsApp.</p>
          <button className="btn btn-dark btn-lg px-5 py-3 fw-bold mt-3 shadow border-0">Subscribe on WhatsApp</button>
        </div>

        <div className="row g-4 text-start">
           <div className="col-md-6">
              <div className="card h-100 border-0 bg-light p-4 shadow-sm rounded-4">
                 <h5 className="fw-bold mb-3"><CheckCircle className="text-success me-2"/> Verified News</h5>
                 <p className="text-muted small">Only the most critical and verified tech news stories delivered to your updates tab.</p>
              </div>
           </div>
           <div className="col-md-6">
              <div className="card h-100 border-0 bg-light p-4 shadow-sm rounded-4">
                 <h5 className="fw-bold mb-3"><Share2 className="text-success me-2"/> Share Instantly</h5>
                 <p className="text-muted small">Easily share breaking news stories with your contacts and groups.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChannel;
