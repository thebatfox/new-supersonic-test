import Script from 'next/script';

interface GalleryProject {
  id: number;
  title: string;
  category: string;
  description: string;
  slug: string;
}

interface GallerySchemaProps {
  projects: GalleryProject[];
}

export default function GallerySchema({ projects }: GallerySchemaProps) {
  // Generate structured data for the gallery
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Superzola Customs Project Gallery",
    "description": "Portfolio of successful acoustic projects across various industries including soundproofing, acoustic treatment, carpentry, and AV installations.",
    "url": "https://superzolacustoms.com#gallery",
    "mainEntity": projects.map(project => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "url": `https://superzolacustoms.com/gallery/${project.slug}`,
      "about": {
        "@type": "Service",
        "name": project.category,
        "category": project.category,
        "provider": {
          "@type": "Organization",
          "name": "Superzola Customs"
        }
      }
    }))
  };

  return (
    <>
      <Script
        id="gallery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(gallerySchema)}
      </Script>

      {projects.map((project) => {
        const projectSchema = {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": `https://superzolacustoms.com/gallery/${project.slug}`,
          "creator": {
            "@type": "Organization",
            "name": "Superzola Customs",
            "url": "https://superzolacustoms.com"
          },
          "about": {
            "@type": "Service",
            "name": `${project.category} Services`,
            "category": project.category,
            "provider": {
              "@type": "Organization",
              "name": "Superzola Customs"
            }
          },
          "keywords": [
            project.category.toLowerCase(),
            "acoustic treatment",
            "soundproofing",
            "noise control",
            "professional installation"
          ].join(", ")
        };

        return (
          <Script
            key={`project-schema-${project.id}`}
            id={`project-schema-${project.id}`}
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify(projectSchema)}
          </Script>
        );
      })}
    </>
  );
}
