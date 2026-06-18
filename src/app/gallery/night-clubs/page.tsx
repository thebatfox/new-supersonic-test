import type { Metadata } from 'next';
import GalleryHoldingPage from '@/components/GalleryHoldingPage';

export const metadata: Metadata = {
  title: "Night Clubs & Entertainment | Supersonic Customs South Africa",
  description: "Specialist soundproofing and acoustic fit-outs for entertainment venues across South Africa.",
};

const images: string[] = ["night-clubs-origin-namibia-001.jpg", "night-clubs-origin-namibia-002.jpg", "night-clubs-origin-namibia-003.jpg", "night-clubs-origin-namibia-004.jpg", "night-clubs-origin-namibia-005.jpg", "night-clubs-origin-namibia-006.jpg", "night-clubs-origin-namibia-007.jpg", "night-clubs-origin-namibia-008.jpg", "night-clubs-origin-namibia-009.jpg", "night-clubs-origin-namibia-010.jpg", "night-clubs-origin-namibia-011.jpg", "night-clubs-origin-namibia-012.jpg", "night-clubs-origin-namibia-013.jpg", "night-clubs-origin-namibia-014.jpg", "night-clubs-origin-namibia-015.jpg", "night-clubs-origin-namibia-016.jpg", "night-clubs-origin-namibia-017.jpg", "night-clubs-origin-namibia-018.jpg", "night-clubs-origin-namibia-019.jpg", "night-clubs-origin-namibia-020.jpg", "night-clubs-origin-namibia-021.jpg", "night-clubs-origin-namibia-022.jpg", "night-clubs-origin-namibia-023.jpg", "night-clubs-origin-namibia-024.jpg", "night-clubs-origin-namibia-025.jpg", "night-clubs-origin-namibia-026.jpg", "night-clubs-origin-namibia-027.jpg", "night-clubs-origin-namibia-028.jpg"];

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
