import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Printer, Download, ChevronLeft, Calendar, AlertTriangle, TrendingUp, Globe, Cpu, Newspaper, Cloud, Sun, Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NewContext } from '../../context/MyContext';

const EPaper = () => {
  const navigate = useNavigate();
  const context = useContext(NewContext);
  const contextNews = context?.news || [];
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        console.log("EPaper: Fetching news for comprehensive edition...");
        // If context news has more than 15 articles, use it, otherwise fetch from API with higher limit
        if (contextNews && contextNews.length >= 15) {
          setArticles(contextNews);
          setLoading(false);
        } else {
          const res = await axios.get(`${BACKEND_URL}/api/news?limit=30`); // Increased limit
          const data = res.data?.data || res.data || [];
          setArticles(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      } catch (err) {
        console.error("EPaper: Error fetching news:", err);
        setError("Failed to load news articles.");
        setLoading(false);
      }
    };
    fetchNews();
  }, [contextNews, BACKEND_URL]);

  const handlePrint = () => {
    window.print();
  };

  const safeSubstring = (str, start, end) => {
    if (typeof str !== 'string') return '';
    return str.substring(start, end);
  };

  const stripHtml = (html) => {
    if (typeof html !== 'string') return '';
    return html.replace(/<[^>]+>/g, '');
  };

  const getAuthorName = (author) => {
    if (typeof author === 'object' && author !== null) return author.name || 'Staff Reporter';
    return author || 'Staff Reporter';
  };

  // Fallback helper for sections
  const getSlice = (start, count) => {
    if (articles.length === 0) return [];
    const sliced = articles.slice(start, start + count);
    if (sliced.length > 0) return sliced;
    // If we're out of articles, wrap around or use first few
    return articles.slice(0, count);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
        <div className="text-center">
          <div className="spinner-border text-dark mb-2" role="status"></div>
          <div className="fw-black text-uppercase tracking-widest">Generating Digital Edition...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="epaper-wrapper bg-light min-vh-100">
      {/* Search/Exit Overlay - Hidden on Print */}
      <div className="container-fluid bg-black text-white py-1 d-print-none">
        <div className="container d-flex justify-content-between align-items-center x-small uppercase fw-bold opacity-75">
          <div className="d-flex gap-3">
             <span className="cursor-pointer" onClick={() => navigate('/')}>HOME PAGE</span>
             <span className="cursor-pointer">SUBSCRIBE</span>
             <span className="cursor-pointer">ADVERTISE</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Search size={12} /> SEARCH ARCHIVES
          </div>
        </div>
      </div>

      {/* Dynamic Controls - Hidden on Print */}
      <div className="container-fluid bg-dark text-white py-3 d-print-none sticky-top shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <button 
              className="btn btn-sm btn-outline-light d-flex align-items-center gap-2" 
              onClick={() => navigate(-1)}
            >
              <ChevronLeft size={16} /> BACK
            </button>
            <div className="vr d-none d-md-block opacity-25"></div>
            <div className="d-none d-md-flex align-items-center gap-3 small">
              <div className="d-flex align-items-center gap-1 opacity-75">
                <Newspaper size={14} /> EDITION: {today}
              </div>
              <div className="d-flex align-items-center gap-1 text-info">
                 <Cloud size={14} /> 24°C / Haze
              </div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-light d-flex align-items-center gap-2 fw-black" onClick={handlePrint}>
              <Printer size={16} /> PRINT
            </button>
            <button className="btn btn-sm btn-primary d-flex align-items-center gap-2 fw-black shadow-sm" onClick={handlePrint}>
              <Download size={16} /> PDF
            </button>
          </div>
        </div>
      </div>

      <div className="container bg-white shadow-lg p-0 my-3 my-md-5 mx-auto newspaper-container">
        {/* Weather & Market Bar */}
        <div className="market-weather-strip border-bottom border-dark px-5 py-2 d-flex justify-content-between align-items-center small fw-bold text-uppercase border-top border-dark mt-2 mx-1">
           <div className="d-flex align-items-center gap-3">
             <span className="d-flex align-items-center gap-1">
               <Sun size={14} className="text-warning" /> NEW DELHI 32°C
             </span>
             <div className="vr"></div>
             <span className="d-flex align-items-center gap-1">
               <Cloud size={14} className="text-secondary" /> MUMBAI 29°C
             </span>
             <div className="vr"></div>
             <span className="d-flex align-items-center gap-1">
               <MapPin size={14} /> BENGALURU 26°C
             </span>
           </div>

           <div className="d-flex align-items-center gap-3">
              <span className="text-success text-shadow-sm">NIFTY 50 ▲ 0.8%</span>
              <div className="vr"></div>
              <span className="text-success text-shadow-sm">SENSEX ▲ 0.7%</span>
              <div className="vr"></div>
              <span className="text-primary text-shadow-sm">USD/INR 83.42</span>
           </div>

        </div>

        {/* Masthead */}
        <header className="newspaper-masthead text-center pt-5 px-5 pb-2">
          <div className="d-flex justify-content-between align-items-end mb-1 small fw-black text-uppercase border-bottom border-dark border-2 pb-1">
            <span>Vol. XLII --- No. 156</span>
            <span className="fs-6 fw-black text-danger px-3 border border-danger border-2 mb-1">THE TECH TIMES</span>
            <span>Price: ₹1.00</span>

          </div>
          <h1 className="masthead-title display-1 fw-black py-1">THE TECH TIMES</h1>
          <div className="d-flex justify-content-between align-items-center border-top border-bottom border-dark border-3 py-2 small fw-bold text-uppercase mt-2">
            <div className="d-flex align-items-center gap-2">
              <Globe size={14} /> India & World Perspectives
            </div>

            <div className="fw-black fs-5 tracking-wide">{today}</div>
            <div className="d-flex align-items-center gap-2 text-end">
               Published Exclusively at <br/> www.thetechtimes.com
            </div>
          </div>
        </header>

        {/* Trending Ticker */}
        <div className="trending-ticker border-bottom border-dark py-2 bg-light d-flex align-items-center mb-4 px-5">
          <span className="fw-black text-danger me-4 small border-end border-danger pe-3">LATEST NEWS</span>
          <div className="ticker-content d-flex gap-5 overflow-hidden small fw-bold text-uppercase fst-italic" style={{ whiteSpace: 'nowrap' }}>
            {getSlice(12, 6).map((art, idx) => (
              <span key={idx} className="ticker-item">{art.title} •</span>
            ))}
          </div>
        </div>

        {/* Headlines & Main Story Section */}
        <main className="px-5 pb-5">
          {articles.length > 0 && (
            <div className="row g-5 border-bottom border-dark pb-5 mb-5">
              <div className="col-lg-9 border-end border-dark pe-lg-5">
                <article className="main-feature">
                   {/* Inside Today */}
                   <div className="row g-0 border-bottom border-dark mb-4 pb-2 bg-light-subtle px-2 pt-2 border-top">
                     <div className="col-12">
                       <h6 className="fw-black text-uppercase small border-bottom border-dark pb-1 mb-2 d-flex justify-content-between">
                         <span>Inside Today's Edition</span>
                         <span className="text-muted italic fw-normal text-none lowercase">18 pages of digital excellence</span>
                       </h6>
                       <div className="d-flex flex-wrap gap-4 small fw-black tracking-tighter">
                          <span className="cursor-pointer hover-danger">WORLD <span className="text-danger">P.4</span></span>
                          <span className="cursor-pointer hover-danger">ECONOMY <span className="text-danger">P.7</span></span>
                          <span className="cursor-pointer hover-danger">TECH LAB <span className="text-danger">P.12</span></span>
                          <span className="cursor-pointer hover-danger">OPINION <span className="text-danger">P.15</span></span>
                          <span className="cursor-pointer hover-danger">CAREERS <span className="text-danger">P.18</span></span>
                          <span className="cursor-pointer hover-danger">MARKETS <span className="text-danger">P.22</span></span>
                       </div>
                     </div>
                   </div>

                   <h6 className="text-danger fw-black text-uppercase mb-2 border-bottom border-danger d-inline-block">Special Report</h6>
                   <h1 className="display-2 fw-black headline-serif mb-4 tracking-tight">{articles[0].title}</h1>
                   <div className="newspaper-meta mb-4 d-flex justify-content-between align-items-center border-top border-bottom py-2 italic text-muted">
                      <span>By <strong>{getAuthorName(articles[0].author)}</strong></span>
                      <span>Published in India • {articles[0].category?.name || 'Top News'}</span>
                   </div>


                   <div className="row">
                      <div className="col-md-5">
                        <figure className="mb-4">
                          <img 
                            src={articles[0].image} 
                            className="img-fluid grayscale-print border border-dark p-1" 
                            alt="Feature"
                          />
                          <figcaption className="small mt-2 fst-italic border-bottom border-dark pb-1">
                            {safeSubstring(articles[0].title, 0, 80)}...
                          </figcaption>
                        </figure>
                        
                        {/* Editor's Note */}
                        <div className="editor-note p-3 bg-white border border-dark border-2 small mb-4 italic">
                           <h6 className="fw-black uppercase x-small border-bottom mb-2 pb-1">Historical Context</h6>
                           As the digital landscape evolves, researchers suggest that the current trends in {articles[0].category?.name || 'technology'} will define the next decade of human interaction. This report dives deep into the implications.
                        </div>

                        {/* On This Day */}
                        <div className="on-this-day border-top border-dark pt-3">
                           <h6 className="fw-black text-uppercase mb-2 h6">On This Day</h6>
                           <p className="x-small fst-italic mb-0"><strong>In 2004:</strong> The first major social networking revolution began, forever changing how information is consumed and shared globally. Experts remained skeptical of the long-term impact of digital-first publishing.</p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="lead fw-bold mb-4 drop-cap">
                          {articles[0].excerpt || safeSubstring(stripHtml(articles[0].content), 0, 300)}...
                        </p>
                        <div className="newspaper-columns">
                           {safeSubstring(stripHtml(articles[0].content), 300, 2000)}...
                        </div>
                      </div>
                   </div>
                </article>
              </div>
              <div className="col-lg-3 d-flex flex-column">
                <aside className="sidebar-bulletin flex-grow-1">
                   <h4 className="border-bottom border-dark border-2 pb-2 mb-4 fw-black text-center text-uppercase h5">The Morning Bulletin</h4>
                   {getSlice(1, 5).map((art, idx) => (
                     <div key={idx} className={`mb-4 ${idx < 3 ? 'border-bottom border-secondary pb-3' : ''}`}>
                        <h6 className="fw-black mb-1 headline-serif">{art.title}</h6>
                        <p className="small text-muted mb-0">{safeSubstring(stripHtml(art.content), 0, 100)}...</p>
                     </div>
                   ))}
                   
                   {/* Letters to the Editor */}
                   <div className="letters-to-editor mt-5 pt-4 border-top border-dark">
                      <h6 className="fw-black uppercase border-bottom border-dark pb-1 mb-3">Opinion Corner</h6>
                      <div className="mb-3">
                         <p className="x-small mb-1 italic">"The transition to digital-only editions is a necessary step for sustainable journalism."</p>
                         <div className="text-end x-small fw-bold">— Reader from Bangalore</div>
                      </div>
                      <div>
                         <p className="x-small mb-1 italic">"The Tech Times continues to set the standard for digital reporting. Excellent layout!"</p>
                         <div className="text-end x-small fw-bold">— S. Malviya, Tech Enthusiast</div>
                      </div>
                   </div>

                   <div className="ad-box border border-dark p-3 text-center bg-light-subtle mt-auto pt-4">
                      <div className="fw-black text-uppercase x-small border border-secondary mb-2 py-1">Classifieds</div>
                      <p className="small mb-0 fst-italic">Boost your reach with <strong>Natraj Tech</strong>.</p>
                      <small className="fw-bold">www.natrajtech.com</small>
                   </div>
                </aside>
              </div>
            </div>
          )}

          {/* Dynamic Section: Tech Spotlight */}
          <section className="mb-5 py-4 border-bottom border-dark">
             <div className="section-header d-flex align-items-center gap-2 mb-4">
                <Cpu size={24} className="text-danger" />
                <h2 className="fw-black text-uppercase m-0 h3">Innovation Spotlight</h2>
                <div className="flex-grow-1 border-bottom border-dark border-1 ms-2"></div>
             </div>
             <div className="row g-4">
                {getSlice(5, 4).map((art, idx) => (
                  <div key={idx} className="col-md-3">
                    <div className={`spotlight-card h-100 ${idx < 3 ? 'border-end border-dark pe-4' : ''}`}>
                       <h5 className="fw-black headline-serif fs-6 mb-2">{art.title}</h5>
                       <img src={art.image} className="img-fluid grayscale-print mb-2 border mt-1 shadow-sm" alt="" style={{ height: '140px', width: '100%', objectFit: 'cover' }} />
                       <p className="small text-muted mb-0 lh-sm">
                         {art.excerpt || safeSubstring(stripHtml(art.content), 0, 150)}...
                       </p>
                    </div>
                  </div>
                ))}
             </div>
          </section>

          {/* Market Watch & Highlights */}
          <div className="row g-5 pt-2">
             <div className="col-lg-8 border-end border-dark pe-lg-5">
                <section className="global-perspectives h-100">
                  <div className="section-header d-flex align-items-center gap-2 mb-4 border-bottom border-dark pb-2">
                    <Globe size={20} className="text-primary" />
                    <h3 className="fw-black text-uppercase m-0 h4">Global Digital Perspectives</h3>
                    <span className="badge bg-dark ms-auto mb-1">PAGE 4</span>
                  </div>
                  <div className="row g-4">
                     {getSlice(9, 2).map((art, idx) => (
                       <div key={idx} className="col-md-6 border-bottom-md-none pb-4">
                          <h4 className="fw-black headline-serif h5 mb-3">{art.title}</h4>
                          <div className="newspaper-columns-2 small text-justify">
                            {safeSubstring(stripHtml(art.content), 0, 600)}...
                          </div>
                          <div className="mt-3 text-end">
                             <span className="small fw-bold text-uppercase cursor-pointer hover-danger">Continued on Page 5 →</span>
                          </div>
                       </div>
                     ))}
                  </div>
                </section>
             </div>
             <div className="col-lg-4">
                <section className="market-watch bg-light p-4 border border-dark border-2 h-100 shadow-sm">
                   <div className="section-header d-flex align-items-center gap-2 mb-4 border-bottom border-dark pb-2">
                     <TrendingUp size={22} className="text-success" />
                     <h3 className="fw-black text-uppercase m-0 h5">Digital Market Watch</h3>
                   </div>
                   <div className="market-data small">
                      <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                        <span>NIFTY 50</span>
                        <span className="text-success fw-bold">22,143.20 (+0.4%)</span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                        <span>BSE SENSEX</span>
                        <span className="text-success fw-bold">72,831.94 (+0.5%)</span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                        <span>NASDAQ COMPOSITE</span>
                        <span className="text-success fw-bold">18,245.32 (+1.2%)</span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                        <span>CRYPTO / BTC</span>
                        <span className="text-danger fw-bold">67,432.10 (-2.4%)</span>
                      </div>
                      <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                        <span>NVDA CORP</span>
                        <span className="text-success fw-bold">926.69 (+3.5%)</span>
                      </div>
                   </div>

                   <div className="mt-4 pt-3">
                      <h6 className="fw-black text-uppercase h6 border-bottom border-dark pb-1 mb-3">Analyst Perspective</h6>
                      <p className="small text-muted mb-3 fst-italic">"The robust performance of chipmakers and AI-infrastructure providers suggests a sustained bullish cycle in the technology sector for H2 2024."</p>
                      <div className="p-2 bg-dark text-white rounded-1 text-center x-small uppercase fw-bold">
                         View Full Reports On www.thetechtimes.com
                      </div>
                   </div>
                </section>
             </div>
          </div>
        </main>

        {/* Closing Footer */}
        <footer className="epaper-footer text-center py-5 px-5 bg-white border-top border-dark border-3 mt-5">
          <h2 className="display-4 fw-black mb-1 headline-serif">THE TECH TIMES</h2>
          <p className="small text-uppercase fw-bold mb-4">India's Leading Digital Technology Journal</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-5 small text-uppercase fw-bold py-3 mb-4 border-top border-bottom border-dark border-2">
             <span>Digital Circulation Exclusive</span>
             <span>© 2024 THE TECH TIMES ONLINE</span>
             <span>Registered with Ministry of Electronics & IT</span>
          </div>
          <div className="social-links d-flex justify-content-center gap-4 mb-4 small fw-bold text-muted">
             <span>TWITTER: @THETECHTIMES</span>
             <span>LINKEDIN: /THETECHTIMES</span>
             <span>INSTAGRAM: @THETECHTIMES_IN</span>
          </div>
          <p className="mt-2 x-small text-muted italic">This digital edition is dynamically generated for verified subscribers in India and globally. <br/> All rights reserved. Reproduction in whole or in part without written permission is prohibited.</p>
        </footer>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap');

        .epaper-wrapper {
          font-family: 'Old Standard TT', serif;
          color: #1a1a1a;
          line-height: 1.5;
        }

        .newspaper-container {
          max-width: 1100px;
          border: 1px solid #ddd;
        }

        .fw-black { font-weight: 900; }
        .x-small { font-size: 0.75rem; }
        .tracking-widest { letter-spacing: 0.2em; }
        .tracking-tight { letter-spacing: -0.02em; }
        .uppercase { text-transform: uppercase; }

        .masthead-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          letter-spacing: -3px;
          border-bottom: 6px double #000;
        }

        .headline-serif {
          font-family: 'Playfair Display', serif;
          line-height: 1.1;
        }

        .drop-cap::first-letter {
          float: left;
          font-size: 5.5rem;
          line-height: 4.5rem;
          padding-right: 12px;
          margin-top: 4px;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          color: #000;
          text-shadow: 1px 1px 0px #fff, 3px 3px 0px #000;
        }

        .newspaper-columns {
          column-count: 2;
          column-gap: 30px;
          text-align: justify;
          hyphens: auto;
        }

        .newspaper-columns-2 {
          column-count: 1;
          text-align: justify;
        }
        
        @media (min-width: 768px) {
           .newspaper-columns-2 {
              column-count: 2;
              column-gap: 20px;
           }
        }

        .grayscale-print {
          filter: grayscale(100%) contrast(1.1);
          transition: filter 0.3s;
        }
        
        .grayscale-print:hover {
          filter: grayscale(0%) contrast(1.0);
        }

        .cursor-pointer { cursor: pointer; }
        .hover-danger:hover { color: #dc3545 !important; }

        .ticker-item {
          animation: tickerMove 30s linear infinite;
        }

        .bg-black { background-color: #000 !important; }

        @keyframes tickerMove {

          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          .epaper-wrapper { 
            padding: 0 !important; 
            background: white !important; 
          }
          .newspaper-container { 
            box-shadow: none !important; 
            width: 210mm !important; 
            min-height: 297mm !important; 
            margin: 0 auto !important; 
            padding: 5mm 15mm !important; 
            border: none !important;
            page-break-after: always;
          }
          .d-print-none { display: none !important; }
          body { background: white !important; margin: 0; }
          .newspaper-columns { 
            column-count: 2 !important; 
            column-gap: 8mm !important;
          }
          .masthead-title { font-size: 3.5rem !important; }
          .display-2 { font-size: 2.2rem !important; }
          .display-4 { font-size: 1.8rem !important; }
          .grayscale-print { filter: grayscale(100%) contrast(1.2) !important; }
          .sticky-top { position: static !important; }
          .trending-ticker { padding: 5px 0 !important; background: white !important; }
          .bg-black { background: black !important; color: white !important; }
          .bg-light { background: #f8f9fa !important; }
          .newspaper-meta { padding: 5px 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default EPaper;
