import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/normaluna-logo.png";

interface NavItem {
  name: string;
  path: string;
  hasDropdown: boolean;
}

const specialityItems: NavItem[] = [
  { name: "IVF & Gynaecology", path: "/specialities/ivf-obstetrics-gynaecology", hasDropdown: false },
  { name: "Gastroenterology", path: "/specialities/gastroenterology", hasDropdown: false },
  { name: "Oncology", path: "/specialities/oncology", hasDropdown: false },
  { name: "Transplants (Kidney/Liver)", path: "/specialities/transplant-kidney-liver", hasDropdown: false },
  { name: "Orthopaedics", path: "/specialities/orthopaedics", hasDropdown: false },
  { name: "Dental Care", path: "/specialities/dental", hasDropdown: false },
  { name: "Bariatrics", path: "/specialities/bariatrics", hasDropdown: false },
  { name: "Aesthetic Surgery", path: "/specialities/aesthetic-dermatology-plastic", hasDropdown: false },
  { name: "Ophthalmology", path: "/specialities/ophthalmology", hasDropdown: false },
  { name: "Nephrology", path: "/specialities/nephrology", hasDropdown: false },
  { name: "Urology", path: "/specialities/urology", hasDropdown: false },
  { name: "Colorectal Surgery", path: "/specialities/colorectal-surgery", hasDropdown: false },
];

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
        {/* Adjusted Grid: 4 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

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
              Bridging borders, connecting expertise, and transforming medical travel into an experience built around you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors opacity-80 hover:opacity-100">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities - 6x2 Grid */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-6 text-white text-lg">Our Specialities</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {specialityItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="hover:text-white transition-colors opacity-80 hover:opacity-100 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">
                  No. 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel, Thousand Lights West,
                  Nungambakkam, Chennai, Tamil Nadu 600034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <span>+91 7358746061</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <span>info@normaluna.co</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:bg-opacity-90 shadow-lg"
                >
                  <Icon className="w-5 h-5 text-[#0A1F44]" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-xs tracking-wider text-primary-foreground/50 uppercase">
          © {new Date().getFullYear()} Norma Luna Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
