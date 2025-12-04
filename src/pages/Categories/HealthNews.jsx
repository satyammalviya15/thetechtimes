import { HeartPulse, TrendingUp, Clock, Hospital, Pill } from "lucide-react";

const healthTopStories = [
  {
    id: 1,
    title: "India Launches AI-Based Health Monitoring System",
    excerpt: "The new system will help track chronic diseases in early stages.",
    image: "https://images.unsplash.com/photo-1580281657521-6ce258b1bcc5?w=1200",
    org: "Ministry of Health",
    category: "Healthcare",
    date: "1 hour ago",
    views: "45K",
  },
  {
    id: 2,
    title: "WHO Warns About Increasing Air Pollution Levels",
    excerpt: "Major cities show high PM2.5 levels causing respiratory issues.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200",
    org: "WHO",
    category: "Environment",
    date: "4 hours ago",
    views: "28K",
  },
  {
    id: 3,
    title: "Study Shows 60% Indians Lack Vitamin D",
    excerpt: "Researchers recommend 30 minutes of daily sunlight exposure.",
    image: "https://images.unsplash.com/photo-1450184464361-886b74d6a29f?w=1200",
    org: "AIIMS",
    category: "Research",
    date: "7 hours ago",
    views: "19K",
  },
];

const healthLatest = [
  {
    id: 4,
    title: "New Diabetes Medicine Approved in India",
    category: "Medicine",
    date: "1 hour ago",
    image: "https://images.unsplash.com/photo-1584302179601-c9e8e6a5ec6f?w=400",
  },
  {
    id: 5,
    title: "Govt Launches Free Vaccination Program",
    category: "Healthcare",
    date: "3 hours ago",
    image: "https://images.unsplash.com/photo-1582719478173-2f7968e8b9b3?w=400",
  },
  {
    id: 6,
    title: "Rise in Dengue Cases Across Delhi",
    category: "Disease",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=400",
  },
];

// Reusable Card Components
const TopHealthCard = ({ post, featured = false }) => (
  <div className={`card h-100 border-0 shadow-sm hover-card ${featured ? "featured-post" : ""}`}>
    <img
      src={post.image}
      className="card-img-top"
      alt={post.title}
      style={{ height: featured ? "380px" : "240px", objectFit: "cover" }}
    />

    <div className="card-body">
      <span className="badge bg-danger mb-2">{post.category}</span>

      {featured && (
        <div className="badge bg-warning text-dark mb-2">
          <Pill size={16} className="me-1" /> Featured
        </div>
      )}

      <h4 className={`fw-bold mb-2 ${featured ? "fs-3" : "fs-5"}`}>{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>

      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span>
          <Hospital size={14} className="me-1" />
          {post.org}
        </span>
        <span>🕒 {post.date}</span>
        <span>👁 {post.views}</span>
      </div>
    </div>
  </div>
);

const HealthNewsCard = ({ item }) => (
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
          <span className="badge bg-success mb-2">{item.category}</span>
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

export default function HealthNews() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <HeartPulse className="me-2 text-danger" />
          Health News & Updates
        </h2>

        <div className="row">
          {/* LEFT SECTION */}
          <div className="col-lg-8">
            <div className="mb-4">
              <TopHealthCard post={healthTopStories[0]} featured />
            </div>

            <div className="row">
              {healthTopStories.slice(1).map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <TopHealthCard post={post} />
                </div>
              ))}
            </div>

            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Health Updates</h4>
            {healthLatest.map((news) => (
              <HealthNewsCard key={news.id} item={news} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-danger text-white fw-semibold">
                <TrendingUp size={16} className="me-2" />
                Trending Health Alerts
              </div>

              <div className="list-group list-group-flush">
                {[
                  "Increase in flu cases this winter",
                  "AIIMS releases new diet chart",
                  "Heart attack risk rises in summer",
                  "New cancer research breakthrough",
                ].map((t, i) => (
                  <a key={i} className="list-group-item hover-item">
                    {t}
                  </a>
                ))}
              </div>
            </div>

            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Health Awareness Campaign</h5>
              <p className="mb-0 small">Stay updated with verified health info.</p>
            </div>
          </div>
        </div>
      </div>

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
          background: #f5f5f5;
        }
        .featured-post {
          border-left: 4px solid #b30000;
        }
      `}</style>
    </div>
  );
}
