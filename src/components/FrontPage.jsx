import thebook from "../assets/TheBook.jpg";
import thestory from "../assets/TheStory.jpg";
import thetech from "../assets/TheTech.jpg";
import thejob from "../assets/TheJobs.jpg";

import { useState} from "react";
import {
  TrendingUp,
  TrendingDown,
  Award,
  Clock,
} from "lucide-react";

// Sample Data
const topPosts = [
  {
    id: 1,
    title: "OpenAI Unveils GPT-5: Revolutionary AI Breakthrough",
    excerpt:
      "The latest iteration promises unprecedented natural language understanding and reasoning capabilities.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    category: "Breaking News",
    author: "Sarah Chen",
    date: "2 hours ago",
    views: "25.4K",
  },
  {
    id: 2,
    title: "Tesla Announces Self-Driving Car Fleet Launch",
    excerpt:
      "Elon Musk reveals ambitious plans for autonomous vehicle network across major cities.",
    image:
      "https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200",
    category: "Technology",
    author: "Mike Johnson",
    date: "4 hours ago",
    views: "18.2K",
  },
  {
    id: 3,
    title: "Quantum Computing: IBM's 1000 Qubit Milestone",
    excerpt:
      "Revolutionary achievement brings practical quantum computing closer to reality.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
    category: "Science",
    author: "Dr. Lisa Kumar",
    date: "6 hours ago",
    views: "12.8K",
  },
];

const newsArticles = [
  {
    id: 4,
    title: "Apple Vision Pro 2 Leaked: Major Upgrades Expected",
    category: "Gadgets",
    date: "8 hours ago",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400",
  },
  {
    id: 5,
    title: "Microsoft Launches New AI-Powered Office Suite",
    category: "Software",
    date: "10 hours ago",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400",
  },
  {
    id: 6,
    title: "SpaceX Successfully Completes Mars Simulation Test",
    category: "Space",
    date: "12 hours ago",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400",
  },
  {
    id: 7,
    title: "New Cybersecurity Threat Targets Major Banks",
    category: "Cybersecurity",
    date: "1 day ago",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
  },
  {
    id: 8,
    title: "Google's Quantum AI Makes Breakthrough Discovery",
    category: "AI",
    date: "1 day ago",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
  },
];

const cryptoData = [
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

const metalPrices = [
  { name: "Gold", price: 2045.3, unit: "oz", change: 0.45, isUp: true },
  { name: "Silver", price: 24.67, unit: "oz", change: -0.23, isUp: false },
];

const quizOfTheDay = {
  question:
    "Which company recently achieved a breakthrough in quantum computing by creating a 1000-qubit processor?",
  options: ["Google", "IBM", "Microsoft", "Intel"],
  correctAnswer: 1,
  explanation:
    "IBM announced their 1000-qubit quantum processor in 2024, marking a major milestone in quantum computing.",
};

// Top Post Card Component
const TopPostCard = ({ post, featured = false }) => (
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
      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="text-muted small">
          <span className="me-3">👤 {post.author}</span>
          <span className="me-3">🕐 {post.date}</span>
          <span>👁️ {post.views}</span>
        </div>
        <button className="btn btn-outline-black btn-sm">Read More</button>
      </div>
    </div>
  </div>
);

// News Card Component
const NewsCard = ({ article }) => (
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
              <div className="fw-bold">${item.price.toLocaleString()}</div>
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
const QuizOfTheDay = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-header bg-warning text-dark fw-semibold">
        <Award size={18} className="me-2" />
        Quiz of the Day
      </div>
      <div className="card-body">
        <h5 className="mb-4">{quizOfTheDay.question}</h5>
        <div className="d-grid gap-2">
          {quizOfTheDay.options.map((option, idx) => (
            <button
              key={idx}
              className={`btn text-start ${
                showResult
                  ? idx === quizOfTheDay.correctAnswer
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
              {showResult && idx === quizOfTheDay.correctAnswer && " ✓"}
              {showResult &&
                idx === selectedAnswer &&
                idx !== quizOfTheDay.correctAnswer &&
                " ✗"}
            </button>
          ))}
        </div>
        {showResult && (
          <div
            className={`alert ${
              selectedAnswer === quizOfTheDay.correctAnswer
                ? "alert-success"
                : "alert-info"
            } mt-3 mb-0`}
          >
            <strong>
              {selectedAnswer === quizOfTheDay.correctAnswer
                ? "🎉 Correct!"
                : "📚 Learn:"}
            </strong>
            <p className="mb-0 mt-2 small">{quizOfTheDay.explanation}</p>
            <button
              className="btn btn-sm btn-outline-secondary mt-2"
              onClick={resetQuiz}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
function FrontPage() {
  return (
    <>
      <div className="bg-light min-vh-100">
        <div className="container py-4">
          <div className="row">
            {/* Main Content - Left Column */}
            <div className="col-lg-8">
              {/* Top Posts Section */}
              <div className="mb-4">
                <h2 className="fw-bold mb-4 border-bottom border-black pb-2">
                  <TrendingUp className="me-2 text-primary" />
                  Top Stories
                </h2>

                {/* Featured Post */}
                <div className="mb-4">
                  <TopPostCard post={topPosts[0]} featured={true} />
                </div>

                {/* Other Top Posts */}
                <div className="row">
                  {topPosts.slice(1).map((post) => (
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
                {newsArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="col-lg-4">
              {/* Trending Crypto */}
              <MarketWidget
                title="Trending Crypto"
                data={cryptoData}
                type="crypto"
              />

              {/* Trending Stocks */}
              <MarketWidget
                title="Trending Stocks"
                data={stockData}
                type="stocks"
              />

              {/* Gold & Silver Prices */}
              <MarketWidget
                title="Precious Metals"
                data={metalPrices}
                type="metals"
              />

              {/* Quiz of the Day */}
              <QuizOfTheDay />

              {/* Ad Space */}
              <div className="card border-0 shadow-sm bg-secondary text-white text-center p-5">
                <h5>Advertisement</h5>
                <p className="small mb-0">Your Ad Here</p>
              </div>
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
        `}</style>
      </div>
      <div style={{ fontFamily: "Georgia, serif" }}>
        {/* Top Highlight */}
        <section className="container py-4">
          <div
            className="row g-4 flex-nowrap overflow-auto row-cols-1 row-cols-md-4"
            style={{ whiteSpace: "nowrap" }}
          >
            <div className="col" style={{ minWidth: "250px" }}>
              <div className="card h-100">
                <img
                  src={thebook}
                  className="card-img-top custom-img"
                  alt="..."
                  height={400}
                />
                <div className="card-body">
                  <h5 className="card-title">The Book</h5>
                  <p className="card-text">
                    Different Types of Books for Knowledge.
                  </p>
                </div>
              </div>
            </div>

            <div className="col" style={{ minWidth: "250px" }}>
              <div className="card h-100">
                <img
                  src={thestory}
                  className="card-img-top custom-img"
                  alt="..."
                  height={400}
                />
                <div className="card-body">
                  <h5 className="card-title">The Story</h5>
                  <p className="card-text">
                    Latest stories from around the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="col" style={{ minWidth: "250px" }}>
              <div className="card h-100">
                <img
                  src={thetech}
                  className="card-img-top custom-img"
                  alt="..."
                  height={400}
                />
                <div className="card-body">
                  <h5 className="card-title">The Tech</h5>
                  <p className="card-text">Tech news & latest updates.</p>
                </div>
              </div>
            </div>

            <div className="col" style={{ minWidth: "250px" }}>
              <div className="card h-100">
                <img
                  src={thejob}
                  className="card-img-top custom-img"
                  alt="..."
                  height={400}
                />
                <div className="card-body">
                  <h5 className="card-title">The Job</h5>
                  <p className="card-text">Platform to get job information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 style={{ fontWeight: "600" }}>
                AI Revolution Begins: India Leads a Global Tech Shift
              </h2>
              <p className="text-secondary mt-2">
                India is emerging as a global AI powerhouse, driving
                transformation in healthcare, education, agriculture, and
                defense through scalable innovation and research.
              </p>
            </div>
            <div className="col-md-5">
              <img
                src="https://source.unsplash.com/600x360/?artificial,intelligence"
                className="img-fluid rounded shadow-sm"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="py-4 bg-light">
          <div className="container">
            <h4 className="fw-bold mb-4">Trending Today</h4>
            <div className="row g-4">
              {[
                {
                  img: "technology,news",
                  title: "AI is Changing the World",
                  desc: "Artificial Intelligence continues reshaping industries with automation and decision-making.",
                },
                {
                  img: "cyber,security",
                  title: "Cyber Security Alerts Rise",
                  desc: "Experts warn users to strengthen personal data protection amid growing cyber threats.",
                },
                {
                  img: "smartphones,gadgets",
                  title: "New Gadgets Reviewed",
                  desc: "We test the newest smartphones and wearables to guide your tech buying decisions.",
                },
              ].map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src={`https://source.unsplash.com/500x300/?${item.img}`}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="fw-semibold">{item.title}</h5>
                      <p className="text-secondary">{item.desc}</p>
                      <a href="#" className="btn btn-sm btn-outline-dark">
                        Read More
                      </a>
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
              {[
                [
                  "SpaceX Launches New Satellite",
                  "Boosts global communication and remote connectivity.",
                ],
                [
                  "Meta Introduces Advanced VR",
                  "Sets a new standard for virtual meeting environments.",
                ],
                [
                  "Blockchain Industry Surges",
                  "Businesses adopt decentralized systems globally.",
                ],
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="list-group-item list-group-item-action py-3 border-0 border-bottom"
                >
                  <h5 className="fw-semibold mb-1">{item[0]}</h5>
                  <p className="text-secondary mb-0">{item[1]}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FrontPage;
