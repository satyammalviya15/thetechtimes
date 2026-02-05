import {
  Globe,
  Clock,
  TrendingUp,
  Flame,
  Bookmark,
} from "lucide-react";

// ---------------------------------------
// INDIA NEWS DATA
// ---------------------------------------
const indiaTopStories = [
  {
    id: 1,
    title: "India Becomes World's 3rd Largest Economy",
    excerpt: "IMF confirms India's major rise in GDP ahead of Japan & Germany.",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=1200",
    category: "Economy",
    date: "1 hour ago",
    views: "95K",
  },
  {
    id: 2,
    title: "ISRO Successfully Tests Reusable Launch Vehicle",
    excerpt: "New RLV system reduces launch cost by 80%.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200",
    category: "Science",
    date: "4 hours ago",
    views: "40K",
  },
  {
    id: 3,
    title: "Delhi Introduces New Air Quality Action Plan",
    excerpt: "Strict pollution-control rules for vehicles & industries.",
    image: "https://images.unsplash.com/photo-1516528387618-afa90b13e000?w=1200",
    category: "Environment",
    date: "6 hours ago",
    views: "28K",
  },
];

const indiaLatest = [
  {
    id: 4,
    title: "Fuel Prices Drop Across Major Cities",
    category: "Economy",
    date: "20 minutes ago",
    image: "https://images.unsplash.com/photo-1593941707874-ef25b8b252ac?w=500",
  },
  {
    id: 5,
    title: "India Wins 12 Medals in Asian Games",
    category: "Sports",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
  },
  {
    id: 6,
    title: "Heavy Rainfall Alert Issued in 6 States",
    category: "Weather",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500",
  },
];

// ---------------------------------------
// REUSABLE CARDS
// ---------------------------------------
const TopIndiaCard = ({ post, featured = false }) => (
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

const IndiaNewsCard = ({ item }) => (
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

// ---------------------------------------
// MAIN INDIA NEWS PAGE
// ---------------------------------------
export default function IndiaNews() {
  return (
    <div className="min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <Globe className="me-2 text-primary" />
          India News & National Updates
        </h2>

        <div className="row">
          {/* LEFT SECTION */}
          <div className="col-lg-8">
            {/* FEATURED STORY */}
            <div className="mb-4">
              <TopIndiaCard post={indiaTopStories[0]} featured />
            </div>

            {/* OTHER TOP STORIES */}
            <div className="row">
              {indiaTopStories.slice(1).map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <TopIndiaCard post={post} />
                </div>
              ))}
            </div>

            {/* LATEST NEWS LIST */}
            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Updates</h4>
            {indiaLatest.map((news) => (
              <IndiaNewsCard key={news.id} item={news} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            {/* TRENDING SECTION */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-primary text-white fw-semibold">
                <TrendingUp size={16} className="me-2" />
                Trending in India
              </div>

              <div className="list-group list-group-flush">
                {[
                  "Lok Sabha Winter Session Updates",
                  "Major Highway Project Approved",
                  "Gold Prices Touch New High",
                  "ISRO Gears Up for Gaganyaan",
                ].map((item, idx) => (
                  <a key={idx} className="list-group-item hover-item">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* AD / PROMO */}
            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Promote Your Business</h5>
              <p className="mb-0 small">Place your advertisements here.</p>
            </div>
          </div>
        </div>
      </div>

      {/* HOVER + EXTRA STYLES */}
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
          border-left: 4px solid #0047ab;
        }
      `}</style>
    </div>
  );
}
