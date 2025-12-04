import { useState } from "react";
import { TrendingUp, TrendingDown, Award, Clock, Cpu, CircuitBoard } from "lucide-react";

// ---------------------------------------
// TECH NEWS DATA
// ---------------------------------------
const techTopStories = [
  {
    id: 1,
    title: "GPT-5 Launch: The Most Powerful AI Model Ever Released",
    excerpt: "OpenAI sets a new benchmark in reasoning, automation, and AI intelligence.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    category: "AI",
    author: "James Parker",
    date: "1 hour ago",
    views: "45K",
  },
  {
    id: 2,
    title: "Samsung Unveils Transparent Smartphone Display",
    excerpt: "A futuristic device with crystal-clear screen visibility and holographic UI.",
    image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?w=1200",
    category: "Gadgets",
    author: "Elena Roy",
    date: "3 hours ago",
    views: "28K",
  },
  {
    id: 3,
    title: "Google Introduces AI-Powered Cyber Defense System",
    excerpt: "New security update detects threats 10x faster than traditional systems.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    category: "Cybersecurity",
    author: "Karan Patel",
    date: "5 hours ago",
    views: "19K",
  },
];

const techLatest = [
  {
    id: 4,
    title: "Apple M4 Chip Benchmarks Beat Every Laptop CPU",
    category: "Hardware",
    date: "6 hours ago",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b30b?w=400",
  },
  {
    id: 5,
    title: "India Builds World's Cheapest Quantum Chip",
    category: "Innovation",
    date: "8 hours ago",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
  },
  {
    id: 6,
    title: "Tesla Robotaxi Testing Begins in 4 Cities",
    category: "Automobile",
    date: "10 hours ago",
    image: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=400",
  },
];

// ---------------------------------------
// REUSABLE COMPONENTS (SAME STYLE)
// ---------------------------------------
const TopTechCard = ({ post, featured = false }) => (
  <div className={`card h-100 border-0 shadow-sm hover-card ${featured ? "featured-post" : ""}`}>
    <img
      src={post.image}
      className="card-img-top"
      alt={post.title}
      style={{ height: featured ? "380px" : "240px", objectFit: "cover" }}
    />

    <div className="card-body">
      <span className="badge bg-dark mb-2">{post.category}</span>
      {featured && (
        <div className="badge bg-warning text-dark mb-2">
          <Award size={16} className="me-1" /> Featured
        </div>
      )}

      <h4 className={`fw-bold mb-2 ${featured ? "fs-3" : "fs-5"}`}>{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>

      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span>👤 {post.author}</span>
        <span>🕒 {post.date}</span>
        <span>👁 {post.views}</span>
      </div>
    </div>
  </div>
);

const TechNewsCard = ({ item }) => (
  <div className="card border-0 shadow-sm mb-3 hover-card">
    <div className="row g-0">
      <div className="col-4">
        <img
          src={item.image}
          className="img-fluid rounded-start h-100"
          style={{ objectFit: "cover" }}
          alt={item.title}
        />
      </div>
      <div className="col-8">
        <div className="card-body">
          <span className="badge bg-primary mb-2">{item.category}</span>
          <h5 className="fw-semibold">{item.title}</h5>
          <p className="text-muted small">
            <Clock size={14} className="me-1" />
            {item.date}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ---------------------------------------
// TECH PAGE COMPONENT
// ---------------------------------------
export default function TechPage() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <Cpu className="me-2 text-primary" /> Technology News
        </h2>

        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            {/* Featured Story */}
            <div className="mb-4">
              <TopTechCard post={techTopStories[0]} featured />
            </div>

            {/* Other top tech posts */}
            <div className="row">
              {techTopStories.slice(1).map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <TopTechCard post={post} />
                </div>
              ))}
            </div>

            {/* Latest Tech News */}
            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Updates</h4>
            {techLatest.map((news) => (
              <TechNewsCard key={news.id} item={news} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            {/* Small Trending Tech */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-dark text-white fw-semibold">
                <CircuitBoard size={16} className="me-2" />
                Trending Tech
              </div>
              <div className="list-group list-group-flush">
                {[
                  "AI replaces 20% manual work worldwide",
                  "5G+ launched in India",
                  "Cyberattacks increased by 120%",
                  "Silicon shortage ends in 2025",
                ].map((t, i) => (
                  <a key={i} className="list-group-item hover-item">
                    {t}
                  </a>
                ))}
              </div>
            </div>

            {/* AD */}
            <div className="card border-0 bg-primary text-white p-4 shadow-sm">
              <h5>Tech Advertisement</h5>
              <p className="mb-0 small">Promote your tech startup here.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Small Custom Styles */}
      <style jsx>{`
        .hover-card {
          transition: 0.3s;
          cursor: pointer;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .featured-post {
          border-left: 4px solid #000;
        }
        .hover-item:hover {
          background: #f7f7f7;
        }
      `}</style>
    </div>
  );
}
