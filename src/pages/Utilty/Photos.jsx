import React, { useState, useEffect, useRef } from "react";
import { Image, Camera, Grid, Heart } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PhotoCard = ({ photo }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="col-md-6 col-lg-4">
      <Link to={`/article/${photo.slug}`} className="text-decoration-none">
        <div className="gallery-item rounded-4 overflow-hidden shadow-sm d-flex flex-column">
          
          <div className="position-relative w-100" style={{ height: "300px" }}>
            {!imgLoaded && (
              <div className="placeholder-glow w-100 h-100 position-absolute z-1" style={{ top: 0, left: 0 }}>
                <div className="placeholder bg-secondary bg-opacity-25 w-100 h-100"></div>
              </div>
            )}

            <img 
              src={photo.url} 
              className="w-100 h-100" 
              style={{ 
                objectFit: 'cover', 
                opacity: imgLoaded ? 1 : 0, 
                transition: 'opacity 0.4s ease-in-out' 
              }} 
              alt={photo.title} 
              onLoad={() => setImgLoaded(true)}
            />
            
            {/* Desktop Hover Overlay (hidden on mobile) */}
            <div className="gallery-overlay d-none d-md-flex flex-column justify-content-end p-4 position-absolute w-100 h-100 z-2" style={{ top: 0, left: 0 }}>
               <div className="d-flex w-100 align-items-end">
                 <div className="text-white text-truncate me-3" style={{ flex: 1 }}>
                    <h6 className="fw-bold mb-1 text-truncate" title={photo.title}>{photo.title}</h6>
                    <small className="opacity-75">{photo.category}</small>
                 </div>
                 <Heart className="text-white pointer" size={20} />
               </div>
            </div>
          </div>

          {/* Mobile Text Payload (hidden on desktop) */}
          <div className="p-3 bg-white d-block d-md-none">
            <h6 className="fw-bold mb-1 text-dark" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{photo.title}</h6>
            <div className="d-flex justify-content-between align-items-center mt-2">
               <small className="text-danger fw-semibold">{photo.category}</small>
               <Heart className="text-muted pointer" size={18} />
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(20);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && photos.length > visibleCount) {
          setVisibleCount((prev) => prev + 20);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.disconnect();
    };
  }, [loading, photos.length, visibleCount]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/news`);
        const data = res.data?.data || [];
        
        // Extract news items that have a valid cover image
        const newsWithImages = data
          .filter(post => post.image)
          .map(post => ({
            id: post._id || post.id,
            url: post.image,
            title: post.title,
            category: post.category?.name || post.category || "News",
            slug: post.slug || post.id
          }));
          
        setPhotos(newsWithImages);
      } catch (error) {
        console.error("Error fetching news photos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div className="container py-5">
      <div className="mb-5">
        <h1 className="fw-bold display-4 mb-2"><Image className="me-2" /> Photo Gallery</h1>
        <p className="lead text-muted">Capturing the aesthetic of innovation through our lens.</p>
      </div>

      {loading ? (
         <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-dark"></div>
         </div>
      ) : photos.length > 0 ? (
        <div className="row g-3">
          {photos.slice(0, visibleCount).map((photo) => (
            <PhotoCard key={`photo-${photo.slug}`} photo={photo} />
          ))}
        </div>
      ) : (
        <div className="text-center py-5 text-muted">
           No photos found at the moment.
        </div>
      )}

      {!loading && photos.length > visibleCount && (
        <div className="mt-5 text-center" ref={loadMoreRef}>
           <div className="spinner-border text-secondary spinner-border-sm me-2"></div>
           <span className="text-muted fw-semibold">Loading more photos...</span>
        </div>
      )}

      <style jsx>{`
        .gallery-item { cursor: pointer; transition: transform 0.3s; }
        .gallery-item:hover { transform: scale(1.02); }
        .gallery-overlay {
           position: absolute;
           inset: 0;
           background: linear-gradient(transparent, rgba(0,0,0,0.7));
           opacity: 0;
           transition: opacity 0.3s;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
      `}</style>
    </div>
  );
};

export default Photos;
