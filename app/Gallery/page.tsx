import Navbar from "@/components/Navbar";
import GalleryRooms from "@/components/galleryrooms";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/Gallery";
import GalleryIntro from "@/components/galleryintro";
import Gallerycta from "@/components/CTASection";

export default function GalleryPage() {
  return (
    <main>
  
    <GalleryHero/>
    <GalleryIntro/>
    <GalleryRooms/>
    <Gallerycta/>
      <Footer />
    </main>
  );
}
