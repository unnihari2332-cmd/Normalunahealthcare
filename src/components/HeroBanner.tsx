import { motion } from "framer-motion";

interface HeroBannerProps {
  title: string;
  image?: string;
}

export const HeroBanner = ({ title }: HeroBannerProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Solid Blue Background */}
      <div className="bg-primary py-16 md:py-24 relative">
        {/* Subtle geometric decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 border border-white/10 rounded-lg transform -translate-x-1/2 -translate-y-1/4 rotate-12" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-white/20 rounded-full" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          >
            {title}
          </motion.h1>
        </div>
      </div>
      
      {/* Curved Wave Bottom */}
      <div className="relative h-12 md:h-16 bg-background">
        <svg
          className="absolute bottom-full left-0 w-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L1440 60L1440 0C1440 0 1200 40 720 40C240 40 0 0 0 0L0 60Z"
            className="fill-background"
          />
        </svg>
      </div>
    </div>
  );
};
