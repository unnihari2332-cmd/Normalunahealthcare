import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
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
import consultation from "@/assets/consultation.jpg";

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
    title: "Assistance With Treatment Planning, Scheduling, And Cost Estimation",
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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title="Our Services"
          image={heroImage}
          breadcrumbs={[{ label: "Services" }]}
        />
      </div>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service, index) => {
              // Extract the specific icon component for this service
              const IconComponent = service.icon;

              return (
                <div key={index} className="flex flex-col h-full bg-white group cursor-pointer">
                  {/* Image Section */}
                  <div className="w-full h-56 overflow-hidden mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow items-center text-center px-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Icon Section (Replaced Button) */}
                    <div className="mt-auto mb-8">
                      <div className="p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-[#1B2A49]" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Bottom Line (Left to Right) */}
                  <div className="h-[3px] bg-[#1B2A49] mt-4 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
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
