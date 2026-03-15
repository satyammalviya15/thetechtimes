import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import { Clock, User, Eye, Share2, Facebook, Twitter, Linkedin, MessageCircle, ArrowLeft, TrendingUp, Link as LinkIcon, Instagram } from "lucide-react";
import { toast } from "react-toastify";

const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedNews, setRelatedNews] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/news/slug/${slug}`);
        if (res.data.success) {
          setNews(res.data.data);
          // Fetch related news (same category)
          fetchRelatedNews(res.data.data.category?.name);
        }
      } catch (error) {
        console.error("Failed to fetch news detail:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedNews = async (category) => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/news`, {
          params: { category, limit: 5 }
        });
        if (res.data.success) {
          setRelatedNews(res.data.data.filter(item => item.slug !== slug));
        }
      } catch (error) {
        console.error("Failed to fetch related news:", error);
      }
    };

    fetchNewsDetail();
    window.scrollTo(0, 0);
  }, [slug, BACKEND_URL]);

  if (loading) {
    return (
      <div className="container py-5 mt-5 text-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="container py-5 mt-5 text-center min-vh-100">
        <h2>News not found</h2>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  const articleUrl = window.location.href;
  const articleTitle = encodeURIComponent(news.title);

  const shareHandlers = {
    facebook: () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`, "_blank");
    },
    twitter: () => {
      window.open(`https://twitter.com/intent/tweet?text=${articleTitle}&url=${articleUrl}`, "_blank");
    },
    whatsapp: () => {
      window.open(`https://api.whatsapp.com/send?text=${articleTitle}%20${articleUrl}`, "_blank");
    },
    linkedin: () => {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`, "_blank");
    },
    copyLink: () => {
      navigator.clipboard.writeText(articleUrl);
      toast.success("Link copied to clipboard!");
    }
  };

  const articleDate = news.publishedAt || news.createdAt;
  const formattedDate = articleDate && !isNaN(new Date(articleDate).getTime())
    ? new Date(articleDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
    : "Recently";

  return (
    <div className="news-detail-page bg-light min-vh-100 pb-5">
      <div className="detail-hero position-relative mb-5 overflow-hidden">
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)", zIndex: 1 }}></div>
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-100 h-100 object-fit-cover"
        />
        <div className="hero-content position-absolute bottom-0 start-0 w-100 p-3 p-md-5 text-white" style={{ zIndex: 2 }}>
          <div className="container px-0 px-md-3">
            <span className="badge bg-danger mb-2 mb-md-3 px-2 px-md-3 py-1 py-md-2 fs-7 fs-md-6">{news.category?.name || "News"}</span>
            <h1 className="hero-title fw-bold mb-3">{news.title}</h1>
            <div className="d-flex flex-wrap align-items-center gap-2 gap-md-4 text-white-50 small">
              <span className="d-flex align-items-center gap-2"><User size={18} /> {news.author?.name || "Admin"}</span>
              <span className="d-flex align-items-center gap-2"><Clock size={18} /> {formattedDate}</span>
              <span className="d-flex align-items-center gap-2"><Eye size={18} /> {news.views} views</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          {/* Main Article Content */}
          <div className="col-lg-8">
            <div className="article-body bg-white p-4 p-md-5 rounded-4 shadow-sm">
              <p className="lead fw-medium text-secondary mb-4 fst-italic">
                {news.summary}
              </p>
              
              <div 
                className="content-rich-text"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(news.content) }}
              />

              <hr className="my-5" />

              {/* Tags */}
              {news.tags && news.tags.length > 0 && (
                <div className="tags-section mb-4">
                  <h6 className="fw-bold mb-3">Tags:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {news.tags.map(tag => (
                      <span key={tag._id} className="badge bg-light text-dark border px-3 py-2">
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="share-section d-flex align-items-center gap-2 flex-wrap">
                <span className="fw-bold me-2"><Share2 size={20} className="me-2 text-danger" /> Share:</span>
                <button 
                  onClick={shareHandlers.whatsapp} 
                  className="btn btn-outline-success btn-sm rounded-circle p-2 share-btn" 
                  title="Share on WhatsApp"
                >
                  <MessageCircle size={18} />
                </button>
                <button 
                  onClick={shareHandlers.facebook} 
                  className="btn btn-outline-primary btn-sm rounded-circle p-2 share-btn" 
                  title="Share on Facebook"
                >
                  <Facebook size={18} />
                </button>
                <button 
                  onClick={shareHandlers.twitter} 
                  className="btn btn-outline-info btn-sm rounded-circle p-2 share-btn" 
                  title="Share on Twitter"
                >
                  <Twitter size={18} />
                </button>
                <button 
                  onClick={shareHandlers.linkedin} 
                  className="btn btn-outline-primary btn-sm rounded-circle p-2 share-btn" 
                  title="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
                <button 
                  onClick={() => window.open("https://instagram.com", "_blank")} 
                  className="btn btn-outline-danger btn-sm rounded-circle p-2 share-btn" 
                  title="Visit Instagram"
                >
                  <Instagram size={18} />
                </button>
                <button 
                  onClick={shareHandlers.copyLink} 
                  className="btn btn-outline-secondary btn-sm rounded-circle p-2 share-btn" 
                  title="Copy Link"
                >
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-4">
               <button onClick={() => window.history.back()} className="btn btn-link text-dark text-decoration-none d-flex align-items-center gap-2">
                 <ArrowLeft size={18} /> Back to News
               </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar-sticky" style={{ position: "sticky", top: "100px" }}>
              {/* Related News Card */}
              <div className="card border-0 shadow-sm rounded-4 mb-4">
                <div className="card-header bg-white border-0 py-3">
                  <h5 className="fw-bold mb-0 d-flex align-items-center gap-2">
                    <TrendingUp size={20} className="text-danger" /> Related News
                  </h5>
                </div>
                <div className="card-body p-0">
                  <div className="list-group list-group-flush">
                    {relatedNews.length > 0 ? (
                      relatedNews.map((item) => (
                        <Link 
                          to={`/article/${item.slug}`} 
                          key={item._id} 
                          className="list-group-item list-group-item-action p-3 border-0 border-bottom"
                        >
                          <div className="row g-3 align-items-center">
                            <div className="col-4">
                              <img src={item.image} alt="" className="img-fluid rounded-3" style={{ height: "60px", width: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col-8">
                              <h6 className="mb-1 fw-bold small line-clamp-2">{item.title}</h6>
                              <small className="text-muted">
                                {item.publishedAt || item.createdAt 
                                  ? new Date(item.publishedAt || item.createdAt).toLocaleDateString("en-GB", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "2-digit",
                                    }) 
                                  : "Recently"}
                              </small>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="p-3 text-muted small">No related news found.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Subscribe Widget */}
              <div className="card border-0 shadow-sm rounded-4 bg-dark text-white p-4">
                  <h5 className="fw-bold mb-3">Stay Updated</h5>
                  <p className="small text-white-50 mb-3">Get the latest tech news delivered right to your inbox daily.</p>
                  <div className="input-group mb-0">
                    <input type="email" className="form-control bg-transparent text-white border-secondary" placeholder="Your Email" />
                    <button className="btn btn-primary">Join</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .content-rich-text {
          font-family: 'Inter', sans-serif;
          line-height: 1.8;
          color: #2d3436;
          font-size: 1.1rem;
        }
        .content-rich-text h2, .content-rich-text h3 {
          margin-top: 2rem;
          font-weight: 700;
          color: #000;
        }
        .content-rich-text p {
          margin-bottom: 1.5rem;
        }
        .content-rich-text img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 2rem 0;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .detail-hero {
          height: 60dvh;
          min-height: 400px;
        }
        .hero-title {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          line-height: 1.2;
        }
        @media (max-width: 768px) {
          .detail-hero {
            height: 50dvh;
            min-height: 350px;
          }
        }
        .fs-7 {
          font-size: 0.8rem;
        }
        .share-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .share-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default NewsDetail;
