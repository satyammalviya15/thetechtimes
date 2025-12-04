import React from 'react';

// Footer Component with Bootstrap
const Footer = ({ darkMode = false }) => {
  const categories = ["Latest", "AI & ML", "Cybersecurity", "Startups", "Gadgets", "Robotics", "Quantum", "Opinion"];
  
  const socialIcons = [
    { letter: 'F', name: 'Facebook', link: '#' },
    { letter: 'T', name: 'Twitter', link: '#' },
    { letter: 'L', name: 'LinkedIn', link: '#' },
    { letter: 'I', name: 'Instagram', link: '#' }
  ];

  return (
    <footer className={`${darkMode ? 'bg-dark text-light' : 'bg-secondary text-white'} mt-5 py-5`}>
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="fw-bold mb-3">TechTimes</h3>
            <p className="small opacity-75">
              Your daily source for technology news, analysis, and insights.
            </p>
          </div>

          {/* Categories Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 className="fw-semibold mb-3">Categories</h4>
            <ul className="list-unstyled">
              {categories.slice(0, 5).map(cat => (
                <li key={cat} className="mb-2">
                  <a href="#" className="text-decoration-none text-light opacity-75 small hover-link">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 className="fw-semibold mb-3">Company</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-light opacity-75 small hover-link">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-light opacity-75 small hover-link">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-light opacity-75 small hover-link">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-light opacity-75 small hover-link">
                  Advertise
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 className="fw-semibold mb-3">Follow Us</h4>
            <div className="d-flex gap-2">
              {socialIcons.map(social => (
                <a
                  key={social.letter}
                  href={social.link}
                  className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                  title={social.name}
                >
                  <strong>{social.letter}</strong>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-secondary my-4" />
        <div className="text-center small opacity-75">
          <p className="mb-0">
            © 2024 TechTimes. All rights reserved. | 
            <a href="#" className="text-light text-decoration-none mx-1 hover-link">Privacy Policy</a> | 
            <a href="#" className="text-light text-decoration-none mx-1 hover-link">Terms of Service</a>
          </p>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-link:hover {
          color: #0d6efd !important;
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;