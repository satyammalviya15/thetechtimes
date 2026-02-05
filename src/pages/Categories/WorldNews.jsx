import { Globe2, Clock, TrendingUp, Flame } from "lucide-react";

// ---------------------------------------
// WORLD NEWS DATA
// ---------------------------------------
const worldTopStories = [
  {
    id: 1,
    title: "Global Markets Surge as Tech Stocks Boom",
    excerpt: "NASDAQ hits an all-time high driven by AI and semiconductor growth.",
    image: "https://images.unsplash.com/photo-1536305030431-83c1f1b04097?w=1200",
    category: "Economy",
    date: "1 hour ago",
    views: "110K",
  },
  {
    id: 2,
    title: "UN Announces Major Climate Agreement for 2040",
    excerpt: "195 nations sign a new pact targeting zero emissions.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200",
    category: "Environment",
    date: "4 hours ago",
    views: "65K",
  },
  {
    id: 3,
    title: "Breakthrough in Cancer Research Announced",
    excerpt: "New drug shows 87% success in clinical trials.",
    image: "https://images.unsplash.com/photo-1581091870627-3ca5df85e26f?w=1200",
    category: "Health",
    date: "7 hours ago",
    views: "42K",
  },
];

const worldLatest = [
  {
    id: 4,
    title: "Japan Opens Borders for Skilled Tech Workers",
    category: "Policy",
    date: "30 minutes ago",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500",
  },
  {
    id: 5,
    title: "US Introduces New AI Safety Bill",
    category: "Technology",
    date: "3 hours ago",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
  },
  {
    id: 6,
    title: "Flood Warnings Issued Across Europe",
    category: "Weather",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=500",
  },
];

// ---------------------------------------
// REUSABLE CARDS
// ---------------------------------------
const TopWorldCard = ({ post, featured = false }) => (
  <div className={`card h-100 border-0 shadow-sm hover-card ${featured ? "featured-post" : ""}`}>
    <img
      src={post.image}
      className="card-img-top"
      alt={post.title}
      style={{ height: featured ? "380px" : "240px", objectFit: "cover" }}
    />

    <div className="card-body">
      <span className="badge bg-primary mb-2">{post.category}</span>
      {featured && (
        <div className="badge bg-warning text-dark mb-2">
          <Flame size={16} className="me-1" /> Breaking News
        </div>
      )}

      <h4 className={`fw-bold mb-2 ${featured ? "fs-3" : "fs-5"}`}>{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>

      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span>🕒 {post.date}</span>
        <span>👁 {post.views}</span>
      </div>
    </div>
  </div>
);

const WorldNewsCard = ({ item }) => (
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
          <span className="badge bg-info mb-2">{item.category}</span>
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
// MAIN WORLD NEWS PAGE
// ---------------------------------------
export default function WorldNews() {
  return (
    <div className="min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <Globe2 className="me-2 text-primary" />
          World News & Global Headlines
        </h2>

        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            {/* FEATURED */}
            <div className="mb-4">
              <TopWorldCard post={worldTopStories[0]} featured />
            </div>

            {/* OTHER TOP STORIES */}
            <div className="row">
              {worldTopStories.slice(1).map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <TopWorldCard post={post} />
                </div>
              ))}
            </div>

            {/* LATEST */}
            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Updates</h4>
            {worldLatest.map((news) => (
              <WorldNewsCard key={news.id} item={news} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white fw-semibold">
                <TrendingUp size={16} className="me-2" />
                Trending Worldwide
              </div>

              <div className="list-group list-group-flush">
                {[
                  "Global AI Summit 2025",
                  "Oil Prices Hit 12-Month Low",
                  "Major Earthquake in Pacific",
                  "US–China Trade Talks Resume",
                ].map((item, i) => (
                  <a key={i} className="list-group-item hover-item">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* ADVERTISEMENT */}
            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Advertise Globally</h5>
              <p className="mb-0 small">Place your global campaign here.</p>
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
          border-left: 4px solid #003566;
        }
      `}</style>
    </div>
  );
}
