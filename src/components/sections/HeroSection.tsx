import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      
      {/* 1. VISUAL IMPROVEMENTS: Background Video with Desaturation & Strong Gradient */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover saturate-50" // Desaturated to push focus to text
          autoPlay
          loop
          muted
          playsInline
          src="/hero.mp4"
        />

        {/* Strong left-to-right gradient overlay (dark -> transparent) with slight backdrop blur */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-gradient-to-r from-black/95 via-neutral-900/80 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 pt-20">
        
        {/* 1. LAYOUT IMPROVEMENT: Constrained width (max-w-[600px]) for premium readability */}
        <div className="max-w-[600px]">

          {/* 8. OPTIONAL ADD-ON: Subtle animated entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-6" // Increased vertical spacing
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold tracking-wider uppercase text-sm bg-primary/10 px-3 py-1 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4" />
              Norma Luna Healthcare
            </span>

            {/* 2. HEADLINE IMPROVEMENT: Clarity & Trust */}
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Advanced Care. <br />
              Trusted Healing.
            </h1>

            {/* 2. COPY IMPROVEMENT: Specific, professional, and credible */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed drop-shadow-md">
              Comprehensive healthcare services delivered with compassion, modern technology, and experienced medical professionals—focused on your complete well-being.
            </p>

            {/* 3. CTA OPTIMIZATION: Dominant Primary + Secondary Outline */}
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <Link to="/appointment" className="w-full">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-primary/30 transition-all hover:scale-105"
                    >
                      Book an Appointment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  {/* Micro-trust cue below primary CTA */}
                  <span className="text-xs text-gray-400 flex items-center gap-1.5 pl-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Instant confirmation • No waiting time
                  </span>
                </div>

                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent text-white border-white/50 hover:bg-white hover:text-black rounded-full px-8 h-14 text-base font-semibold transition-all"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 4. TRUST SIGNALS: Added below CTAs for conversion boost */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-8"
          >
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white font-bold text-sm">4.8/5 Patient Rating</p>
            </div>
            <div>
              <p className="text-white font-bold text-sm mb-1">5000+</p>
              <p className="text-gray-400 text-sm">Patients Treated</p>
            </div>
            <div>
              <p className="text-white font-bold text-sm mb-1">24/7</p>
              <p className="text-gray-400 text-sm">Emergency Support</p>
            </div>
          </motion.div>

          {/* 5. PHONE SUPPORT IMPROVEMENTS: Larger, clickable, clear label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <a 
              href="tel:+917358746061" 
              className="inline-flex items-center gap-4 group p-2 pr-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-0.5">Call for Immediate Assistance</p>
                <p className="text-white font-bold text-xl tracking-wide group-hover:text-primary transition-colors">
                  +91 73587 46061
                </p>
              </div>
            </a>
          </motion.div>

        </div>
      </div>

      {/* 8. OPTIONAL ADD-ON: Scroll Cue at the bottom */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-xs font-medium tracking-widest uppercase mb-2">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>

    </section>
  );
};
