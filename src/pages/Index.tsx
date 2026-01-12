import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
import SpecialitiesSection from "@/components/SpecialitiesSection"; 
import { ServicesSection } from "@/components/ServicesSection"; 
import { FAQ } from "@/components/FAQ"; 
 
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
      <TestimonialsSection />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
