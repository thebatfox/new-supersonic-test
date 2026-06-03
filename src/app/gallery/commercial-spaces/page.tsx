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

const images = ["acoustic-wall-panels-backlighting.jpg", "brick-office-acoustic-partition.jpg", "conference-room-coffered-ceiling.jpg", "conference-room-historical-artwork.jpg", "geometric-acoustic-panel-wall.jpg", "great-idea-office-workspace.jpg", "luxury-restaurant-interior.jpg", "marble-wall-office-lounge.jpg", "medical-office-gradient-wall.jpg", "meeting-room-artwork.jpg", "modern-office-phone-booths.jpg", "office-space-exposed-ceiling.jpg", "open-office-workspace.jpg", "restaurant-pendant-lighting.jpg", "rustic-restaurant-bar.jpg", "staircase-acoustic-treatment.jpg", "supersonic-ceiling-installation.jpg", "wooden-doorway-library-entrance.jpg", "wooden-slat-living-wall.jpg"];

export default function CommercialSpacesPage() {
  return (
    <GalleryHoldingPage
      title="Commercial Spaces"
      description="Acoustic treatment and soundproofing solutions for offices, boardrooms and commercial environments."
      images={images}
      folder="commercial-spaces"
    />
  );
}
