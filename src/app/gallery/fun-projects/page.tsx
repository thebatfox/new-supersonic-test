import GalleryHoldingPage from '@/components/GalleryHoldingPage';

const images = ["acoustic-component-rc-car-demonstration.jpg", "euphoria-communication-truck-display.jpg", "mobile-communication-truck-setup.jpg"];

export default function FunProjectsPage() {
  return (
    <GalleryHoldingPage
      title="Fun Projects"
      description="Creative, unique and out-of-the-box acoustic and AV projects."
      images={images}
      folder="fun-projects"
    />
  );
}
