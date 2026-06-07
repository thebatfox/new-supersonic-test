import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Acoustic Ceilings & Acoustic Wallpaper | South Africa",
  description: "Acoustic ceiling systems and decorative acoustic wallpaper installations across South Africa.",
  openGraph: {
    title: "Acoustic Ceilings & Acoustic Wallpaper | Supersonic Customs South Africa",
    description: "Acoustic ceiling systems and decorative acoustic wallpaper installations across South Africa.",
  },
};

export default async function AcousticCeilingsWallpaperPage() {
  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery', 'acoustic-ceilings-wallpaper');
    const files = await fs.readdir(dir);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {}

  return (
    <GalleryHoldingPage
      title="Acoustic Ceilings & Acoustic Wallpaper"
      description="Functional sound absorption with high-end decorative finishes for commercial and residential spaces across South Africa."
      folder="acoustic-ceilings-wallpaper"
      images={images}
    />
  );
}
