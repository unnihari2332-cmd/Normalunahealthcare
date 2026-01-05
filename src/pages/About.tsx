import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { MissionVisionSection, ValuesSection } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-medical.jpg";

const testimonials = [
  {
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options. Norma Luna Healthcare gave me hope. Today, I feel stronger, and my symptoms have significantly improved.",
  },
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: "Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment at a fraction of the cost. I am now cancer-free, and I owe it to them!",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title="About Us"
          image={heroImage}
          breadcrumbs={[{ label: "About Us" }]}
        />
      </div>

      <MissionVisionSection />
      <ValuesSection />
      <StatsSection />

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium mb-2">Patient Success Stories</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Patient Testimonials: Real Stories, Real Results
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Embark on Your Health Journey with Norma Luna
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We make healthcare accessible, affordable, and stress-free, while you focus on what truly matters—your recovery.
            </p>
            <Link to="/appointment">
              <Button size="lg" className="bg-primary hover:bg-teal-light text-primary-foreground rounded-full px-10">
                Book An Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
