import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "full-stack developer, React, TypeScript, Supabase, SEO, software testing, web development",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonicalUrl
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = `${title} | Portfolio`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${title} | Portfolio`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute("content", ogImage);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", fullUrl);
    } else {
      const newOgUrl = document.createElement("meta");
      newOgUrl.setAttribute("property", "og:url");
      newOgUrl.setAttribute("content", fullUrl);
      document.head.appendChild(newOgUrl);
    }

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Add keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute("content", keywords);
  }, [title, description, keywords, ogImage, fullUrl]);

  return null;
};

export default SEO;
