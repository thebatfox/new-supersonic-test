import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Acoustic Panels | Supersonic Customs South Africa",
  description: "Custom fabric-wrapped acoustic panels manufactured in our Cape Town workshop. Installed across South Africa.",
};

const images: string[] = ["acoustic-panels-001.jpg", "acoustic-panels-002.jpg", "acoustic-panels-003.jpg", "acoustic-panels-004.jpg", "acoustic-panels-005.jpg", "acoustic-panels-006.jpg", "acoustic-panels-007.jpg", "acoustic-panels-008.jpg", "acoustic-panels-009.jpg", "acoustic-panels-010.jpg", "acoustic-panels-011.jpg", "acoustic-panels-012.jpg"];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Acoustic Panels"
      description="Custom fabric-wrapped acoustic panels manufactured in our Cape Town workshop. Installed across South Africa."
      folder="acoustic-panels"
      images={images}
    />
  );
}
