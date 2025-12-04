import { Banknote, TrendingUp, Clock, Building2, ChartLine } from "lucide-react";

// ---------------------------------------
// BUSINESS NEWS DATA
// ---------------------------------------
const businessTop = [
  {
    id: 1,
    title: "Sensex Surges 900 Points as Global Markets Rally",
    excerpt: "Nifty crosses 24,000 mark driven by bank and IT stocks.",
    category: "Markets",
    image: "https://images.unsplash.com/photo-1554224155-8d233b7c85a5?w=1200",
    date: "2 hours ago",
    views: "65K",
  },
  {
    id: 2,
    title: "Reliance Retail Plans Major Expansion in Rural India",
    excerpt: "500+ new stores to boost local consumption and supply chain growth.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200",
    date: "6 hours ago",
    views: "33K",
  },
  {
    id: 3,
    title: "Startups Raise $600M in Latest Funding Round",
    excerpt: "Fintech & AI-led startups dominate the investment charts.",
    category: "Startups",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200",
    date: "9 hours ago",
    views: "18K",
  },
];

const businessLatest = [
  {
    id: 4,
    title: "RBI Keeps Repo Rate Unchanged",
    category: "Banking",
    date: "30 mins ago",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400",
  },
  {
    id: 5,
    title: "Tata Motors Announces Price Cut on EVs",
    category: "Automobile",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400",
  },
  {
    id: 6,
    title: "India Becomes 3rd Largest Startup Ecosystem",
    category: "Startups",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1536305030014-6c1e976d7f52?w=400",
  },
];

// ---------------------------------------
// REUSABLE CARDS
// ---------------------------------------
const BusinessCard = ({ post, featured }) => (
  <div className={`card h-100 border-0 shadow-sm hover-card ${featured ? "featured-post" : ""}`}>
    <img
      src={post.image}
      className="card-img-top"
      style={{ height: featured ? "380px" : "240px", objectFit: "cover" }}
      alt=""
    />

    <div className="card-body">
      <span className="badge bg-success mb-2">{post.category}</span>
      <h4 className={`fw-bold mb-2 ${featured ? "fs-3" : "fs-5"}`}>{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>

      <div className="d-flex justify-content-between text-muted small">
        <span>🕒 {post.date}</span>
        <span>👁 {post.views}</span>
      </div>
    </div>
  </div>
);

const BusinessLatestCard = ({ item }) => (
  <div className="card border-0 shadow-sm mb-3 hover-card">
    <div className="row g-0">
      <div className="col-4">
        <img src={item.image} className="img-fluid h-100 rounded-start" style={{ objectFit: "cover" }} alt="" />
      </div>

      <div className="col-8">
        <div className="card-body">
          <span className="badge bg-warning text-dark mb-2">{item.category}</span>
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
// MAIN BUSINESS PAGE
// ---------------------------------------
export default function BusinessNews() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 pb-2 border-bottom">
          <Banknote className="me-2 text-success" />
          Business & Economy
        </h2>

        <div className="row">
          {/* LEFT */}
          <div className="col-lg-8">
            <div className="mb-4">
              <BusinessCard featured post={businessTop[0]} />
            </div>

            <div className="row">
              {businessTop.slice(1).map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <BusinessCard post={post} />
                </div>
              ))}
            </div>

            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Business Updates</h4>
            {businessLatest.map((news) => (
              <BusinessLatestCard key={news.id} item={news} />
            ))}
          </div>

          {/* SIDEBAR */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-success text-white fw-semibold">
                <TrendingUp size={16} className="me-2" />
                Market Trending
              </div>

              <div className="list-group list-group-flush">
                {[
                  "Bitcoin crosses $90,000",
                  "Gold price hits record high",
                  "Rupee strengthens against USD",
                  "Adani stocks surge again",
                ].map((t, i) => (
                  <a key={i} className="list-group-item hover-item">
                    {t}
                  </a>
                ))}
              </div>
            </div>

            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Advertise Here</h5>
              <p className="mb-0 small">Promote your business on our platform.</p>
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
          transform: translateY(-6px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.20);
        }
        .hover-item:hover {
          background: #f6f6f6;
        }
        .featured-post {
          border-left: 4px solid #008a3d;
        }
      `}</style>
    </div>
  );
}
