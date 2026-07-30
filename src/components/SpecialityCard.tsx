import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SpecialityCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  index?: number;
  delay?: number;
}

export const SpecialityCard = ({
  id,
  title,
  description,
  image,
  index = 0,
  delay = 0,
}: SpecialityCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group relative h-[420px] rounded-2xl overflow-hidden bg-slate-100"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        loading={index < 3 ? "eager" : "lazy"}
        decoding="async"
        width="400"
        height="420"
        onLoad={() => setImageLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

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
