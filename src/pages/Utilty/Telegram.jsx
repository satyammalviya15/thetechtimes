import React from "react";
import { Send, Bell, Shield, Cloud } from "lucide-react";

const Telegram = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="bg-info bg-opacity-75 text-white p-5 rounded-4 shadow-lg mb-5" style={{ background: '#0088cc' }}>
          <Send size={80} className="mb-4" />
          <h1 className="fw-bold display-4">Join our Telegram</h1>
          <p className="lead opacity-90">The fastest way to get breaking news directly to your phone.</p>
          <button className="btn btn-light btn-lg px-5 py-3 fw-bold mt-3 text-info shadow">Join Telegram Channel</button>
        </div>

        <div className="bg-light p-5 rounded-4 text-start border shadow-sm">
          <h3 className="fw-bold mb-4">Why Telegram?</h3>
          <ul className="list-unstyled">
             <li className="d-flex align-items-center mb-3"><Bell className="text-info me-3" /> <span>Instant push notifications for breaking tech news.</span></li>
             <li className="d-flex align-items-center mb-3"><Shield className="text-info me-3" /> <span>Zero ads, just essential news and analysis.</span></li>
             <li className="d-flex align-items-center mb-3"><Cloud className="text-info me-3" /> <span>Access our full 10-year news archive.</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Telegram;
