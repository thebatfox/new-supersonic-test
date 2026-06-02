import Script from 'next/script';

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://supersoniccustoms.co.za/#organization",
    name: "Supersonic Customs",
    legalName: "Supersonic Customs (Pty) Ltd",
    description: "Cape Town's leading soundproofing and acoustic treatment specialists. Expert noise control, acoustic panels, recording studio treatment, carpentry and AV installations for residential, commercial and industrial clients across South Africa.",
    url: "https://supersoniccustoms.co.za",
    telephone: ["+27212030054", "+27767702767"],
    email: "info@supersonicafrica.co.za",
    vatID: "4820285726",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25B Gray Road",
      addressLocality: "Paarden Eiland",
      addressRegion: "Western Cape",
      postalCode: "7405",
      addressCountry: "ZA"
    },
    areaServed: [
      {
        "@type": "City",
        "name": "Cape Town"
      },
      {
        "@type": "State",
        "name": "Western Cape"
      },
      {
        "@type": "Country",
        "name": "South Africa"
      },
      {
        "@type": "Country",
        "name": "Democratic Republic of Congo"
      },
      {
        "@type": "Country",
        "name": "Zambia"
      },
      {
        "@type": "Country",
        "name": "Mozambique"
      },
      {
        "@type": "Country",
        "name": "Namibia"
      }
    ],
    logo: "https://supersoniccustoms.co.za/logo.svg",
    image: "https://supersoniccustoms.co.za/og-image.jpg",
    sameAs: [],
    foundingDate: "2018",
    numberOfEmployees: "10-50"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://supersoniccustoms.co.za/#business",
    name: "Supersonic Customs",
    legalName: "Supersonic Customs (Pty) Ltd",
    description: "Cape Town's specialist soundproofing and acoustic treatment company. Expert noise control, acoustic panels, recording studio soundproofing, carpentry and AV installations.",
    url: "https://supersoniccustoms.co.za",
    telephone: "+27212030054",
    email: "info@supersonicafrica.co.za",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25B Gray Road",
      addressLocality: "Paarden Eiland",
      addressRegion: "Western Cape",
      postalCode: "7405",
      addressCountry: "ZA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9249,
      longitude: 18.4241
    },
    openingHours: [
      "Mo-Fr 08:00-17:00",
      "Sa 09:00-13:00"
    ],
    priceRange: "$$-$$$",
    currenciesAccepted: "ZAR",
    paymentAccepted: "EFT, Bank Transfer",
    areaServed: {
      "@type": "City",
      name: "Cape Town"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Acoustic Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soundproofing",
            description: "Professional noise isolation for walls, floors and ceilings using mass, decoupling and sealing techniques. STC ratings from 38 to 52."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Acoustic Treatment",
            description: "Echo control and sound quality improvement using mineral wool absorption panels, fabric-wrapped panels and diffusion solutions."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Acoustic Panel Manufacturing",
            description: "Custom fabric-wrapped acoustic panels manufactured in our Paarden Eiland workshop. Standard and premium acoustic fabric options."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Acoustic Doors",
            description: "Single and double internal and external acoustic doors with circumference seals and pressure seals for professional sound isolation."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Noise & Vibration Control",
            description: "Specialist solutions for industrial machinery, generator enclosures, property boundary barriers and temporary acoustic screening."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Room-in-Room Construction",
            description: "Complete isolated room construction for maximum sound isolation — ideal for recording studios, home theatres and broadcast facilities."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Noise Impact Assessments",
            description: "Site noise measurement, impact assessment and compliance reporting for indoor and outdoor environments in Cape Town and across South Africa."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carpentry & Custom Manufacturing",
            description: "Bespoke acoustic shopfitting and custom manufacturing from our in-house Cape Town fabrication workshop."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AV Technology Supply & Installation",
            description: "Complete audio-visual technology supply and installation services for commercial and residential spaces."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Active Noise Cancellation Systems",
            description: "Electronic ANC systems for factories, workshops and industrial environments where passive treatment alone is impractical."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://supersoniccustoms.co.za/#website",
    url: "https://supersoniccustoms.co.za",
    name: "Supersonic Customs",
    description: "Cape Town's leading soundproofing and acoustic treatment specialists",
    publisher: {
      "@id": "https://supersoniccustoms.co.za/#organization"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
