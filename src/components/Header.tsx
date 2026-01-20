import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileMenu } from "./header/MobileMenu";
import { MobileMenuButton } from "./header/MobileMenuButton";
import { Button } from "./ui/button";

// CHANGED: All 'hasDropdown' set to false to remove arrows
const leftLinks = [
  { name: "Home", path: "/", hasDropdown: false },
  { name: "About Us", path: "/about", hasDropdown: false },
  { name: "Specialities", path: "/specialities", hasDropdown: false },
];

// CHANGED: All 'hasDropdown' set to false to remove arrows
const rightLinks = [
  { name: "Services", path: "/services", hasDropdown: false },
  { name: "Testimonials", path: "/testimonials", hasDropdown: false },
  { name: "Contact Us", path: "/contact", hasDropdown: false },
];

const allLinks = [...leftLinks, ...rightLinks];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleAppointmentClick = () => {
    if (location.pathname === "/appointment") {
      const formElement = document.getElementById("appointment-form");
      if (formElement) {
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
      transition={{ duration: 0.5 }}
      // Constant white background styles
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md text-navy py-2" 
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-center lg:gap-12 h-16 lg:h-20">
          
          {/* LEFT NAV */}
          <DesktopNav 
            links={leftLinks} 
            isScrolled={true} 
          />

          {/* CENTER LOGO */}
          <div className="shrink-0">
            <Logo isScrolled={true} />
          </div>

          {/* RIGHT NAV */}
          <div className="hidden lg:flex items-center gap-6">
            <DesktopNav 
              links={rightLinks} 
              isScrolled={true}
            />
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleAppointmentClick}>
              Book an Appointment
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            isScrolled={true}
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
