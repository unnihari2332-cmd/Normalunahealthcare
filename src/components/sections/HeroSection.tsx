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

        {/* UPDATED: Gradient Overlay 
            - Made it slightly wider (lg:w-2/3) to ensure text remains readable
            - This acts as the "background" for the text now 
        */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">

          {/* 🔥 MODIFIED: Removed the "Blur Box" styling */}
          {/* We keep the motion.div for animation, but removed borders/bg/padding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center" // Removed bg-white/10, blur, borders, etc.
          >
            <p className="text-white/90 font-medium mb-4 tracking-wide uppercase text-sm">
              Welcome to Norma Luna Healthcare
            </p>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Health,Our Priority. <br />
            </h1>

            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              At Norma Luna Healthcare, we don't just treat illnesses – we nurture
              hope and healing. Your well-being is our heartfelt mission, every
              step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointment">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-teal-light text-primary-foreground rounded-full px-8 h-12 text-base group shadow-xl shadow-primary/20"
                >
                  Book An Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline" // Changed to outline for a cleaner look against video
                  className="bg-transparent text-white border-white hover:bg-white hover:text-navy rounded-full px-8 h-12 text-base font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Support Banner - Simplified style to match the new clean look */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 inline-flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-white-sm flex items-center justify-center border border-primary/30">
              {/* Changed text-primary to text-white here */}
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-gray-300 text-sm font-medium">24/7 Support</p>
              <p className="text-white font-bold text-xl tracking-wide">
                +91 73587 46061
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
