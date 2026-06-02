import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Unique & Bespoke Acoustic Projects | Cape Town",
  description: "Unique and creative acoustic projects from Supersonic Customs in Cape Town. From home studios and home theatres to bespoke acoustic carpentry and one-of-a-kind installations.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/fun-projects" },
  openGraph: {
    title: "Unique Acoustic Projects Gallery | Supersonic Customs Cape Town",
    description: "Creative and bespoke acoustic installations from Cape Town's acoustic specialists. Every project is different.",
    url: "https://supersoniccustoms.co.za/gallery/fun-projects",
  },
};

const images = ["bespoke-acoustic.jpg", "creative-acoustic.jpg", "custom-acoustic-feature.jpg", "custom-installation.jpg", "fun-acoustic-project.jpg", "home-acoustic-treatment.jpg", "home-studio.jpg", "unique-acoustic-design.jpg"];

export default function FunProjectsPage() {
  return (
    <GalleryHoldingPage
      title="Fun & Unique Projects"
      description="Creative and bespoke acoustic installations — because every project is different."
      images={images}
      folder="fun-projects"
    />
  );
}
