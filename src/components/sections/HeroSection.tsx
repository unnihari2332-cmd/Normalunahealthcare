import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[660px] md:h-screen md:min-h-[750px] flex items-center overflow-hidden py-16 md:py-0">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover saturate-50"
          autoPlay
          loop
          muted
          playsInline
          src="/hero.mp4"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90 lg:bg-gradient-to-r lg:from-black/95 lg:via-neutral-900/80 lg:to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 pt-16 md:pt-20 pb-12 md:pb-0 z-10">
        <div className="max-w-[620px]">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-4 md:space-y-6 text-left"
          >
            <span className="inline-flex items-center gap-2 text-blue-300 font-semibold tracking-wider uppercase text-xs sm:text-sm bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full w-fit border border-white/15">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Norma Luna Healthcare
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Your Global Gateway To
              <br />
              <span className="text-blue-400">Healing Experience</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md">
              Connecting international patients with world-class healthcare in
              India through trusted hospitals, expert care coordination, and
              personalized support—from your first consultation to your safe
              return home.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 md:pt-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <Link to="/appointment" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
                  >
                    Book an Appointment
                    <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
                  </Button>
                </Link>

                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white text-white hover:text-slate-900 border-white/30 rounded-full px-8 sm:px-10 h-12 sm:h-14 text-sm sm:text-base font-semibold backdrop-blur-sm transition-all"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 md:mt-12 pt-5 md:pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-8 bg-white/5 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl sm:rounded-none"
          >
            <div className="text-center sm:text-left">
              <p className="text-white font-black text-lg sm:text-2xl text-blue-400">100%</p>
              <p className="text-gray-300 text-xs sm:text-sm font-medium">Satisfied Clients</p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-white font-black text-lg sm:text-2xl text-blue-400">200+</p>
              <p className="text-gray-300 text-xs sm:text-sm font-medium">Patients Treated</p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-white font-black text-lg sm:text-2xl text-blue-400">300+</p>
              <p className="text-gray-300 text-xs sm:text-sm font-medium">Trusted specialists </p>
            </div>
          </motion.div>

          {/* Phone Support */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 md:mt-8"
          >
            <a
              href="tel:+917358746061"
              className="inline-flex items-center gap-3 sm:gap-4 p-2 pr-5 sm:pr-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all max-w-full backdrop-blur-md"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>

              <div className="min-w-0">
                <p className="text-gray-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-0.5 truncate">
                  Care Coordinator
                </p>

                <p className="text-white font-bold text-base sm:text-xl tracking-wide truncate">
                  +91 73587 46061
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-gray-400 pointer-events-none"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase mb-1.5">
          Scroll to explore
        </span>

        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
