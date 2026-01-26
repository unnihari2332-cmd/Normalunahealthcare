import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Home,           // Added
  ChevronRight    // Added
} from "lucide-react";
import { Link } from "react-router-dom"; // Added for breadcrumb navigation
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- REUSABLE HERO COMPONENT (Matches About Page Style) ---
const HeroBanner = ({ title, parentPage = "Home" }) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#0B3A66] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full border-2 border-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Breadcrumb Path - EXACT STYLE FROM ABOUT PAGE */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-wider"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <Home size={14} />
            {parentPage}
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-white">{title}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl font-display font-bold tracking-tight text-center"
        >
          {title}
        </motion.h1>
      </div>

      {/* THE CURVE SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[90px]"
        >
          {/* Note: Fill changed to white/background color to match the section below it */}
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff" 
          ></path>
        </svg>
      </div>
    </section>
  );
};

const benefits = [
  "Personalized assistance for your medical journey.",
  "Access to top hospitals and renowned specialists.",
  "Hassle-free coordination of travel and treatment.",
  "Transparent cost estimation and budget-friendly options.",
  "Support with visa, accommodation, and local transport.",
  "Guidance on the best treatment options available.",
];

export const AppointmentForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Added the Hero Banner at the top */}
      <HeroBanner title="Appointment" />

      {/* 2. Existing Form Section */}
      <section id="appointment-form" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-[#0B3A66]">
                Online Appointment
              </h2>
              <p className="text-muted-foreground mb-8">
                Take care of your health and that of your family today!
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name*</label>
                    <Input placeholder="Full Name..." className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Address*</label>
                    <Input placeholder="Your Address..." className="rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone*</label>
                    <Input placeholder="Phone Number..." className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email*</label>
                    <Input placeholder="Email address..." type="email" className="rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Treatment</label>
                    <Select>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select Treatment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Checkup</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="oncology">Oncology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="dental">Dental</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Gender*</label>
                    <Select>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Choose gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Appointment Date</label>
                    <Input type="date" className="rounded-lg" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Date of Birth*</label>
                    <Input type="date" className="rounded-lg" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Note If Any</label>
                  <Textarea placeholder="Write content..." className="rounded-lg min-h-[100px]" />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked)}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    Accept the Terms and Privacy Policy
                  </label>
                </div>

                <Button
                  type="submit"
                  className="bg-[#0B3A66] hover:bg-blue-700 text-white rounded-full px-8 group"
                >
                  Submit Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#0B3A66] rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-semibold text-white mb-6">
                  Benefits If You Schedule An Appointment
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/90"
                    >
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Hospital Room Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
                  alt="Hospital Room"
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
