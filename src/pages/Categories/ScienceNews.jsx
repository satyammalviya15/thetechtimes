import { Atom, TrendingUp, Clock, Microscope, FlaskConical } from "lucide-react";

// ---------------------------------------
// SCIENCE NEWS DATA
// ---------------------------------------
const scienceTopStories = [
  {
    id: 1,
    title: "ISRO Successfully Tests New Reusable Launch Vehicle",
    excerpt: "India takes a major leap in low-cost space travel with RLV testing.",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b76d2a6?w=1200",
    category: "Space",
    date: "1 hour ago",
    views: "48K",
  },
  {
    id: 2,
    title: "Scientists Discover New Method to Create Clean Hydrogen",
    excerpt: "Breakthrough may change the future of renewable energy.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200",
    category: "Energy",
    date: "4 hours ago",
    views: "29K",
  },
  {
    id: 3,
    title: "AI Predicts Earthquakes 30 Minutes Before Impact",
    excerpt: "Deep learning model tested successfully in Japan & California.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    category: "AI Research",
    date: "7 hours ago",
    views: "22K",
  },
];

const scienceLatest = [
  {
    id: 4,
    title: "NASA Confirms Water Ice Under Martian Surface",
    category: "Space",
    date: "50 mins ago",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
  },
  {
    id: 5,
    title: "Breakthrough in Quantum Computing Achieved",
    category: "Quantum",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
  },
  {
    id: 6,
    title: "New Robot Mimics Human Walking with 97% Accuracy",
    category: "Robotics",
    date: "6 hours ago",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400",
  },
];

// ---------------------------------------
// REUSABLE CARDS
// ---------------------------------------
const ScienceCard = ({ post, featured = false }) => (
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
      <div className="d-flex justify-content-between text-muted small">
        <span>🕒 {post.date}</span>
        <span>👁 {post.views}</span>
      </div>
    </div>
  </div>
);

const ScienceLatestCard = ({ item }) => (
  <div className="card border-0 shadow-sm mb-3 hover-card">
    <div className="row g-0">
      <div className="col-4">
        <img src={item.image} className="img-fluid rounded-start h-100" style={{ objectFit: "cover" }} alt="" />
      </div>
      <div className="col-8">
        <div className="card-body">
          <span className="badge bg-info mb-2">{item.category}</span>
          <h5 className="fw-semibold">{item.title}</h5>
          <p className="text-muted small">
            <Clock size={14} /> {item.date}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ---------------------------------------
// MAIN PAGE
// ---------------------------------------
export default function ScienceNews() {
  return (
    <div className="min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <Atom className="me-2 text-primary" />
          Science & Research
        </h2>

        <div className="row">
          {/* LEFT */}
          <div className="col-lg-8">
            <div className="mb-4">
              <ScienceCard featured post={scienceTopStories[0]} />
            </div>

            <div className="row">
              {scienceTopStories.slice(1).map((post) => (
                <div key={post.id} className="col-md-6 mb-4">
                  <ScienceCard post={post} />
                </div>
              ))}
            </div>

            <h4 className="fw-bold border-bottom pb-2 mt-3">Latest Scientific Discoveries</h4>
            {scienceLatest.map((item) => (
              <ScienceLatestCard key={item.id} item={item} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white fw-semibold">
                <TrendingUp size={16} className="me-2" /> Trending Research
              </div>

              <div className="list-group list-group-flush">
                {[
                  "New planet found in nearby galaxy",
                  "India leads in quantum innovation",
                  "Deep-sea species discovered",
                  "Cancer cure research breakthrough",
                ].map((t, i) => (
                  <a key={i} className="list-group-item hover-item">{t}</a>
                ))}
              </div>
            </div>

            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Science Newsletter</h5>
              <p className="small">Get weekly science updates directly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .hover-card {
          transition: 0.3s;
          cursor: pointer;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .hover-item:hover {
          background: #f1f1f1;
        }
        .featured-post {
          border-left: 4px solid #0055ff;
        }
      `}</style>
    </div>
  );
}
