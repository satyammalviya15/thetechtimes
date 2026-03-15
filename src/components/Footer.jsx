import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NewContext } from "../context/MyContext";
import natrajalogo from "../assets/natarajalogo.png";
import chat from "../assets/chat.png";
import email from "../assets/email.png";
import linkdin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import increase from "../assets/increase.png";

// Footer Component with Bootstrap
const Footer = ({ darkMode = false }) => {
  let navigate = useNavigate();

  const { news } = useContext(NewContext);

  // Filter or sort news to get trending items (e.g., top 4 by views)
  const trendingItems = news
    ?.sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 4) || [];

  const newcategories = {
    news: [
      "Latest News",
      "Breaking News",
      "National",
      "International",
      "Politics",
      "Business",
      "Economy",
      "Technology",
      "Science",
      "Environment",
      "Health",
      "Education",
      "Sports",
      "Entertainment",
    ],

    technology: ["Startups", "Web Development", "Mobile & Apps"],

    business: [
      "Market News",
      "Startups",
      "Entrepreneurship",
      "Funding & VC",
      "Companies",
      "E-Commerce",
      "SaaS",
      "Finance",
      "Stock Market",
      "Crypto",
    ],

    careers: [
      "Jobs",
      "Government Jobs",
      "Private Jobs",
      "Remote Jobs",
      "Internships",
      "Freshers Jobs",
      "Experienced Jobs",
      "Campus Placements",
      "Career Advice",
      "Interview Tips",
    ],

    learning: [
      "Books",
      "E-Books",
      "Free Resources",
      "Courses",
      "Tutorials",
      "Certifications",
      "Exam Preparation",
      "Skill Development",
    ],

    opinion: [
      "Opinion",
      "Editorial",
      "Columns",
      "Analysis",
      "Guest Posts",
      "Readers Corner",
    ],

    community: [
      "Events",
      "Webinars",
      "Conferences",
      "Hackathons",
      "Podcasts",
      "Newsletters",
      "Community Stories",
    ],


    about: [
      "About Us",
      "Contact Us",
      "Advertise With Us",
      "Write For Us",
      "Careers",
      "Press",
      "Media Kit",
    ],

    help: ["Help Center", "Support", "FAQ", "Feedback", "Report Issue"],

    legal: ["Privacy Policy", "Terms & Conditions", "Disclaimer"],
    social: [
      "Facebook",
      "Twitter / X",
      "Instagram",
      "LinkedIn",
      "YouTube",
      "Telegram",
      "WhatsApp Channel",
    ],
  };

  return (
    <footer className="">
      <div className="container">
        <div className="mx-3">
          <span className="title" onClick={() => navigate("/")}>
            THE TECH TIMES
            <img className="" src={natrajalogo} alt="I" />
          </span>
        </div>
        <div className="row fs-6">
          {/* Categories Section */}
          <div className="col-12 col-md-6 col-lg-2">
            {/* Item1 */}
            <div className="border-5 border-top border-dark m-1">
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>The Tech Times</strong>
                </li>
                {newcategories["about"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link
                      to={`/${cat.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-decoration-none opacity-75 small hover-link text-dark"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Item2 */}
            <hr />
            <div className="m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>Help</strong>
                </li>
                {newcategories["help"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link
                      to={`/${cat.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-decoration-none opacity-75 small hover-link text-dark"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Item3 */}
            <hr />
            <div className="m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>Legal</strong>
                </li>
                {newcategories["legal"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link
                      to={`/${cat.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "")}`}
                      className="text-decoration-none opacity-75 small hover-link text-dark"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Categories Section */}
          <div className="col-12 col-md-6 col-lg-2">
            {/* Item1 */}
            <div className="border-5 border-top border-dark m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>News</strong>
                </li>
                {newcategories["news"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link to={"/news/"+cat.toLowerCase().replace(/\s+/g, "")} className="text-decoration-none small text-dark opacity-75 hover-link" onClick={window.scrollTo({ top: 0, behavior: "smooth" })}>{cat}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Item2 */}
            <hr />
            <div className="m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>Technology</strong>
                </li>
                {newcategories["technology"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link
                      to={`/${cat.toLowerCase().replace(/ & /g, "").replace(/\s+/g, "")}`}
                      className="text-decoration-none opacity-75 small hover-link text-dark"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Categories Section */}
          <div className="col-12 col-md-6 col-lg-2">
            {/* Item1 */}
            <div className="border-5 border-top border-dark m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>Business</strong>
                </li>
                {newcategories["business"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                   <Link to={"/business/"+cat.toLowerCase().replace(/\s+/g, "")} className="text-decoration-none small text-dark opacity-75 hover-link" onClick={window.scrollTo({ top: 0, behavior: "smooth" })}>
                   {cat}
                   </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Item2 */}
            <hr />
            <div className="m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>Social</strong>
                </li>
                {newcategories["social"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link
                      to={`/${cat.toLowerCase().replace(/[ /]/g, "").replace(/\s+/g, "")}`}
                      className="text-decoration-none opacity-75 small hover-link text-dark"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {cat}
                    </Link>

                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Categories Section */}
          <div className="col-12 col-md-6 col-lg-2">
            {/* Item1 */}
            <div className="border-5 border-top border-dark m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>Learning</strong>
                </li>
                {newcategories["learning"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link
                      to={`/${cat.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-decoration-none opacity-75 small hover-link text-dark"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Item2 */}
            <hr />
            <div className="m-1">
              {/* <h4 className="fw-semibold mb-3">Categories</h4> */}
              <ul className="list-unstyled row">
                <li className="m-1">
                  <strong>Opinion</strong>
                </li>
                {newcategories["opinion"].map((cat, index) => (
                  <li key={`${cat}-${index}`} className="col-6 col-md-12 mb-2">
                    <Link
                      to={`/${cat.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-decoration-none opacity-75 small hover-link text-dark"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories Wrapper */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="row g-3">
              {/* Category Block 1 */}
              <div className="col-12 col-md-6">
                <div className="border-top border-5 border-dark m-1">
                  <ul className="list-unstyled row">
                    <li className="fw-bold m-1">Careers</li>
                    {newcategories["careers"].map((cat, index) => (
                      <li
                        key={`${cat}-${index}`}
                        className="col-6 col-md-12 mb-2"
                      >
                        <Link to={"/careers/"+cat.toLowerCase().replace(/\s+/g, "")} className="text-decoration-none small text-dark opacity-75 hover-link" onClick={window.scrollTo({ top: 0, behavior: "smooth" })}>
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Category Block 2 */}
              <div className="col-12 col-md-6">
                <div className="border-top border-5 border-dark m-1">
                  <ul className="list-unstyled row">
                    <li className="fw-bold m-1">Community</li>
                    {newcategories["community"].map((cat, index) => (
                      <li
                        key={`${cat}-${index}`}
                        className="col-6 col-md-12 mb-2"
                      >
                        <Link
                          to={`/${cat.toLowerCase().replace(/\s+/g, "")}`}
                          className="text-decoration-none small text-dark opacity-75 hover-link"
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trending News */}
              <div className="col-12">
                <div className="border-top border-5 border-dark">
                  <ul className="list-unstyled">
                    <li className="fw-bold m-1">Trending News</li>
                    {trendingItems.length > 0 ? (
                      trendingItems.map((item, index) => (
                        <li key={`${item._id}-${index}`} className="mb-2">
                          <Link
                            to={`/article/${item.slug}`}
                            className="text-decoration-none small text-dark opacity-75 hover-link d-inline-block"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          >
                            {item.title}
                            <img src={increase} height={16} width={16} className="ms-1" alt="Trending" />
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="small text-muted m-1">Loading trending news...</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <hr className="border-secondary my-4" /> */}
        <div className="small opacity-75">
          <div className="dropdown mt-3">
            <div className="col-12 py-1 flex-column">
              <div className="d-flex flex-row bd-highlight mb-3 black">
                <Link
                  to="/facebook"
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                >
                  <img src={chat} width={20} height={20} alt="Facebook" />
                </Link>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                  to="/whatsappchannel"
                >
                  <img src={whatsapp} width={20} height={20} alt="WhatsApp" />
                </Link>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                  to="/newsletter"
                >
                  <img src={email} width={20} height={20} alt="Newsletter" />
                </Link>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                  to="/linkedin"
                >
                  <img src={linkdin} width={20} height={20} alt="LinkedIn" />
                </Link>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                  to="/telegram"
                >
                  <img src={telegram} width={20} height={20} alt="Telegram" />
                </Link>

              </div>
              <div>
                <Link
                  to="/terms-conditions"
                  className="text-decoration-none hover-link text-dark small"
                  style={{ border: "none" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                >
                  TERMS & CONDITIONS
                </Link>
                {" /"}
                <Link
                  to="/privacypolicy"
                  className="text-decoration-none hover-link text-dark small"
                  style={{ border: "none" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                >
                  PRIVACY POLICY
                </Link>
                {" /"}
                <Link
                  to="/disclaimer"
                  className="text-decoration-none hover-link text-dark small"
                  style={{ border: "none" }}
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                >
                  DISCLAIMER
                </Link>
                {" /"}
              </div>
            </div>
          </div>
          <p className="px-1 mb-0">
            Copyright© 2026, THG PUBLISHING PVT LTD. or its affiliated
            companies. All rights reserved.
          </p>
        </div>
        {/* Custom CSS for hover effects */}
        <style jsx>{`
          .hover-link:hover {
            color: #000000 !important;
            opacity: 1 !important;
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;
