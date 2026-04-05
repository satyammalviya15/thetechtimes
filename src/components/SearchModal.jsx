import { useEffect, useRef, useState } from "react";
import axios from "axios";

const BACKEND_URL = "https://thetechtimesbackend.vercel.app";

const SearchModal = () => {
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [error, setError] = useState(null);

  const trending = ["Tata", "Semiconductor", "EV", "Jobs", "Business", "AI", "Space"];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(saved);
  }, []);

  useEffect(() => {
    let modalInstance = null;
    if (modalRef.current && window.bootstrap) {
      modalInstance = new window.bootstrap.Modal(modalRef.current);
    }

    const handleGlobalKeys = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        modalInstance?.show();
        setTimeout(() => inputRef.current?.focus(), 200);
      }
      if (e.key === "Escape") modalInstance?.hide();
    };

    document.addEventListener("keydown", handleGlobalKeys);
    return () => document.removeEventListener("keydown", handleGlobalKeys);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const handleShow = () => setTimeout(() => inputRef.current?.focus(), 150);
    el.addEventListener("shown.bs.modal", handleShow);
    return () => el.removeEventListener("shown.bs.modal", handleShow);
  }, []);

  const saveRecent = (text) => {
    let updated = [text, ...recentSearches.filter((r) => r !== text)].slice(0, 6);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const clearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const handleSearch = async (value) => {
    if (!value) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BACKEND_URL}/api/news?search=${value}`);
      const data = res.data.data || [];
      setResults(data);
      setActiveIndex(-1);
      if (data.length > 0) saveRecent(value);
    } catch (err) {
      setError(err.response ? "Something went wrong. Please try again." : "Network error. Check your connection.");
      setResults([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim().length > 2) handleSearch(query);
      else { setResults([]); setError(null); }
    }, 300);
    return () => clearTimeout(delay);
  }, [query]);

  const handleArrowNavigation = (e) => {
    if (results.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((p) => (p < results.length - 1 ? p + 1 : 0)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((p) => (p > 0 ? p - 1 : results.length - 1)); }
    if (e.key === "Enter" && activeIndex >= 0) window.location.href = `/article/${results[activeIndex].slug}`;
  };

  const highlightText = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return text.replace(regex, `<mark style="background:#fff3cd;padding:0 2px;border-radius:2px">$1</mark>`);
  };

  const handleClose = () => {
    setQuery("");
    setResults([]);
    setError(null);
    setActiveIndex(-1);
  };

  return (
    <div
      className="modal fade"
      id="searchModal"
      ref={modalRef}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div
          className="modal-content border-0"
          style={{
            borderRadius: "16px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            className="modal-header border-0 pb-0"
            style={{ background: "#fff", padding: "20px 24px 12px" }}
          >
            <div className="d-flex align-items-center w-100 gap-3">
              <div
                className="d-flex align-items-center flex-grow-1 gap-2 px-3 py-2"
                style={{
                  background: "#f5f5f5",
                  borderRadius: "12px",
                  border: "1.5px solid #e0e0e0",
                }}
              >
                <i className="bi bi-search text-muted" style={{ fontSize: "16px" }} />
                <input
                  ref={inputRef}
                  type="text"
                  className="border-0 bg-transparent flex-grow-1 search-input"
                  placeholder="Search news, topics, articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleArrowNavigation}
                  style={{ outline: "none", fontSize: "15px", color: "#222" }}
                />
                {query && (
                  <button
                    className="btn btn-sm p-0 border-0 text-muted"
                    onClick={() => { setQuery(""); setResults([]); inputRef.current?.focus(); }}
                    style={{ lineHeight: 1 }}
                  >
                    <i className="bi bi-x-circle-fill" style={{ fontSize: "16px" }} />
                  </button>
                )}
                <span
                  className="badge bg-light text-muted border d-none d-md-inline"
                  style={{ fontSize: "10px", fontWeight: 500, padding: "3px 6px", borderRadius: "6px" }}
                >
                  Ctrl+K
                </span>
              </div>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={handleClose}
                style={{ flexShrink: 0 }}
              />
            </div>
          </div>

          {/* Body */}
          <div className="modal-body" style={{ padding: "8px 24px 24px", maxHeight: "70vh", overflowY: "auto" }}>

            {/* Loading */}
            {loading && (
              <div className="d-flex align-items-center justify-content-center py-5 gap-3 text-muted">
                <div className="spinner-border spinner-border-sm" />
                <span style={{ fontSize: "14px" }}>Searching...</span>
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="text-center py-5">
                <div style={{ fontSize: "36px" }}>⚠️</div>
                <div className="fw-semibold mt-2 text-danger">{error}</div>
                <button className="btn btn-sm btn-outline-dark mt-3" onClick={() => handleSearch(query)}>
                  Try again
                </button>
              </div>
            )}

            {/* Results */}
            {!loading && !error && results.length > 0 && (
              <div>
                <div className="text-muted small mb-2 mt-1" style={{ fontSize: "11px", letterSpacing: "0.5px", textTransform: "uppercase", fontWeight: 600 }}>
                  {results.length} result{results.length !== 1 ? "s" : ""} found
                </div>
                <div className="d-flex flex-column gap-1">
                  {results.map((item, index) => (
                    <a
                      key={item._id}
                      href={`/article/${item.slug}`}
                      className="d-flex gap-3 align-items-center text-decoration-none p-2"
                      style={{
                        borderRadius: "10px",
                        background: activeIndex === index ? "#f0f0f0" : "transparent",
                        transition: "background 0.15s",
                        color: "inherit",
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            width: "60px",
                            height: "45px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <div className="flex-grow-1 overflow-hidden">
                        <div
                          className="fw-semibold"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.4",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                          dangerouslySetInnerHTML={{ __html: highlightText(item.title) }}
                        />
                        <div className="d-flex align-items-center gap-2 mt-1">
                          {item.category?.name && (
                            <span
                              className="badge"
                              style={{
                                background: "#111",
                                color: "#fff",
                                fontSize: "10px",
                                borderRadius: "4px",
                                padding: "2px 6px",
                              }}
                            >
                              {item.category.name}
                            </span>
                          )}
                          {item.publishedAt && (
                            <span className="text-muted" style={{ fontSize: "11px" }}>
                              {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "2-digit",
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                      <i
                        className="bi bi-arrow-up-left text-muted d-none d-md-block"
                        style={{ fontSize: "16px", flexShrink: 0 }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {!loading && !error && query.length > 2 && results.length === 0 && (
              <div className="text-center py-5">
                <div style={{ fontSize: "40px" }}>🔍</div>
                <div className="fw-semibold fs-6 mt-2">No results for "{query}"</div>
                <div className="text-muted small mt-1">Try different keywords or check spelling</div>
              </div>
            )}

            {/* Default state - Recent & Trending */}
            {!loading && query.length <= 2 && (
              <>
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mt-2 mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-muted" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 600 }}>
                        Recent Searches
                      </span>
                      <button className="btn btn-sm p-0 text-muted border-0" style={{ fontSize: "11px" }} onClick={clearRecent}>
                        Clear all
                      </button>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {recentSearches.map((item, i) => (
                        <button
                          key={i}
                          className="btn btn-sm d-flex align-items-center gap-1"
                          style={{
                            background: "#f5f5f5",
                            border: "1px solid #e0e0e0",
                            borderRadius: "8px",
                            fontSize: "13px",
                            color: "#333",
                          }}
                          onClick={() => { setQuery(item); handleSearch(item); }}
                        >
                          <i className="bi bi-clock-history" style={{ fontSize: "12px" }} />
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending */}
                <div className="mt-2">
                  <div className="mb-2 text-muted" style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 600 }}>
                    🔥 Trending Now
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {trending.map((item, i) => (
                      <button
                        key={i}
                        className="btn btn-sm"
                        style={{
                          background: "#111",
                          color: "#fff",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "13px",
                          padding: "5px 14px",
                        }}
                        onClick={() => { setQuery(item); handleSearch(item); }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Keyboard hint */}
                <div
                  className="mt-4 pt-3 d-none d-md-flex justify-content-center gap-4 text-muted"
                  style={{ fontSize: "11px", borderTop: "1px solid #f0f0f0" }}
                >
                  <span><kbd style={{ background: "#eee", borderRadius: "4px", padding: "1px 5px", fontSize: "10px" }}>↑↓</kbd> Navigate</span>
                  <span><kbd style={{ background: "#eee", borderRadius: "4px", padding: "1px 5px", fontSize: "10px" }}>Enter</kbd> Open</span>
                  <span><kbd style={{ background: "#eee", borderRadius: "4px", padding: "1px 5px", fontSize: "10px" }}>Esc</kbd> Close</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;