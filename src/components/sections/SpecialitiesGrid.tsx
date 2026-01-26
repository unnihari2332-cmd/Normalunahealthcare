import { SpecialityCard } from "@/components/SpecialityCard";
import { useEffect } from "react";

interface Speciality {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface SpecialitiesGridProps {
  specialities: Speciality[];
}

export const SpecialitiesGrid = ({ specialities }: SpecialitiesGridProps) => {
  // Preload all images on mount
  useEffect(() => {
    specialities.forEach((speciality) => {
      const img = new Image();
      img.src = speciality.image;
    });
  }, [specialities]);

  return (
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
  );
};
