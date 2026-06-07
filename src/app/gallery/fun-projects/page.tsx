import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Fun Projects | Supersonic Customs South Africa",
  description: "Unique and creative acoustic installations from South Africa's acoustic specialists.",
};

const images = [];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Fun Projects"
      description="Unique and creative acoustic installations from South Africa's acoustic specialists."
      folder="fun-projects"
      images={images}
    />
  );
}
