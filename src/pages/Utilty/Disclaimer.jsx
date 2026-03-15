import React from "react";

const Disclaimer = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Disclaimer</h1>
      <p className="text-muted mb-4">Last Updated: January 2026 | thetechtimes</p>

      <div className="row">
        <div className="col-lg-10">
          <section className="mb-5">
            <h5 className="fw-bold">1. General Information</h5>
            <p>
              The information provided by <strong>thetechtimes</strong> on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold">2. Professional Disclaimer</h5>
            <p>
              The site cannot and does not contain technical, financial, or legal advice. The technical information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. The use or reliance of any information contained on this site is solely at your own risk.
            </p>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold">3. External Links Disclaimer</h5>
            <p>
              The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
            </p>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold">4. Errors and Omissions Disclaimer</h5>
            <p>
              While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, thetechtimes is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold">5. Fair Use Disclaimer</h5>
            <p>
              This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of technological, environmental, and social issues. We believe this constitutes a "fair use" of any such copyrighted material.
            </p>
          </section>

          <section className="mb-5">
            <h5 className="fw-bold">6. Contact Us</h5>
            <p>
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <strong>support@thetechtimes.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
