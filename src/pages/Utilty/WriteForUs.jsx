import React from "react";

const WriteForUs = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Write For Us</h1>
      <p className="lead">
        The Tech Times is always looking for new voices and perspectives. If you're a tech expert, a researcher, or a passionate writer, we want to hear from you.
      </p>

      <div className="row mt-5">
        <div className="col-lg-8">
          <h3>What we're looking for</h3>
          <p>
            We value high-quality, original content that provides value to our readers. Our primary categories include:
          </p>
          <ul>
            <li>In-depth analysis of emerging technologies (AI, Web3, Biotech)</li>
            <li>Practical tutorials and "How-To" guides for developers</li>
            <li>Software and hardware reviews</li>
            <li>Perspectives on tech policy and cybersecurity</li>
            <li>Stories about startup culture and innovation</li>
          </ul>

          <h3 className="mt-5">Submission Guidelines</h3>
          <ol>
            <li><strong>Originality:</strong> We only accept 100% original content that hasn't been published elsewhere.</li>
            <li><strong>Word Count:</strong> Articles should typically be between 800 and 1,500 words.</li>
            <li><strong>Tone:</strong> Informative, professional, yet engaging.</li>
            <li><strong>Formatting:</strong> Use clear subheadings and include relevant high-resolution images or diagrams.</li>
            <li><strong>Citations:</strong> Always cite your sources with reputable links.</li>
          </ol>

          <h3 className="mt-5">How to apply</h3>
          <p>
            Please send your pitch to <strong>contribute@thetechtimes.com</strong> with the subject line [PITCH]. Include a brief outline of your proposed article and links to 2-3 of your previous writing samples.
          </p>
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4 bg-light">
            <h4>Why write for us?</h4>
            <ul className="list-unstyled mt-3">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-graph-up text-danger me-2"></i>
                <span>Reach a global audience of 2M+ monthly readers.</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-award text-danger me-2"></i>
                <span>Build your authority as a thought leader in tech.</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-people text-danger me-2"></i>
                <span>Join a vibrant community of passionate tech professionals.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteForUs;
