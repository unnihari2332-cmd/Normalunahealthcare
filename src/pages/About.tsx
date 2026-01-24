import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { StatsSection } from "@/components/StatsSection";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Quote, 
  Target, 
  Eye, 
  Users, 
  Microscope, 
  Heart, 
  GraduationCap,
  Star 
} from "lucide-react";

// IMPORTANT: Ensure this image exists in src/assets/ or change the path
import heroImage from "/aboutus.jpg"; 

// --- DATA: TAB CONTENT ---
const tabContent = {
  about: {
    title: "Bringing Care Closer to You",
    icon: Users,
    text: [
      "Norma Luna Healthcare aims to bring out the complete requirements of medical services that which offers flexible approach to our clients and provide the level of comfort of a home away from home. After all, Norma Luna Healthcare offers the best services with level of expertise.",
      "Norma Luna Healthcare is networked with reputed hospitals and doctors across India. The network includes corporate hospitals, MultiSpeciality hospitals, and Super-Speciality hospitals with International protocols and Multidisciplinary teams at an affordable price.",
      "Here at Norma Luna Healthcare, we assure you to facilitate with renowned specialists and hospitals for your required treatments in India with most reputed and experienced Doctors and Surgeons with cutting edge technology."
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
      "To be the world's most trusted bridge to healing, removing geographical and financial barriers to advanced healthcare.",
      "We envision a world where quality medical treatment is accessible to everyone, regardless of where they live. By leveraging global medical expertise and cutting-edge technology, we aim to redefine medical tourism as a seamless, compassionate, and life-changing experience."
    ]
  },
  mission: {
    title: "Our Mission",
    icon: Target,
    text: [
      "To provide affordable, world-class medical care with a flexible, patient-centric approach that feels like a home away from home.",
      "We differ by not just arranging appointments, but by curating complete recovery journeys. From the moment you contact us until you are safely back home, our mission is to ensure your comfort, safety, and health are prioritized with the highest level of expertise and empathy."
    ]
  }
};

// --- DATA: TESTIMONIALS (No Images) ---
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

// 1. About Section with Image
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
          {/* LEFT SIDE: IMAGE */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-8">
               <div className="text-white">
                 <p className="font-bold text-lg">Norma Luna Healthcare</p>
                 <p className="text-sm opacity-80">Excellence in Medical Tourism</p>
               </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="flex flex-col h-full justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold text-navy">
                {tabContent.about.title}
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-lg mb-8">
              {tabContent.about.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-3 mt-6">
              {tabContent.about.features.map((feature, i) => (
                <div key={i} className="flex items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-2 rounded-full text-primary mr-4">
                    <feature.icon size={20} />
                  </div>
                  <span className="font-bold text-navy text-sm md:text-base">
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

// 2. Vision & Mission Cards Section
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
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">Our Direction</p>
          <h2 className="font-display text-4xl font-bold text-navy">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-100 rounded-2xl text-primary">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy">
                Our Vision
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {tabContent.vision.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Mission Card */}
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
              <h3 className="text-2xl font-display font-bold text-navy">
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

// 3. Testimonial Grid (Updated: No Images)
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
          {/* Card Container */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 w-full flex flex-col items-center text-center h-full">
            
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote className="w-16 h-16 text-blue-100 fill-blue-50" />
            </div>

            {/* Content */}
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              {testimonial.content}
            </p>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>

          {/* Name & Details */}
          <div className="mt-6 text-center">
            <h4 className="font-bold text-navy text-lg">{testimonial.name}</h4>
            <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
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
        <HeroBanner
          title="About Us"
          image={heroImage}
          breadcrumbs={[{ label: "About Us" }]}
        />
      </div>

      <AboutSection />
      
      <VisionMissionSection />
        
      <StatsSection />

      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-2">Patients Story</p>
            <h2 className="font-display text-4xl font-bold text-navy">
              Loved by our Patients
            </h2>
          </motion.div>

          {/* Testimonial Grid */}
          <TestimonialGrid />

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
