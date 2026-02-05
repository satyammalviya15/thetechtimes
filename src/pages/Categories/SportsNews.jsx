import { Trophy, Clock, TrendingUp, Flame } from "lucide-react";

// ---------------------------------------
// SPORTS NEWS DATA
// ---------------------------------------
const sportsTopStories = [
  {
    id: 1,
    title: "India Beats Australia in a Thrilling Final",
    excerpt: "Last-over victory as India lifts the 2025 Championship Trophy.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200",
    category: "Cricket",
    date: "2 hours ago",
    views: "180K",
  },
  {
    id: 2,
    title: "Cristiano Ronaldo Breaks Another World Record",
    excerpt: "Ronaldo surpasses 900 career goals, a historic milestone.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=1200",
    category: "Football",
    date: "5 hours ago",
    views: "120K",
  },
  {
    id: 3,
    title: "India Secures 15 Medals in Asian Games 2025",
    excerpt: "Strong performance in athletics and wrestling.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200",
    category: "Athletics",
    date: "7 hours ago",
    views: "74K",
  },
];

const sportsLatest = [
  {
    id: 4,
    title: "IPL 2025 Mega Auction to Begin Next Week",
    category: "Cricket",
    date: "1 hour ago",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=600",
  },
  {
    id: 5,
    title: "US Gymnastics Team Dominates World Cup",
    category: "Gymnastics",
    date: "3 hours ago",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8c5?w=600",
  },
  {
    id: 6,
    title: "F1: Hamilton Secures Pole Position in Japan GP",
    category: "Formula 1",
    date: "6 hours ago",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
  },
];

// ---------------------------------------
// CARDS
// ---------------------------------------
const TopSportsCard = ({ post, featured = false }) => (
  <div className={`card h-100 border-0 shadow-sm hover-card ${featured ? "featured-post" : ""}`}>
    <img
      src={post.image}
      className="card-img-top"
      alt={post.title}
      style={{ height: featured ? "380px" : "240px", objectFit: "cover" }}
    />

    <div className="card-body">
      <span className="badge bg-success mb-2">{post.category}</span>

      {featured && (
        <div className="badge bg-warning text-dark mb-2">
          <Flame size={16} className="me-1" /> Top Story
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

const SportsNewsCard = ({ item }) => (
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
          <span className="badge bg-danger mb-2">{item.category}</span>
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
// MAIN PAGE
// ---------------------------------------
export default function SportsNews() {
  return (
    <div className="min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <Trophy className="me-2 text-success" />
          Sports News & Live Updates
        </h2>

        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-8">
            {/* FEATURED */}
            <div className="mb-4">
              <TopSportsCard post={sportsTopStories[0]} featured />
            </div>

            {/* TOP SPORTS STORIES */}
            <div className="row">
              {sportsTopStories.slice(1).map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <TopSportsCard post={post} />
                </div>
              ))}
            </div>

            {/* LATEST UPDATES */}
            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Sports Updates</h4>
            {sportsLatest.map((news) => (
              <SportsNewsCard key={news.id} item={news} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-success text-white fw-semibold">
                <TrendingUp size={16} className="me-2" />
                Trending in Sports
              </div>

              <div className="list-group list-group-flush">
                {[
                  "India wins gold in 100m relay",
                  "Messi expected to join new club",
                  "NBA finals schedule released",
                  "Pakistan defeats England 3-2",
                ].map((item, i) => (
                  <a key={i} className="list-group-item hover-item">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* AD AREA */}
            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Advertise Sports Gear</h5>
              <p className="mb-0 small">Promote your sports products here.</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXTRA STYLES */}
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
          border-left: 4px solid #145a32;
        }
      `}</style>
    </div>
  );
}
