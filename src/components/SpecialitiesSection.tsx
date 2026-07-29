import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Baby, Utensils, Dna, HeartHandshake, Bone, Smile, Scale, Sparkles, Eye, Droplets, Scissors } from "lucide-react";
import { motion } from "framer-motion";

// --- DATA ---
export const specialities = [{
  id: "ivf-obstetrics-gynaecology",
  title: "IVF & Gynaecology",
  description: "Access distinguished expertise in reproductive medicine and women’s health, from fertility solutions to complex gynaecological interventions.",
  image: "/ivf.jpg",
  icon: Baby
}, {
  id: "gastroenterology",
  title: "Gastroenterology",
  description: "Connect with accomplished specialists for digestive and gastrointestinal conditions, encompassing sophisticated diagnostics, endoscopy, and therapeutic procedures.",
  image: "/gastroenterology.jpg",
  icon: Utensils
}, {
  id: "oncology",
  title: "Oncology",
  description: "Navigate complex cancer treatment with access to multidisciplinary expertise across medical, surgical, and radiation oncology.",
  image: "/oncology.jpg",
  icon: Dna
}, {
  id: "transplant-kidney-liver",
  title: "Transplants",
  description: "Access established transplant programmes backed by experienced clinical teams, comprehensive evaluation protocols, and coordinated continuity of care.",
  image: "/transplantkidney-liver.jpg",
  icon: HeartHandshake
}, {
  id: "cardiology",
  title: "Cardiology",
  description: "Access leading cardiac expertise for the evaluation and treatment of complex heart conditions, from advanced diagnostics and interventional cardiology to sophisticated cardiac procedures.",
  image: "/cardiology.jpg",
  icon: Activity
},{
  id: "neurology",
  title: "Neurology",
  description: "Connect with distinguished neurological expertise for conditions affecting the brain, spine, and nervous system, supported by sophisticated diagnostic and therapeutic capabilities.",
  image: "/neurology.jpg",
  icon: Activity
}, {
  id: "orthopaedics",
  title: "Orthopaedics",
  description: "Discover leading expertise in bone, joint, and musculoskeletal conditions, including joint replacement, sports injuries, spine care, and complex orthopaedic procedures.",
  image: "/orthopaedics.jpg",
  icon: Bone
}, {
  id: "dental",
  title: "Dental Care",
  description: "Explore exceptional dental expertise across restorative, cosmetic, implant, and maxillofacial procedures, balancing precision, function, and aesthetics.",
  image: "/dental.jpg",
  icon: Smile
}, {
  id: "bariatrics",
  title: "Bariatrics",
  description: "Connect with established centres for bariatric and metabolic procedures, supported by multidisciplinary evaluation and individually considered treatment options.",
  image: "/bariatrics.jpg",
  icon: Scale
}, {
  id: "aesthetic-dermatology-plastic",
  title: "Aesthetic Surgery",
  description: "Access accomplished aesthetic and reconstructive surgeons offering meticulously considered procedures shaped around individual goals and natural-looking outcomes.",
  image: "/aestheticdermatology.jpg",
  icon: Sparkles
}, {
  id: "ophthalmology",
  title: "Ophthalmology",
  description: "Discover sophisticated solutions for vision and eye conditions, from precision diagnostics and corrective procedures to complex ophthalmic surgery.",
  image: "/ophthalmology.jpg",
  icon: Eye
}, {
  id: "nephrology",
  title: "Nephrology",
  description: "Gain access to experienced renal specialists for the evaluation and management of kidney conditions, including dialysis and complex nephrological care.",
  image: "/nephrologists.jpg",
  icon: Droplets
}, {
  id: "urology",
  title: "Urology",
  description: "Connect with leading urological expertise across minimally invasive, endoscopic, robotic, and surgical approaches to complex urinary and reproductive conditions.",
  image: "/urology.png",
  icon: Activity
},  {
  id: "andrology",
  title: "Andrology",
  description: "Connect with distinguished expertise in male reproductive and sexual health, offering access to sophisticated diagnostics and highly specialised treatment options.",
  image: "/andrology.jpg",
  icon: Activity
}, {
  id: "colorectal-surgery",
  title: "Colorectal Surgery",
  description: "Access highly focused surgical expertise for colorectal conditions, with contemporary minimally invasive and complex operative approaches.",
  image: "/colorectalsurgery.jpg",
  icon: Scissors
}];

// --- COMPONENT ---
const SpecialitiesSection: React.FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };
  const brandBlue = "#0C3B66";
  return <section className="bg-[#D9EBF5] py-20 lg:py-28 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/20 skew-x-12 blur-xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 text-sm font-semibold mb-4 shadow-sm" style={{
            color: brandBlue
          }}>
              <Activity className="w-4 h-4" />
              Centers of Excellence
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">
              Specialized Care<span style={{
              color: brandBlue
            }}> Across Disciplines</span>
            </h2>

            <p className="text-slate-600 text-lg">
              A comprehensive spectrum of medical and surgical expertise, connecting patients to renowned specialists, advanced treatment pathways, and internationally accredited healthcare institutions across India.
            </p>
          </motion.div>
        </div>

        {/* Responsive Grid Section */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialities.map(item => {
          const Icon = item.icon;
          return <motion.div key={item.id} variants={itemVariants}>
                <Link to={`/specialities/${item.id}`} className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 ease-in-out border border-white/50 hover:border-[#0C3B66]">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title}
                // Reduced duration from 700 to 400 and scale from 110 to 105
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out" />

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

                    <div className="flex items-center text-sm font-semibold pt-4 border-t border-slate-100" style={{
                  color: brandBlue
                }}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>;
        })}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            
          </Link>
        </div>
      </div>
    </section>;
};
export default SpecialitiesSection;
