import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Puzzle, 
  Handshake, 
  ThumbsUp, 
  Globe, 
  LucideIcon 
} from "lucide-react";

interface ValueItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

const values: ValueItem[] = [
  {
    id: "01",
    title: "Passion",
    icon: Heart,
    description: "Driven by a burning desire to improve lives and deliver care with genuine warmth.",
    color: "text-red-500",
  },
  {
    id: "02",
    title: "Integrity",
    icon: Puzzle,
    description: "Honest, transparent, and ethical in every decision. We fit the pieces together perfectly.",
    color: "text-blue-600",
  },
  {
    id: "03",
    title: "Respect",
    icon: Handshake,
    description: "Treating every patient and partner with the dignity, kindness, and courtesy they deserve.",
    color: "text-emerald-600",
  },
  {
    id: "04",
    title: "Excellence",
    icon: ThumbsUp,
    description: "Commited to the highest standards of medical quality. We don't just meet expectations; we exceed them.",
    color: "text-amber-500",
  },
  {
    id: "05",
    title: "Diversity",
    icon: Globe,
    description: "Embracing patients from all walks of life and corners of the world with inclusive care.",
    color: "text-indigo-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Renamed from WhyChooseUs to StatsSection to match your Index.tsx import
export const StatsSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-900 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#1B2A49] mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {values.map((item) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-4 text-4xl font-black text-gray-200 opacity-50 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300 select-none">
                  {item.id}
                </span>

                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-gray-100`}>
                  <Icon className={`w-8 h-8 ${item.color}`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Line Accent */}
                <div className="w-0 h-0.5 bg-blue-600 mt-6 group-hover:w-12 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
