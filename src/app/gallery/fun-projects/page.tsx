import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Fun Projects | Supersonic Customs South Africa",
  description: "Unique and creative acoustic installations across South Africa.",
};

const images: string[] = [];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Fun Projects"
      description="Unique and creative acoustic installations across South Africa."
      folder="fun-projects"
      images={images}
    />
  );
}
