import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Industrial & Machinery | Supersonic Customs South Africa",
  description: "Industrial acoustic treatment and noise barriers across South Africa.",
};

const images: string[] = [];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Industrial & Machinery"
      description="Industrial acoustic treatment and noise barriers across South Africa."
      folder="industrial-machinery"
      images={images}
    />
  );
}
