import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Tech & AV | Supersonic Customs South Africa",
  description: "AV technology installations and recording studio acoustic fit-outs across South Africa.",
};

export default async function GalleryPage() {
  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery', 'tech-av');
    const files = await fs.readdir(dir);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {}

  return (
    <GalleryHoldingPage
      title="Tech & AV"
      description="AV technology installations and recording studio acoustic fit-outs across South Africa."
      folder="tech-av"
      images={images}
    />
  );
}
