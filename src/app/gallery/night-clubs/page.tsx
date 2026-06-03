import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Nightclub Soundproofing & Acoustic Treatment | South Africa",
  description: "Specialist nightclub soundproofing and acoustic treatment installations across South Africa. Noise containment, room-in-room construction and custom acoustic fit-outs for entertainment venues.",
  alternates: { canonical: "https://supersoniccustoms.co.za/gallery/night-clubs" },
  openGraph: {
    title: "Nightclub Soundproofing Gallery | Supersonic Customs South Africa",
    description: "Specialist soundproofing and acoustic treatment for nightclubs and entertainment venues across South Africa.",
    url: "https://supersoniccustoms.co.za/gallery/night-clubs",
  },
};

const images = ["bar-acoustic-installation.jpg", "club-acoustic-panels.jpg", "club-sound-treatment.jpg", "dj-booth-acoustic.jpg", "entertainment-acoustic.jpg", "nightclub-acoustic.jpg", "nightclub-ceiling.jpg", "nightclub-foam-treatment.jpg", "nightclub-sound-panels.jpg", "nightclub-soundproofing.jpg", "venue-acoustic-treatment.jpg", "venue-soundproofing.jpg"];

export default function NightClubsPage() {
  return (
    <GalleryHoldingPage
      title="Night Clubs & Entertainment"
      description="Specialist soundproofing and acoustic fit-outs for entertainment venues across South Africa."
      images={images}
      folder="night-clubs"
    />
  );
}
