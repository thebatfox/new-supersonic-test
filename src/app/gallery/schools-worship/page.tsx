import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Schools & Worship | Supersonic Customs South Africa",
  description: "Acoustic treatment for schools, churches and community halls across South Africa.",
};

const images: string[] = [];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Schools & Worship"
      description="Acoustic treatment for schools, churches and community halls across South Africa."
      folder="schools-worship"
      images={images}
    />
  );
}
