import React from "react";

const Events = () => {
  const events = [
    { title: "Tech Times Summit 2026", date: "June 15-17, 2026", location: "Global / Online", type: "Conference" },
    { title: "AI Ethics Workshop", date: "April 20, 2026", location: "Mumbai, India", type: "Workshop" },
    { title: "DevConnect Networking", date: "May 10, 2026", location: "Bangalore, India", type: "Meetup" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Upcoming Events</h1>
      <p className="lead text-muted mb-5">Join the tech community at our upcoming summits, workshops, and meetups.</p>
      
      <div className="row g-4">
        {events.map((event, i) => (
          <div key={i} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <span className="badge bg-primary w-fit mb-3" style={{ width: 'fit-content' }}>{event.type}</span>
              <h3 className="fw-bold mb-3">{event.title}</h3>
              <div className="text-muted mb-4">
                <p className="mb-1"><i className="bi bi-calendar-event me-2"></i> {event.date}</p>
                <p className="mb-0"><i className="bi bi-geo-alt me-2"></i> {event.location}</p>
              </div>
              <button className="btn btn-dark mt-auto" style={{ backgroundColor: "#B00020", border: 'none' }}>Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
