import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "School & Worship Acoustic Treatment | South Africa",
  description: "Acoustic treatment for schools, halls, churches and places of worship across South Africa. Improve speech clarity and reduce noise for better learning and worship environments.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/schools-worship" },
  openGraph: {
    title: "Schools & Worship Acoustic Treatment | Supersonic Customs South Africa",
    description: "Acoustic solutions for schools, churches and community halls across South Africa. Better acoustics for learning and worship.",
    url: "https://supersoniccustoms.co.za/gallery/schools-worship",
  },
};
export default function SchoolsWorshipPage() {
  return (
    <GalleryHoldingPage
      title="Schools & Places of Worship"
      description="Acoustic treatment for better learning and worship environments across South Africa."
      folder="schools-worship"
    />
  );
}
