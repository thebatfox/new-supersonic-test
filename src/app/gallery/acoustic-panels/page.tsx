import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Acoustic Panels | Supersonic Customs South Africa",
  description: "Custom fabric-wrapped acoustic panels manufactured in our Cape Town workshop.",
};

const images = [];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Acoustic Panels"
      description="Custom fabric-wrapped acoustic panels manufactured in our Cape Town workshop."
      folder="acoustic-panels"
      images={images}
    />
  );
}
