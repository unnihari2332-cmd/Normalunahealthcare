import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/normaluna-logo.png";

export const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Specialities", path: "/specialities" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
    { name: "Appointment", path: "/appointment" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: Instagram, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-[#0A1F44] text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Link to="/">
              <img
                src={logo}
                alt="Norma Luna Healthcare"
                className="h-12 w-auto mb-4 bg-white border-2 border-white rounded-lg p-1"
              />
            </Link>

            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Compassionate care with advanced medical expertise, focused on your health and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>IVF & Fertility Care</li>
              <li>Obstetrics & Gynecology</li>
              <li>Gastroenterology</li>
              <li>Oncology</li>
              <li>General Medicine</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  No. 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel, Thousand Lights West,
                  Nungambakkam, Chennai, Tamil Nadu 600034
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 7358746061</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@normaluna.co</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                >
                  <Icon className="w-5 h-5 text-[#0A1F44]" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Norma Luna Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
