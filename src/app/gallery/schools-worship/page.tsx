import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "School & Worship Acoustic Treatment | Cape Town",
  description: "Acoustic treatment for schools, halls, churches and places of worship across Cape Town. Improve speech clarity and reduce noise for better learning and worship environments.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/schools-worship" },
  openGraph: {
    title: "Schools & Worship Acoustic Treatment | Supersonic Customs Cape Town",
    description: "Acoustic solutions for schools, churches and community halls in Cape Town. Better acoustics for learning and worship.",
    url: "https://supersoniccustoms.co.za/gallery/schools-worship",
  },
};

const images = ["auditorium-acoustic.jpg", "ceiling-acoustic-tiles.jpg", "church-acoustic.jpg", "classroom-acoustic.jpg", "hall-acoustic-treatment.jpg", "school-ceiling-panels.jpg", "school-classroom-panels.jpg", "school-noise-control.jpg", "worship-acoustic-panels.jpg"];

export default function SchoolsWorshipPage() {
  return (
    <GalleryHoldingPage
      title="Schools & Places of Worship"
      description="Acoustic treatment for better learning and worship environments across Cape Town."
      images={images}
      folder="schools-worship"
    />
  );
}
