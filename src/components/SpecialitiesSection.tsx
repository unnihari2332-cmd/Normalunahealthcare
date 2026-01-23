import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Activity, 
  Stethoscope, 
  Baby,       // For IVF
  Utensils,   // For Gastroenterology (metaphorical)
  Dna,        // For Oncology
  HeartHandshake, // For Transplants
  Bone,       // For Orthopaedics
  Smile,      // For Dental
  Scale,      // For Bariatrics
  Sparkles,   // For Aesthetic
  Eye,        // For Ophthalmology
  Droplets,   // For Nephrology
  Scissors    // For Surgery/Colorectal
} from "lucide-react";
import { motion } from "framer-motion";

// --- DATA ---
export const specialities = [
  {
    id: "ivf-obstetrics-gynaecology",
    title: "IVF & Gynaecology",
    description: "Complete infertility care with state-of-the-art IVF treatment and comprehensive support.",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&auto=format&fit=crop",
    icon: Baby,
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Cutting edge techniques to treat disorders of the esophagus, stomach, and intestine.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop",
    icon: Utensils, 
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Multidisciplinary expertise, chemotherapy and targeted therapies for advanced cancer care.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop",
    icon: Dna,
  },
  {
    id: "transplant-kidney-liver",
    title: "Transplants",
    description: "Specializing in kidney, liver and heart transplant surgeries with exceptional post-op care.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&auto=format&fit=crop",
    icon: HeartHandshake,
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    description: "Latest orthopedic technology including joint replacements and fracture treatments.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop",
    icon: Bone,
  },
  {
    id: "dental",
    title: "Dental Care",
    description: "From dental implants to orthodontics, your smile is in expert hands.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop",
    icon: Smile,
  },
  {
    id: "bariatrics",
    title: "Bariatrics",
    description: "Innovative weight loss solutions ranging from sleeve gastrectomy to gastric bypass.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop",
    icon: Scale,
  },
  {
    id: "aesthetic-dermatology-plastic",
    title: "Aesthetic Surgery",
    description: "Achieve your beauty goals with expert aesthetic dermatology and plastic surgery.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop",
    icon: Sparkles,
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "World-class vision care equipped with the latest technology for LASIK and cataracts.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop",
    icon: Eye,
  },
  {
    id: "nephrology",
    title: "Nephrology",
    description: "Comprehensive kidney care using advanced diagnostics and dialysis solutions.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&auto=format&fit=crop",
    icon: Droplets,
  },
  {
    id: "urology",
    title: "Urology",
    description: "Expert care for kidney, bladder, and reproductive health using minimally invasive techniques.",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&auto=format&fit=crop",
    icon: Activity, // Generic medical for Urology
  },
  {
    id: "colorectal-surgery",
    title: "Colorectal Surgery",
    description: "Specialized surgeries handled by experienced surgeons ensuring fast recovery.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&auto=format&fit=crop",
    icon: Scissors,
  },
];

// --- COMPONENT ---

const SpecialitiesSection: React.FC = () => {
  // Animation Variants
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    // Changed bg to Deep Navy Blue: bg-[#0B1120]
    <section className="bg-[#0B1120] py-20 lg:py-28 overflow-hidden relative">
      
      {/* Decorative background elements (Adjusted opacity for dark mode) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 skew-x-12 pointer-events-none blur-3xl" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag adjusted for dark mode contrast */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm border border-blue-500/20">
              <Activity className="w-4 h-4" />
              <span>Centers of Excellence</span>
            </div>
            
            {/* Heading Colors changed to White/Light */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Dedicated to <span className="text-blue-400">Holistic Care</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our hospital features specialized departments led by world-class
              physicians, ensuring you receive the highest standard of treatment
              for your specific needs.
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
            // Get the specific icon component
            const IconComponent = item.icon;

            return (
              <motion.div key={item.id} variants={itemVariants}>
                <Link
                  to={`/specialities/${item.id}`}
                  className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-400/50"
                >
                  {/* Image Area */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating Specific Icon Badge */}
                    <div className="absolute bottom-4 right-4 bg-white p-2.5 rounded-xl shadow-lg z-20 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>
                    
                    {/* Footer / Link */}
                    <div className="flex items-center text-sm font-bold text-blue-600 pt-4 border-t border-slate-100">
                      <span className="group-hover:mr-2 transition-all">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            {/* Button updated to Blue-600 to pop against the Navy background */}
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 duration-200">
              View All Departments
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
