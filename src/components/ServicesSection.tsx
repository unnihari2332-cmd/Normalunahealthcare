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
// import consultation from "@/assets/consultation.jpg"; 
// Note: Ensure the import above is correct or use a placeholder if the file is missing during dev

const services = [
  {
    icon: Users,
    title: "Seasoned Facilitators With Extensive Experience",
    description: "Expert medical travel coordinators ensure a smooth journey. We handle every detail for a stress-free experience.",
    image: null, // Placeholder if needed
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
      {/* Hex #D9EBF5 is RGB(217, 235, 245).
          Gradient goes from opacity 1 (100%) at top to opacity 0 (0%) at bottom.
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, #D9EBF5 0%, rgba(217, 235, 245, 0) 100%)`
        }}
      />

      {/* LAYER 2: Content Container (Full Width) */}
      <div className="relative z-10 w-full h-full px-6 py-16 md:px-12 lg:px-16 xl:px-24 lg:py-24">
        <div className="max-w-7xl mx-auto">
          
            {/* Switched to dark text for contrast against light background */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
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
                    {/* Icon color darkened to blue-600 */}
                    <IconComponent 
                      className="w-10 h-10 text-blue-600" 
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Title color darkened to gray-900 */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug pr-4">
                    {service.title}
                  </h3>
                  {/* Description color darkened to slate-600 */}
                  <p className="text-sm text-slate-600 leading-relaxed">
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
