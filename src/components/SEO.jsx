import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url, type = "website", author = "The Tech Times", schemaData }) => {
  const siteName = "The Tech Times";
  const defaultImage = "https://thetechtimes.in/TT-WhiteLogo.png"; // Replace with absolute URL to main logo

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || "The Tech Times - Latest Tech News"} />
      <meta name="keywords" content={keywords || "technology, news, tech, updates"} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook (Crucial for WhatsApp/Facebook shares and mobile previews) */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter (Crucial for Twitter shares) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || window.location.href} />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* News-specific meta tags (Important for aggregators like Google News, Flipboard) */}
      {type === "article" && <meta property="article:publisher" content="https://thetechtimes.in" />}
      {type === "article" && author && <meta property="article:author" content={author} />}
      
      <link rel="canonical" href={url || window.location.href} />

      {/* JSON-LD Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
