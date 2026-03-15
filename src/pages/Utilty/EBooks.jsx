import React from "react";

const EBooks = () => {
  const ebooks = [
    { title: "The State of AI 2026", size: "12MB", format: "PDF", category: "AI & Future Tech" },
    { title: "React Best Practices", size: "8MB", format: "EPUB", category: "Web Development" },
    { title: "Cybersecurity Handbook", size: "15MB", format: "PDF", category: "Security" },
    { title: "Product Management for Engineers", size: "10MB", format: "PDF", category: "Career" },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Free Tech E-Books</h1>
        <p className="text-muted">Download our curated guides and whitepapers.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="list-group list-group-flush shadow-sm rounded-4 overflow-hidden border">
            {ebooks.map((ebook, i) => (
              <div key={i} className="list-group-item p-4 d-flex align-items-center justify-content-between hover-bg">
                <div className="d-flex align-items-center">
                  <div className="bg-light p-3 rounded-3 me-4 text-danger fs-3">
                    <i className="bi bi-file-earmark-pdf"></i>
                  </div>
                  <div>
                    <span className="badge bg-light text-dark border mb-1">{ebook.category}</span>
                    <h5 className="mb-0 fw-bold">{ebook.title}</h5>
                    <small className="text-muted">{ebook.format} • {ebook.size}</small>
                  </div>
                </div>
                <button className="btn btn-dark" style={{ backgroundColor: "#B00020", border: 'none' }}>Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-bg:hover { background-color: #f8f9fa; }
      `}</style>
    </div>
  );
};

export default EBooks;
