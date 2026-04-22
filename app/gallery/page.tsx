
import Footer from "@/components/Footer";
import GalleryHero from "@/components/Gallery";
import GalleryIntro from "@/components/galleryintro";
import GalleryRooms from "@/components/galleryrooms";

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryIntro />
      <GalleryRooms />
      <Footer />
    </main>
  );
}