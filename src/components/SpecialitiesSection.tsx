import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';

// --- DATA (You can move this to a separate file later if you want) ---
import consultation from "@/assets/consultation.jpg"; // Ensure this image exists or change path

export const specialities = [
  {
    id: "ivf-obstetrics-gynaecology",
    title: "IVF, Obstetrics & Gynaecology",
    description: "Complete infertility care with state-of-the-art IVF treatment. Our fertility specialists offer comprehensive support.",
    image: consultation, 
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Cutting edge techniques to treat disorders that affect the esophagus, stomach, small intestine, and colon.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600",
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Oncology specialists harness the most advanced cancer care, multidisciplinary expertise, chemotherapy and targeted therapies.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
  },
  {
    id: "transplant-kidney-liver",
    title: "Transplant (Kidney & Liver)",
    description: "We specialize in kidney, liver and heart transplant surgeries with exceptional care and post-operative support.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600",
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    description: "Handle spine & joint problem through latest orthopedic technology including joint replacements and fracture treatments.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
  },
  {
    id: "dental",
    title: "Dental",
    description: "Your smile is in expert hands. We offer dental implants to orthodontics with personalized dental solutions.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600",
  },
  {
    id: "bariatrics",
    title: "Bariatrics",
    description: "Our bariatric surgery team provides innovative weight loss solutions. From sleeve gastrectomy to gastric bypass.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
  },
  {
    id: "aesthetic-dermatology-plastic",
    title: "Aesthetic Dermatology & Plastic",
    description: "Achieve your beauty goals with expert aesthetic dermatology and plastic surgery expertise.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600",
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "Our eye specialists are equipped with the latest technology for world-class vision care, from LASIK to cataract surgery.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600",
  },
  {
    id: "nephrology",
    title: "Nephrology",
    description: "Comprehensive kidney care using advanced diagnostics. From chronic kidney management to dialysis solutions.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600",
  },
  {
    id: "urology",
    title: "Urology",
    description: "Expert care for kidney, bladder, and reproductive health using minimally invasive surgery techniques.",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600",
  },
  {
    id: "colorectal-surgery",
    title: "Colorectal Surgery",
    description: "Specialized colorectal surgeries handled by experienced surgeons to ensure patient comfort and fast recovery.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600",
  },
];

// --- COMPONENT ---

const SpecialitiesSection: React.FC = () => {
  return (
    <section className="bg-[#D9EBF5] py-16 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- Left Column: Content & Featured Image --- */}
          <div className="flex flex-col justify-center space-y-8 sticky top-10 h-fit">
            
            {/* Featured Image Block */}
            <div className="relative overflow-hidden rounded-[40px] shadow-lg">
              <img 
                src={consultation} 
                alt="Medical Consultation" 
                className="w-full h-64 md:h-80 object-cover"
              />
              {/* Decorative white curve */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-tl-[100px]" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <span className="text-2xl">⚡</span>
                <span className="uppercase tracking-wide text-sm">We Provide the Best Service for your Health</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
                Our Practice Areas and Expertise
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                The healthcare arena there was a felt need of developing new as well as upgrading the existing functioning and processes. We provide comprehensive care tailored to your specific needs.
              </p>

              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg w-fit"
              >
                View All Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* --- Right Column: Scrollable List --- */}
          <div className="h-[800px] overflow-y-auto pr-2 custom-scrollbar space-y-6">
            {specialities.map((item) => (
              <div 
                key={item.id} 
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[30px] flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-all duration-300 border border-white"
              >
                {/* Circle Image */}
                <div className="shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-3">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <Link 
                    to={`/speciality/${item.id}`} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors mt-2 group"
                  >
                    Read More 
                    <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Icon Button (Visual Only) */}
                <div className="shrink-0 hidden md:flex">
                  <Link 
                    to={`/speciality/${item.id}`}
                    className="w-14 h-14 bg-[#0F172A] rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
