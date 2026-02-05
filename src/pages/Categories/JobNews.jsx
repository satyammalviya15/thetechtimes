import { Briefcase, TrendingUp, Clock, Award, Building2 } from "lucide-react";

// ---------------------------------------
// JOB NEWS DATA
// ---------------------------------------
const jobTopStories = [
  {
    id: 1,
    title: "TCS Announces 40,000 New Hiring Positions for 2025",
    excerpt: "Largest hiring drive focusing on AI, Cloud, and Cybersecurity roles.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
    company: "TCS",
    category: "Hiring",
    date: "2 hours ago",
    views: "52K",
  },
  {
    id: 2,
    title: "Google India Offers ₹18 LPA for Entry-Level Engineers",
    excerpt: "Freshers get massive salary boost due to demand in AI-based development.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1200",
    company: "Google",
    category: "Salary Update",
    date: "5 hours ago",
    views: "31K",
  },
  {
    id: 3,
    title: "Infosys to Hire 12,000 Graduates from Tier-2 Cities",
    excerpt: "Focus on remote development centers and hybrid tech parks.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
    company: "Infosys",
    category: "Recruitment",
    date: "8 hours ago",
    views: "22K",
  },
];

const jobLatest = [
  {
    id: 4,
    title: "Amazon Opens 3,000 Work-From-Home Jobs",
    category: "WFH",
    date: "1 hour ago",
    image: "https://images.unsplash.com/photo-1581091870627-3ca5df85e26f?w=400",
  },
  {
    id: 5,
    title: "HCL Hiring 5,000 Engineers in Cloud & Cybersecurity",
    category: "Tech Jobs",
    date: "3 hours ago",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400",
  },
  {
    id: 6,
    title: "Startup Ecosystem Generates 20,000+ New Jobs",
    category: "Startup",
    date: "6 hours ago",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400",
  },
];

// ---------------------------------------
// REUSABLE CARD COMPONENTS
// ---------------------------------------
const TopJobCard = ({ post, featured = false }) => (
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
          <Award size={16} className="me-1" /> Featured
        </div>
      )}

      <h4 className={`fw-bold mb-2 ${featured ? "fs-3" : "fs-5"}`}>{post.title}</h4>
      <p className="text-muted small">{post.excerpt}</p>

      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span>
          <Building2 size={14} className="me-1" /> {post.company}
        </span>
        <span>🕒 {post.date}</span>
        <span>👁 {post.views}</span>
      </div>
    </div>
  </div>
);

const JobNewsCard = ({ item }) => (
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
// MAIN JOB PAGE COMPONENT
// ---------------------------------------
export default function JobPage() {
  return (
    <div className="min-vh-100">
      <div className="container py-4">
        <h2 className="fw-bold mb-4 border-bottom pb-2">
          <Briefcase className="me-2 text-danger" />
          Job News & Hiring Updates
        </h2>

        <div className="row">
          {/* LEFT SECTION */}
          <div className="col-lg-8">
            {/* FEATURED JOB */}
            <div className="mb-4">
              <TopJobCard post={jobTopStories[0]} featured />
            </div>

            {/* OTHER TOP JOB CARDS */}
            <div className="row">
              {jobTopStories.slice(1).map((post) => (
                <div className="col-md-6 mb-4" key={post.id}>
                  <TopJobCard post={post} />
                </div>
              ))}
            </div>

            {/* LATEST JOB UPDATES */}
            <h4 className="fw-bold border-bottom pb-2 mt-4">Latest Hiring</h4>
            {jobLatest.map((news) => (
              <JobNewsCard key={news.id} item={news} />
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-4">
            {/* TRENDING JOBS */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-danger text-white fw-semibold">
                <TrendingUp size={16} className="me-2" />
                Trending Job Alerts
              </div>

              <div className="list-group list-group-flush">
                {[
                  "Wipro hires 10,000 freshers",
                  "Accenture starts mega recruitment",
                  "HDFC Bank opens clerk-level positions",
                  "Flipkart hiring for WFH roles",
                ].map((t, i) => (
                  <a key={i} className="list-group-item hover-item">
                    {t}
                  </a>
                ))}
              </div>
            </div>

            {/* AD AREA */}
            <div className="card border-0 bg-warning text-dark p-4 shadow-sm">
              <h5>Post Your Job</h5>
              <p className="mb-0 small">
                Promote your company's job openings here.
              </p>
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
          border-left: 4px solid #b30000;
        }
      `}</style>
    </div>
  );
}
