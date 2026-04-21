import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import ApproachSection from "@/components/about/ApproachSection";
import InspirationSection from "@/components/about/InspirationSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import StatsSection from "@/components/about/StatsSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro/>
      <ApproachSection/>
      <InspirationSection/>
      <VisionMissionSection/>
      <StatsSection/>
      <Footer />
    </main>
  );
}