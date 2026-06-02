import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ClientBody from "./ClientBody";
import SchemaMarkup from "@/components/schema-markup";
import ZolaBot from "@/components/ZolaBot";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL("https://supersoniccustoms.co.za"),
  title: {
    default: "Supersonic Customs | Soundproofing & Acoustic Specialists — Cape Town",
    template: "%s | Supersonic Customs"
  },
  description: "Cape Town's leading soundproofing and acoustic treatment specialists. Expert noise control, acoustic panels, recording studio soundproofing, carpentry and AV installations. Serving residential, commercial and industrial clients across South Africa.",
  keywords: [
    "soundproofing Cape Town",
    "acoustic treatment Cape Town",
    "noise control Cape Town",
    "acoustic panels Cape Town",
    "recording studio soundproofing Cape Town",
    "soundproofing specialists Cape Town",
    "acoustic carpentry Cape Town",
    "noise reduction South Africa",
    "sound isolation Cape Town",
    "room in room construction Cape Town",
    "noise impact surveys Cape Town",
    "active noise cancellation South Africa",
    "sound system design Cape Town",
    "industrial acoustics South Africa",
    "residential soundproofing Cape Town",
    "commercial acoustic treatment Cape Town",
    "Paarden Eiland acoustics",
    "Western Cape soundproofing",
    "mineral wool insulation South Africa",
    "acoustic consultants Cape Town"
  ],
  authors: [{ name: "Supersonic Customs", url: "https://supersoniccustoms.co.za" }],
  creator: "Supersonic Customs",
  publisher: "Supersonic Customs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Supersonic Customs | Soundproofing & Acoustic Specialists — Cape Town",
    description: "Cape Town's leading soundproofing and acoustic treatment specialists. Expert noise control solutions for homes, studios, offices and industrial environments across South Africa.",
    type: "website",
    locale: "en_ZA",
    siteName: "Supersonic Customs",
    countryName: "South Africa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supersonic Customs - Soundproofing & Acoustic Specialists, Cape Town",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supersonic Customs | Soundproofing & Acoustic Specialists — Cape Town",
    description: "Cape Town's leading soundproofing and acoustic treatment specialists. Expert noise control, acoustic panels, carpentry and AV installations.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://supersoniccustoms.co.za",
  },
  category: "Professional Services",
  classification: "Acoustic Engineering & Soundproofing Services",
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Cape Town, Western Cape",
    "geo.position": "-33.9249;18.4241",
    "ICBM": "-33.9249, 18.4241"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <SchemaMarkup />

        {/* Fixed Background Logo Watermark */}
        <div
          style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          <div
            style={{
              width: '120vmin',
              height: '120vmin',
              backgroundImage: 'url(/watermark-logo-hq.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.05
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <ClientBody>{children}</ClientBody>
          <ZolaBot />
        </div>
      </body>
    </html>
  );
}
