import { useEffect, useState } from "react";
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

const allLinks: NavItem[] = [...leftLinks, ...rightLinks];

/* ------------------ COMPONENT ------------------ */

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const handleAppointmentClick = (): void => {
    if (location.pathname === "/appointment") {
      const form = document.getElementById("appointment-form");
      if (form instanceof HTMLElement) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/appointment");
    }
    closeMobileMenu();
  };

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        fixed top-0 left-0 right-0 z-50
        bg-white
        border-b border-gray-200
        text-black
      "
    >
      <div className="container mx-auto px-6">
        {/* GRID ensures perfect left / center / right alignment */}
        <div className="grid grid-cols-3 items-center h-16">
          
          {/* LEFT NAV */}
          <div className="hidden lg:flex justify-start">
            <DesktopNav links={leftLinks} isScrolled={false} />
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <Logo isScrolled={false} />
          </div>

          {/* RIGHT NAV + CTA */}
          <div className="hidden lg:flex justify-end items-center gap-6">
            <DesktopNav links={rightLinks} isScrolled={false} />

            {/* Phone */}
            <a
              href="tel:+917358746061"
              className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70 transition"
            >
              📞 +91 73587 46061
            </a>

            {/* CTA */}
            <Button
              onClick={handleAppointmentClick}
              className="bg-black text-white px-5 py-2 rounded-full
                         hover:opacity-90 transition"
            >
              Book Appointment
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden justify-end">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              isScrolled={false}
            />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        links={allLinks}
        onAppointmentClick={handleAppointmentClick}
      />
    </motion.header>
  );
};

/* ✅ NAMED EXPORT */
export { Header };
