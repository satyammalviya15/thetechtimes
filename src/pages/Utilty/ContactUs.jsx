import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <p className="text-center text-muted mb-5">
        Have a question, feedback, or a story tip? We'd love to hear from you.
      </p>

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm p-4">
            <h3 className="mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="How can we help?"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your message details..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100 py-2" style={{ backgroundColor: "#B00020", border: "none" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="p-4">
            <h3 className="mb-4">Other ways to connect</h3>
{/*             
            <div className="mb-4">
              <h5 className="mb-2"><i className="bi bi-geo-alt-fill me-2"></i> Address</h5>
              <p className="text-muted">
                12nd Floor, Tech Tower, BKC,<br />
                Mumbai, Maharashtra 400051, India
              </p>
            </div> */}

            <div className="mb-4">
              <h5 className="mb-2"><i className="bi bi-envelope-fill me-2"></i> Email</h5>
              <p className="text-muted">
                General Queries: <strong>thetechtimes@gmail.com</strong><br />
                Editorial: <strong>satyammalviya281@gmail.com</strong><br />
                {/* Support: <strong>thetechtimes@gmail.com</strong> */}
              </p>
            </div>

            <div className="mb-4">
              <h5 className="mb-2"><i className="bi bi-telephone-fill me-2"></i> Phone</h5>
              <p className="text-muted">+91 9479415356</p>
            </div>

            <div className="mt-5">
              <h5 className="mb-3">Follow us</h5>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-dark btn-sm rounded-circle"><i className="bi bi-facebook"></i></a>
                <a href="#" className="btn btn-outline-dark btn-sm rounded-circle"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="btn btn-outline-dark btn-sm rounded-circle"><i className="bi bi-instagram"></i></a>
                <a href="#" className="btn btn-outline-dark btn-sm rounded-circle"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
