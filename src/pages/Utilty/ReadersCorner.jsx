import React from "react";
import { Users, TrendingUp, User, Clock } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Letter to the Editor: The Need for Tech Literacy",
    excerpt: "A reader shares their thoughts on why coding should be taught alongside basic math.",
    writer: "Michael Brown",
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Community Insight: My Experience with AI-Assisted Design",
    excerpt: "How tools like Midjourney changed my creative workflow for the better.",
    writer: "Lisa V.",
    date: "4 days ago",
  },
];

const ReaderCard = ({ post }) => (
  <div className="card h-100 border-0 shadow-sm hover-card border-top border-warning border-4">
    <div className="card-body">
      <h4 className="fw-bold mb-2 fs-5">"{post.title}"</h4>
      <p className="text-muted italic">"{post.excerpt}"</p>
      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span><User size={14} className="me-1" /> {post.writer}</span>
        <span>🕒 {post.date}</span>
      </div>
    </div>
  </div>
);

export default function ReadersCorner() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 border-bottom pb-2">
        <Users className="me-2 text-warning" /> Readers Corner
      </h2>
      <p className="lead text-muted mb-5">Where our community speaks. Share your feedback, letters, and insights with us.</p>
      <div className="row">
        {stories.map(post => (
          <div key={post.id} className="col-md-6 mb-4">
            <ReaderCard post={post} />
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
