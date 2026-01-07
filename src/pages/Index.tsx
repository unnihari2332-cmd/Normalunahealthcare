import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";

// 1. Import SpecialitiesSection separately since it is NOT in the sections folder
import SpecialitiesSection from "@/components/SpecialitiesSection"; 

// 2. Remove it from this list
import {
  HeroSection,
  AboutSection,
  // SpecialitiesSection, <--- DELETE THIS LINE
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
      <SpecialitiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
