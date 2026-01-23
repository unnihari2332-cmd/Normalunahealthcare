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

const BRAND_BLUE = "#0C3B66";

const services = [
  {
    icon: Users,
    title: "Seasoned Facilitators With Extensive Experience",
    description:
      "Expert medical travel coordinators ensure a smooth journey. We handle every detail for a stress-free experience.",
  },
  {
    icon: FileText,
    title: "Handling And Processing Of Visas",
    description:
      "Hassle-free visa assistance for medical travelers. We streamline paperwork for quick approvals.",
  },
  {
    icon: Plane,
    title: "Coordination Of Air Travel Arrangements",
    description:
      "We arrange flights suited to your schedule and needs. Seamless booking for a smooth travel experience.",
  },
  {
    icon: Building2,
    title: "Accommodation Arrangements",
    description:
      "Stay at trusted hotels or recovery homes. We secure safe, comfortable, and budget-friendly lodging.",
  },
  {
    icon: Car,
    title: "Local Transportation Coordination",
    description:
      "Reliable transport for airport, hospital, and hotel transfers. Comfort and punctuality at every step.",
  },
  {
    icon: Calculator,
    title: "Assistance With Treatment Planning & Cost Estimation",
    description:
      "We connect you with top hospitals and specialists. Transparent pricing and efficient scheduling.",
  },
  {
    icon: ClipboardList,
    title: "Pre-Consultation And Assessment Of Medical Records",
    description:
      "Get expert evaluation before your medical journey. We ensure the right specialists review your case.",
  },
  {
    icon: HeartPulse,
    title: "Follow-Up Care After Treatment",
    description:
      "Continued support for post-treatment recovery. Coordination with doctors for aftercare and consultations.",
  },
  {
    icon: Activity,
    title: "Rehabilitation And Wellness Support",
    description:
      "Access to recovery programs and wellness therapies. We assist in a smooth transition to good health.",
  },
  {
    icon: Languages,
    title: "Provision of Translator Services",
    description:
      "Language support for seamless communication. Professional translators assist you at every step.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="w-full min-h-screen relative font-sans">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #D9EBF5 0%, rgba(217, 235, 245, 0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full px-6 py-16 md:px-12 lg:px-16 xl:px-24 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Services
            </h2>
            <div
              className="w-24 h-1.5 mt-4 rounded-full"
              style={{ backgroundColor: BRAND_BLUE }}
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div key={index} className="flex flex-col items-start">
                  {/* Icon — FIXED STYLE */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    <IconComponent
                      className="w-7 h-7 text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug pr-4">
                    {service.title}
                  </h3>

                  {/* Description */}
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
