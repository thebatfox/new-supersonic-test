import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acoustic & Soundproofing Blog | Cape Town Experts',
  description: "Expert insights on soundproofing, acoustic treatment and noise control from Cape Town's specialist acoustic company. Practical advice for homes, studios, offices and industrial environments across South Africa.",
  keywords: [
    'soundproofing blog Cape Town',
    'acoustic treatment advice South Africa',
    'noise control tips Cape Town',
    'acoustic insulation guide',
    'soundproofing DIY vs professional',
    'recording studio acoustics',
    'mineral wool vs foam'
  ],
  alternates: {
    canonical: "https://supersoniccustoms.co.za/blog",
  },
  openGraph: {
    title: 'Acoustic & Soundproofing Blog | Supersonic Customs Cape Town',
    description: "Expert insights on soundproofing and acoustic treatment from Cape Town's specialist acoustic company.",
    type: 'website',
    url: 'https://supersoniccustoms.co.za/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
