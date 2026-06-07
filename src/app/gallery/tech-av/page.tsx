import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Tech & AV | Supersonic Customs South Africa",
  description: "AV technology installations and recording studio acoustic fit-outs across South Africa.",
};

const images = [];

export default function GalleryPage() {
  return (
    <GalleryHoldingPage
      title="Tech & AV"
      description="AV technology installations and recording studio acoustic fit-outs across South Africa."
      folder="tech-av"
      images={images}
    />
  );
}
