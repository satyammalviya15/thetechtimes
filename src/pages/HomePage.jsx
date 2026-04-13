import Header from "../components/Header";
import FrontPage from "../components/FrontPage";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function HomePage() {
  return (
    <>
      <SEO 
        title="Breaking News, Tech News, Startups & Jobs"
        description="The Tech Times is your daily source for the latest technology news, gadgets, software updates, AI developments, cybersecurity insights, and tech reviews."
        keywords="The Tech Times, technology news, tech updates, latest gadgets, AI news, artificial intelligence, cybersecurity, software reviews, tech blogs"
        type="website"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "The Tech Times",
            "url": "https://thetechtimes.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://thetechtimes.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Tech Times",
            "url": "https://thetechtimes.in",
            "logo": "https://thetechtimes.in/TT-WhiteLogo.png",
            "sameAs": [
              "https://www.facebook.com/thetechtimes",
              "https://www.twitter.com/thetechtimes",
              "https://www.linkedin.com/company/thetechtimes"
            ]
          }
        ]}
      />
      <FrontPage/>
    </>
  );
}

export default HomePage;
