import React from "react";

const FAQ = () => {
  const faqs = [
    { q: "What is The Tech Times?", a: "The Tech Times is a premier digital news platform dedicated to documenting the latest breakthroughs in technology, science, and innovation." },
    { q: "Is registration free?", a: "Yes, you can read a limited number of articles for free. We also offer premium subscriptions for unlimited access and exclusive content." },
    { q: "How do I subscribe to the newsletter?", a: "You can subscribe by entering your email at the bottom of any page or through your account settings." },
    { q: "Can I contribute an article?", a: "Absolutely! Check our 'Write For Us' page for submission guidelines and pitching instructions." },
    { q: "How do I report a bug on the website?", a: "Please use the 'Report Issue' link in the footer to provide details about any technical problems you encounter." },
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Frequently Asked Questions</h1>
      <div className="col-lg-8 mx-auto mt-5">
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, i) => (
            <div key={i} className="accordion-item border-0 mb-3 shadow-sm rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed rounded fw-bold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>
                  {faq.q}
                </button>
              </h2>
              <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-muted">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
