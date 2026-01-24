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

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  /* Detect scroll */
  useEffect(() => {
    const onScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileMenuClose = (): void => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleAppointmentClick = (): void => {
    if (location.pathname === "/appointment") {
      const formElement = document.getElementById("appointment-form");
      if (formElement instanceof HTMLElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/appointment");
    }
    handleMobileMenuClose();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white text-navy
        ${isScrolled ? "shadow-lg py-1" : "shadow-md py-2"}
        transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between lg:justify-center lg:gap-12
            ${isScrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"}
            transition-all duration-300`}
        >
          {/* LEFT NAV */}
          <DesktopNav links={leftLinks} isScrolled={isScrolled} />

          {/* LOGO */}
          <div className="shrink-0">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* RIGHT NAV + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <DesktopNav links={rightLinks} isScrolled={isScrolled} />

            {/* Call CTA */}
            <a
              href="tel:+917358746061"
              aria-label="Call Norma Luna Healthcare"
              className="hidden xl:flex items-center gap-2 text-sm font-semibold text-navy hover:text-primary transition-colors"
            >
              📞 +91 73587 46061
            </a>

            {/* Appointment CTA */}
            <Button
              onClick={handleAppointmentClick}
              className={`font-bold px-6 transition-all duration-300
                ${isScrolled ? "py-3" : "py-4"}
                bg-primary hover:bg-primary/90 text-white
                shadow-lg shadow-primary/30 hover:shadow-primary/50
                hover:scale-105`}
            >
              Book Appointment
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            isScrolled={isScrolled}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        links={allLinks}
        onAppointmentClick={handleAppointmentClick}
      />
    </motion.header>
  );
};

export default Header;
