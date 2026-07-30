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
  {
    name: "Cardiology",
    path: "/specialities/cardiology-cardiac-care",
    hasDropdown: false,
  },
  {
    name: "Neurology",
    path: "/specialities/neurology",
    hasDropdown: false,
  },
  {
    name: "IVF & Gynaecology",
    path: "/specialities/ivf-obstetrics-gynaecology",
    hasDropdown: false,
  },
  {
    name: "Gastroenterology",
    path: "/specialities/gastroenterology",
    hasDropdown: false,
  },
  {
    name: "Oncology",
    path: "/specialities/oncology",
    hasDropdown: false,
  },
  {
    name: "Transplants (Kidney/Liver)",
    path: "/specialities/transplant-kidney-liver",
    hasDropdown: false,
  },
  {
    name: "Orthopaedics",
    path: "/specialities/orthopaedics",
    hasDropdown: false,
  },
  {
    name: "Dental Care",
    path: "/specialities/dental",
    hasDropdown: false,
  },
  {
    name: "Bariatrics",
    path: "/specialities/bariatrics",
    hasDropdown: false,
  },
  {
    name: "Aesthetic Surgery",
    path: "/specialities/aesthetic-dermatology-plastic",
    hasDropdown: false,
  },
  {
    name: "Ophthalmology",
    path: "/specialities/ophthalmology",
    hasDropdown: false,
  },
  {
    name: "Nephrology",
    path: "/specialities/nephrology",
    hasDropdown: false,
  },
  {
    name: "Urology",
    path: "/specialities/urology",
    hasDropdown: false,
  },
  {
    name: "Colorectal Surgery",
    path: "/specialities/colorectal-surgery",
    hasDropdown: false,
  },
  {
    name: "Gender Reassignment Surgery",
    path: "/specialities/gender-reassignment-surgery",
    hasDropdown: false,
  },
  {
    name: "Andrology",
    path: "/specialities/andrology",
    hasDropdown: false,
  },
];

const leftLinks: NavItem[] = [
  { name: "Home", path: "/", hasDropdown: false },
  { name: "About Us", path: "/about", hasDropdown: false },
  { name: "Services", path: "/services", hasDropdown: false },
  {
    name: "Specialities",
    path: "#",
    hasDropdown: true,
    dropdownItems: specialityItems,
  },
];

const rightLinks: NavItem[] = [
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
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8">
        <div className="flex items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo isScrolled={false} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center px-12">
            <DesktopNav links={allLinks} />
          </div>

          {/* Appointment Button */}
          <div className="hidden lg:flex flex-shrink-0">
            <Button
              onClick={handleAppointmentClick}
              className="bg-[#0B1C2D] hover:bg-[#16314d] text-white rounded-full px-8 py-2.5 text-sm font-semibold whitespace-nowrap"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="ml-auto lg:hidden">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              isScrolled={true}
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
