import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
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
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Norma Luna Healthcare" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <h3 className="text-lg font-semibold mb-4">NORMA LUNA HEALTHCARE</h3>
            <p className="text-muted-foreground leading-relaxed">
              Norma Luna Healthcare is dedicated to providing compassionate, patient-centered care tailored to your unique needs. Our expert team prioritizes your well-being, ensuring a journey of healing and trust. With advanced treatments and a personal touch, we aim to make a lasting difference in your life. At Norma Luna, your health is our mission, and your care is our promise.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact With Us!</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Address: No. 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel, Thousand Lights West, Nungambakkam, Chennai, Tamil Nadu 600034
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@normaluna.co" className="text-muted-foreground hover:text-primary transition-colors">
                  Support mail: info@normaluna.co
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 flex items-center gap-4 bg-primary/10 rounded-full px-6 py-3 border border-primary/20"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Emergency 24/7</p>
                <p className="font-semibold">+91 7358746061</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Norma Luna Health Care Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-right mt-8"
        >
          <h2 className="font-display text-2xl font-semibold text-primary">
            Norma Luna Health Care
          </h2>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Copyright Reserved to Normaluna, Designed by{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Indiafloats Technologies
            </a>
          </p>
          
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-teal-light transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
