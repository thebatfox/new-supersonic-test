import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Night Clubs & Entertainment | Supersonic Customs South Africa",
  description: "Specialist soundproofing and acoustic fit-outs for entertainment venues across South Africa.",
};

export default async function GalleryPage() {
  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery', 'night-clubs');
    const files = await fs.readdir(dir);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {}

  return (
    <GalleryHoldingPage
      title="Night Clubs & Entertainment"
      description="Specialist soundproofing and acoustic fit-outs for entertainment venues across South Africa."
      folder="night-clubs"
      images={images}
    />
  );
}
