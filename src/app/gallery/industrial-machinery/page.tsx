import GalleryHoldingPage from '@/components/GalleryHoldingPage';

const images = ["acoustic-equipment-enclosure.jpg", "building-acoustic-barrier-ventilation.jpg", "generator-acoustic-enclosure-system.jpg", "generator-enclosure-industrial-yard.jpg", "industrial-acoustic-ceiling-framework.jpg", "industrial-ceiling-acoustic-panels.jpg", "pool-equipment-acoustic-decking.jpg", "residential-generator-acoustic-housing.jpg", "stairwell-acoustic-wall-panels.jpg", "wooden-acoustic-barrier-fence.jpg"];

export default function IndustrialMachineryPage() {
  return (
    <GalleryHoldingPage
      title="Industrial & Machinery"
      description="Generator enclosures, noise barriers and industrial acoustic solutions."
      images={images}
      folder="industrial-machinery"
    />
  );
}
