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

const images = ["advanced-nightclub-sound-system.jpg", "artistic-ceiling-treatment.jpg", "artistic-photo-collage-ceiling.jpg", "artistic-staircase-projection.jpg", "atmospheric-club-interior-design.jpg", "audio-equipment-rack-blue-lighting.jpg", "bar-acoustic-display.jpg", "bar-installation-panoramic.jpg", "chain-curtain-led-installation.jpg", "chevron-bar-design-plants.jpg", "chevron-bar-living-wall.jpg", "club-acoustic-ceiling-installation.jpg", "contemporary-club-acoustic-design.jpg", "custom-dj-booth.jpg", "cutting-edge-nightclub-interior.jpg", "dj-booth-acoustic-treatment.jpg", "dj-booth-geometric-ceiling.jpg", "dj-booth-led-setup.jpg", "dramatic-club-ambiance-lighting.jpg", "elegant-bar-counter-installation.jpg", "elite-club-sound-treatment.jpg", "entertainment-venue-acoustic-treatment.jpg", "fabric-installation-lounge.jpg", "geometric-acoustic-ceiling-view.jpg", "geometric-lounge-acoustic-panels.jpg", "geometric-lounge-seating-area.jpg", "green-acoustic-bar-design.jpg", "halo-nightclub-led-ceiling.jpg", "halo-nightclub-main-floor.jpg", "high-end-club-acoustic-installation.jpg", "immersive-club-lighting-acoustics.jpg", "led-bar-chain-installation.jpg", "led-bar-wave-pattern.jpg", "led-ceiling-geometric-patterns.jpg", "led-ceiling-system.jpg", "led-cube-ceiling-system.jpg", "led-staircase-installation.jpg", "led-wall-vip-area.jpg", "luxe-nightclub-acoustic-panels.jpg", "luxurious-lounge-acoustic-seating.jpg", "luxury-bar-speaker-integration.jpg", "main-lounge-geometric-patterns.jpg", "modern-nightclub-acoustic-installation.jpg", "motivational-neon-signage.jpg", "multi-level-club-led-display.jpg", "multi-level-led-system.jpg", "nightclub-purple-lighting-display.jpg", "panel-cutting-installation.jpg", "premium-bar-acoustic-display.jpg", "premium-club-acoustic-panels.jpg", "professional-audio-rack-system.jpg", "professional-club-acoustic-setup.jpg", "red-bull-acoustic-treatment.jpg", "sophisticated-bar-acoustic-design.jpg", "supersonic-branded-technician.jpg", "supersonic-fabric-installation.jpg", "supersonic-installation-work.jpg", "vip-acoustic-wall-treatment.jpg", "vip-geometric-panels-seating.jpg", "vip-installation-work-progress.jpg", "vip-led-wall-lounge.jpg", "vip-living-wall-seating.jpg", "vip-lounge-living-wall.jpg", "vip-neon-signage.jpg", "welding-fabrication-work.jpg"];

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
