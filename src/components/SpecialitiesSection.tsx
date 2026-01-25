import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Baby,
  Utensils,
  Dna,
  HeartHandshake,
  Bone,
  Smile,
  Scale,
  Sparkles,
  Eye,
  Droplets,
  Scissors,
} from "lucide-react";
import { motion } from "framer-motion";

// --- DATA ---
export const specialities = [
  {
    id: "ivf-obstetrics-gynaecology",
    title: "IVF & Gynaecology",
    description: "Complete infertility care with state-of-the-art IVF treatment and comprehensive support.",
    image: "/ivf.jpg",
    icon: Baby,
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Cutting edge techniques to treat disorders of the esophagus, stomach, and intestine.",
    image: "/gastroenterology.jpg",
    icon: Utensils,
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Multidisciplinary expertise, chemotherapy and targeted therapies for advanced cancer care.",
    image: "/oncology.jpg",
    icon: Dna,
  },
  {
    id: "transplant-kidney-liver",
    title: "Transplants",
    description: "Specializing in kidney, liver and heart transplant surgeries with exceptional post-op care.",
    image: "/transplantkidney-liver.jpg",
    icon: HeartHandshake,
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    description: "Latest orthopedic technology including joint replacements and fracture treatments.",
    image: "/orthopaedics.jpg",
    icon: Bone,
  },
  {
    id: "dental",
    title: "Dental Care",
    description: "From dental implants to orthodontics, your smile is in expert hands.",
    image: "/dental.jpg",
    icon: Smile,
  },
  {
    id: "bariatrics",
    title: "Bariatrics",
    description: "Innovative weight loss solutions ranging from sleeve gastrectomy to gastric bypass.",
    image: "/bariatrics.jpg",
    icon: Scale,
  },
  {
    id: "aesthetic-dermatology-plastic",
    title: "Aesthetic Surgery",
    description: "Achieve your beauty goals with expert aesthetic dermatology and plastic surgery.",
    image: "/aestheticdermatology.jpg",
    icon: Sparkles,
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "World-class vision care equipped with the latest technology for LASIK and cataracts.",
    image: "/ophthalmology.jpg",
    icon: Eye,
  },
  {
    id: "nephrology",
    title: "Nephrology",
    description: "Comprehensive kidney care using advanced diagnostics and dialysis solutions.",
    image: "/nephrologists.jpg",
    icon: Droplets,
  },
  {
    id: "urology",
    title: "Urology",
    description: "Expert care for kidney, bladder, and reproductive health using minimally invasive techniques.",
    image: "/urology.png",
    icon: Activity,
  },
  {
    id: "colorectal-surgery",
    title: "Colorectal Surgery",
    description: "Specialized surgeries handled by experienced surgeons ensuring fast recovery.",
    image: "/colorectalsurgery.jpg",
    icon: Scissors,
  },
];

// --- COMPONENT ---
const SpecialitiesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const brandBlue = "#0C3B66";

  return (
    <section className="bg-[#D9EBF5] py-20 lg:py-28 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/20 skew-x-12 blur-xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 text-sm font-semibold mb-4 shadow-sm"
              style={{ color: brandBlue }}
            >
              <Activity className="w-4 h-4" />
              Centers of Excellence
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">
              Dedicated to <span style={{ color: brandBlue }}>Holistic Care</span>
            </h2>

            <p className="text-slate-600 text-lg">
              Our hospital features specialized departments led by world-class
              physicians, ensuring you receive the highest standard of treatment.
            </p>
          </motion.div>
        </div>

        {/* Responsive Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {specialities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <Link
                  to={`/specialities/${item.id}`}
                  className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 ease-in-out border border-white/50 hover:border-[#0C3B66]"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      // Reduced duration from 700 to 400 and scale from 110 to 105
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out"
                    />

                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-4 right-4 bg-white p-2.5 rounded-xl shadow-lg text-[#0C3B66] group-hover:bg-[#0C3B66] group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0C3B66] transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm mb-6 flex-1">
                      {item.description}
                    </p>

                    <div
                      className="flex items-center text-sm font-semibold pt-4 border-t border-slate-100"
                      style={{ color: brandBlue }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            <button
              className="px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
              style={{ backgroundColor: brandBlue }}
            >
              View All Departments
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
