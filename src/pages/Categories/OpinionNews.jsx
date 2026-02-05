import { MessageSquare, TrendingUp, Clock, User } from "lucide-react";

const opinionTopStories = [
  {
    id: 1,
    title: "Why India Needs Stronger Digital Privacy Laws",
    excerpt: "As data breaches rise, experts demand a nation-wide digital privacy framework.",
    image: "https://images.unsplash.com/photo-1581091012184-5c2af61a3a4f?w=1200",
    writer: "Arun Mehta",
    category: "Editorial",
    date: "2 hours ago",
    views: "50K",
  },
  {
    id: 2,
    title: "Education System Needs More Skill-Based Learning",
    excerpt: "Traditional rote learning is no longer effective in the digital age.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200",
    writer: "Neha Sharma",
    category: "Opinion",
    date: "5 hours ago",
    views: "27K",
  },
  {
    id: 3,
    title: "Why Young Entrepreneurs Are Shaping India’s Future",
    excerpt: "Startups are becoming the backbone of modern India.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200",
    writer: "Kunal Singh",
    category: "Analysis",
    date: "9 hours ago",
    views: "18K",
  },
];

const opinionLatest = [
  {
    id: 4,
    title: "Should Social Media Be Regulated More Strictly?",
    category: "Debate",
    date: "45 mins ago",
    image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=400",
  },
  {
    id: 5,
    title: "Are Electric Vehicles Truly Eco-Friendly?",
    category: "Editorial",
    date: "3 hours ago",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400",
  },
  {
    id: 6,
    title: "Will AI Replace Coders in the Next 10 Years?",
    category: "Tech Opinion",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
  },
];

const OpinionCard = ({ post, featured = false }) => (
  <div className={`card h-100 border-0 shadow-sm hover-card ${featured ? "featured-post" : ""}`}>
    <img
      src={post.image}
      className="card-img-top"
      alt={post.title}
      style={{ height: featured ? "380px" : "240px", objectFit: "cover" }}
    />

    <div className="card-body">
      <span className="badge bg-primary mb-2">{post.category}</span>

      <h4 className={`fw-bold mb-2 ${featured ? "fs-3" : "fs-5"}`}>{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>

      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span>
          <User size={14} className="me-1" /> {post.writer}
        </span>
        <span>🕒 {post.date}</span>
        <span>👁 {post.views}</span>
      </div>
    </div>
  </div>
);

const OpinionLatestCard = ({ item }) => (
  <div className="card border-0 shadow-sm mb-3 hover-card">
    <div className="row g-0">
      <div className="col-4">
        <img src={item.image} className="img-fluid rounded-start h-100" />
      </div>
      <div className="col-8">
        <div className="card-body">
          <span className="badge bg-secondary mb-2">{item.category}</span>
          <h5 className="fw-semibold">{item.title}</h5>
          <p className="text-muted small">
            <Clock size={14} /> {item.date}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function OpinionNews() {
  return (
    <div className="min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <MessageSquare className="me-2 text-primary" />
          Opinion & Editorials
        </h2>

        <div className="row">
          {/* LEFT */}
          <div className="col-lg-8">
            <div className="mb-4">
              <OpinionCard post={opinionTopStories[0]} featured />
            </div>

            <div className="row">
              {opinionTopStories.slice(1).map((post) => (
                <div key={post.id} className="col-md-6 mb-4">
                  <OpinionCard post={post} />
                </div>
              ))}
            </div>

            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Opinions</h4>
            {opinionLatest.map((news) => (
              <OpinionLatestCard key={news.id} item={news} />
            ))}
          </div>

          {/* RIGHT */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white fw-semibold">
                <TrendingUp size={16} className="me-2" />
                Trending Opinions
              </div>

              <div className="list-group list-group-flush">
                {[
                  "AI ethics in 2025",
                  "Why students avoid government jobs",
                  "Electric cars vs petrol cars",
                  "Should voting age be lowered?",
                ].map((t, i) => (
                  <a key={i} className="list-group-item hover-item">
                    {t}
                  </a>
                ))}
              </div>
            </div>

            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Write for Us</h5>
              <p className="mb-0 small">Share your opinion on national issues.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card {
          transition: 0.3s;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .hover-item:hover {
          background: #f0f0f0;
        }
        .featured-post {
          border-left: 4px solid #0040ff;
        }
      `}</style>
    </div>
  );
}
