import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Fun Projects | Supersonic Customs South Africa",
  description: "Unique and creative acoustic installations from South Africa's acoustic specialists.",
};

export default async function GalleryPage() {
  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery', 'fun-projects');
    const files = await fs.readdir(dir);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {}

  return (
    <GalleryHoldingPage
      title="Fun Projects"
      description="Unique and creative acoustic installations from South Africa's acoustic specialists."
      folder="fun-projects"
      images={images}
    />
  );
}
