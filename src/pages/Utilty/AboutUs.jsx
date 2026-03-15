import React from "react";

const AboutUs = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">About The Tech Times</h1>
      <p className="lead">
        Welcome to <strong>The Tech Times</strong>, your premier destination for the latest in technology, innovation, and digital transformation.
      </p>
      
      <div className="row mt-5">
        <div className="col-md-8">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide high-quality, reliable, and timely news about the technology world. We aim to bridge the gap between complex technical developments and everyday impact, making tech accessible to everyone from industry professionals to casual enthusiasts.
          </p>
          
          <h3 className="mt-4">Who We Are</h3>
          <p>
            Founded in 2026, The Tech Times has quickly grown into a trusted voice in the tech community. Our team of experienced journalists, researchers, and tech experts are dedicated to digging deep into the stories that matter—from AI breakthroughs and cybersecurity to the latest gadget releases and startup successes.
          </p>
        </div>
        <div className="col-md-4">
          <div className="card border-0 bg-light p-4">
            <h4>Quick Facts</h4>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><strong>Founded:</strong> 2026</li>
              <li className="mb-2"><strong>Focus:</strong> Global & Indian Tech News</li>
              <li className="mb-2"><strong>Headquarters:</strong> Mumbai, India</li>
              <li className="mb-2"><strong>Audience:</strong> 2M+ Monthly Readers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
