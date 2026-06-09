import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Commercial Spaces | Supersonic Customs South Africa",
  description: "Acoustic treatment and soundproofing for offices and commercial spaces across South Africa.",
};

const images: string[] = ["commercial-spaces-001.jpg", "commercial-spaces-002.jpg", "commercial-spaces-003.jpg"];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Commercial Spaces"
      description="Acoustic treatment and soundproofing for offices and commercial spaces across South Africa."
      folder="commercial-spaces"
      images={images}
    />
  );
}
