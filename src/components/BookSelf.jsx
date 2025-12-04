//Additonal Work Rating of Each Book
//Additonal Work Add SubCategories
//Additonal Work Add Database For Data
//Additional WorK Add REST API For Adding Books in BookSelf

"use client";
import React, { useState } from "react";

const certificates = [
   {
    title: "The Ultimate Bible to Learn Python Programming for a Career in Machine Learning, Data Science & Web Development.",
    issuer: "Author Name Oliver Soranson",
    date: "Mar 2024",
    category: "Programming",
    url: "https://drive.google.com/file/d/1nEXiFUUaLBOxX1jHXwyrl_f7yqWDFA-L/preview",
  },
  {
    title: "Mastering Bootstrap. A Beginner_s Guide 2023",
    issuer: "First Edition published 2023 by CRC Press",
    date: "Mar 2023",
    category: "Programming",
    url: "https://drive.google.com/file/d/1FIL0IqJzAfG_1EZRhxYq4kdznbeWN57f/preview",
  },
   {
    title: "Mastering Swift A Beginner’s Guide",
    issuer: "First Edition published 2022 by CRC Press",
    date: "Mar 2024",
    category: "App Development",
    url: "https://drive.google.com/file/d/1n2TGe7VxOZ092LTu4R795PyRhOaQhwGZ/preview",
  },
  {
    title: "C# Cookbook",
    issuer: "Published by O’Reilly Media, Inc.",
    date: "Sep 2025",
    category: "Programming",
    url: "https://drive.google.com/file/d/1QG4KSBTNjIt_7RTPV28CWb9XRefiV3hU/preview",
  },
  {
    title: "The-Ultimate-Guide-To-Angular-Evolution-Angular-20",
    issuer: "House Of Angular",
    date: "Mar 2024",
    category: "Web Development",
    url: "https://drive.google.com/file/d/1dLqzacSxPW5IxY6Ow2fdr8rZKocSdXGw/preview",
  },
  {
    title: "Java-A-Beginner_s-Guide_-9th-Edition",
    issuer: "McGraw-Hill Education eBooks",
    date: "Sep 2025",
    category: "Programming",
    url: "https://drive.google.com/file/d/19p3yAeHDaX0ErXIevGA3r2k-IcxoimLT/preview",
  },
  {
    title: "Angular Projects - Build modern web apps in Angular 16",
    issuer: "Published by Packt Publishing Ltd.",
    date: "Sep 2024",
    category: "Web Development",
    url: "https://drive.google.com/file/d/1VtV5_fGc3yr6gYl4UtICgc616vMSZLA_/preview",
  },
   {
    title: "Bootstrap-Programming-Cookbook",
    issuer: "Web Code Greeks",
    date: "Mar 2024",
    category: "Programming",
    url: "https://drive.google.com/file/d/1bFiwREtLyHIHYcv7SoLlEAtPiCXNNXAl/preview",
  },
  {
    title: "Mastering React Native. A Comprehensive Guide to Learn...2023",
    issuer: "Mastering React Native By Cybellium Ltd",
    date: "Sep 2023",
    category: "App Development",
    url: "https://drive.google.com/file/d/1sX2rEzWiwlFgP6iKKXerIR9P8iJE9Uyo/preview",
  },
  {
    title: "Mastering Rust Programming. From Foundations to Future 2024",
    issuer: "Published by Sonar Publishing, 2024.",
    date: "Sep 2024",
    category: "Programming",
    url: "https://drive.google.com/file/d/1cICjQitQSb8LX3hhf6qcmxT3oLIHqKct/preview",
  },
  {
    title: "Mastering Flutter and Dart. Elegant Code...2024",
    issuer: "Published by Sonar Publishing, 2024.",
    date: "Mar 2024",
    category: "App Development",
    url: "https://drive.google.com/file/d/19nTQCHP4vJ3pdaFzgoouU5rW1maiktFU/preview",
  },
   {
    title: "React and React Native Fifth Edition Build cross-platform JavaScript and TypeScript apps for the web, desktop, and mobile",
    issuer: "Published by Packt Publishing Ltd.Grosvenor House",
    date: "Mar 2024",
    category: "Web Development",
    url: "https://drive.google.com/file/d/1wkZc8kPD5bNTkSkXI_8cJ_j5EylVaIPV/preview",
  },
  {
    title: "Kotlin: An Illustrated Guide",
    issuer: "Written and Illustrated by Dave Leeds",
    date: "Mar 2024",
    category: "App Development",
    url: "https://drive.google.com/file/d/1D8vmanE6-wCXyehIpX_iFtiIBItKRGAp/preview",
  },
  ,
  {
    title: "C++ CRASH COURSE A Fast-Paced Introduction",
    issuer: "San Francisco, CA : No Starch Press, Inc.,",
    date: "Mar 2024",
    category: "Programming",
    url: "https://drive.google.com/file/d/1LmuQNMhZQCsuH5WYrf1HsMfMbrbIxm8N/preview",
  },
  {
    title: "Pointers in C Programming A Modern Approach to Memory Management, Recursive Data Structures, Strings, and Arrays",
    issuer: "company APress Media, LLC part of Springer Nature.",
    date: "Mar 2024",
    category: "Programming",
    url: "https://drive.google.com/file/d/1Jh1Bng4Ewe-mZeHw1rrCyrM_RB4BmgIt/preview",
  },
   {
    title: "HTML, CSS, & JavaScript All-in-One For Dummies",
    issuer: "John Wiley & Sons, Inc.",
    date: "Mar 2024",
    category: "Web Development",
    url: "https://drive.google.com/file/d/1MnlNUPLWCApUa9xfUcq-5F_tzFqt0fCj/preview",
  },
  {
    title: "Modern Interview Tips & Tricks:Secrets To Crack Interviews Successfully",
    issuer: "Mr.Unknown User Publication",
    date: "Mar 2024",
    category: "Career Development",
    url: "https://drive.google.com/file/d/1Lu4IHY-W6tbvQtqO_DFEbSoXmng1c7da/preview",
  },
  {
    title: "Web Development For beginners",
    issuer: "WHITE BELT MASTERY",
    date: "Mar 2025",
    category: "Web Development",
    url: "https://drive.google.com/file/d/10O-Fz2CWMJFJsmFpw3VKPAbH4NsEeFUq/preview",
  },
];

const categories = ["All", "Programming", "App Development", "Web Development", "Career Development"];
const itemsPerPage = 12;

const BookShelf = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);

  // Filter certificates
  const filtered = certificates.filter((cert) => {
    const matchesCategory =
      selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section className="py-4">
      <div className="container">
        {/* 🔍 Search & Category Filter */}
      <div className="d-flex flex-row flex-md-row justify-content-between align-items-center mb-4 gap-3">
  {/* 🔍 Search Box (75%) */}
  <div className="w-75">
    <input
      type="text"
      className="form-control"
      placeholder="Search Books..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  {/* 🧭 Category Select (25%) */}
  <div className="w-25">
    <select
      className="form-select"
      value={selectedCategory}
      onChange={(e) => handleCategoryChange(e.target.value)}
      style={{
        maxHeight: "150px",
        overflowY: "auto",
      }}
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  </div>
</div>



        {/* 📜 Certificates Grid */}
        <div className="row justify-content-center">
          {paginated.map((cert, index) => (
            <div
              key={index}
              className="col-6 col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
            >
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ width: "100%", maxWidth: "280px" }}
              >
                {/* 🧾 PDF Preview */}
                <div
                  className="border-bottom d-flex justify-content-center align-items-center"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "130%", // maintains aspect ratio
                    overflow: "hidden",
                    // background: "#f8f9fa",
                  }}
                >
                  <iframe
                    src={cert.url}
                    title={cert.title}
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "none",
                      transform: "scale(0.8)",
                      transformOrigin: "center",
                    }}
                  ></iframe>
                </div>

                {/* 📖 Certificate Info */}
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-dark">{cert.title}</h6>
                  <p className="text-muted mb-1">Issued by: {cert.issuer}</p>
                  {/* <p className="text-secondary mb-3">Date: {cert.date}</p> */}

                  <button
                    type="button"
                    className="btn btn-outline-primary mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#bookModal"
                    onClick={() => setSelectedCert(cert)}
                  >
                    View Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 📄 Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* 📘 Modal - Book View */}
        <div
          className="modal fade"
          id="bookModal"
          tabIndex="-1"
          aria-labelledby="bookModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content position-relative">
              <div className="d-flex flex-wrap">
                <div className="col-md-6 p-4 bg-light border-end">
                  <h5>{selectedCert?.title}</h5>
                  <p className="text-muted">Issued by: {selectedCert?.issuer}</p>
                  <p className="text-muted">Date: {selectedCert?.date}</p>
                  <p className="small">
                    This certification highlights technical expertise and
                    dedication toward continuous learning and excellence.
                  </p>
                </div>

                <div className="col-md-6">
                  {selectedCert && (
                    <iframe
                      src={`${selectedCert.url}#view=FitH`}
                      width="100%"
                      height="600px"
                      style={{ border: "none" }}
                      title={selectedCert.title}
                    ></iframe>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookShelf;
