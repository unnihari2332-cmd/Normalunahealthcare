import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md text-navy py-2" 
          : "bg-transparent text-white py-4"    
      }`}
    >
      <div className="container mx-auto px-4">
        {/* UPDATED FLEX CONTAINER:
           1. Added 'lg:justify-center' to center everything on desktop.
           2. Added 'lg:gap-12' to control space between Navs and Logo.
           3. Kept 'justify-between' for Mobile view.
        */}
        <div className="flex items-center justify-between lg:justify-center lg:gap-12 h-16 lg:h-20">
          
          {/* LEFT NAV */}
          <DesktopNav 
            links={leftLinks} 
            isScrolled={isScrolled} 
          />

          {/* CENTER LOGO */}
          {/* REMOVED: lg:absolute lg:left-1/2 lg:-translate-x-1/2 */}
          {/* This allows the logo to sit naturally between the navs */}
          <div className="shrink-0">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* RIGHT NAV */}
          <div className="hidden lg:flex items-center gap-6">
            <DesktopNav 
              links={rightLinks} 
              isScrolled={isScrolled}
            />
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleAppointmentClick}>
              Book an Appointment
            </Button>
          </div>

          {/* MOBILE MENU BUTTON (Kept absolute or auto-positioned by justify-between on mobile) */}
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
