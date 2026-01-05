import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";

interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  content: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  showViewAll?: boolean;
  title?: string;
  subtitle?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options. Norma Luna Healthcare gave me hope. The doctors took time to explain every step of the procedure. Today, I feel stronger, and my symptoms have significantly improved.",
  },
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: "Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference. I am now cancer-free.",
  },
  {
    name: "Amal N.",
    location: "Sri Lanka",
    treatment: "Hip Replacement",
    content: "After suffering for years with severe arthritis, I could barely walk. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai, meeting one of the best orthopedic surgeons in India. I now live pain-free, thanks to them!",
  },
];

export const TestimonialsSection = ({
  testimonials = defaultTestimonials,
  showViewAll = true,
  title = "Patient Testimonials: Real Stories, Real Results",
  subtitle = "What Our Patients Say",
}: TestimonialsSectionProps) => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">{subtitle}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} delay={index * 0.1} />
          ))}
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/testimonials">
              <Button variant="outline" className="rounded-full px-8">
                View All Testimonials
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};
