import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  delay?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, image, delay = 0 }: ServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      {image && (
        <div className="h-48 overflow-hidden relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <img
            src={image}
            alt={title}
            loading="eager"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      {/* Icon */}
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto ${
            image ? "-mt-7" : "mt-8"
          } relative z-10 shadow-lg`}
        >
          <Icon className="w-6 h-6 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Button
          variant="default"
          className="bg-navy hover:bg-primary text-navy-foreground rounded-full px-6 group/btn"
        >
          Read More
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </Button>
      </div>
    </motion.div>
  );
};
