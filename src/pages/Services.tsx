import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
  Home,
  ChevronRight,
} from "lucide-react";

/* ------------------ DATA: SERVICES ------------------ */
const services = [
 {
  icon: Users,
  title: "Experienced Medical Travel Facilitation",
  description:
    "Seasoned guidance and personalised coordination designed to make every stage of the international healthcare journey seamless and reassuring.",
  image: "/medicalcoordiantor.jpeg",
},
{
  icon: ClipboardList,
  title: "Medical Record Review & Pre-Consultation",
  description:
    "Medical records are carefully coordinated with the appropriate specialists, enabling informed preliminary evaluation before travel.",
  image: "/preconsultation.jpg",
},
{
  icon: Calculator,
  title: "Treatment Planning & Cost Guidance",
  description:
    "Clear treatment pathways and indicative cost estimates are coordinated with selected hospitals, bringing greater clarity to important healthcare decisions.",
  image: "/assitancecost.jpg",
},
{
  icon: FileText,
  title: "Medical Visa Assistance",
  description:
    "Dedicated assistance with medical visa documentation and processing helps simplify the formalities of travelling to India for treatment.",
  image: "/visaapplication.jpg",
},
{
  icon: Plane,
  title: "Air Travel Coordination",
  description:
    "Thoughtful assistance with travel arrangements ensures flight planning aligns seamlessly with consultations, procedures, and recovery timelines.",
  image: "/aeroplane.JPG",
},
{
  icon: Building2,
  title: "Accommodation Arrangements",
  description:
    "Carefully considered accommodation options are arranged around individual preferences, proximity to the hospital, duration of stay, and accompanying family needs.",
  image: "/accomadtion.jpg",
},
{
  icon: Car,
  title: "Local Transportation Coordination",
  description:
    "From airport arrival to hospital visits and scheduled appointments, local transportation is thoughtfully coordinated for comfort and convenience throughout the stay.",
  image: "/taxi.jpg",
},
{
  icon: HeartPulse,
  title: "Post-Treatment Follow-Up Coordination",
  description:
    "Continuity beyond treatment is supported by facilitating follow-up communication with the treating medical team after the patient returns home.",
  image: "/followupcare.jpg",
},
{
  icon: Activity,
  title: "Rehabilitation & Wellness Coordination",
  description:
    "Access to appropriate rehabilitation and wellness support is coordinated where required, complementing recovery beyond the primary course of treatment.",
  image: "/wellness.jpg",
},
{
  icon: Languages,
  title: "Language & Interpreter Assistance",
  description:
    "Professional language assistance can be arranged to enable clear, confident communication throughout consultations and the wider medical journey.",
  image: "/translation.JPG",
},
];

/* ------------------ HERO BANNER ------------------ */
const HeroBanner = ({ title }: { title: string }) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#0B3A66] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full border-2 border-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-wider"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white">
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-white">{title}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-5xl font-bold text-center px-4"
        >
          {title}
        </motion.h1>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[90px]"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
};

/* ------------------ PAGE ------------------ */
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-20">
        <HeroBanner title="The Norma Luna Experience" />
      </div>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="group relative h-[450px] overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-6 shadow-2xl">
                    <h3 className="text-xl font-bold text-center mb-2">
                      {service.title}
                    </h3>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-sm text-center text-gray-500 mb-4">
                          {service.description}
                        </p>
                        <div className="flex justify-center">
                          <IconComponent className="h-6 w-6 text-blue-900/70" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
