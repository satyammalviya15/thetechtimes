import React from "react";

const AdvertiseWithUs = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Advertise with The Tech Times</h1>
        <p className="lead text-muted">Connect your brand with the world's most influential tech audience.</p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h2 className="mb-4">Advertising Solutions</h2>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item border-0 ps-0">
              <strong>Display Advertising:</strong> High-impact banner placements across our high-traffic pages.
            </li>
            <li className="list-group-item border-0 ps-0">
              <strong>Sponsored Content:</strong> Native articles that educate our audience about your products.
            </li>
            <li className="list-group-item border-0 ps-0">
              <strong>Newsletter Sponsorships:</strong> Direct reach into the inboxes of our most engaged subscribers.
            </li>
            <li className="list-group-item border-0 ps-0">
              <strong>Video Ad Placements:</strong> Integration with our trending tech video content.
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="bg-light p-5 rounded">
            <h3>Get our Media Kit</h3>
            <p>Interested in learning more about our demographics and rates? Download our latest media kit or request a custom proposal.</p>
            <button className="btn btn-dark px-4 shadow-sm" style={{ backgroundColor: "#B00020", border: "none" }}>Request Media Kit</button>
          </div>
        </div>
      </div>

      <div className="text-center py-5 border-top">
        <h3>Ready to start?</h3>
        <p className="text-muted">Reach out to our sales team at <strong>natrajtechstudio@gmail.com</strong></p>
      </div>
    </div>
  );
};

export default AdvertiseWithUs;
