import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Restaurant Acoustic Treatment | Noise Control South Africa",
  description: "Restaurant acoustic treatment and noise control solutions across South Africa. Reduce background noise and improve speech intelligibility in dining environments with bespoke acoustic panel installations.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/restaurants" },
  openGraph: {
    title: "Restaurant Acoustic Treatment Gallery | Supersonic Customs South Africa",
    description: "Acoustic treatment for restaurants across South Africa. Reduce noise and improve the dining experience with bespoke panel solutions.",
    url: "https://supersoniccustoms.co.za/gallery/restaurants",
  },
};

const images = ["bar-ceiling-acoustic.jpg", "cafe-acoustic-wall.jpg", "ceiling-acoustic-restaurant.jpg", "ceiling-acoustic-timber.jpg", "dining-acoustic-panels.jpg", "hospitality-acoustic.jpg", "modern-restaurant-panels.jpg", "restaurant-acoustic.jpg", "restaurant-acoustic-ceiling.jpg", "restaurant-acoustic-panels.jpg", "restaurant-ceiling-baffle.jpg", "restaurant-noise-control.jpg"];

export default function RestaurantsPage() {
  return (
    <GalleryHoldingPage
      title="Restaurants & Hospitality"
      description="Acoustic treatment solutions for the restaurant and hospitality industry across South Africa."
      images={images}
      folder="restaurants"
    />
  );
}
