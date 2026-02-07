import { useState } from "react";
import { Mail, Info } from "lucide-react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow border-0 col-md-6">
        <div className="card-body p-5">
          <h3 className="fw-bold text-center mb-3" style={{ color: "#B00020" }}>
            Account Recovery
          </h3>

          {!submitted ? (
            <>
              <p className="text-muted text-center small mb-4">
                Enter your registered email address.  
                Our team will review and send recovery details manually.
              </p>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && (
                  <div className="text-danger small mt-1">{error}</div>
                )}
              </div>

              <button
                className="btn w-100 text-white fw-semibold"
                style={{ backgroundColor: "#B00020" }}
                onClick={handleSubmit}
              >
                Submit Recovery Request
              </button>
            </>
          ) : (
            <div className="alert alert-success text-center">
              <strong>Request Submitted!</strong>
              <p className="small mt-2 mb-0">
                If your email is registered, our team will send a
                <strong> demo password </strong>
                to your email from  
                <br />
                <strong>thetechtimes@gmail.com</strong>
              </p>
            </div>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
