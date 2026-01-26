import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

interface HeroBannerProps {
  title: string;
  image?: string; // Optional: kept to prevent breaking existing usages
  parentPage?: string; // Optional: defaults to "Home"
}

export const HeroBanner = ({ title, parentPage = "Home" }: HeroBannerProps) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#0B3A66] overflow-hidden">
      
      {/* 1. Background decoration (Circles) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full border-2 border-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        
        {/* 2. Breadcrumb Path */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-wider"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <Home size={14} />
            {parentPage}
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-white">{title}</span>
        </motion.div>

        {/* 3. Page Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl font-display font-bold tracking-tight text-center"
        >
          {title}
        </motion.h1>
      </div>

      {/* 4. The Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[90px]"
        >
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff" 
          ></path>
        </svg>
      </div>
    </section>
  );
};
