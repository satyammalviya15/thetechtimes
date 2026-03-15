import React from "react";
import { UserPlus, TrendingUp, User, Clock } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "How I Built My First dApp in 24 Hours",
    excerpt: "A guest contributor shares their journey navigating the world of decentralized applications.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200",
    writer: "Alex Rivera",
    category: "Guest Posts",
    date: "3 days ago",
    views: "5K",
  },
  {
    id: 2,
    title: "The Future of Quantum Computing: A Researcher’s View",
    excerpt: "A look into the labs where the next generation of computing is being born.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
    writer: "Dr. Samira Ali",
    category: "Guest Posts",
    date: "1 week ago",
    views: "12K",
  },
];

const GuestPostCard = ({ post }) => (
  <div className="card h-100 border-0 shadow-sm hover-card bg-light">
    <div className="card-body">
      <span className="badge bg-info text-dark mb-2">{post.category}</span>
      <h4 className="fw-bold mb-2 fs-5">{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>
      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span className="fw-bold text-dark"><User size={14} className="me-1" /> {post.writer}</span>
        <span>🕒 {post.date}</span>
      </div>
    </div>
  </div>
);

export default function GuestPosts() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 border-bottom pb-2">
        <UserPlus className="me-2 text-info" /> Guest Posts
      </h2>
      <div className="row">
        {stories.map(post => (
          <div key={post.id} className="col-md-6 mb-4">
            <GuestPostCard post={post} />
          </div>
        ))}
      </div>
      <div className="bg-dark text-white p-5 rounded-4 mt-5 d-flex justify-content-between align-items-center">
        <div>
          <h3>Want to see your story here?</h3>
          <p className="mb-0">We are always looking for fresh perspectives from the tech community.</p>
        </div>
        <button className="btn btn-primary px-4">Write for Us</button>
      </div>
      <style jsx>{`
        .hover-card { transition: 0.3s; }
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
      `}</style>
    </div>
  );
}
