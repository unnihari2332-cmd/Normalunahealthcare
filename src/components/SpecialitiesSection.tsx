import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
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
  Home,
  ChevronRight
} from "lucide-react";

// --- DATA: SPECIALITIES ---
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

// --- COMPONENT: HERO BANNER (With Breadcrumb & Curve) ---
const HeroBanner = ({ title, parentPage = "Home" }) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#1E2043] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full border-2 border-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Breadcrumb Path */}
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

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl font-display font-bold tracking-tight text-center"
        >
          {title}
        </motion.h1>
      </div>

      {/* THE CURVE - Fill matches the section background below */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[90px]"
        >
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            fill="#D9EBF5" 
          ></path>
        </svg>
      </div>
    </section>
  );
};

// --- COMPONENT: SPECIALITIES GRID ---
const SpecialitiesSection = () => {
  const brandBlue = "#0C3B66";

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#D9EBF5] pb-20 lg:pb-28 overflow-hidden relative">
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

        {/* Grid Section */}
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
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-2.5 rounded-xl shadow-lg text-[#0C3B66] group-hover:bg-[#0C3B66] group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

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
      </div>
    </section>
  );
};

// --- MAIN PAGE ASSEMBLY ---
const SpecialitiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Offset for fixed header */}
      <div className="pt-20">
        <HeroBanner title="Our Specialities" />
      </div>

      <SpecialitiesSection />

      <Footer />
    </div>
  );
};

export default SpecialitiesPage;
