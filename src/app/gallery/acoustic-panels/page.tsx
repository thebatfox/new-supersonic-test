import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Acoustic Panels Gallery | Fabric-Wrapped Panels South Africa",
  description: "View our acoustic panel installations across South Africa. Custom fabric-wrapped panels, ceiling baffles and decorative acoustic solutions manufactured in our Cape Town workshop.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/acoustic-panels" },
  openGraph: {
    title: "Acoustic Panels Gallery | Supersonic Customs South Africa",
    description: "Custom acoustic panel installations across South Africa. Fabric-wrapped panels designed and manufactured in our Cape Town workshop.",
    url: "https://supersoniccustoms.co.za/gallery/acoustic-panels",
  },
};

const images = ["architectural-ceiling-panels.jpg", "artistic-acoustic-panels.jpg", "ceiling-acoustic-baffles.jpg", "ceiling-framework-detail.jpg", "ceiling-installation-work.jpg", "corporate-exhibition-panel.jpg", "decorative-ceiling-lighting.jpg", "decorative-lounge-treatment.jpg", "dining-acoustic-lighting.jpg", "entertainment-room-treatment.jpg", "geometric-ceiling-design.jpg", "large-dining-installation.jpg", "modular-acoustic-wall.jpg", "panel-fabric-detail.jpg", "panel-installation-process.jpg", "restaurant-ceiling-treatment.jpg", "suspended-ceiling-panels.jpg"];

export default function AcousticPanelsPage() {
  return (
    <GalleryHoldingPage
      title="Acoustic Panels"
      description="Custom acoustic panel fabrication and installation for every space."
      images={images}
      folder="acoustic-panels"
    />
  );
}
