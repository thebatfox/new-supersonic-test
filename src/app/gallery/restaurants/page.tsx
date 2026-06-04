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
export default function RestaurantsPage() {
  return (
    <GalleryHoldingPage
      title="Restaurants & Hospitality"
      description="Acoustic treatment solutions for the restaurant and hospitality industry across South Africa."
      folder="restaurants"
    />
  );
}
