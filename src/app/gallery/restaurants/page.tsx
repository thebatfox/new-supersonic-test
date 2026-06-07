import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Restaurant Acoustic Treatment | Noise Control South Africa",
  description: "Restaurant acoustic treatment and noise control solutions across South Africa.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/restaurants" },
  openGraph: {
    title: "Restaurant Acoustic Treatment Gallery | Supersonic Customs South Africa",
    description: "Acoustic treatment for restaurants across South Africa.",
    url: "https://supersoniccustoms.co.za/gallery/restaurants",
  },
};

export default async function RestaurantsPage() {
  let images: string[] = [];
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery', 'restaurants');
    const files = await fs.readdir(dir);
    images = files
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort();
  } catch {}

  return (
    <GalleryHoldingPage
      title="Restaurants & Hospitality"
      description="Acoustic treatment solutions for the restaurant and hospitality industry across South Africa."
      folder="restaurants"
      images={images}
    />
  );
}
