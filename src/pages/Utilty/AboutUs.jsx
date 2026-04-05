import React from "react";

const AboutUs = () => {
  return (
    <div className="">

      {/* Main Content */}
      <div className="container my-3">
        <div className="row">
          {/* Left Column - Main Content */}
          <div className="col-lg-8">
            {/* Mission Section */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-danger text-white rounded-circle p-3 me-3">
                    <i className="bi bi-bullseye" style={{ fontSize: "1.5rem" }}></i>
                  </div>
                  <h3 className="mb-0 fw-bold">Our Mission</h3>
                </div>
                <p className="text-muted" style={{ lineHeight: "1.8" }}>
                  At The Tech Times, our mission is to deliver high-quality, reliable, and timely technology news that empowers our readers. We strive to bridge the gap between complex technical developments and their real-world impact, making cutting-edge innovations accessible to everyone—from industry professionals and investors to tech enthusiasts and everyday users.
                </p>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                  We believe in the power of informed communities and are committed to providing unbiased, in-depth coverage that helps you stay ahead in the fast-paced world of technology.
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="bi bi-eye" style={{ fontSize: "1.5rem" }}></i>
                  </div>
                  <h3 className="mb-0 fw-bold">Our Vision</h3>
                </div>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                  To become the world's most trusted and influential technology news platform, known for our journalistic integrity, innovative storytelling, and commitment to fostering digital literacy across all demographics.
                </p>
              </div>
            </div>

            {/* Who We Are Section */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white rounded-circle p-3 me-3">
                    <i className="bi bi-people" style={{ fontSize: "1.5rem" }}></i>
                  </div>
                  <h3 className="mb-0 fw-bold">Who We Are</h3>
                </div>
                <p className="text-muted" style={{ lineHeight: "1.8" }}>
                  Founded in 2025, The Tech Times has rapidly established itself as a trusted voice in the global technology community. Our diverse team comprises award-winning journalists, seasoned researchers, industry analysts, and technology experts who bring decades of combined experience to every story we publish.
                </p>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                  From groundbreaking AI developments and cybersecurity threats to the latest gadget reviews and startup success stories, we dive deep into the narratives that shape our digital future. Our editorial independence and commitment to factual accuracy have earned us the trust of millions of readers worldwide.
                </p>
              </div>
            </div>

            {/* What We Cover */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h3 className="mb-4 fw-bold">What We Cover</h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <div>
                        <strong>Artificial Intelligence & ML</strong>
                        <p className="text-muted small mb-0">Latest breakthroughs and applications</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <div>
                        <strong>Cybersecurity</strong>
                        <p className="text-muted small mb-0">Threats, solutions, and best practices</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <div>
                        <strong>Startups & Innovation</strong>
                        <p className="text-muted small mb-0">Emerging companies and disruptors</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <div>
                        <strong>Consumer Technology</strong>
                        <p className="text-muted small mb-0">Reviews, comparisons, and guides</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <div>
                        <strong>Tech Policy & Regulation</strong>
                        <p className="text-muted small mb-0">Government and industry standards</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <div>
                        <strong>Career & Jobs</strong>
                        <p className="text-muted small mb-0">Tech industry opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-lg-4">
            {/* Quick Facts */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-danger text-white">
                <h5 className="mb-0"><i className="bi bi-info-circle me-2"></i>Quick Facts</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 pb-3 border-bottom">
                    <small className="text-muted d-block">Founded</small>
                    <strong className="fs-5">2025</strong>
                  </li>
                  <li className="mb-3 pb-3 border-bottom">
                    <small className="text-muted d-block">Headquarters</small>
                    <strong>India</strong>
                  </li>
                  <li className="mb-3 pb-3 border-bottom">
                    <small className="text-muted d-block">Focus Areas</small>
                    <strong>Global & Indian Tech News</strong>
                  </li>
                  <li className="mb-3 pb-3 border-bottom">
                    <small className="text-muted d-block">Coverage</small>
                    <strong>24/7 News Updates</strong>
                  </li>
                  <li className="mb-0">
                    <small className="text-muted d-block">Languages</small>
                    <strong>English</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Values */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0"><i className="bi bi-star me-2"></i>Our Values</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h6 className="fw-bold mb-1">Integrity</h6>
                  <p className="small text-muted mb-0">Unbiased reporting and factual accuracy</p>
                </div>
                <hr />
                <div className="mb-3">
                  <h6 className="fw-bold mb-1">Innovation</h6>
                  <p className="small text-muted mb-0">Embracing new storytelling methods</p>
                </div>
                <hr />
                <div className="mb-3">
                  <h6 className="fw-bold mb-1">Accessibility</h6>
                  <p className="small text-muted mb-0">Making tech news understandable for all</p>
                </div>
                <hr />
                <div className="mb-0">
                  <h6 className="fw-bold mb-1">Community</h6>
                  <p className="small text-muted mb-0">Building an informed tech community</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="card border-0 shadow-sm" style={{ background: "linear-gradient(135deg, #B00020 0%, #8B0016 100%)" }}>
              <div className="card-body text-white text-center p-4">
                <i className="bi bi-envelope-fill" style={{ fontSize: "3rem", opacity: 0.8 }}></i>
                <h5 className="mt-3 mb-2">Get in Touch</h5>
                <p className="small mb-3">Have a story tip or feedback?</p>
                <a href="mailto:natrajtechstudio@gmail.com" className="btn btn-light btn-sm">
                  <i className="bi bi-envelope me-2"></i>Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm bg-dark text-white">
              <div className="card-body p-5 text-center">
                <h3 className="mb-3">Join Our Community</h3>
                <p className="lead mb-4">Stay updated with the latest in technology. Subscribe to our newsletter for daily insights.</p>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="input-group input-group-lg">
                      <input type="email" className="form-control" placeholder="Enter your email" />
                      <button className="btn btn-danger" type="button">
                        <i className="bi bi-send me-2"></i>Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
    </div>
  );
};

export default AboutUs;