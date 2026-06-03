import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Unique & Bespoke Acoustic Projects | South Africa",
  description: "Unique and creative acoustic projects from Supersonic Customs across South Africa. From home studios and home theatres to bespoke acoustic carpentry and one-of-a-kind installations.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/fun-projects" },
  openGraph: {
    title: "Unique Acoustic Projects Gallery | Supersonic Customs South Africa",
    description: "Creative and bespoke acoustic installations from South Africa's acoustic specialists. Every project is different.",
    url: "https://supersoniccustoms.co.za/gallery/fun-projects",
  },
};

const images = ["acoustic-component-rc-car-demonstration.jpg", "euphoria-communication-truck-display.jpg", "mobile-communication-truck-setup.jpg"];

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
