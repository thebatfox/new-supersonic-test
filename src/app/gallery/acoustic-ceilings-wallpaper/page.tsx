import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Acoustic Ceilings & Acoustic Wallpaper | Supersonic Customs South Africa",
  description: "Functional sound absorption with high-end decorative finishes for commercial and residential spaces across South Africa.",
};

const images = ["acoustic-ceilings-wallpaper-001.jpg", "acoustic-ceilings-wallpaper-002.jpg", "acoustic-ceilings-wallpaper-003.jpg", "acoustic-ceilings-wallpaper-004.jpg", "acoustic-ceilings-wallpaper-005.jpg", "acoustic-ceilings-wallpaper-006.jpg", "acoustic-ceilings-wallpaper-007.jpg", "acoustic-ceilings-wallpaper-008.jpg", "acoustic-ceilings-wallpaper-009.jpg"];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Acoustic Ceilings & Acoustic Wallpaper"
      description="Functional sound absorption with high-end decorative finishes for commercial and residential spaces across South Africa."
      folder="acoustic-ceilings-wallpaper"
      images={images}
    />
  );
}
