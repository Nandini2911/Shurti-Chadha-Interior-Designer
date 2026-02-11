import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MediaFeatures from "@/components/MediaFeatures";
import ProcessSection from "@/components/ProcessSection";


export default function Home() {
  return (
    <main >
   <Hero/>
   <About/>
   <ProcessSection/>
   <MediaFeatures />
   <Footer/>
    </main>
  );
}
