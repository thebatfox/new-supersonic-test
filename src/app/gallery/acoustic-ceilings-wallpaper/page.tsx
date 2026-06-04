import { Metadata } from "next";
import GalleryHoldingPage from "@/components/GalleryHoldingPage";

export const metadata: Metadata = {
  title: "Acoustic Ceilings & Acoustic Wallpaper | South Africa",
  description: "Acoustic ceiling systems and decorative acoustic wallpaper installations across South Africa. Functional sound absorption with high-end finishes for commercial and residential spaces.",
  openGraph: {
    title: "Acoustic Ceilings & Acoustic Wallpaper | Supersonic Customs South Africa",
    description: "Acoustic ceiling systems and decorative acoustic wallpaper installations across South Africa. Functional sound absorption with high-end finishes.",
  },
};

export default function AcousticCeilingsWallpaperPage() {
  return (
    <GalleryHoldingPage
      title="Acoustic Ceilings & Acoustic Wallpaper"
      description="Functional sound absorption with high-end decorative finishes. Bespoke acoustic ceiling systems and wallpaper solutions for commercial and residential spaces across South Africa."
      folder="acoustic-ceilings-wallpaper"
    />
  );
}
