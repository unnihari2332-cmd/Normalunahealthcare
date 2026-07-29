import React from "react";
import {
  Users,
  FileText,
  Calculator,
  Building2,
  Plane,
  Hotel,
  Car,
  HeartPulse,
  Activity,
  Languages,
} from "lucide-react";

const BRAND_BLUE = "#0C3B66";

const services = [
  {
  icon: Users,
  title: "Experienced Medical Travel Facilitation",
  description:
    "Seasoned guidance and personalised coordination designed to make every stage of the international healthcare journey seamless and reassuring.",
},
{
  icon: FileText,
  title: "Medical Record Review & Pre-Consultation",
  description:
    "Medical records are carefully coordinated with the appropriate specialists, enabling informed preliminary evaluation before travel.",
},
{
  icon: Calculator,
  title: "Treatment Planning & Cost Guidance",
  description:
    "Clear treatment pathways and indicative cost estimates are coordinated with selected hospitals, bringing greater clarity to important healthcare decisions.",
},
{
  icon: Building2,
  title: "Medical Visa Assistance",
  description:
    "Dedicated assistance with medical visa documentation and processing helps simplify the formalities of travelling to India for treatment.",
},
{
  icon: Plane,
  title: "Air Travel Coordination",
  description:
    "Thoughtful assistance with travel arrangements ensures flight planning aligns seamlessly with consultations, procedures, and recovery timelines.",
},
{
  icon: Hotel,
  title: "Accommodation Arrangements",
  description:
    "Carefully considered accommodation options are arranged around individual preferences, proximity to the hospital, duration of stay, and accompanying family needs.",
},
{
  icon: Car,
  title: "Local Transportation Coordination",
  description:
    "From airport arrival to hospital visits and scheduled appointments, local transportation is thoughtfully coordinated for comfort and convenience throughout the stay.",
},
{
  icon: HeartPulse,
  title: "Post-Treatment Follow-Up Coordination",
  description:
    "Continuity beyond treatment is supported by facilitating follow-up communication with the treating medical team after the patient returns home.",
},
{
  icon: Activity,
  title: "Rehabilitation & Wellness Coordination",
  description:
    "Access to appropriate rehabilitation and wellness support is coordinated where required, complementing recovery beyond the primary course of treatment.",
},
{
  icon: Languages,
  title: "Language & Interpreter Assistance",
  description:
    "Professional language assistance can be arranged to enable clear, confident communication throughout consultations and the wider medical journey.",
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
