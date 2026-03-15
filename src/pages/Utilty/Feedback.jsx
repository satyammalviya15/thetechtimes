import React, { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="container my-5">
      <div className="col-lg-7 mx-auto">
        <h1 className="mb-4">Website Feedback</h1>
        <p className="text-muted mb-5">Your feedback helps us improve. Let us know what you think about your experience.</p>
        
        <div className="card border-0 shadow-sm p-4">
          <form onSubmit={(e) => { e.preventDefault(); alert('Feedback submitted!'); }}>
            <div className="mb-4">
              <label className="form-label fw-bold">How would you rate your experience?</label>
              <div className="d-flex gap-3 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button 
                    key={s} 
                    type="button" 
                    className={`btn btn-lg rounded-circle ${rating >= s ? 'btn-danger' : 'btn-outline-dark'}`}
                    onClick={() => setRating(s)}
                    style={{ width: '45px', height: '45px', padding: '0' }}
                  >
                    <i className="bi bi-star-fill"></i>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">What do you like best?</label>
              <select className="form-select shadow-none">
                <option>Content Quality</option>
                <option>Website Design</option>
                <option>Navigation</option>
                <option>Speed</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Any suggestions for improvement?</label>
              <textarea className="form-control shadow-none" rows="4" placeholder="Tell us more..."></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100 py-3" style={{ backgroundColor: "#B00020", border: 'none' }}>Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
