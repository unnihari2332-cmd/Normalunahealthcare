import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
import { FounderSection } from "@/components/FounderSection";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Quote, 
  Target, 
  Eye, 
  Users, 
  Microscope, 
  Heart, 
  GraduationCap,
  Star,
  ChevronRight,
  Home          
} from "lucide-react";
import { Link } from "react-router-dom"; // Added Link for breadcrumb interactivity

// IMPORTANT: Ensure this image exists in src/assets/ or change the path
import heroImage from "/aboutus.jpg"; 

// --- DATA: TAB CONTENT ---
const tabContent = {
  about: {
    title: "Bringing Care Closer to You",
    icon: Users,
    text: [
      "Norma Luna Healthcare is a trusted medical tourism facilitator connecting international patients with India's leading NABH and JCI-accredited multispecialty and super-specialty hospitals. Through our network of renowned specialists and advanced healthcare facilities, we provide access to world-class, affordable medical care tailored to each patient's needs.",
      "From treatment planning and hospital selection to visa assistance, travel, accommodation, local transportation, and post-treatment follow-up, we offer personalized end-to-end support to ensure a seamless and stress-free medical journey.At Norma Luna Healthcare, we are committed to making exceptional healthcare in India accessible with compassion, transparency, and excellence—because your health deserves nothing less.",
      "Your Global Gateway to Healing Experience.",
    ],
    features: [
      { label: "Innovative Treatment Approaches", icon: Microscope },
      { label: "Holistic Health Focus", icon: Heart },
      { label: "Patient Education and Empowerment", icon: GraduationCap }
    ]
  },
  vision: {
    title: "Our Vision",
    icon: Eye,
    text: [
      "To redefine medical travel by creating a trusted global gateway to India’s exceptional healthcare—where every patient can navigate their journey with confidence, clarity, and peace of mind.", 
    ]
  },
  mission: {
    title: "Our Mission",
    icon: Target,
    text: [
      "To connect international patients with distinguished medical expertise and accredited healthcare institutions across India, while thoughtfully coordinating every aspect of their medical journey with transparency, integrity, and compassion",
    ]
  }
};

const testimonials = [
  {
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options. Stem cell therapy was a promising solution, but in Russia, the cost was extremely high. That's when I found that India offered world-class regenerative medicine.",
  },
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: "Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference.",
  },
  {
    name: "Amal N.",
    location: "Sri Lanka",
    treatment: "Hip Replacement",
    content: "After suffering for years with severe arthritis, I could barely walk. Hip replacement surgery in Sri Lanka was too costly. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai. Just days after surgery, I was walking again.",
  },
];

// --- COMPONENTS ---

// UPDATED: HeroBanner with Brand Color #0B3A66
const HeroBanner = ({ title, parentPage = "Home" }) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#0B3A66] overflow-hidden">
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

      {/* THE CURVE */}
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

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={heroImage} 
              alt="Medical Professionals" 
              className="w-full h-full object-cover"
            />
            {/* Brand Color Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A66]/90 to-transparent flex items-end p-8">
               <div className="text-white">
                 <p className="font-bold text-lg">Norma Luna Healthcare</p>
                 <p className="text-sm opacity-80">Excellence in Medical Tourism</p>
               </div>
            </div>
          </motion.div>

          <div className="flex flex-col h-full justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg text-[#0B3A66]">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold text-[#0B3A66]">
                {tabContent.about.title}
              </h3>
            </div>

<div className="space-y-4 text-gray-600 leading-relaxed text-lg mb-8">
  {tabContent.about.text.map((paragraph, idx) => (
    <p
      key={idx}
      className={
        idx === tabContent.about.text.length - 1
          ? "font-bold text-xl text-[#0B3A66]"
          : ""
      }
    >
      {paragraph}
    </p>
  ))}
</div>

            <div className="space-y-3 mt-6">
              {tabContent.about.features.map((feature, i) => (
                <div key={i} className="flex items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-2 rounded-full text-[#0B3A66] mr-4">
                    <feature.icon size={20} />
                  </div>
                  <span className="font-bold text-[#0B3A66] text-sm md:text-base">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-2">Our Direction</p>
          <h2 className="font-display text-4xl font-bold text-[#0B3A66]">
          Our Purpose & Promise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-100 rounded-2xl text-[#0B3A66]">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0B3A66]">
                Our Vision
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {tabContent.vision.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0B3A66]">
                Our Mission
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {tabContent.mission.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-10">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 w-full flex flex-col items-center text-center h-full">
            <div className="mb-6">
              <Quote className="w-16 h-16 text-blue-100 fill-blue-50" />
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              {testimonial.content}
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <h4 className="font-bold text-[#0B3A66] text-lg">{testimonial.name}</h4>
            <p className="text-xs text-blue-600 font-medium uppercase tracking-wider mb-1">
                {testimonial.location}
            </p>
            <span className="text-xs text-gray-400">
                {testimonial.treatment}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- MAIN PAGE ---

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />

      <div className="pt-20">
        <HeroBanner title="About Us" />
      </div>
      <FounderSection />
      <AboutSection />
      
      <StatsSection />

      <VisionMissionSection />

      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-blue-500 font-medium tracking-wide uppercase text-sm mb-2">Patients Story</p>
            <h2 className="font-display text-4xl font-bold text-[#0B3A66]">
              Loved by our Patients
            </h2>
          </motion.div>

          <TestimonialGrid />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
