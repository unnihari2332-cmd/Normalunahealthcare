import { ServiceCard } from "@/components/ServiceCard";
import { Phone, Video, Calendar, LucideIcon } from "lucide-react";
import consultation from "@/assets/consultation.jpg";

interface ContactOption {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface ContactOptionsGridProps {
  options?: ContactOption[];
}

const defaultOptions: ContactOption[] = [
  {
    icon: Phone,
    title: "Telephone Support",
    description: "Call us 24/7 and our representatives will help you make an appointment that's convenient for you.",
    image: consultation,
  },
  {
    icon: Video,
    title: "Online Consultation",
    description: "Experience convenient and secure online health consultations from the comfort of your home.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
  },
  {
    icon: Calendar,
    title: "Book An Appointment",
    description: "Book your appointment today and take the first step towards better health.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
  },
];

export const ContactOptionsGrid = ({ options = defaultOptions }: ContactOptionsGridProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <ServiceCard key={option.title} {...option} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
