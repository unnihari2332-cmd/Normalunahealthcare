import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileMenu } from "./header/MobileMenu";
import { MobileMenuButton } from "./header/MobileMenuButton";
import { Button } from "./ui/button";

/* ------------------ TYPES ------------------ */
export interface NavItem {
  name: string;
  path: string;
  hasDropdown: boolean;
  dropdownItems?: NavItem[];
}

/* ------------------ DATA ------------------ */
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

const leftLinks: NavItem[] = [
  { name: "Home", path: "/", hasDropdown: false },
  { name: "About Us", path: "/about", hasDropdown: false },
  {
    name: "Specialities",
    path: "#",
    hasDropdown: true,
    dropdownItems: specialityItems,
  },
];

const rightLinks: NavItem[] = [
  { name: "Services", path: "/services", hasDropdown: false },
  { name: "Testimonials", path: "/testimonials", hasDropdown: false },
  { name: "Contact Us", path: "/contact", hasDropdown: false },
];

const allLinks = [...leftLinks, ...rightLinks];

/* ------------------ COMPONENT ------------------ */

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAppointmentClick = (): void => {
    if (location.pathname === "/appointment") {
      const form = document.getElementById("appointment-form");
      if (form instanceof HTMLElement) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/appointment");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 text-black"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">

          {/* LEFT NAV */}
          <div className="hidden lg:flex items-center gap-8">
            <DesktopNav links={leftLinks} />
          </div>

          {/* LOGO */}
          <div className="flex justify-center">
            <Logo isScrolled={false} />
          </div>

          {/* RIGHT NAV */}
          <div className="hidden lg:flex items-center justify-end gap-6">
            <DesktopNav links={rightLinks} />

            <a
              href="tel:+917358746061"
              className="text-sm font-medium whitespace-nowrap text-black"
              style={{ color: "black" }}
            >
              📞 +91 73587 46061
            </a>

            <Button
              onClick={handleAppointmentClick}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold"
            >
              Book Appointment
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex lg:hidden justify-end">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              isScrolled={false}
            />
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={allLinks}
        onAppointmentClick={handleAppointmentClick}
      />
    </motion.header>
  );
};

export { Header };
