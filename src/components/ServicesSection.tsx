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

const services = [
  {
    icon: Users,
    title: "Seasoned Facilitators With Extensive Experience",
    description: "Expert medical travel coordinators ensure a smooth journey. We handle every detail for a stress-free experience.",
    image: null,
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
      
      {/* LAYER 1: Gradient Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, #D9EBF5 0%, rgba(217, 235, 245, 0) 100%)`
        }}
      />

      {/* LAYER 2: Content Container (Full Width) */}
      <div className="relative z-10 w-full h-full px-6 py-16 md:px-12 lg:px-16 xl:px-24 lg:py-24">
        
        {/* FIX: Started max-w container here to wrap BOTH Title and Grid */}
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Services
            </h2>
          </div>

          {/* Services Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="flex flex-col items-start group">
                  <div className="mb-5">
                    <IconComponent 
                      className="w-10 h-10 text-blue-600" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug pr-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          
        </div> {/* FIX: Closed max-w container here */}

      </div>
    </section>
  );
};

export default ServicesSection;
