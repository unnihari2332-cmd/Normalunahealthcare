import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "gradient" | "solid";
}

export const CTASection = ({
  title = "Transforming Health, Empowering Lives",
  description = "Take care of your health and that of your family today. Book an appointment and start your journey to better health.",
  buttonText = "Book An Appointment",
  buttonLink = "/appointment",
  variant = "gradient",
}: CTASectionProps) => {
  const bgClass =
    variant === "gradient"
      ? "bg-gradient-to-br from-navy via-teal-dark to-primary"
      : "bg-navy";

  return (
    <section className={`py-20 ${bgClass} relative overflow-hidden`}>
      {variant === "gradient" && (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary-foreground/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-primary-foreground/10"
          />
        </>
      )}

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link to={buttonLink}>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-accent-foreground rounded-full px-10 font-semibold"
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
