import React from "react";

const Support = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Support</h1>
      <p className="lead text-muted mb-5">
        We are here to help. Reach out to our dedicated support team.
      </p>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h5 className="mb-3"><i className="bi bi-chat-dots me-2 text-danger"></i> Live Chat</h5>
            <p className="small text-muted">Chat with our support agents in real-time for immediate assistance.</p>
            <button className="btn btn-outline-dark mt-auto btn-sm">Start Chat</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h5 className="mb-3"><i className="bi bi-envelope me-2 text-danger"></i> Email Support</h5>
            <p className="small text-muted">Send us an email and we'll get back to you within 24 hours.</p>
            <p className="fw-bold mb-0 mt-auto small">support@thetechtimes.com</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h5 className="mb-3"><i className="bi bi-telephone me-2 text-danger"></i> Call Us</h5>
            <p className="small text-muted">Available Mon-Fri, 9am - 6pm IST for urgent inquiries.</p>
            <p className="fw-bold mb-0 mt-auto small">+91-22-1234-5678</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <h3>Common Issues</h3>
          <div className="accordion accordion-flush mt-4" id="supportAccordion">
            <div className="accordion-item shadow-none border-bottom">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#issue1">
                  How do I reset my password?
                </button>
              </h2>
              <div id="issue1" className="accordion-collapse collapse" data-bs-parent="#supportAccordion">
                <div className="accordion-body small text-muted">
                  Go to the login page and click "Forgot Password". We'll send a reset link to your registered email address.
                </div>
              </div>
            </div>
            <div className="accordion-item shadow-none border-bottom">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#issue2">
                  My newsletter subscription isn't working
                </button>
              </h2>
              <div id="issue2" className="accordion-collapse collapse" data-bs-parent="#supportAccordion">
                <div className="accordion-body small text-muted">
                  Please check your spam folder. If you still don't see it, try resubscribing from your account settings or contact us.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
