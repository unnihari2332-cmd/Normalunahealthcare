import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  treatment: string;
  content: string;
  delay?: number;
}

export const TestimonialCard = ({
  name,
  location,
  treatment,
  content,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      // Changed bg-card to bg-white here
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: delay + 0.2 }}
        className="absolute top-6 right-6"
      >
        <Quote className="w-12 h-12 text-primary/20" />
      </motion.div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
        {content}
      </p>

      {/* Divider */}
      <div className="border-t border-border pt-6">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal-light flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-primary">
              {location} | {treatment}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
