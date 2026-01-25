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

/* ------------------ IMAGES ------------------ */
import heroImage from "/Bg-hero-page.png"; // (kept if used elsewhere)
import medicalCoordinator from "@/assets/medicalcoordiantor.jpeg";
import visaApplication from "@/assets/visaapplication.jpg";
import aeroplane from "@/assets/aeroplane.JPG";
import accommodation from "@/assets/accomadtion.jpg";
import taxi from "@/assets/taxi.jpg";
import assistanceCost from "@/assets/assitancecost.jpg";
import preConsultation from "@/assets/preconsultation.jpg";
import followUpCare from "@/assets/followupcare.jpg";
import wellness from "@/assets/wellness.jpg";
import translation from "@/assets/translation.JPG";

/* ------------------ DATA: SERVICES ------------------ */
const services = [
  {
    icon: Users,
    title: "Seasoned Facilitators With Extensive Experience",
    description:
      "Expert medical travel coordinators ensure a smooth journey. We handle every detail for a stress-free experience.",
    image: medicalCoordinator,
  },
  {
    icon: FileText,
    title: "Handling And Processing Of Visas",
    description:
      "Hassle-free visa assistance for medical travelers. We streamline paperwork for quick approvals.",
    image: visaApplication,
  },
  {
    icon: Plane,
    title: "Coordination Of Air Travel Arrangements",
    description:
      "We arrange flights suited to your schedule and needs. Seamless booking for a smooth travel experience.",
    image: aeroplane,
  },
  {
    icon: Building2,
    title: "Accommodation Arrangements",
    description:
      "Stay at trusted hotels or recovery homes. We secure safe, comfortable, and budget-friendly lodging.",
    image: accommodation,
  },
  {
    icon: Car,
    title: "Local Transportation Coordination",
    description:
      "Reliable transport for airport, hospital, and hotel transfers. Comfort and punctuality at every step.",
    image: taxi,
  },
  {
    icon: Calculator,
    title: "Assistance With Treatment Planning & Cost Estimation",
    description:
      "We connect you with top hospitals and specialists. Transparent pricing and efficient scheduling.",
    image: assistanceCost,
  },
  {
    icon: ClipboardList,
    title: "Pre-Consultation And Assessment Of Medical Records",
    description:
      "Get expert evaluation before your medical journey. We ensure the right specialists review your case.",
    image: preConsultation,
  },
  {
    icon: HeartPulse,
    title: "Follow-Up Care After Treatment",
    description:
      "Continued support for post-treatment recovery. Coordination with doctors for aftercare and consultations.",
    image: followUpCare,
  },
  {
    icon: Activity,
    title: "Rehabilitation And Wellness Support",
    description:
      "Access to recovery programs and wellness therapies. We assist in a smooth transition to good health.",
    image: wellness,
  },
  {
    icon: Languages,
    title: "Provision of Translator Services",
    description:
      "Language support for seamless communication. Professional translators assist you at every step.",
    image: translation,
  },
];

/* ------------------ HERO BANNER ------------------ */
const HeroBanner = ({ title }: { title: string }) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#0B3A66] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full border-2 border-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-wider"
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-white">{title}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-5xl font-display font-bold tracking-tight text-center px-4"
        >
          {title}
        </motion.h1>
      </div>

      {/* Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[90px]"
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
        <HeroBanner title="Our Services" />
      </div>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="group relative h-[450px] w-full overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

                  {/* Content Box */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white p-6 shadow-2xl transition-all duration-500">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>

                    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr] group-hover:mt-2">
                      <div className="overflow-hidden transform scale-95 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 delay-75">
                        <p className="mb-4 text-center text-sm leading-relaxed text-gray-500">
                          {service.description}
                        </p>

                        <div className="flex flex-col items-center justify-center space-y-4 pt-2">
                          <div className="h-px w-3/4 bg-gray-200" />
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
