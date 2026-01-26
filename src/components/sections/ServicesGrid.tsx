import { ServiceCard } from "@/components/ServiceCard";
import { LucideIcon } from "lucide-react";
import { useEffect } from "react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface ServicesGridProps {
  services: Service[];
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  // Preload all images on mount
  useEffect(() => {
    services.forEach((service) => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, [services]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};
