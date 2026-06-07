import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Night Clubs & Entertainment | Supersonic Customs South Africa",
  description: "Specialist soundproofing and acoustic fit-outs for entertainment venues across South Africa.",
};

const images = [];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Night Clubs & Entertainment"
      description="Specialist soundproofing and acoustic fit-outs for entertainment venues across South Africa."
      folder="night-clubs"
      images={images}
    />
  );
}
