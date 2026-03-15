import React from "react";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const categories = [
    { title: "Getting Started", icon: "bi-rocket-takeoff", items: ["Account Setup", "Subscription Plans", "Navigation Guide"] },
    { title: "News & Content", icon: "bi-newspaper", items: ["Finding Articles", "Saving for Later", "Newsletter Settings"] },
    { title: "Technical Issues", icon: "bi-cpu", items: ["App Not Loading", "Login Problems", "Resetting Password"] },
    { title: "Billing & Payments", icon: "bi-credit-card", items: ["Managing Subscriptions", "Invoices", "Refund Policy"] },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-5 py-4 bg-light rounded-4">
        <h1 className="fw-bold mb-3">How can we help you?</h1>
        <div className="col-md-6 mx-auto px-3">
          <div className="input-group mb-3 shadow-sm">
            <span className="input-group-text bg-white border-0"><i className="bi bi-search"></i></span>
            <input type="text" className="form-control border-0 py-2" placeholder="Search for articles, guides..." />
          </div>
        </div>
      </div>

      <div className="row g-4">
        {categories.map((cat, i) => (
          <div key={i} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 text-center hover-lift">
              <div className="mb-3">
                <i className={`bi ${cat.icon} fs-1 text-danger`}></i>
              </div>
              <h5 className="mb-3">{cat.title}</h5>
              <ul className="list-unstyled small text-muted">
                {cat.items.map((item, j) => (
                  <li key={j} className="mb-2"><a href="#" className="text-decoration-none text-muted">{item}</a></li>
                ))}
              </ul>
              <a href="#" className="mt-auto text-danger fw-bold text-decoration-none small">View all <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 py-5 border-top">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h3>Still need help?</h3>
            <p className="text-muted">Our support team is available 24/7 to assist you with any questions or concerns.</p>
          </div>
          <div className="col-md-4 text-md-end">
            <Link to="/support" className="btn btn-dark btn-lg px-4" style={{ backgroundColor: "#B00020", border: "none" }}>Contact Support</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-lift { transition: transform 0.2s; }
        .hover-lift:hover { transform: translateY(-5px); }
      `}</style>
    </div>
  );
};

export default HelpCenter;
