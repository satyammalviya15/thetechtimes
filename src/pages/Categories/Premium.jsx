import { Star, Crown, CheckCircle2, Zap, ShieldCheck, Gift } from "lucide-react";

export default function PremiumPage() {
  return (
    <div className="min-vh-100">
      <div className="container py-5">

         {/* TITLE */}
        {/* <h2 className="fw-bold mb-4 border-bottom pb-2 text-center">
          <Crown className="me-2 text-warning" size={32} />
          TheTechTimes Premium
        </h2>

        <p className="text-center text-muted fs-5 mb-5">
          Unlock exclusive features, deep insights, and an ad-free news experience.
        </p> */}

        {/* WHY PREMIUM */}
        <div className="row mb-5">
          <h3 className="fw-semibold mb-4">Why Choose Premium?</h3>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4 h-100 text-center">
              <Zap size={40} className="text-warning mb-3" />
              <h5 className="fw-bold">Faster Access</h5>
              <p className="text-muted small">Read all news instantly with priority loading.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4 h-100 text-center">
              <ShieldCheck size={40} className="text-primary mb-3" />
              <h5 className="fw-bold">Premium Verified Reports</h5>
              <p className="text-muted small">Access exclusive verified stories from trusted sources.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 p-4 h-100 text-center">
              <Star size={40} className="text-danger mb-3" />
              <h5 className="fw-bold">Ad-Free Experience</h5>
              <p className="text-muted small">No ads, no interruptions. Just clean news.</p>
            </div>
          </div>
        </div>

        {/* PREMIUM BENEFITS */}
        <h3 className="fw-bold border-bottom pb-2 mb-4">Premium Advantages</h3>

        <div className="row mb-5">
          {[
            "Access to exclusive Tech, Business & Startup reports",
            "Unlimited reading – No Paywall",
            "Early access to breaking news",
            "Special interviews and expert columns",
            "Saved articles & reading history",
            "Weekly premium newsletter",
            "HD Image News Mode",
            "Premium-only comments section",
          ].map((item, i) => (
            <div className="col-md-6 mb-3" key={i}>
              <div className="d-flex align-items-start">
                <CheckCircle2 size={22} className="text-success me-2" />
                <p className="fw-semibold">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING SECTION */}
        <h3 className="fw-bold border-bottom pb-2 mb-4">Choose Your Plan</h3>

        <div className="row mb-5">

          {/* MONTHLY */}
          <div className="col-md-6 mb-4">
            <div className="card p-4 border-0 shadow-sm h-100">
              <h4 className="fw-bold">
                Monthly Plan
              </h4>
              <p className="text-muted mb-2">Perfect for regular readers</p>
              <h2 className="fw-bold text-danger">₹99 <span className="fs-6 text-muted">/month</span></h2>

              <ul className="mt-3">
                {[
                  "Ad-free reading",
                  "Premium exclusive articles",
                  "Unlimited access",
                  "Weekly premium newsletter",
                ].map((b, i) => (
                  <li key={i} className="mb-2">{b}</li>
                ))}
              </ul>

              <button className="btn btn-danger mt-auto">Get Monthly Plan</button>
            </div>
          </div>

          {/* YEARLY */}
          <div className="col-md-6 mb-4">
            <div className="card p-4 border-0 shadow-lg premium-highlight h-100">
              <h4 className="fw-bold">
                Yearly Plan <Gift className="text-warning ms-2" />
              </h4>
              <p className="text-muted mb-2">Best value for long-term users</p>
              <h2 className="fw-bold text-primary">₹799 <span className="fs-6 text-muted">/year</span></h2>

              <ul className="mt-3">
                {[
                  "All Monthly Benefits",
                  "Exclusive Yearly-only reports",
                  "Invitation to Premium events",
                  "Special Q&A sessions",
                ].map((b, i) => (
                  <li key={i} className="mb-2">{b}</li>
                ))}
              </ul>

              <button className="btn btn-primary mt-auto">Get Yearly Plan</button>
            </div>
          </div>
        </div>

        {/* FREE VS PREMIUM COMPARISON */}
        <h3 className="fw-bold border-bottom pb-2 mb-4">Free vs Premium</h3>

        <table className="table table-bordered shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Feature</th>
              <th>Free</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["News Access", "Limited", "Unlimited"],
              ["Ad-Free", "No", "Yes"],
              ["Exclusive Reports", "No", "Yes"],
              ["Breaking News Alerts", "Limited", "Instant"],
              ["Newsletter", "Basic", "Premium"],
            ].map((row, i) => (
              <tr key={i}>
                <td className="fw-semibold">{row[0]}</td>
                <td>{row[1]}</td>
                <td className="text-success fw-bold">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CTA */}
        <div className="text-center my-5 p-5 bg-warning rounded shadow">
          <h2 className="fw-bold">Upgrade to Premium Today</h2>
          <p className="text-dark">
            Trusted by lakhs of readers. Stay ahead with verified premium journalism.
          </p>
          <button className="btn btn-dark btn-lg">
            Join TheTechTimes Premium
          </button>
        </div>
      </div>

      {/* EXTRA CSS */}
      <style jsx>{`
        .premium-highlight {
          border-left: 4px solid #ffcc00;
        }
      `}</style>
    </div>
  );
}
