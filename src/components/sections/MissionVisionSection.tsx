import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import surgeryImage from "@/assets/hero-medical.jpg"; // Or your relevant image path

export const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  // Data for the switchable content
  const content = {
    mission: {
      title: "Our Mission",
      icon: Target,
      text: "We understand that accessing medical care can sometimes be challenging, especially for individuals with limited mobility or busy schedules. Our mission is to bridge that gap with compassionate care.",
      points: [
        "Friendly team you can call friends",
        "We accept many insurance plans and offer discounts",
        "We use energy-saving and waste-reducing methods",
      ],
    },
    vision: {
      title: "Our Vision",
      icon: Eye,
      text: "To be the leading healthcare facilitator known for excellence, innovation, and patient-centric care, ensuring that quality health solutions are accessible to everyone, everywhere.",
      points: [
        "Global standard healthcare accessibility",
        "Innovative medical technologies",
        "Sustainable healthcare practices",
      ],
    },
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Image Composition */}
          <div className="relative">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={surgeryImage}
                alt="Medical Team"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            {/* Floating "Years Experience" Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden md:block absolute top-10 -left-10 z-20 bg-navy text-white p-8 rounded-xl shadow-2xl max-w-[240px]"
            >
              <div className="mb-4 bg-white/10 w-fit p-3 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-5xl font-bold text-[#F0C65C] mb-2">25+</h3>
              <p className="font-medium text-lg leading-snug">
                Years of Experience in the Medical Field.
              </p>
            </motion.div>
            
            {/* Decorative white shape (optional, mimicking the curve in screenshot) */}
            <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-background rounded-tl-[100px] z-20 hidden lg:block" />
          </div>

          {/* RIGHT SIDE: Content & Switch */}
          <div className="lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-xl font-bold">+</span>
                <span className="text-gray-500 font-medium tracking-wide text-sm uppercase">
                  Welcome to Norma Luna
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Not Just Better Healthcare, <br />
                But a Better <span className="text-primary">Healthcare Experience.</span>
              </h2>

              {/* TABS / SWITCHER */}
              <div className="flex gap-8 mb-6 border-b border-gray-100 pb-4">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`flex items-center gap-2 text-lg font-bold transition-colors duration-300 ${
                    activeTab === "mission" ? "text-navy" : "text-gray-400 hover:text-navy/70"
                  }`}
                >
                  <Target className="w-5 h-5" /> Our Mission
                </button>
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`flex items-center gap-2 text-lg font-bold transition-colors duration-300 ${
                    activeTab === "vision" ? "text-navy" : "text-gray-400 hover:text-navy/70"
                  }`}
                >
                  <Eye className="w-5 h-5" /> Our Vision
                </button>
              </div>

              {/* DYNAMIC CONTENT AREA */}
              <div className="min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Text with Orange Vertical Line */}
                    <div className="flex gap-4 mb-8">
                      <div className="w-1 bg-[#F0C65C] shrink-0 rounded-full" />
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {content[activeTab].text}
                      </p>
                    </div>

                    <p className="text-gray-500 mb-6 italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada porta sapien.
                    </p>

                    {/* Check Points */}
                    <ul className="space-y-4 mb-8">
                      {content[activeTab].points.map((point, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-navy font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
