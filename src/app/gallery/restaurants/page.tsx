import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Restaurants & Hospitality | Supersonic Customs South Africa",
  description: "Acoustic treatment solutions for the restaurant and hospitality industry across South Africa.",
};

const images = ["restaurants-001.jpg", "restaurants-002.jpg", "restaurants-003.jpg", "restaurants-004.jpg", "restaurants-005.jpg", "restaurants-006.jpg", "restaurants-007.jpg"];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Restaurants & Hospitality"
      description="Acoustic treatment solutions for the restaurant and hospitality industry across South Africa."
      folder="restaurants"
      images={images}
    />
  );
}
