import React from "react";
import { Code, Globe, Zap, Shield } from "lucide-react";

const technologies = [
  { title: "Frontend Engineering", icon: <Globe className="text-primary" />, desc: "Mastering React, Vue, and modern CSS frameworks to build immersive user interfaces." },
  { title: "Backend Systems", icon: <Zap className="text-warning" />, desc: "Building scalable server-side architectures using Node.js, Go, and Python." },
  { title: "Security & DevOps", icon: <Shield className="text-danger" />, desc: "Ensuring application safety and seamless delivery pipelines." },
  { title: "Cloud Architecture", icon: <Code className="text-success" />, desc: "Leveraging AWS, Azure, and GCP for global-scale applications." }
];

const WebDevelopment = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="fw-bold display-4 mb-3">Web Development</h1>
          <p className="lead text-muted">
            The web is evolving faster than ever. Stay ahead with the latest trends, frameworks, and best practices in modern web engineering.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <div className="bg-light p-5 rounded-circle d-inline-block">
             <Code size={120} className="text-dark opacity-25" />
          </div>
        </div>
      </div>

      <div className="row g-4">
        {technologies.map((tech, i) => (
          <div key={i} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 text-center hover-scale">
              <div className="mb-3 fs-1">{tech.icon}</div>
              <h5 className="fw-bold mb-3">{tech.title}</h5>
              <p className="small text-muted">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-start border-4 border-dark ps-4 py-3 bg-light rounded-2">
        <h4 className="fw-bold">Trending in Web: Next.js 15 & Server Actions</h4>
        <p className="mb-0 text-muted">Explore our deep dive into the latest release and how it's changing the way we think about the full stack.</p>
        <button className="btn btn-link text-dark fw-bold text-decoration-none p-0 mt-2">Read Deep Dive &rarr;</button>
      </div>

      <style jsx>{`
        .hover-scale { transition: transform 0.2s; }
        .hover-scale:hover { transform: scale(1.03); }
      `}</style>
    </div>
  );
};

export default WebDevelopment;
