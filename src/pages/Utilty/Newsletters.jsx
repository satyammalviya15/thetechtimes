import React from "react";

const Newsletters = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto text-center">
          <div className="mb-5">
            <h1 className="fw-bold display-5 mb-3">Choose Your <span className="text-danger">Signal.</span></h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Personalize your tech intelligence. Select the tracks that align with your professional interests.
            </p>
          </div>
          
          <div className="row g-4 text-start">
            {[
              {
                id: "morning-signal",
                title: "The Morning Signal",
                desc: "The 3-minute executive summary of overnight global tech shifts and market updates.",
                tag: "DAILY",
                checked: true
              },
              {
                id: "deep-tech",
                title: "Deep Tech Chronicles",
                desc: "Weekly long-reads on AI, Biotech, Quantum Computing, and the people building the future.",
                tag: "WEEKLY",
                checked: false
              },
              {
                id: "venture-vault",
                title: "The Venture Vault",
                desc: "Exclusive insights into startup funding, VC trends, and institutional tech movements.",
                tag: "BI-WEEKLY",
                checked: false
              }
            ].map((track, i) => (
              <div key={i} className="col-12">
                <div className="card p-4 border-0 shadow-sm rounded-4 hover-lift bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <div style={{ flex: 1 }}>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <h4 className="fw-bold mb-0">{track.title}</h4>
                        <span className="badge bg-light text-danger border border-danger border-opacity-10 small">{track.tag}</span>
                      </div>
                      <p className="text-muted small mb-0 pe-md-5">{track.desc}</p>
                    </div>
                    <div className="form-check form-switch fs-4">
                      <input className="form-check-input shadow-none custom-switch" type="checkbox" role="switch" defaultChecked={track.checked} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-5 pt-4">
            <div className="mx-auto" style={{ maxWidth: '500px' }}>
              <div className="input-group input-group-lg shadow-sm border rounded-pill overflow-hidden bg-white mb-3">
                <input type="email" className="form-control border-0 px-4 py-3 shadow-none bg-transparent" placeholder="Confirm your email to update preferences" />
                <button className="btn btn-danger px-5 fw-bold letter-spacing-1">UPDATE</button>
              </div>
              <p className="small text-muted">You can adjust your preferences or unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer; }
        .hover-lift:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important; }
        .custom-switch:checked { background-color: #B00020; border-color: #B00020; }
        .letter-spacing-1 { letter-spacing: 0.5px; }
      `}</style>
    </div>
  );
};

export default Newsletters;
