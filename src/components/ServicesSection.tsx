import React from "react";
import {
  Users,
  FileText,
  Plane,
  Building2,
  Car,
  Calculator,
  ClipboardList,
  HeartPulse,
  Activity,
  Languages,
} from "lucide-react";

// Images for the specific cards (Consultation)
import consultation from "@/assets/consultation.jpg";

// --- BACKGROUND IMAGE CONFIGURATION ---
// Ensure this file exists in your 'public' folder
const backgroundImage = "/image-gen-blue-.png"; 

const services = [
  {
    icon: Users,
    title: "Seasoned Facilitators With Extensive Experience",
    description: "Expert medical travel coordinators ensure a smooth journey. We handle every detail for a stress-free experience.",
    image: consultation,
  },
  {
    icon: FileText,
    title: "Handling And Processing Of Visas",
    description: "Hassle-free visa assistance for medical travelers. We streamline paperwork for quick approvals.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600",
  },
  {
    icon: Plane,
    title: "Coordination Of Air Travel Arrangements",
    description: "We arrange flights suited to your schedule and needs. Seamless booking for a smooth travel experience.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600",
  },
  {
    icon: Building2,
    title: "Accommodation Arrangements",
    description: "Stay at trusted hotels or recovery homes. We secure safe, comfortable, and budget-friendly lodging.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
  },
  {
    icon: Car,
    title: "Local Transportation Coordination",
    description: "Reliable transport for airport, hospital, and hotel transfers. Comfort and punctuality at every step.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600",
  },
  {
    icon: Calculator,
    title: "Assistance With Treatment Planning & Cost Estimation",
    description: "We connect you with top hospitals and specialists. Transparent pricing and efficient scheduling.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
  },
  {
    icon: ClipboardList,
    title: "Pre-Consultation And Assessment Of Medical Records",
    description: "Get expert evaluation before your medical journey. We ensure the right specialists review your case.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
  },
  {
    icon: HeartPulse,
    title: "Follow-Up Care After Treatment",
    description: "Continued support for post-treatment recovery. Coordination with doctors for aftercare and consultations.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600",
  },
  {
    icon: Activity,
    title: "Rehabilitation And Wellness Support",
    description: "Access to recovery programs and wellness therapies. We assist in a smooth transition to good health.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
  },
  {
    icon: Languages,
    title: "Provision of Translator Services",
    description: "Language support for seamless communication. Professional translators assist you at every step.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  },
];

export const ServicesSection = () => {
  return (
    <section className="w-full min-h-screen relative font-sans">
      
      {/* LAYER 1: Background Image from PUBLIC folder */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ----- OVERLAY REMOVED HERE ----- */}

      {/* LAYER 2: Content Container (Full Width) */}
      <div className="relative z-10 w-full h-full px-6 py-16 md:px-12 lg:px-16 xl:px-24 lg:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-14">
            <div className="inline-block border-b-[3px] border-blue-500 pb-1 mb-5">
              {/* Lighter blue text for better contrast on dark bg */}
              <span className="text-blue-400 font-bold text-sm tracking-[0.15em] uppercase">
                Department
              </span>
            </div>
            {/* White text */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Healthcare Services
            </h2>
            {/* Light grey text */}
            <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
              We provide end-to-end medical travel facilitation. From your first inquiry to your 
              safe return home, our team manages every detail.
            </p>
          </div>

          {/* Services Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="flex flex-col items-start group">
                  <div className="mb-5">
                    {/* Lighter blue icon */}
                    <IconComponent 
                      className="w-10 h-10 text-blue-400" 
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* White title */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug pr-4">
                    {service.title}
                  </h3>
                  {/* Light grey description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
