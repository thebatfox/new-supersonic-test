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

const images = ["bar-ceiling-installation.jpg", "booth-seating-treatment.jpg", "ceiling-acoustic-baffles.jpg", "decorative-ceiling-treatment.jpg", "dining-area-panels.jpg", "fine-dining-acoustic-panels.jpg", "installation-framework.jpg", "lounge-acoustic-treatment.jpg", "outdoor-dining-acoustics.jpg", "supersonic-installation-work.jpg", "suspended-acoustic-panels.jpg", "team-installation.jpg", "wooden-acoustic-lighting.jpg"];

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
