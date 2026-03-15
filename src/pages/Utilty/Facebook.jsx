import React from "react";
import { Facebook as FacebookIcon, Users, ThumbsUp, MessageCircle } from "lucide-react";

const Facebook = () => {
  return (
    <div className="container py-5 text-center">
      <div className="col-lg-8 mx-auto">
        <div className="bg-primary text-white p-5 rounded-4 shadow-lg mb-5">
          <FacebookIcon size={80} className="mb-4" />
          <h1 className="fw-bold display-4">The Tech Times on Facebook</h1>
          <p className="lead opacity-75">Connect with over 1 million tech enthusiasts on our official Facebook page.</p>
          <button className="btn btn-light btn-lg px-5 py-3 fw-bold mt-3 text-primary shadow">Follow on Facebook</button>
        </div>

        <div className="row g-4 text-start">
          <div className="col-md-4">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
              <ThumbsUp className="text-primary mb-3" size={32} />
              <h5 className="fw-bold">Daily News Snaps</h5>
              <p className="small text-muted mb-0">Catch the most important tech news in your daily feed.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
              <Users className="text-primary mb-3" size={32} />
              <h5 className="fw-bold">Community Discussions</h5>
              <p className="small text-muted mb-0">Join the debate on the latest gadgets and software releases.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded-4 bg-white shadow-sm h-100">
              <MessageCircle className="text-primary mb-3" size={32} />
              <h5 className="fw-bold">Live Q&A Sessions</h5>
              <p className="small text-muted mb-0">Interact with our editors during our weekly live streams.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
