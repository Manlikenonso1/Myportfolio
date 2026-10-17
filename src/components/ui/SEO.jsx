import { useEffect } from 'react';

export default function SEO({ 
  title = "Chinonso Ezeigbo", 
  description = "A product designer obsessed with human behavior, building scalable interfaces that drastically improve retention and joy.", 
  image = "/og-image.jpg" 
}) {
  useEffect(() => {
    // Standard Title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (name, content, attribute = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Tags
    updateMeta("description", description);

    // Open Graph
    updateMeta("og:title", title, "property");
    updateMeta("og:description", description, "property");
    updateMeta("og:image", image, "property");
    updateMeta("og:type", "website", "property");

    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", image);

  }, [title, description, image]);

  return null;
}
