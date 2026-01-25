import { motion } from "framer-motion";

interface HeroBannerProps {
  title: string;
  image?: string;
}

export const HeroBanner = ({ title }: HeroBannerProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Solid Blue Background */}
      <div className="bg-primary py-24 md:py-32 lg:py-40 relative">
        {/* Subtle geometric decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 border border-white/10 rounded-lg transform -translate-x-1/2 -translate-y-1/4 rotate-12" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full transform translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 right-16 w-4 h-4 bg-white/20 rounded-full" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground"
          >
            {title}
          </motion.h1>
        </div>
      </div>
      
      {/* Curved Wave Bottom - no stroke/border */}
      <div className="relative -mt-1">
        <svg
          className="w-full h-16 md:h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C0 0 240 60 720 60C1200 60 1440 0 1440 0V80H0V0Z"
            className="fill-primary"
          />
        </svg>
      </div>
    </div>
  );
};
