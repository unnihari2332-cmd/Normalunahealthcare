import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/hero.mp4"
        />
        
        {/* Gradient Overlay - Covers 50% of the width on desktop (lg:w-1/2) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-navy/95 to-transparent" />
      </div>

      {/* Animated shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white font-medium mb-4 drop-shadow-md"
          >
            Welcome to Norma Luna Healthcare
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 drop-shadow-lg"
          >
            Your Health, Our Priority.
            <br />
            <span className="text-primary">Trusted Healthcare</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/90 text-lg mb-8 max-w-xl drop-shadow-md"
          >
            At Norma Luna Healthcare, we don't just treat illnesses – we nurture hope and healing. Your well-being is our heartfelt mission, every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/appointment">
              <Button size="lg" className="bg-primary hover:bg-teal-light text-primary-foreground rounded-full px-8 group shadow-lg">
                Book An Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/about">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 font-semibold shadow-md"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Support Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 inline-flex items-center gap-4 bg-navy/40 backdrop-blur-md rounded-full px-6 py-3 border border-primary-foreground/20 shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm">24/7 Support</p>
              <p className="text-primary-foreground font-semibold text-lg">+91 73587 46061</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
