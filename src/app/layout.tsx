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
    default: "Supersonic Customs | Soundproofing & Acoustic Specialists South Africa",
    template: "%s | Supersonic Customs"
  },
  description: "South Africa's soundproofing and acoustic treatment specialists. Based in Cape Town, serving Johannesburg, Durban, Pretoria and nationwide. Expert noise control, acoustic panels, recording studio soundproofing and industrial noise solutions.",
  keywords: [
    "soundproofing company South Africa",
    "acoustic treatment South Africa",
    "noise control South Africa",
    "acoustic panels South Africa",
    "recording studio soundproofing South Africa",
    "soundproofing specialists South Africa",
    "industrial noise control South Africa",
    "noise barriers South Africa",
    "soundproofing Cape Town",
    "acoustic treatment Cape Town",
    "soundproofing Johannesburg",
    "acoustic treatment Johannesburg",
    "soundproofing Durban",
    "soundproofing Pretoria",
    "generator enclosures South Africa",
    "noise impact assessment South Africa",
    "mineral wool insulation South Africa",
    "acoustic consultants South Africa",
    "room in room construction South Africa",
    "commercial soundproofing South Africa"
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
    title: "Supersonic Customs | Soundproofing & Acoustic Specialists South Africa",
    description: "South Africa's soundproofing and acoustic treatment specialists. Based in Cape Town, serving Johannesburg, Durban, Pretoria and nationwide. Expert noise control for homes, studios, offices and industrial environments.",
    type: "website",
    locale: "en_ZA",
    siteName: "Supersonic Customs",
    countryName: "South Africa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supersonic Customs - Soundproofing & Acoustic Specialists, South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supersonic Customs | Soundproofing & Acoustic Specialists South Africa",
    description: "South Africa's soundproofing and acoustic treatment specialists. Based in Cape Town, serving Johannesburg, Durban, Pretoria and nationwide.",
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
