import React from "react";
import { Cpu, Zap, Globe, Shield, Rocket, ArrowUpRight } from "lucide-react";

const techItems = [
  { title: "Neural Link 2.0", category: "Biotech", status: "Testing", color: "text-primary" },
  { title: "Quantum Grid", category: "Infrastructure", status: "Live", color: "text-success" },
  { title: "Fusion Core Mini", category: "Energy", status: "Prototype", color: "text-warning" },
  { title: "Edge Guardian", category: "Security", status: "Beta", color: "text-info" }
];

const TheTech = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5 align-items-center">
        <div className="col-lg-6">
           <h1 className="display-3 fw-black mb-3">The Tech</h1>
           <p className="lead text-muted mb-4">A living encyclopedia of the innovations defining 2026. From deep-tech hardware to the frontiers of software.</p>
           <div className="d-flex gap-3">
              <button className="btn btn-dark rounded-pill px-4 py-2">Submit Innovation</button>
              <button className="btn btn-outline-dark rounded-pill px-4 py-2">Full Database</button>
           </div>
        </div>
        <div className="col-lg-6 text-end d-none d-lg-block">
           <Cpu size={240} className="text-primary opacity-10 animate-spin-slow" />
        </div>
      </div>

      <div className="row g-4">
        {techItems.map((item, i) => (
          <div key={i} className="col-md-6 col-lg-3">
             <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                <div className="card-body p-4">
                   <div className={`mb-3 ${item.color}`}><Zap size={32} /></div>
                   <h5 className="fw-bold mb-1">{item.title}</h5>
                   <p className="small text-muted mb-3">{item.category}</p>
                   <div className="d-flex justify-content-between align-items-center mt-auto\">
                      <span className={`badge border rounded-pill px-3 py-1 bg-light text-dark fw-normal`}>{item.status}</span>
                      <ArrowUpRight size={18} className="text-muted pointer" />
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-5 bg-gradient-primary rounded-5 text-white shadow-lg overflow-hidden position-relative">
         <div className="position-absolute top-0 end-0 p-5 mt-5 opacity-10">
            <Globe size={300} />
         </div>
         <div className="position-relative z-1">
            <h2 className="fw-bold display-5 mb-3">2026 Innovation Roadmap</h2>
            <p className="opacity-75 lead mb-4" style={{ maxWidth: '600px' }}>Explore the timeline of expected breakthroughs in room-temperature superconductors and orbital logistics.</p>
            <div className="row g-4">
               {[
                 { year: '2024', event: 'Web3 Standardization' },
                 { year: '2025', event: 'First Commercial Fusion' },
                 { year: '2026', event: 'Neural Interface Consumer Launch' }
               ].map((step, i) => (
                 <div key={i} className="col-md-4">
                    <div className="p-3 bg-white bg-opacity-10 rounded-4 border border-white border-opacity-10 h-100">
                       <span className="fw-black fs-5 d-block mb-1">{step.year}</span>
                       <span className="small opacity-75">{step.event}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <style jsx>{`
        .bg-gradient-primary { background: linear-gradient(135deg, #0d6efd, #004d99); }
        .card-hover:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; transition: all 0.3s; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default TheTech;
