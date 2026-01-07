import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
// Import the new component here
import {
  HeroSection,
  AboutSection,
  SpecialitiesSection, // <--- Add this
  ContactOptionsSection,
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
      
      {/* The new section is placed here */}
      <SpecialitiesSection />
      
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
