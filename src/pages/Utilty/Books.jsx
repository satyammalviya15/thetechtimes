import React from "react";

const Books = () => {
  const books = [
    { title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering", image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Best Practices", image: "https://m.media-amazon.com/images/I/41HInDR97DL._SX402_BO1,204,203,200_.jpg" },
    { title: "Deep Learning", author: "Ian Goodfellow", category: "AI/ML", image: "https://m.media-amazon.com/images/I/61S3O3rWHSL._SX373_BO1,204,203,200_.jpg" },
    { title: "Eloquent JavaScript", author: "Marijn Haverbeke", category: "JavaScript", image: "https://m.media-amazon.com/images/I/51I9nz9M7GL._SX379_BO1,204,203,200_.jpg" },
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Recommended Tech Books</h1>
      <p className="lead text-muted mb-5">Expand your knowledge with these must-read titles for tech professionals.</p>
      
      <div className="row g-4">
        {books.map((book, i) => (
          <div key={i} className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm hover-lift text-center">
              <div className="p-4 bg-light d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
                <img src={book.image} className="img-fluid rounded shadow-sm" style={{ maxHeight: "250px" }} alt={book.title} />
              </div>
              <div className="card-body">
                <span className="badge bg-primary mb-2">{book.category}</span>
                <h5 className="card-title fw-bold mb-1">{book.title}</h5>
                <p className="text-muted small mb-3">by {book.author}</p>
                <button className="btn btn-outline-dark btn-sm w-100">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hover-lift { transition: transform 0.2s; }
        .hover-lift:hover { transform: translateY(-5px); }
      `}</style>
    </div>
  );
};

export default Books;
