import { useParams } from "react-router-dom";
import { Briefcase, TrendingUp, Building2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { NewContext } from "../../context/MyContext";

/* ---------------------------------------
   TOP JOB CARD
--------------------------------------- */
const TopJobCard = ({ post, featured = false, onClick }) => (
  <div
    className={`card h-100 border-0 shadow-sm hover-card ${
      featured ? "featured-post" : ""
    }`}
    onClick={!featured ? onClick : undefined}
  >
    <img
      src={post.image}
      className="card-img-top"
      alt={post.title}
      style={{
        height: featured ? "380px" : "240px",
        objectFit: "cover",
      }}
    />

    <div className="card-body">
      <span className="badge bg-danger mb-2">
        {post.category?.name || "Job News"}
      </span>

      <h4 className={`fw-bold mb-2 ${featured ? "fs-3" : "fs-5"}`}>
        {post.title}
      </h4>

      {featured && (
        <p
          className="text-muted small lh-sm"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              post.content?.replace(
                /<(h[1-6])>/gi,
                '<$1 style="font-size:0.95rem;font-weight:500">'
              ) || ""
            ),
          }}
        />
      )}

      <div className="d-flex justify-content-between mt-3 text-muted small">
        <span>
          <Building2 size={14} className="me-1" />
          Admin
        </span>
        <span>
          🕒 {post.createdAt && new Date(post.createdAt).toLocaleDateString()}
        </span>
        <span>👁 {post.views || 0}</span>
      </div>
    </div>
  </div>
);

/* ---------------------------------------
   MAIN PAGE
--------------------------------------- */
export default function CategoryNews() {
  const { category } = useParams();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // const [news, setNews] = useState([]);
  const{news,setNews}=useContext(NewContext);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Normalize slug → readable category
  const normalizeCategory = (slug) =>
    slug
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  // 🔹 Fetch data
  const fetchNews = async () => {
    try {
      setLoading(true);
      // setFeaturedPost(null);
      // setNews([]);

      const res = await axios.get(`${BACKEND_URL}/api/news`, {
        params: { category: normalizeCategory(category) },
      });

      const data = res.data?.data || [];

      if (data.length > 0) setFeaturedPost(data[0]);
      setNews(data);
    } catch (err) {
      console.error(err);
      setFeaturedPost(null);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Reload on path change
  useEffect(() => {
    fetchNews();
  }, [category]);

  /* ---------------- NO DATA ---------------- */
  if (!loading && news.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h5 className="text-muted">There are no posts in this category</h5>
        <p className="small text-muted">
          Please explore other categories or check back later.
        </p>
      </div>
    );
  }

  /* ---------------- MAIN UI ---------------- */
  return (
    <div className="min-vh-100 position-relative">
      {/* ===== CONTENT ===== */}
      <div className={loading ? "content-blur" : ""}>
      <div className="container py-4">
        <div className="row">
          {/* LEFT */}
          <div className="col-lg-8">
            {featuredPost && (
              <div className="mb-4">
                <TopJobCard post={featuredPost} featured />
              </div>
            )}

            <div className="row">
              {news
                .filter((p) => p._id !== featuredPost?._id)
                .slice(0, 10)
                .map((post) => (
                  <div className="col-md-6 mb-4" key={post._id}>
                    <TopJobCard
                      post={post}
                      onClick={() => {
                        setFeaturedPost(post);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-danger text-white fw-semibold">
                  <TrendingUp size={16} className="me-2" />
                  Trending Job Alerts
                </div>
              <div className="list-group list-group-flush">
                {news.map((t, i) => (
                  <div key={i} className="list-group-item hover-item">
                    {t.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* ===== LOADING OVERLAY ===== */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner-border text-dark" />
        </div>
      )}

      {/* STYLES */}
      <style jsx="true">{`
        .hover-card {
          transition: 0.3s;
          cursor: pointer;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .featured-post {
          border-left: 4px solid #b30000;
          cursor: default;
        }
          .content-blur {
          filter: blur(3px);
          pointer-events: none;
          user-select: none;
          transition: filter 0.2s ease;
        }

        .loading-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .spinner-border {
          width: 3rem;
          height: 3rem;
        }
      `}</style>
    </div>
  );
}
