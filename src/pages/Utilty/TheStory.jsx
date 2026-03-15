import React from "react";
import { BookOpen, Quote, Clock, Share2, ArrowRight } from "lucide-react";

const TheStory = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          {/* Hero Section */}
          <div className="text-center mb-5 pb-5 border-bottom">
            <span className="badge bg-danger rounded-pill px-3 py-2 mb-3">COVER STORY</span>
            <h1 className="display-3 fw-bold serif-font mb-4">The Silent Architect: How AI Is Rewriting the Human Experience</h1>
            <p className="lead text-muted italic fs-4 mb-4">An investigative journey into the code that now defines our choices, our culture, and our future.</p>
            <div className="d-flex align-items-center justify-content-center gap-4 text-muted small">
              <span className="d-flex align-items-center gap-1"><Clock size={16} /> 15 Min Read</span>
              <span className="d-flex align-items-center gap-1"><BookOpen size={16} /> Volume 24</span>
              <Share2 size={16} className="pointer" />
            </div>
          </div>

          {/* Narrative Content */}
          <article className="serif-font fs-5 text-dark lh-lg mb-5">
            <p className="first-letter-drop">
              It began in a small laboratory in Zurich, not with a bang, but with a whisper of processed data. 
              The researchers didn't know then that they had stumbled upon the "Goldilocks zone" of machine 
              sentience—an algorithm so precise it felt indistinguishable from intuition. 
              Today, that whisper has become a roar, echoed across every digital interface we touch.
            </p>

            <div className="my-5 py-4 border-start border-4 border-primary ps-4 bg-light rounded-2">
              <Quote size={40} className="text-primary opacity-25 mb-3" />
              <p className="h4 fw-bold italic text-primary">"We aren't just building tools anymore; we're building mirrors. And for the first time, the mirror is starting to blink."</p>
              <footer className="text-muted mt-2">— Dr. Elena Vance, Lead AI Ethicist</footer>
            </div>

            <p>
              As we navigate the landscape of 2026, the question is no longer whether AI can think, 
              but how it makes us think about ourselves. From the way we work to the way we love, 
              the "The Story" series explores the human side of the digital revolution.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200" 
              className="img-fluid rounded-4 my-5 shadow-lg" 
              alt="Neural Network Visual" 
            />

            <h2 className="fw-bold mt-5 mb-4 display-6 text-dark border-bottom pb-2">Part II: The Ghost in the Server</h2>
            <p>
              Walking through a modern data center is like walking through a graveyard of old ideas. 
              The humming servers house billions of parameters, each one a tiny part of a collective 
              intelligence that no single human being fully understands.
            </p>
          </article>

          {/* Footer CTA */}
          <div className="bg-dark text-white p-5 rounded-5 shadow-xl text-center mt-5">
            <h3 className="fw-bold mb-3">Support Independent Journalism</h3>
            <p className="opacity-75 mb-4">Get unlimited access to "The Story" and our investigative archives.</p>
            <button className="btn btn-primary rounded-pill px-5 py-2 fw-bold">SUBSCRIBE NOW <ArrowRight size={18} className="ms-2" /></button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .serif-font { font-family: 'Playfair Display', serif; }
        .italic { font-style: italic; }
        .first-letter-drop::first-letter {
          float: left;
          font-size: 5rem;
          line-height: 4rem;
          padding-right: 8px;
          font-weight: 900;
          color: #0d6efd;
        }
        .shadow-xl { box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
      `}</style>
    </div>
  );
};

export default TheStory;
