import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp, Bell, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/normaluna-logo.png";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Specialities", path: "/specialities" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact Us", path: "/contact" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1f50] text-white relative overflow-hidden font-sans">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-16 pb-6 relative z-10">
        
        {/* --- Top Floating Section: Newsletter --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2a3066] rounded-full p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 mx-auto w-full shadow-xl"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Important Updates Waiting For You</h3>
              <p className="text-sm text-gray-300">Subscribe for the latest updates on Norma Luna Healthcare.</p>
            </div>
          </div>

          <div className="flex w-full md:w-auto bg-white rounded-full p-1 pl-4 items-center">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none flex-grow text-sm w-full md:w-64"
            />
            <button className="bg-[#1a1f50] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-900 transition-colors">
              Subscribe Now
            </button>
          </div>
        </motion.div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand Info (LEFT SIDE) */}
          <div className="space-y-6 text-left">
            {/* Logo Image and Text Side-by-Side */}
            <div className="flex items-center gap-3 justify-start">
               {/* Filters removed here so the logo appears in its original colors */}
               <img 
                 src={logo} 
                 alt="Norma Luna Healthcare" 
                 className="h-12 w-auto" 
               />
               <h3 className="text-lg font-bold tracking-wide uppercase leading-tight">
                 NORMA LUNA<br/>HEALTHCARE
               </h3>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed text-left">
              Norma Luna Healthcare is dedicated to providing compassionate, patient-centered care tailored to your unique needs. Our expert team prioritizes your well-being, ensuring a journey of healing and trust.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2 justify-start">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a key={index} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a1f50] transition-all text-white">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (CENTER) */}
          <div className="lg:pl-10 text-left">
            <h3 className="font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (RIGHT) */}
          <div className="text-left">
            <h3 className="font-semibold text-xl mb-6">Contact With Us!</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  No. 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel, Thousand Lights West, Nungambakkam, Chennai, Tamil Nadu 600034
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:info@normaluna.co" className="text-gray-300 text-sm hover:text-white transition-colors">
                  info@normaluna.co
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center animate-pulse">
                    <Phone className="w-4 h-4 text-white" />
                 </div>
                 <div>
                    <p className="text-xs text-gray-400">Emergency 24/7</p>
                    <p className="text-white font-semibold tracking-wide">+91 7358746061</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            © 2025 Copyright Reserved to Normaluna, Designed by{" "}
            <a href="#" className="text-white font-medium hover:underline">
              Indiafloats Technologies
            </a>
          </p>
          
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1a1f50] text-white transition-all ml-auto md:ml-0"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
