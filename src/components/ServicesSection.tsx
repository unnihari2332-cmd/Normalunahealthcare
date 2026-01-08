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
import heroImage from "@/assets/hero-medical.jpg";

// Data defined outside or passed as props
const services = [
  { icon: Users, title: "Seasoned Facilitators", description: "Expert medical travel coordinators ensure a smooth, stress-free journey." },
  { icon: FileText, title: "Visa Processing", description: "Hassle-free visa assistance and paperwork streamlining." },
  { icon: Plane, title: "Flight Coordination", description: "Seamless air travel booking suited to your schedule and needs." },
  { icon: Building2, title: "Accommodation", description: "Stay at trusted, safe, and comfortable recovery homes or hotels." },
  { icon: Car, title: "Transportation", description: "Reliable airport, hospital, and hotel transfers at every step." },
  { icon: Calculator, title: "Cost Estimation", description: "Transparent pricing and connection with top hospitals and specialists." },
  { icon: ClipboardList, title: "Medical Records", description: "Expert pre-consultation and evaluation of your case by specialists." },
  { icon: HeartPulse, title: "Follow-Up Care", description: "Continued support and coordination for post-treatment recovery." },
  { icon: Activity, title: "Wellness Support", description: "Access to recovery programs and wellness therapies for smooth transition." },
  { icon: Languages, title: "Translator Services", description: "Professional language support for seamless communication." },
];

export const ServicesSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-20 h-full w-full">
        <img
          src={heroImage}
          alt="Medical Services Background"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* White Overlay - Adjust opacity (85-90%) to control text readability */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white/90" />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-block border-b-[3px] border-blue-600 pb-1 mb-5">
              <span className="text-blue-700 font-bold text-sm tracking-[0.15em] uppercase">
                Department
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Healthcare Services
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
              We provide end-to-end medical travel facilitation. From your first inquiry to your 
              safe return home, our team manages every detail.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="flex flex-col items-start group">
                  <div className="mb-4">
                    <IconComponent 
                      className="w-10 h-10 text-blue-700" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
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
