import GalleryHoldingPage from '@/components/GalleryHoldingPage';

const images = ["acoustic-wood-paneling-seating-area.jpg", "church-complete-acoustic-installation.jpg", "church-interior-acoustic-treatment.jpg", "church-sanctuary-acoustic-panels.jpg", "church-sanctuary-balcony-view.jpg", "church-sanctuary-pipe-organ-acoustics.jpg", "classroom-acoustic-installation-progress.jpg", "classroom-acoustic-panel-installation.jpg", "school-ceiling-acoustic-treatment.jpg", "school-classroom-ceiling-installation.jpg", "supersonic-team-classroom-acoustic-work.jpg"];

export default function SchoolsWorshipPage() {
  return (
    <GalleryHoldingPage
      title="Schools & Houses of Worship"
      description="Acoustic solutions for classrooms, churches and places of worship."
      images={images}
      folder="schools-worship"
    />
  );
}
