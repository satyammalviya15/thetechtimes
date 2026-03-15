import React from "react";
import { BookOpen, TrendingUp, User, Clock } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "The Tech Times Editorial: A New Era for Privacy",
    excerpt: "Our stance on the recent global data protection regulations and why they matter.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    writer: "Editorial Board",
    category: "Editorial",
    date: "12 hours ago",
    views: "25K",
  },
  {
    id: 2,
    title: "Why Sustainability Must Drive Innovation",
    excerpt: "Tech companies can no longer ignore their environmental footprint.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200",
    writer: "Editorial Board",
    category: "Editorial",
    date: "1 day ago",
    views: "15K",
  },
];

const EditorialCard = ({ post }) => (
  <div className="card h-100 border-0 shadow-sm hover-card border-start border-primary border-4">
    <img src={post.image} className="card-img-top" alt={post.title} style={{ height: "240px", objectFit: "cover" }} />
    <div className="card-body">
      <span className="badge bg-dark mb-2">{post.category}</span>
      <h4 className="fw-bold mb-2 fs-5">{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>
      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span><User size={14} className="me-1" /> {post.writer}</span>
        <span>🕒 {post.date}</span>
      </div>
    </div>
  </div>
);

export default function Editorial() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 border-bottom pb-2">
        <BookOpen className="me-2 text-dark" /> Editorial
      </h2>
      <div className="row">
        {stories.map(post => (
          <div key={post.id} className="col-md-6 mb-4">
            <EditorialCard post={post} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .hover-card { transition: 0.3s; }
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
      `}</style>
    </div>
  );
}
