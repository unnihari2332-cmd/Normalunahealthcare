import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  content: string;
}

interface TestimonialsListProps {
  testimonials: Testimonial[];
}

export const TestimonialsList = ({ testimonials }: TestimonialsListProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Some Testimonials About Us
          </h2>
        </motion.div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg"
            >
              <div className="flex justify-end mb-4">
                <Quote className="w-12 h-12 text-primary/20" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.content}
              </p>
              <div className="border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal-light flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">
                      {testimonial.location} | {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
