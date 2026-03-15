import React from "react";
import { Layout, TrendingUp, User, Clock } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Weekly Tech Column: The Silicon Valley Shift",
    excerpt: "Observing the migration of talent from traditional giants to emerging startups.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    writer: "Jennifer Wu",
    category: "Columns",
    date: "3 days ago",
    views: "10K",
  },
  {
    id: 2,
    title: "The Gadget Guy: Wearables are Evolving",
    excerpt: "Exploring how health tracking is becoming the primary driver for smartwatches.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    writer: "Tom Harris",
    category: "Columns",
    date: "5 days ago",
    views: "14K",
  },
];

const ColumnCard = ({ post }) => (
  <div className="card h-100 border-0 shadow-sm hover-card">
    <div className="row g-0 h-100">
      <div className="col-md-4">
        <img src={post.image} className="img-fluid rounded-start h-100" style={{ objectFit: "cover" }} alt={post.title} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <span className="badge bg-secondary mb-2">{post.category}</span>
          <h4 className="fw-bold mb-2 fs-5">{post.title}</h4>
          <p className="text-muted small">{post.excerpt}</p>
          <div className="d-flex justify-content-between mt-3 text-muted small">
            <span><User size={14} className="me-1" /> {post.writer}</span>
            <span>🕒 {post.date}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Columns() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 border-bottom pb-2">
        <Layout className="me-2 text-secondary" /> Columns
      </h2>
      <div className="row">
        {stories.map(post => (
          <div key={post.id} className="col-12 mb-4">
            <ColumnCard post={post} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .hover-card { transition: 0.3s; }
        .hover-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
      `}</style>
    </div>
  );
}
