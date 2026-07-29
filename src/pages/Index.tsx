import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import { ServicesSection } from "@/components/ServicesSection";
// Fixed: Changed from named import { FAQ } to default import FAQ
import FAQ from "@/components/FAQ"; 

import {
  HeroSection,
  AboutSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SpecialitiesSection />
      {/* Added ServicesSection here since it was imported but not used */}
      <ServicesSection /> 
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
