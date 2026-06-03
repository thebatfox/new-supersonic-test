import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Industrial Noise Control & Acoustic Treatment | South Africa",
  description: "Industrial acoustic treatment, machinery noise enclosures and noise barrier solutions across South Africa. Specialist solutions for factories, warehouses and mechanical plant.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/industrial-machinery" },
  openGraph: {
    title: "Industrial Noise Control Gallery | Supersonic Customs South Africa",
    description: "Industrial acoustic treatment and noise control solutions across South Africa. Generator enclosures, machinery acoustic panels and noise barriers.",
    url: "https://supersoniccustoms.co.za/gallery/industrial-machinery",
  },
};

const images = ["acoustic-equipment-enclosure.jpg", "building-acoustic-barrier-ventilation.jpg", "generator-acoustic-enclosure-system.jpg", "generator-enclosure-industrial-yard.jpg", "industrial-acoustic-ceiling-framework.jpg", "industrial-ceiling-acoustic-panels.jpg", "pool-equipment-acoustic-decking.jpg", "residential-generator-acoustic-housing.jpg", "stairwell-acoustic-wall-panels.jpg", "wooden-acoustic-barrier-fence.jpg"];

export default function IndustrialMachineryPage() {
  return (
    <GalleryHoldingPage
      title="Industrial & Machinery"
      description="Specialist noise control for industrial environments, machinery and mechanical plant across South Africa."
      images={images}
      folder="industrial-machinery"
    />
  );
}
