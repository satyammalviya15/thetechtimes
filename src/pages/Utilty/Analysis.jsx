import React from "react";
import { BarChart2, TrendingUp, User, Clock } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Deep Dive: The Chip Shortage is Over, but the Market has Changed",
    excerpt: "A comprehensive look at supply chain dynamics and the new semiconductor landscape.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    writer: "Mark Thompson",
    category: "Analysis",
    date: "2 days ago",
    views: "30K",
  },
  {
    id: 2,
    title: "The Economics of Subscription Services",
    excerpt: "Why every company is moving to a recurring revenue model and what it means for consumers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    writer: "Elena Rodriguez",
    category: "Analysis",
    date: "4 days ago",
    views: "22K",
  },
];

const AnalysisCard = ({ post }) => (
  <div className="card h-100 border-0 shadow-sm hover-card">
    <img src={post.image} className="card-img-top" alt={post.title} style={{ height: "240px", objectFit: "cover" }} />
    <div className="card-body">
      <span className="badge bg-success mb-2">{post.category}</span>
      <h4 className="fw-bold mb-2 fs-5">{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>
      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span><User size={14} className="me-1" /> {post.writer}</span>
        <span>🕒 {post.date}</span>
      </div>
    </div>
  </div>
);

export default function Analysis() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 border-bottom pb-2">
        <BarChart2 className="me-2 text-success" /> Analysis
      </h2>
      <div className="row">
        {stories.map(post => (
          <div key={post.id} className="col-md-6 mb-4">
            <AnalysisCard post={post} />
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
