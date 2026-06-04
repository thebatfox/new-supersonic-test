import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "AV Technology & Recording Studio Installations | South Africa",
  description: "AV technology supply and installation, recording studio fit-outs and broadcast facility acoustic treatment across South Africa. Expert room-in-room construction and studio design.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/tech-av" },
  openGraph: {
    title: "AV Tech & Studio Installations | Supersonic Customs South Africa",
    description: "AV technology installations and recording studio acoustic fit-outs across South Africa. Room-in-room construction and bespoke studio design.",
    url: "https://supersoniccustoms.co.za/gallery/tech-av",
  },
};
export default function TechAVPage() {
  return (
    <GalleryHoldingPage
      title="Tech & AV Installations"
      description="Recording studios, broadcast facilities and AV technology installations across South Africa."
      folder="tech-av"
    />
  );
}
