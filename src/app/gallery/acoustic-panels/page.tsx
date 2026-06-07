import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Acoustic Panels | Supersonic Customs South Africa",
  description: "Custom fabric-wrapped acoustic panels designed and manufactured in our Cape Town workshop. Installed across South Africa.",
};

export default async function GalleryPage() {
  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery', 'acoustic-panels');
    const files = await fs.readdir(dir);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {}

  return (
    <GalleryHoldingPage
      title="Acoustic Panels"
      description="Custom fabric-wrapped acoustic panels designed and manufactured in our Cape Town workshop. Installed across South Africa."
      folder="acoustic-panels"
      images={images}
    />
  );
}
