import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SpecialityCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export const SpecialityCard = ({
  id,
  title,
  description,
  image,
  delay = 0,
}: SpecialityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative h-[420px] rounded-2xl overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
            {title}
          </h3>

          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-5">
            {description}
          </p>

          <Link to={`/specialities/${id}`}>
            <Button
              className="
                bg-white
                text-navy
                font-semibold
                rounded-full
                px-6
                py-2
                shadow-lg
                hover:bg-primary
                hover:text-primary-foreground
                transition-all
                group/btn
              "
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
