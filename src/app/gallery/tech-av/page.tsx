import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "AV Technology & Recording Studio Installations | Cape Town",
  description: "AV technology supply and installation, recording studio fit-outs and broadcast facility acoustic treatment across Cape Town. Expert room-in-room construction and studio design.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/tech-av" },
  openGraph: {
    title: "AV Tech & Studio Installations | Supersonic Customs Cape Town",
    description: "AV technology installations and recording studio acoustic fit-outs in Cape Town. Room-in-room construction and bespoke studio design.",
    url: "https://supersoniccustoms.co.za/gallery/tech-av",
  },
};

const images = ["av-installation.jpg", "broadcast-acoustic.jpg", "control-room.jpg", "home-cinema.jpg", "home-studio-acoustic.jpg", "podcast-studio.jpg", "recording-studio.jpg", "recording-studio-acoustic.jpg", "studio-acoustic-panels.jpg", "studio-treatment.jpg"];

export default function TechAVPage() {
  return (
    <GalleryHoldingPage
      title="Tech & AV Installations"
      description="Recording studios, broadcast facilities and AV technology installations across Cape Town."
      images={images}
      folder="tech-av"
    />
  );
}
