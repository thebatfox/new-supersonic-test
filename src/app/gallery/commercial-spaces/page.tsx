import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Commercial Acoustic Treatment Gallery | Offices & Workspaces South Africa",
  description: "Acoustic treatment and soundproofing solutions for commercial offices and workspaces across South Africa. View our completed projects featuring bespoke acoustic panels and noise control installations.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/commercial-spaces" },
  openGraph: {
    title: "Commercial Spaces Gallery | Supersonic Customs South Africa",
    description: "Acoustic treatment for offices and commercial spaces across South Africa. Bespoke solutions designed around your brand and acoustic requirements.",
    url: "https://supersoniccustoms.co.za/gallery/commercial-spaces",
  },
};
export default function CommercialSpacesPage() {
  return (
    <GalleryHoldingPage
      title="Commercial Spaces"
      description="Acoustic treatment and soundproofing solutions for offices, boardrooms and commercial environments."
      folder="commercial-spaces"
    />
  );
}
