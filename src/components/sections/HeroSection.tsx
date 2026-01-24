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

        {/* Premium Black/Grey Gradient Overlay 
          - Blends from solid black to dark grey, then fades out.
          - Covers 2/3 of the screen on large devices for perfect text contrast against the video.
        */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-black/90 via-neutral-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-300 font-medium mb-4 tracking-wider uppercase text-sm drop-shadow-md">
              Welcome to Norma Luna Healthcare
            </p>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Your Health, <br/> Our Priority.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl leading-relaxed drop-shadow-md">
              At Norma Luna Healthcare, we don't just treat illnesses – we nurture
              hope and healing. Your well-being is our heartfelt mission, every
              step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointment">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-teal-light text-primary-foreground rounded-full px-8 h-12 text-base group shadow-lg shadow-black/30 transition-all hover:scale-105"
                >
                  Book An Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-black/20 transition-all hover:scale-105"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Support Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 inline-flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center border border-neutral-600 shadow-md">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm font-medium">24/7 Support</p>
              <p className="text-white font-bold text-xl tracking-wide drop-shadow-sm">
                +91 73587 46061
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
