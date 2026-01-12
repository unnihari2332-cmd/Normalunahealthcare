import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CTASection = ({
  title = "Transforming Health, Empowering Lives",
  description = "Take care of your health and that of your family today. Book an appointment and start your journey to better health.",
  buttonText = "Book An Appointment",
  buttonLink = "/appointment",
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button
              size="lg"
              className="bg-navy hover:bg-navy/90 text-white rounded-full px-10 font-semibold"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
