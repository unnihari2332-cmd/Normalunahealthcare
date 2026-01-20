import { useState } from "react"; // Removed useEffect since we don't need scroll listener
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileMenu } from "./header/MobileMenu";
import { MobileMenuButton } from "./header/MobileMenuButton";
import { Button } from "./ui/button";

const leftLinks = [
  { name: "Home", path: "/", hasDropdown: false },
  { name: "About Us", path: "/about", hasDropdown: true },
  { name: "Specialities", path: "/specialities", hasDropdown: true },
];

const rightLinks = [
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Testimonials", path: "/testimonials", hasDropdown: false },
  { name: "Contact Us", path: "/contact", hasDropdown: false },
];

const allLinks = [...leftLinks, ...rightLinks];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Removed isScrolled state and useEffect

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
      // Updated className: Removed the ternary operator and set constant styles
      // Used the "scrolled" styles (bg-white, shadow-md, text-navy) as the permanent look
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md text-navy py-2" 
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-center lg:gap-12 h-16 lg:h-20">
          
          {/* LEFT NAV */}
          {/* Passed true to isScrolled to ensure text is always dark/visible on white bg */}
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
