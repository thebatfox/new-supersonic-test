import GalleryHoldingPage from '@/components/GalleryHoldingPage';

const images = ["bar-ceiling-installation.jpg", "booth-seating-treatment.jpg", "ceiling-acoustic-baffles.jpg", "decorative-ceiling-treatment.jpg", "dining-area-panels.jpg", "fine-dining-acoustic-panels.jpg", "installation-framework.jpg", "lounge-acoustic-treatment.jpg", "outdoor-dining-acoustics.jpg", "superzola-installation-work.jpg", "suspended-acoustic-panels.jpg", "team-installation.jpg", "wooden-acoustic-lighting.jpg"];

export default function RestaurantsPage() {
  return (
    <GalleryHoldingPage
      title="Restaurants & Dining"
      description="Acoustic comfort and aesthetic design for dining environments."
      images={images}
      folder="restaurants"
    />
  );
}
