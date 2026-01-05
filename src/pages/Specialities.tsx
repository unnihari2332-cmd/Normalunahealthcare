import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { SpecialityCard } from "@/components/SpecialityCard";
import { specialities } from "@/data/specialities";
import heroImage from "@/assets/hero-medical.jpg";

const SpecialitiesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title="Our Specialities"
          image={heroImage}
          breadcrumbs={[{ label: "Specialities" }]}
        />
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialities.map((speciality, index) => (
              <SpecialityCard 
                key={speciality.id} 
                id={speciality.id}
                title={speciality.title}
                description={speciality.description}
                image={speciality.image}
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialitiesPage;
