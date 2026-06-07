import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Acoustic Ceilings & Acoustic Wallpaper | South Africa",
  description: "Acoustic ceiling systems and decorative acoustic wallpaper installations across South Africa. Functional sound absorption with high-end finishes for commercial and residential spaces.",
  openGraph: {
    title: "Acoustic Ceilings & Acoustic Wallpaper | Supersonic Customs South Africa",
    description: "Acoustic ceiling systems and decorative acoustic wallpaper installations across South Africa.",
  },
};

const images = ["acoustic-ceilings-wallpaper-001.jpg", "acoustic-ceilings-wallpaper-002.jpg", "acoustic-ceilings-wallpaper-003.jpg", "acoustic-ceilings-wallpaper-004.jpg", "acoustic-ceilings-wallpaper-005.jpg", "acoustic-ceilings-wallpaper-006.jpg", "acoustic-ceilings-wallpaper-007.jpg", "acoustic-ceilings-wallpaper-008.jpg", "acoustic-ceilings-wallpaper-009.jpg"];

export default function AcousticCeilingsWallpaperPage() {
  return (
    <GalleryHoldingPage
      title="Acoustic Ceilings & Acoustic Wallpaper"
      description="Functional sound absorption with high-end decorative finishes. Bespoke acoustic ceiling systems and wallpaper solutions for commercial and residential spaces across South Africa."
      folder="acoustic-ceilings-wallpaper"
      images={images}
    />
  );
}
