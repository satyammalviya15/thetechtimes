import { useState } from "react";
import { Star, Crown, CheckCircle2, Zap, ShieldCheck, Gift, Sparkles, ArrowRight, Trophy, Bell, BookOpen } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/forever",
    highlight: false,
    badge: null,
    btnStyle: { background: "#e0e0e0", color: "#333" },
    benefits: [
      "Access to general news",
      "Limited articles per day",
      "Basic newsletter",
      "Ad-supported experience",
    ],
  },
  {
    name: "Premium",
    price: "₹0",
    period: "/this year",
    highlight: true,
    badge: "FREE OFFER 2025",
    btnStyle: { background: "linear-gradient(135deg,#f5c518,#e8a000)", color: "#1a1a1a" },
    benefits: [
      "Everything in Free, plus:",
      "Unlimited ad-free reading",
      "Exclusive Premium articles",
      "Instant breaking news alerts",
      "Weekly premium newsletter",
      "Saved articles & reading history",
      "Special Year-End Rewards",
    ],
  },
];

const perks = [
  { icon: <Zap size={28} />, color: "#f5c518", title: "Instant Access", desc: "Priority loading — read every story the moment it breaks." },
  { icon: <ShieldCheck size={28} />, color: "#4caf50", title: "Verified Journalism", desc: "Exclusive, fact-checked reports from trusted journalists." },
  { icon: <Star size={28} />, color: "#e53935", title: "Ad-Free", desc: "Zero ads, zero interruptions. Pure, clean reading." },
  { icon: <Bell size={28} />, color: "#2196f3", title: "Instant Alerts", desc: "Breaking news the second it happens, before anyone else." },
  { icon: <BookOpen size={28} />, color: "#9c27b0", title: "Saved Articles", desc: "Bookmark articles and build your personal reading list." },
  { icon: <Trophy size={28} />, color: "#ff9800", title: "Premium Events", desc: "Invitations to exclusive live Q&A and expert sessions." },
];

const comparisons = [
  ["News Access", "Limited", "Unlimited"],
  ["Ad-Free Experience", "✗", "✓"],
  ["Exclusive Reports", "✗", "✓"],
  ["Breaking News Alerts", "Delayed", "Instant"],
  ["Newsletter", "Basic", "Premium"],
  ["Saved Articles", "✗", "✓"],
  ["Premium Events", "✗", "✓"],
];

export default function PremiumPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 50%, #111 100%)",
          padding: "80px 0 70px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gold circles */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(245,197,24,0.06)" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 220, height: 220, borderRadius: "50%", background: "rgba(245,197,24,0.04)" }} />

        <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2"
            style={{ background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: "30px" }}
          >
            <Crown size={16} color="#f5c518" />
            <span style={{ color: "#f5c518", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Premium Membership
            </span>
          </div>
          <h1 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.2 }}>
            The Tech Times{" "}
            <span style={{ color: "#f5c518" }}>Premium</span>
          </h1>
          <p className="mx-auto mb-5" style={{ color: "#aaa", maxWidth: 520, fontSize: "1.05rem", lineHeight: 1.7 }}>
            Unlock exclusive access, ad-free reading, and premium journalism for <span style={{ color: "#fff", fontWeight: "bold" }}>FREE</span> this year. Limited time subscription offer for our community.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#plans">
              <button
                className="btn btn-lg d-flex align-items-center gap-2"
                style={{
                  background: "linear-gradient(135deg,#f5c518,#e8a000)",
                  color: "#1a1a1a",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: 700,
                  padding: "12px 28px",
                }}
              >
                See Plans <ArrowRight size={18} />
              </button>
            </a>
            <a href="#compare">
              <button
                className="btn btn-lg"
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  borderRadius: "10px",
                  padding: "12px 28px",
                }}
              >
                Compare Plans
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ── PERKS ── */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2" style={{ fontSize: "1.8rem" }}>Why Go Premium?</h2>
          <p className="text-muted">Everything you get when you upgrade</p>
        </div>
        <div className="row g-4">
          {perks.map((p, i) => (
            <div className="col-md-4 col-sm-6" key={i}>
              <div
                className="p-4 h-100"
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  transform: hovered === `perk-${i}` ? "translateY(-4px)" : "none",
                  cursor: "default",
                }}
                onMouseEnter={() => setHovered(`perk-${i}`)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: 56, height: 56, borderRadius: "14px",
                    background: `${p.color}18`,
                  }}
                >
                  <span style={{ color: p.color }}>{p.icon}</span>
                </div>
                <h6 className="fw-bold mb-1">{p.title}</h6>
                <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PLANS ── */}
      <div id="plans" style={{ background: "#111", padding: "60px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ color: "#fff" }}>Choose Your Plan</h2>
            <p style={{ color: "#888" }}>Simple, transparent pricing — no hidden fees</p>
          </div>
          <div className="row g-4 justify-content-center">
            {plans.map((plan, i) => (
              <div className="col-md-5" key={i}>
                <div
                  className="p-4 h-100 d-flex flex-column"
                  style={{
                    background: plan.highlight
                      ? "linear-gradient(145deg, #1e1a00, #2a2200)"
                      : "#1c1c1c",
                    borderRadius: "18px",
                    border: plan.highlight
                      ? "1.5px solid rgba(245,197,24,0.5)"
                      : "1.5px solid #2a2a2a",
                    boxShadow: plan.highlight
                      ? "0 8px 40px rgba(245,197,24,0.15)"
                      : "0 4px 20px rgba(0,0,0,0.3)",
                    position: "relative",
                    transition: "transform 0.2s",
                    transform: hovered === `plan-${i}` ? "translateY(-6px)" : "none",
                  }}
                  onMouseEnter={() => setHovered(`plan-${i}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {plan.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: -14,
                        right: 24,
                        background: "linear-gradient(135deg,#f5c518,#e8a000)",
                        color: "#1a1a1a",
                        fontSize: "10px",
                        fontWeight: 800,
                        letterSpacing: "1px",
                        padding: "4px 14px",
                        borderRadius: "20px",
                      }}
                    >
                      {plan.badge}
                    </div>
                  )}
                  <h4 className="fw-bold mb-1" style={{ color: plan.highlight ? "#f5c518" : "#fff" }}>
                    {plan.name} Plan
                  </h4>
                  <p style={{ color: "#888", fontSize: "13px" }}>
                    {plan.highlight ? "Best value for long-term readers" : "Perfect for regular readers"}
                  </p>
                  <div className="my-3 d-flex align-items-end gap-1">
                    <span style={{ color: "#fff", fontSize: "2.6rem", fontWeight: 800, lineHeight: 1 }}>
                      {plan.price}
                    </span>
                    <span style={{ color: "#888", fontSize: "14px", marginBottom: "6px" }}>{plan.period}</span>
                  </div>
                  <div className="d-flex flex-column gap-2 mb-4 flex-grow-1">
                    {plan.benefits.map((b, j) => (
                      <div key={j} className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} color={plan.highlight ? "#f5c518" : "#4caf50"} />
                        <span style={{ color: "#ccc", fontSize: "14px" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn w-100 fw-bold"
                    style={{
                      background: plan.btnStyle.background,
                      color: plan.btnStyle.color,
                      border: "none",
                      borderRadius: "10px",
                      padding: "12px",
                      fontSize: "15px",
                    }}
                  >
                    Get {plan.name} Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COMPARISON TABLE ── */}
      <div id="compare" className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Free vs Premium</h2>
          <p className="text-muted">See exactly what you're getting</p>
        </div>
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #eee" }}>
          <table className="table mb-0" style={{ fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#111", color: "#fff" }}>
                <th className="py-3 px-4" style={{ fontWeight: 600, letterSpacing: "0.5px" }}>Feature</th>
                <th className="py-3 px-4 text-center">Free</th>
                <th className="py-3 px-4 text-center" style={{ color: "#f5c518" }}>
                  <Crown size={14} className="me-1" />Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td className="py-3 px-4 fw-semibold" style={{ color: "#333" }}>{row[0]}</td>
                  <td className="py-3 px-4 text-center" style={{ color: row[1] === "✗" ? "#e53935" : "#666" }}>{row[1]}</td>
                  <td className="py-3 px-4 text-center fw-bold" style={{ color: row[2] === "✓" ? "#2e7d32" : "#1a73e8" }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="container pb-5">
        <div
          className="text-center p-5"
          style={{
            background: "linear-gradient(135deg,#0a0a0a,#1c1c1c)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -50, right: -50, width: 250, height: 250, borderRadius: "50%", background: "rgba(245,197,24,0.07)" }} />
          <Sparkles size={36} color="#f5c518" style={{ marginBottom: 16 }} />
          <h2 className="fw-bold mb-3" style={{ color: "#fff" }}>Ready to go Premium?</h2>
          <p style={{ color: "#aaa", maxWidth: 420, margin: "0 auto 28px" }}>
            Join thousands of readers who stay ahead with verified premium journalism.
          </p>
          <button
            className="btn btn-lg fw-bold d-inline-flex align-items-center gap-2"
            style={{
              background: "linear-gradient(135deg,#f5c518,#e8a000)",
              color: "#1a1a1a",
              border: "none",
              borderRadius: "12px",
              padding: "14px 36px",
              fontSize: "16px",
            }}
            onClick={() => document.getElementById("plans").scrollIntoView({ behavior: "smooth" })}
          >
            <Crown size={20} /> Join TheTechTimes Premium
          </button>
        </div>
      </div>
    </div>
  );
}
