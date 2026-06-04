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
export default function AcousticPanelsPage() {
  return (
    <GalleryHoldingPage
      title="Acoustic Panels"
      description="Custom acoustic panel fabrication and installation for every space."
      folder="acoustic-panels"
    />
  );
}
