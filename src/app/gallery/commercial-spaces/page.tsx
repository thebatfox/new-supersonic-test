import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Commercial Spaces | Supersonic Customs South Africa",
  description: "Acoustic treatment and soundproofing solutions for offices and commercial spaces across South Africa.",
};

export default async function GalleryPage() {
  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery', 'commercial-spaces');
    const files = await fs.readdir(dir);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {}

  return (
    <GalleryHoldingPage
      title="Commercial Spaces"
      description="Acoustic treatment and soundproofing solutions for offices and commercial spaces across South Africa."
      folder="commercial-spaces"
      images={images}
    />
  );
}
