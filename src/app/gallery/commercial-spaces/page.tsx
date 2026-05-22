import GalleryHoldingPage from '@/components/GalleryHoldingPage';

const images = ["acoustic-wall-panels-backlighting.jpg", "brick-office-acoustic-partition.jpg", "conference-room-coffered-ceiling.jpg", "conference-room-historical-artwork.jpg", "geometric-acoustic-panel-wall.jpg", "great-idea-office-workspace.jpg", "luxury-restaurant-interior.jpg", "marble-wall-office-lounge.jpg", "medical-office-gradient-wall.jpg", "meeting-room-artwork.jpg", "modern-office-phone-booths.jpg", "office-space-exposed-ceiling.jpg", "open-office-workspace.jpg", "restaurant-pendant-lighting.jpg", "rustic-restaurant-bar.jpg", "staircase-acoustic-treatment.jpg", "superzola-ceiling-installation.jpg", "wooden-doorway-library-entrance.jpg", "wooden-slat-living-wall.jpg"];

export default function CommercialSpacesPage() {
  return (
    <GalleryHoldingPage
      title="Commercial Spaces"
      description="Offices, boardrooms, restaurants and commercial interiors with acoustic solutions."
      images={images}
      folder="commercial-spaces"
    />
  );
}
