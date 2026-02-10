//Problem: Offcanvas is not closing on click offcanvas link
import natrajalogo from "../assets/natarajalogo.jpg";
import ebook from "../assets/ebook.png";
import user from "../assets/user.png";
import search from "../assets/search.png";
import hamburger from "../assets/hamburger.png";
import play from "../assets/play-button.png";
import headphone from "../assets/headphone.png";
import crossword from "../assets/crossword.png";
import imagegallary from "../assets/image-gallery.png";
import eye from "../assets/eye.png";
import newsletter from "../assets/newsletter.png";
import puzzle from "../assets/puzzle.png";
import pen from "../assets/pen.png";
import files from "../assets/files.png";
import chat from "../assets/chat.png";
import email from "../assets/email.png";
import linkdin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import fire from "../assets/fire.gif";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NewContext } from "../context/MyContext";
import { toast } from "react-toastify";

function Header() {
  let navigate = useNavigate();
  const { token, setToken } = useContext(NewContext);

  const closeOffcanvasAndNavigate = (path) => {
    const offcanvasElement = document.getElementById("offcanvasExample");

    if (window.bootstrap) {
      const bsOffcanvas =
        window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }

    navigate(path);
  };

  return (
    <div>
      <header className="">
        <div className="container">
          <nav
            className="navbar navbar1 align-items-end align-items-xl-center align-items-lg-center"
            style={{ padding: "0px 0px 2px 0px" }}
          >
            {/* Offcanwas */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <span>
                  {new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                  <a
                    className="navbar-brand fs-6"
                    style={{ marginLeft: "8px" }}
                  >
                    e-Paper
                  </a>
                </span>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  <div className="container">
                    <div
                      className="input-group shadow-sm"
                      style={{ overflow: "hidden" }}
                    >
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Search for topics,people,articles..."
                        style={{ boxShadow: "none", fontSize: "12px" }}
                      />
                      <span className="input-group-text bg-white border-0">
                        <i className="bi bi-search"></i>
                      </span>
                    </div>
                  </div>
                  <div className="container mt-4">
                    <div
                      className="row text-start shadow-sm"
                      style={{ border: "0px", textDecoration: "none" }}
                    >
                      <div
                        // onClick={() => closeOffcanvasAndNavigate("technews")}
                        onClick={() => closeOffcanvasAndNavigate("news/technology")}
                        className="col-6 border-bottom py-1 "
                      >
                        <a style={{ border: "none" }}>Tech</a>
                      </div>

                      <div
                        // onClick={() => closeOffcanvasAndNavigate("jobnews")}
                        onClick={() => closeOffcanvasAndNavigate("news/jobs")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>Jobs</a>
                      </div>

                      <div
                        // onClick={() => closeOffcanvasAndNavigate("indianews")}
                        onClick={() => closeOffcanvasAndNavigate("news/india")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>India</a>
                      </div>

                      <div
                        // onClick={() => closeOffcanvasAndNavigate("worldnews")}
                        onClick={() => closeOffcanvasAndNavigate("news/world")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>World</a>
                      </div>

                      <div
                        // onClick={() => closeOffcanvasAndNavigate("sportsnews")}
                        onClick={() => closeOffcanvasAndNavigate("news/sports")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>Sport</a>
                      </div>

                      <div
                        // onClick={() => closeOffcanvasAndNavigate("datanews")}
                        onClick={() => closeOffcanvasAndNavigate("news/data")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>Data</a>
                      </div>

                      <div
                        // onClick={() => closeOffcanvasAndNavigate("healthnews")}
                        onClick={() => closeOffcanvasAndNavigate("news/health")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>Health</a>
                      </div>

                      <div
                        // onClick={() => closeOffcanvasAndNavigate("sciencenews")}
                        onClick={() => closeOffcanvasAndNavigate("news/science")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>Science</a>
                      </div>

                      <div
                        // onClick={() =>closeOffcanvasAndNavigate("businessnews")}
                        onClick={() => closeOffcanvasAndNavigate("news/business")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>Business</a>
                      </div>

                      <div
                        onClick={() => closeOffcanvasAndNavigate("premium")}
                        className="col-6 border-bottom py-1"
                      >
                        <a style={{ border: "none" }}>Premium</a>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-4">
                    <div
                      className="row text-start shadow-sm"
                      style={{ border: "0px", textDecoration: "none" }}
                    >
                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={play} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Videos</a>
                      </div>

                      <div
                        onClick={() => closeOffcanvasAndNavigate("thebook")}
                        className="col-6 border-bottom border-dark py-1 black"
                      >
                        <img src={ebook} width={25} height={25} alt="" />
                        <a className="navbar-brand red">eBooks</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={headphone} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Podcast</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={crossword} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Crossword</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={imagegallary} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Photos</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={newsletter} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Newsletter</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={eye} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Visual Story</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={pen} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Lit For Life</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={files} width={25} height={25} alt="" />
                        <a className="navbar-brand red">Specials</a>
                      </div>

                      <div className="col-6 border-bottom border-dark py-1 black">
                        <img src={puzzle} width={25} height={25} alt="" />
                        <a className="navbar-brand red">The Huddle</a>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-4">
                    <div
                      className="row text-start shadow-sm"
                      style={{ border: "0px", textDecoration: "none" }}
                    >
                      <div className="col-12 border-bottom border-dark py-1 black">
                        <img src={fire} width={25} height={25} alt="" />
                        <a
                          className=""
                          style={{ textDecoration: "none", color: "#B00020" }}
                        >
                          Live Now
                        </a>
                      </div>
                      <div
                        onClick={() => closeOffcanvasAndNavigate("thebook")}
                        className="col-12 border-bottom border-dark py-1 black"
                      >
                        <a className="navbar-brand red fs-6">The Book</a>
                      </div>
                      <div className="col-12 border-bottom border-dark py-1 black">
                        <a className="navbar-brand red fs-6">The Story</a>
                      </div>
                      <div className="col-12 border-bottom border-dark py-1 black">
                        <a className="navbar-brand red fs-6">The Tech</a>
                      </div>
                      <div className="col-12 border-bottom border-dark py-1 black">
                        <a className="navbar-brand red fs-6">The Jobs</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown mt-3">
                  <div className="col-6 py-1 flex-column">
                    <div>Connect with us</div>
                    <div className="d-flex flex-row bd-highlight mb-3 black">
                      <a>
                        <img src={chat} width={20} height={20} alt="" />
                      </a>
                      <a>
                        <img src={whatsapp} width={20} height={20} alt="" />
                      </a>
                      <a>
                        <img src={email} width={20} height={20} alt="" />
                      </a>
                      <a>
                        <img src={linkdin} width={20} height={20} alt="" />
                      </a>
                      <a>
                        <img src={telegram} width={20} height={20} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Body of Navbar */}
            <span className="d-none d-lg-block">
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              <a className="navbar-brand fs-6" style={{ marginLeft: "8px" }}>
                e-Paper
              </a>
            </span>
            <span className="title pointer" onClick={() => navigate("/")}>
              THE TECH TIMES
              <img className="" src={natrajalogo} alt="I" />
            </span>
            <span
              className=""
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>
                <a
                  className="navbar-brand d-inline d-lg-none"
                  onClick={() => navigate("/thebook")}
                  style={{ color: "black", fontSize: "12px", float: "left" }}
                >
                  <img src={ebook} alt="I" width={20} height={20} />
                  eBooks
                </a>
                {token ? (
                  <Link
                    to="/"
                    className="navbar-brand"
                    style={{ color: "black", float: "right", fontSize: "12px" }}
                    onClick={() => {
                      localStorage.removeItem("token");
                      setToken("");
                      // toast.success("User Logout")
                      // window.location.reload();
                    }}
                  >
                    LogOut
                    <img src={user} alt="I" width={15} height={15} />
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="navbar-brand"
                    style={{ color: "black", float: "right", fontSize: "12px" }}
                  >
                    Login
                    <img src={user} alt="I" width={15} height={15} />
                  </Link>
                )}
              </span>
              <span>
                <a
                  className="navbar-brand d-none d-lg-inline"
                  onClick={() => navigate("/thebook")}
                  style={{ color: "black", fontSize: "12px" }}
                >
                  <img src={ebook} alt="I" width={20} height={20} />
                  eBooks
                </a>
                <button style={{ fontSize: "12px" }}>SUBSCRIBE</button>
                <span className="d-inline d-lg-none">
                  <a
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                    style={{
                      color: "black",
                      border: "0px",
                      marginLeft: "20px",
                    }}
                  >
                    <img src={hamburger} alt="H" width={20} height={20} />
                    <img
                      src={search}
                      alt="S"
                      width={12}
                      height={12}
                      style={{ position: "relative" }}
                    />
                  </a>
                </span>
              </span>
            </span>
          </nav>
          <nav className="navbar navbar2 d-none d-lg-block">
            <span>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
                style={{ color: "black", border: "0px" }}
              >
                <img src={hamburger} alt="H" width={25} height={20} />
              </a>
              <a
                className="navbar-brand"
                style={{
                  color: "black",
                  fontSize: "15px",
                  marginRight: "100px",
                }}
              >
                <img src={search} alt="S" width={20} height={20} />
                Search
              </a>
              <a
                // onClick={() => navigate("technews")}
                onClick={() => navigate("/news/technology")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Tech
              </a>
              <a
                // onClick={() => navigate("jobnews")}
                 onClick={() => navigate("/news/jobs")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Jobs
              </a>
              <a
                // onClick={() => navigate("indianews")}
                 onClick={() => navigate("/news/india")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                India
              </a>
              <a
                // onClick={() => navigate("worldnews")}
                 onClick={() => navigate("/news/world")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                World
              </a>
              <a
                // onClick={() => navigate("sportsnews")}
                 onClick={() => navigate("/news/sports")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Sport
              </a>
              <a
                // onClick={() => navigate("datanews")}
                 onClick={() => navigate("/news/data")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Data
              </a>
              <a
                // onClick={() => navigate("healthnews")}
                 onClick={() => navigate("/news/health")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Health
              </a>
              <a
                // onClick={() => navigate("opinionnews")}
                onClick={() => navigate("/news/opinion")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Opinion
              </a>
              <a
                // onClick={() => navigate("sciencenews")}
                onClick={() => navigate("/news/science")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Science
              </a>
              <a
                // onClick={() => navigate("businessnews")}
                onClick={() => navigate("/news/business")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Business
              </a>
              <a
                onClick={() => navigate("premium")}
                className="navbar-brand red"
                style={{ border: "0px" }}
              >
                Premium
              </a>
            </span>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
