import React from "react";
import { MessageSquare, TrendingUp, User, Clock } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "The Future of AI is Not What You Think",
    excerpt: "Why we need to shift our focus from automation to augmentation in the next decade.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    writer: "David Chen",
    category: "Opinion",
    date: "1 day ago",
    views: "12K",
  },
  {
    id: 2,
    title: "Why Remote Work is Still a Winner",
    excerpt: "Despite the return-to-office mandates, the productivity data tells a different story.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200",
    writer: "Sarah Jenkins",
    category: "Opinion",
    date: "2 days ago",
    views: "8K",
  },
];

const OpinionCard = ({ post }) => (
  <div className="card h-100 border-0 shadow-sm hover-card">
    <img src={post.image} className="card-img-top" alt={post.title} style={{ height: "240px", objectFit: "cover" }} />
    <div className="card-body">
      <span className="badge bg-primary mb-2">{post.category}</span>
      <h4 className="fw-bold mb-2 fs-5">{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>
      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span><User size={14} className="me-1" /> {post.writer}</span>
        <span>🕒 {post.date}</span>
      </div>
    </div>
  </div>
);

export default function Opinion() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 border-bottom pb-2">
        <MessageSquare className="me-2 text-primary" /> Opinion
      </h2>
      <div className="row">
        {stories.map(post => (
          <div key={post.id} className="col-md-6 mb-4">
            <OpinionCard post={post} />
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
