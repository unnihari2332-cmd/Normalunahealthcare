import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { Phone, Video, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import consultation from "@/assets/consultation.jpg";

const contactOptions = [
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

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title="Contact Us"
          image={heroImage}
          breadcrumbs={[{ label: "Contact Us" }]}
        />
      </div>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <ServiceCard key={option.title} {...option} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default ContactPage;
