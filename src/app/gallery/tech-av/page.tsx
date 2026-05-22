import GalleryHoldingPage from '@/components/GalleryHoldingPage';

const images = ["audio-equipment-backend.jpg", "audio-equipment-installation.jpg", "av-system-setup.jpg", "dj-booth-audio-installation.jpg", "dj-booth-professional-setup.jpg", "funktion-one-amplifier-rack.jpg", "superzola-dj-booth-branded.jpg"];

export default function TechAvPage() {
  return (
    <GalleryHoldingPage
      title="Tech & AV"
      description="Professional audio-visual installations and equipment setups."
      images={images}
      folder="tech-av"
    />
  );
}
