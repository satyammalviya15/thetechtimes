import thebook from "../assets/TheBook.jpg";
import thestory from "../assets/TheStory.jpg";
import thetech from "../assets/TheTech.jpg";
import thejob from "../assets/TheJobs.jpg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  TrendingUp,
  TrendingDown,
  Award,
  Clock,
} from "lucide-react";
import natrajAdBg from "../assets/natraj_ad_bg.png";


// External Data Dependencies (crypto, stocks, metals, etc.) remain as static variables for now
const defaultCryptoData = [
  { name: "Bitcoin", symbol: "BTC", price: 67234.56, change: 2.45, isUp: true },
  { name: "Ethereum", symbol: "ETH", price: 3456.78, change: 1.23, isUp: true },
  { name: "Solana", symbol: "SOL", price: 145.32, change: -0.87, isUp: false },
  { name: "Cardano", symbol: "ADA", price: 0.58, change: 3.12, isUp: true },
];

const stockData = [
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    price: 178.45,
    change: 1.2,
    isUp: true,
  },
  { name: "Microsoft", symbol: "MSFT", price: 412.33, change: 0.8, isUp: true },
  { name: "Tesla", symbol: "TSLA", price: 242.67, change: -1.5, isUp: false },
  { name: "NVIDIA", symbol: "NVDA", price: 875.23, change: 2.3, isUp: true },
];

const defaultMetalPrices = [
  { name: "Gold", price: 657.49, unit: "10g", change: 0.45, isUp: true },
  { name: "Silver", price: 793.17, unit: "1kg", change: -0.23, isUp: false },
];


const fallbackQuizzes = [
  {
    question: "Which company recently achieved a breakthrough in quantum computing by creating a 1000-qubit processor?",
    options: ["Google", "IBM", "Microsoft", "Intel"],
    correctAnswer: 1,
    explanation: "IBM announced their 1000-qubit quantum processor in 2024, marking a major milestone in quantum computing.",
    category: "Technology"
  },
  {
    question: "What does CSS stand for in web development?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 1,
    explanation: "CSS stands for Cascading Style Sheets, used for describing the presentation of a document written in HTML.",
    category: "Web Development"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2,
    explanation: "Mars is often called the Red Planet due to the iron oxide prevalent on its surface.",
    category: "Science"
  }
];

const getRandomFallbackQuiz = () => fallbackQuizzes[Math.floor(Math.random() * fallbackQuizzes.length)];

const decodeHTMLEntities = (text) => {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

const fetchQuizDataFn = async (retryCount = 0) => {
  try {
    const res = await axios.get("https://opentdb.com/api.php?amount=1&type=multiple");
    
    if (res.data && res.data.response_code === 5) {
      if (retryCount < 4) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return fetchQuizDataFn(retryCount + 1);
      } else {
        console.warn("Quiz API rate limit exceeded. Using fallback.");
        return getRandomFallbackQuiz();
      }
    }

    if (res.data && res.data.results && res.data.results.length > 0) {
      const item = res.data.results[0];
      const correct = decodeHTMLEntities(item.correct_answer);
      const incorrect = item.incorrect_answers.map(ans => decodeHTMLEntities(ans));
      
      const allOptions = [...incorrect, correct].sort(() => Math.random() - 0.5);
      const correctIndex = allOptions.indexOf(correct);

      return {
        question: decodeHTMLEntities(item.question),
        options: allOptions,
        correctAnswer: correctIndex,
        explanation: `The correct answer is ${correct}.`,
        category: decodeHTMLEntities(item.category)
      };
    }
  } catch (err) {
    console.warn("Failed to fetch quiz. Using fallback.");
  }
  return getRandomFallbackQuiz();
};

// Top Post Card Component
const TopPostCard = ({ post, featured = false }) => (
  <Link to={`/article/${post.slug || post.id}`} className="text-decoration-none text-dark d-block h-100">
    <div
      className={`card h-100 border-0 shadow-sm overflow-hidden hover-card ${
        featured ? "featured-post" : ""
      }`}
    >
      <div className="position-relative">
        <img
          src={post.image}
          className="card-img-top"
          alt={post.title}
          style={{ height: featured ? "400px" : "250px", objectFit: "cover" }}
        />
        <span className="badge bg-danger position-absolute top-0 start-0 m-3">
          {post.category}
        </span>
        {featured && (
          <div className="badge bg-warning text-dark position-absolute top-0 end-0 m-3">
            <Award className="me-1" size={16} />
            Featured
          </div>
        )}
      </div>
      <div className="card-body">
        <h3 className={`card-title ${featured ? "fs-4" : "fs-5"} fw-bold mb-3`}>
          {post.title}
        </h3>
        <p className="card-text text-muted">{post.excerpt}</p>
          <div className="text-muted small">
            <span className="me-3">👤 {post.author}</span>
            <span className="me-3">🕐 {post.date}</span>
          </div>
      </div>
    </div>
  </Link>
);

// News Card Component
const NewsCard = ({ article }) => (
  <Link to={`/article/${article.slug || article.id}`} className="text-decoration-none text-dark d-block">
    <div className="card border-0 shadow-sm mb-3 hover-card">
      <div className="row g-0">
        <div className="col-4">
          <img
            src={article.image}
            className="img-fluid rounded-start h-100"
            style={{ objectFit: "cover" }}
            alt={article.title}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <span className="badge bg-black mb-2">{article.category}</span>
            <h5 className="card-title fw-semibold">{article.title}</h5>
            <p className="text-muted small mb-0">
              <Clock size={14} className="me-1" />
              {article.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

// Market Widget Component
const MarketWidget = ({ title, data, type = "crypto" }) => (
  <div className="card border-0 shadow-sm mb-4">
    <div className="card-header bg-dark text-white fw-semibold">
      <TrendingUp size={18} className="me-2" />
      {title}
    </div>
    <div className="card-body p-0">
      <div className="list-group list-group-flush">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="list-group-item d-flex justify-content-between align-items-center hover-item"
          >
            <div>
              <div className="fw-semibold">{item.name}</div>
              <small className="text-muted">{item.symbol || item.unit}</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">
                ${item.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
              </div>
              {item.priceINR && (
                <div className="text-muted small mb-1">
                  ₹{item.priceINR.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                </div>
              )}
              <small className={item.isUp ? "text-success" : "text-danger"}>
                {item.isUp ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {item.change > 0 ? "+" : ""}
                {item.change}%
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Quiz Component
const QuizOfTheDay = ({ initialData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizData, setQuizData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleNextQuiz = async () => {
    setLoading(true);
    setShowResult(false);
    setSelectedAnswer(null);
    const newQuiz = await fetchQuizDataFn();
    if (newQuiz) {
      setQuizData(newQuiz);
    }
    setLoading(false);
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  if (loading || !quizData) {
    return (
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-warning text-dark fw-semibold d-flex justify-content-between align-items-center">
          <div>
            <Award size={18} className="me-2" />
            Quiz of the Day
          </div>
          <span className="badge bg-dark bg-opacity-50 small placeholder-glow">
            <span className="placeholder col-12" style={{ width: '50px' }}></span>
          </span>
        </div>
        <div className="card-body" aria-hidden="true">
          <p className="placeholder-glow mb-4">
            <span className="placeholder col-12 mb-2 bg-secondary bg-opacity-25 rounded"></span>
            <span className="placeholder col-9 mb-2 bg-secondary bg-opacity-25 rounded"></span>
            <span className="placeholder col-6 bg-secondary bg-opacity-25 rounded"></span>
          </p>
          <div className="d-grid gap-2 placeholder-glow">
            <div className="btn btn-outline-secondary disabled placeholder col-12 text-start" style={{ height: "38px", borderStyle: "dashed" }}></div>
            <div className="btn btn-outline-secondary disabled placeholder col-12 text-start" style={{ height: "38px", borderStyle: "dashed" }}></div>
            <div className="btn btn-outline-secondary disabled placeholder col-12 text-start" style={{ height: "38px", borderStyle: "dashed" }}></div>
            <div className="btn btn-outline-secondary disabled placeholder col-12 text-start" style={{ height: "38px", borderStyle: "dashed" }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-header bg-warning text-dark fw-semibold d-flex justify-content-between align-items-center">
        <div>
          <Award size={18} className="me-2" />
          Quiz of the Day
        </div>
        <span className="badge bg-dark bg-opacity-75 small">{quizData.category}</span>
      </div>
      <div className="card-body">
        <h6 className="mb-4 text-dark lh-base">{quizData.question}</h6>
        <div className="d-grid gap-2">
          {quizData.options.map((option, idx) => (
            <button
              key={idx}
              className={`btn text-start ${
                showResult
                  ? idx === quizData.correctAnswer
                    ? "btn-success"
                    : idx === selectedAnswer
                    ? "btn-danger"
                    : "btn-outline-secondary"
                  : "btn-outline-primary"
              }`}
              onClick={() => !showResult && handleAnswer(idx)}
              disabled={showResult}
            >
              {option}
              {showResult && idx === quizData.correctAnswer && " ✓"}
              {showResult &&
                idx === selectedAnswer &&
                idx !== quizData.correctAnswer &&
                " ✗"}
            </button>
          ))}
        </div>
        {showResult && (
          <div
            className={`alert ${
              selectedAnswer === quizData.correctAnswer
                ? "alert-success"
                : "alert-info"
            } mt-3 mb-0`}
          >
            <strong>
              {selectedAnswer === quizData.correctAnswer
                ? "🎉 Correct!"
                : "📚 Learn:"}
            </strong>
            <p className="mb-0 mt-2 small">{quizData.explanation}</p>
            <button
              className="btn btn-sm btn-outline-dark mt-3 w-100 fw-semibold"
              onClick={handleNextQuiz}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
function FrontPage() {
  const [topPostItems, setTopPostItems] = useState([]);
  const [newsArticleItems, setNewsArticleItems] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [headlineItems, setHeadlineItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialQuizData, setInitialQuizData] = useState(null);

  const [cryptoWidgetData, setCryptoWidgetData] = useState(defaultCryptoData);
  const [metalWidgetData, setMetalWidgetData] = useState(defaultMetalPrices);
  
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const cacheKey = "market_data_cache_v3";
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 60000) { // 1 minute cache
             setCryptoWidgetData(data.crypto);
             setMetalWidgetData(data.metals);
             return;
          }
        }

        const symbols = ["BTC", "ETH", "XAU", "XAG"];
        const usdResponses = await Promise.allSettled(
          symbols.map(sym => axios.get(`https://api.gold-api.com/price/${sym}/USD`))
        );
        const inrResponses = await Promise.allSettled(
          symbols.map(sym => axios.get(`https://api.gold-api.com/price/${sym}/INR`))
        );

        let newCrypto = [...defaultCryptoData];
        let newMetals = [...defaultMetalPrices];

        symbols.forEach((sym, idx) => {
           const usdRes = usdResponses[idx];
           const inrRes = inrResponses[idx];

           if (usdRes.status === "fulfilled") {
              const usdPrice = usdRes.value.data.price;
              const inrPrice = inrRes.status === "fulfilled" ? inrRes.value.data.price : null;

              if (sym === "BTC" || sym === "ETH") {
                 const index = newCrypto.findIndex(c => c.symbol === sym);
                 if (index !== -1) {
                    const oldPrice = newCrypto[index].price;
                    const change = (((usdPrice - oldPrice) / oldPrice) * 100);
                    newCrypto[index] = {
                      ...newCrypto[index],
                      price: usdPrice,
                      change: parseFloat(Math.abs(change).toFixed(2)),
                      isUp: change >= 0
                    };
                 }
              } else if (sym === "XAU" || sym === "XAG") {
                 const name = sym === "XAU" ? "Gold" : "Silver";
                 const index = newMetals.findIndex(m => m.name === name);
                 if (index !== -1) {
                    const troyOunceInGrams = 31.1034768;
                    let displayUsdPrice = usdPrice;
                    let displayInrPrice = inrPrice;
                    let unit = "oz";

                    if (sym === "XAU") {
                       // Convert to 10 grams for Gold
                       displayUsdPrice = (usdPrice / troyOunceInGrams) * 10;
                       displayInrPrice = inrPrice ? (inrPrice / troyOunceInGrams) * 10 : null;
                       unit = "10g";
                    } else if (sym === "XAG") {
                       // Convert to 1 kg for Silver
                       displayUsdPrice = (usdPrice / troyOunceInGrams) * 1000;
                       displayInrPrice = inrPrice ? (inrPrice / troyOunceInGrams) * 1000 : null;
                       unit = "1kg";
                    }

                    // If existing mock data has same unit, we can compute accurate change
                    // otherwise skip or just use a proxy. Since we updated defaultMetalPrices, they have the correct unit.
                    const oldPrice = newMetals[index].price;
                    const change = (((displayUsdPrice - oldPrice) / oldPrice) * 100);
                    newMetals[index] = {
                      ...newMetals[index],
                      price: displayUsdPrice,
                      priceINR: displayInrPrice,
                      unit: unit,
                      change: parseFloat(Math.abs(change).toFixed(2)),
                      isUp: change >= 0
                    };
                 }
              }
           }
        });

        setCryptoWidgetData(newCrypto);
        setMetalWidgetData(newMetals);

        localStorage.setItem(cacheKey, JSON.stringify({
           timestamp: Date.now(),
           data: { crypto: newCrypto, metals: newMetals }
        }));
      } catch (err) {
        console.error("Error fetching market data", err);
      }
    };

    fetchMarketData();
  }, []);

  useEffect(() => {
    const fetchNewsAndQuiz = async () => {
      try {
        const [newsRes, quizRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/news`).catch(() => ({ data: { data: [] } })),
          fetchQuizDataFn()
        ]);
        
        const data = newsRes.data?.data || [];
        
        if (data.length > 0) {
          const formattedPosts = data.map((post) => ({
            id: post._id || post.id,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt || (post.content ? post.content.replace(/<[^>]+>/g, '').substring(0, 100) + '...' : ''),
            image: post.image,
            category: post.category?.name || post.category || "News",
            author: "Admin",
            date: post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            }) : "Recently",
            views: post.views || 0,
          }));
          
          if (formattedPosts.length > 0) {
              setTopPostItems(formattedPosts.slice(0, 3));
              setNewsArticleItems(formattedPosts.slice(3, 8));
              
              const trendingData = formattedPosts.length > 8 ? formattedPosts.slice(8, 11) : formattedPosts.slice(0, 3);
              setTrendingItems(trendingData.map(p => ({
                  img: p.image || "technology,news",
                  title: p.title,
                  desc: p.excerpt || "",
                  slug: p.slug
              })));
              
              const headlineData = formattedPosts.length > 11 ? formattedPosts.slice(11, 14) : formattedPosts.slice(0, 3);
              setHeadlineItems(headlineData.map(p => ({
                  title: p.title,
                  excerpt: p.excerpt || "",
                  slug: p.slug
              })));
          }
        }

        if (quizRes) {
           setInitialQuizData(quizRes);
        }
      } catch (error) {
        console.error("Error fetching news and quiz:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsAndQuiz();
  }, []);

  if (loading) {
    return (
      <div className="min-vh-100 placeholder-glow">
        <div className="container py-4">
          <div className="row">
            {/* Main Content - Left Column Simple Skeleton */}
            <div className="col-lg-8">
              {/* Featured Top Post */}
              <div className="mb-4">
                <div className="placeholder bg-secondary bg-opacity-25 w-100 rounded mb-2" style={{ height: "400px" }}></div>
                <span className="placeholder bg-secondary bg-opacity-25 col-8 rounded" style={{ height: "30px", display: "block" }}></span>
              </div>
              
              {/* Secondary Top Posts */}
              <div className="row mb-5">
                {[1, 2].map((i) => (
                  <div key={i} className="col-md-6 mb-4">
                    <div className="placeholder bg-secondary bg-opacity-25 w-100 rounded mb-2" style={{ height: "200px" }}></div>
                    <span className="placeholder bg-secondary bg-opacity-25 col-10 rounded" style={{ height: "20px", display: "block" }}></span>
                  </div>
                ))}
              </div>

              {/* Latest News Skeletons */}
              <div className="mb-4">
                <span className="placeholder bg-secondary bg-opacity-25 col-4 rounded mb-4" style={{ height: "35px", display: "block" }}></span>
                {[1, 2, 3, 4].map((i) => (
                  <div key={`news-${i}`} className="d-flex mb-4">
                     <div className="placeholder bg-secondary bg-opacity-25 rounded me-3" style={{ width: "150px", height: "100px" }}></div>
                     <div className="w-100 pt-2">
                        <span className="placeholder bg-secondary bg-opacity-25 col-12 rounded mb-2" style={{ height: "20px", display: "block" }}></span>
                        <span className="placeholder bg-secondary bg-opacity-25 col-9 rounded" style={{ height: "20px", display: "block" }}></span>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - Right Column Simple Skeleton */}
            <div className="col-lg-4 ps-lg-4">
               {[1, 2, 3, 4].map(widget => (
                 <div key={`widget-${widget}`} className="card border-0 shadow-sm mb-4">
                   <div className="card-header bg-secondary bg-opacity-10 py-3">
                     <span className="placeholder bg-secondary bg-opacity-25 col-6 rounded" style={{ height: "20px" }}></span>
                   </div>
                   <div className="card-body p-4">
                     <span className="placeholder bg-secondary bg-opacity-25 col-12 rounded mb-3" style={{ height: "40px", display: "block" }}></span>
                     <span className="placeholder bg-secondary bg-opacity-25 col-12 rounded mb-3" style={{ height: "40px", display: "block" }}></span>
                     <span className="placeholder bg-secondary bg-opacity-25 col-12 rounded mb-3" style={{ height: "40px", display: "block" }}></span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-vh-100">
        <div className="container py-4">
          <div className="row">
            {/* Main Content - Left Column */}
            <div className="col-lg-8">
              {/* Top Posts Section */}
              <div className="mb-4">

                {/* Featured Post */}
                <div className="mb-4">
                  {topPostItems.length > 0 && (
                    <TopPostCard post={topPostItems[0]} featured={true} />
                  )}
                </div>

                {/* Other Top Posts */}
                <div className="row">
                  {topPostItems.slice(1).map((post) => (
                    <div key={post.id} className="col-md-6 mb-4">
                      <TopPostCard post={post} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest News Section */}
              <div className="mb-4">
                <h3 className="fw-bold mb-3 border-bottom border-black pb-2">
                  Latest News
                </h3>
                {newsArticleItems.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="col-lg-4">
              {/* Quiz of the Day */}
              <QuizOfTheDay initialData={initialQuizData} />

              {/* Gold & Silver Prices */}
              <MarketWidget
                title="Precious Metals"
                data={metalWidgetData}
                type="metals"
              />

              {/* Trending Crypto */}
              <MarketWidget
                title="Trending Crypto"
                data={cryptoWidgetData}
                type="crypto"
              />

              {/* Trending Stocks */}
              <MarketWidget
                title="Trending Stocks"
                data={stockData}
                type="stocks"
              />

              {/* Ad Space */}
              <a href="https://natrajtech.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="card border-0 shadow-lg text-white text-center p-5 hover-card position-relative overflow-hidden ad-card-premium">
                  <div className="ad-bg-overlay"></div>
                  <div className="position-relative z-1">
                    <h5 className="fw-black mb-2 tracked-header">NATRAJ TECH</h5>
                    <p className="small mb-0 opacity-90 fw-semibold">Leading the Future of Digital Innovation</p>
                    <div className="mt-4">
                      <span className="btn btn-sm btn-light text-primary rounded-pill px-4 fw-bold shadow-sm">Explore Solutions &rarr;</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          }
          .hover-item:hover {
            background-color: #f8f9fa;
          }
          .featured-post {
            border-left: 4px solid black !important;
          }
          .ad-card-premium {
            background-image: url(${natrajAdBg});
            background-size: cover;
            background-position: center;
            border-radius: 20px;
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ad-bg-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(13, 110, 253, 0.4) 100%);
            z-index: 0;
          }
          .tracked-header {
            letter-spacing: 2px;
          }
          .fw-black {
            font-weight: 900;
          }
        `}</style>
      </div>
      <div style={{ fontFamily: "Georgia, serif" }}>
        {/* Top Highlight */}
        {/* <section className="container py-4">
          <div
            className="row g-4 flex-nowrap overflow-auto row-cols-1 row-cols-md-4"
            style={{ whiteSpace: "nowrap" }}
          >
            <div className="col" style={{ minWidth: "250px" }}>
              <Link to="/thebook" className="text-decoration-none text-dark h-100 d-block">
                <div className="card h-100 hover-card shadow-sm border-0">
                  <img
                    src={thebook}
                    className="card-img-top custom-img"
                    alt="The Book"
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">The Book</h5>
                    <p className="card-text small text-muted">
                      Different Types of Books for Knowledge.
                    </p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col" style={{ minWidth: "250px" }}>
              <Link to="/thestory" className="text-decoration-none text-dark h-100 d-block">
                <div className="card h-100 hover-card shadow-sm border-0">
                  <img
                    src={thestory}
                    className="card-img-top custom-img"
                    alt="The Story"
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">The Story</h5>
                    <p className="card-text small text-muted">
                      Latest stories from around the world.
                    </p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col" style={{ minWidth: "250px" }}>
              <Link to="/thetech" className="text-decoration-none text-dark h-100 d-block">
                <div className="card h-100 hover-card shadow-sm border-0">
                  <img
                    src={thetech}
                    className="card-img-top custom-img"
                    alt="The Tech"
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">The Tech</h5>
                    <p className="card-text small text-muted">Tech news & latest updates.</p>
                  </div>
                </div>
              </Link>
            </div>


            <div className="col" style={{ minWidth: "250px" }}>
              <Link to="/thejobs" className="text-decoration-none text-dark h-100 d-block">
                <div className="card h-100 hover-card shadow-sm border-0">
                  <img
                    src={thejob}
                    className="card-img-top custom-img"
                    alt="The Job"
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">The Job</h5>
                    <p className="card-text small text-muted">Platform to get job information.</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </section> */}



        {/* Trending Section */}
        <section className="py-4 bg-light">
          <div className="container">
            <h4 className="fw-bold mb-4">Trending Today</h4>
            <div className="row g-4">
              {trendingItems.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src={item.img.includes('http') ? item.img : `https://source.unsplash.com/500x300/?${item.img}`}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="fw-semibold">{item.title}</h5>
                      <p className="text-secondary">{item.desc}</p>
                      <Link to={`/article/${item.slug}`} className="btn btn-sm btn-outline-dark">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Feed */}
        <section className="py-5">
          <div className="container">
            <h4 className="fw-bold mb-3">Latest Headlines</h4>

            <div className="list-group">
              {headlineItems.map((item, i) => (
                <Link
                  key={i}
                  to={`/article/${item.slug}`}
                  className="list-group-item list-group-item-action py-3 border-0 border-bottom"
                >
                  <h5 className="fw-semibold mb-1">{item.title}</h5>
                  <p className="text-secondary mb-0">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FrontPage;
