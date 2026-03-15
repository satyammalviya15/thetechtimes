import React from "react";
import { Briefcase, MapPin, DollarSign, Users, Search, Filter } from "lucide-react";

const jobList = [
  { title: "Senior AI Ethicist", company: "Aether Dynamics", location: "Bangalore", salary: "₹45L - ₹65L", type: "Remote" },
  { title: "Frontend Engineer (React)", company: "Skyline Apps", location: "Mumbai", salary: "₹25L - ₹40L", type: "On-site" },
  { title: "Quantum Data Scientist", company: "ComputeX", location: "Delhi", salary: "₹55L - ₹80L", type: "Hybrid" },
  { title: "Product Manager (Web3)", company: "Helix Protocol", location: "Remote", salary: "$120k - $180k", type: "Remote" }
];

const TheJobs = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
         <h1 className="fw-black display-4 mb-2">The Jobs</h1>
         <p className="lead text-muted">Join the teams building the future. Curated opportunities from the world's most innovative tech companies.</p>
      </div>

      <div className="row g-4">
         {/* Sidebar Filters */}
         <div className="col-lg-3">
            <div className="card border-0 shadow-sm p-4 rounded-4 sticky-top" style={{ top: '100px' }}>
               <h6 className="fw-bold mb-4 d-flex align-items-center gap-2"><Filter size={18} /> Filters</h6>
               <div className="mb-4">
                  <label className="form-label small fw-bold text-uppercase opacity-50">Search</label>
                  <div className="input-group">
                     <input type="text" className="form-control border-end-0" placeholder="Title..." />
                     <span className="input-group-text bg-white border-start-0 text-muted"><Search size={16} /></span>
                  </div>
               </div>
               <div className="mb-4">
                  <label className="form-label small fw-bold text-uppercase opacity-50">Role Level</label>
                  <div className="form-check"><input className="form-check-input" type="checkbox"/><label className="form-check-label small">Junior</label></div>
                  <div className="form-check"><input className="form-check-input" type="checkbox" checked/><label className="form-check-label small">Senior</label></div>
                  <div className="form-check"><input className="form-check-input" type="checkbox"/><label className="form-check-label small">Lead</label></div>
               </div>
               <button className="btn btn-dark w-100 rounded-pill">Apply Changes</button>
            </div>
         </div>

         {/* Job Listings */}
         <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4 px-2">
               <span className="text-muted small">Showing 24 active opportunities</span>
               <div className="dropdown">
                  <button className="btn btn-light btn-sm dropdown-toggle rounded-pill px-3 border shadow-sm" type="button">Newest First</button>
               </div>
            </div>
            
            <div className="row g-3">
               {jobList.map((job, i) => (
                  <div key={i} className="col-12">
                     <div className="card border-0 shadow-sm rounded-4 job-card overflow-hidden">
                        <div className="card-body p-4">
                           <div className="row align-items-center">
                              <div className="col-md">
                                 <h5 className="fw-bold mb-1">{job.title}</h5>
                                 <div className="d-flex flex-wrap gap-3 text-muted small">
                                    <span className="d-flex align-items-center gap-1"><Briefcase size={14} /> {job.company}</span>
                                    <span className="d-flex align-items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                    <span className="d-flex align-items-center gap-1"><DollarSign size={14} /> {job.salary}</span>
                                 </div>
                              </div>
                              <div className="col-md-auto mt-3 mt-md-0 d-flex gap-2">
                                 <span className="badge bg-light text-dark border px-3 py-2 fw-normal">{job.type}</span>
                                 <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">APPLY</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="text-center mt-5">
               <button className="btn btn-outline-dark rounded-pill px-5 py-2 fw-bold shadow-sm">LOAD MORE JOBS</button>
            </div>
         </div>
      </div>

      <style jsx>{`
        .job-card { transition: all 0.2s; border-left: 0 solid #0d6efd !important; }
        .job-card:hover { border-left: 6px solid #0d6efd !important; transform: translateX(5px); box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important; }
        .fw-black { font-weight: 900; }
      `}</style>
    </div>
  );
};

export default TheJobs;
