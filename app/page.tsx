import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MediaFeatures from "@/components/MediaFeatures";
import PopGallery from "@/components/PopGallery";
import ProcessSection from "@/components/ProcessSection";
import StudioContent from "@/components/StudioContent";
import WhatWeDo from "@/components/WhatWeDo"; 
import DesignPhilosophy from "@/components/DesignPhilosophy";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main >
   <Hero/>
   <StudioContent/>
   <PopGallery/>
   
   <About/>
   <WhatWeDo/>
   <DesignPhilosophy/>
   <ProcessSection/>
   <WhyChooseUs/>

   <Footer/>
    </main>
  );
}
