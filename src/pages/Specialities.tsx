import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { SpecialitiesGrid } from "@/components/sections";
import { specialities } from "@/data/specialities";
import heroImage from "@/assets/hero-medical.jpg";

const SpecialitiesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner title="Our Specialities" />
      </div>

      <SpecialitiesGrid specialities={specialities} />

      <Footer />
    </div>
  );
};

export default SpecialitiesPage;
