import React from "react";
import { TrendingUp, Database, BarChart3, Cpu } from "lucide-react";

const DataNews = () => {
  return (
    <div className="container py-4">

      {/* 🔥 Page Title */}
      <h2 className="fw-bold mb-4 d-flex align-items-center gap-2">
        <Database size={28} /> Data News
      </h2>

      <div className="row">

        {/* ============================
            🔥 Left Section (Main Content)
        ============================= */}
        <div className="col-lg-8">

          {/* ⭐ Featured Story */}
          <div className="card mb-4 shadow-sm border-0">
            <img
              src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2"
              className="card-img-top"
              alt="Data Analytics"
              style={{ height: "360px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="fw-bold">
                India Becomes Global Leader in Open Data Innovation
              </h4>
              <p className="text-muted mb-2">
                Massive government push leads to new data-driven startups
              </p>
              <p>
                With rising adoption of AI and analytics, India has now become
                a major hub for global data innovation. Government initiatives
                and private players contribute to rapid growth.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>

          {/* 🔥 Latest Data Stories */}
          <h4 className="fw-bold mt-4 mb-3">Latest in Data</h4>

          <div className="row">
            {[1, 2, 3].map((item) => (
              <div className="col-md-6 mb-4" key={item}>
                <div className="card shadow-sm border-0 h-100">
                  <img
                    src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
                    className="card-img-top"
                    alt="Data Story"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">
                      Big Data Adoption Surges in 2025 Across India
                    </h5>
                    <p className="text-muted">
                      Enterprises invest heavily in cloud & analytics.
                    </p>
                    <button className="btn btn-outline-primary btn-sm">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ============================
            📊 Right Section (Trending)
        ============================= */}
        <div className="col-lg-4">

          {/* 📈 Trending Data Insights */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h5 className="fw-bold d-flex align-items-center gap-2 mb-3">
                <TrendingUp size={20} /> Trending Data Insights
              </h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  AI-driven analytics transforming Indian businesses
                </li>
                <li className="list-group-item">
                  Big Data jobs see 40% salary hike in 2025
                </li>
                <li className="list-group-item">
                  India launches world’s largest open-data portal
                </li>
                <li className="list-group-item">
                  Data centers expanding rapidly across Asia
                </li>
              </ul>
            </div>
          </div>

          {/* 📊 Analytics Updates */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-bold d-flex align-items-center gap-2">
                <BarChart3 size={20} /> Analytics Updates
              </h5>

              <div className="mt-3">
                <p className="fw-bold mb-1">AI & Data Science</p>
                <p className="text-muted">
                  India ranks top 3 in global AI research output.
                </p>
              </div>

              <hr />

              <div>
                <p className="fw-bold mb-1">Cloud & Big Data</p>
                <p className="text-muted">
                  Cloud adoption reaches highest peak in 2025.
                </p>
              </div>

              <hr />

              <div>
                <p className="fw-bold mb-1">Cybersecurity</p>
                <p className="text-muted">
                  Data protection framework gets stronger with new laws.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default DataNews;
