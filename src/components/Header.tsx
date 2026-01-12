import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileMenu } from "./header/MobileMenu";
import { MobileMenuButton } from "./header/MobileMenuButton";

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

  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle Scroll Effect
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
          ? "bg-white shadow-md text-navy py-2" // Scrolled State
          : "bg-transparent text-white py-4"    // Top (Hero) State
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LEFT NAV */}
          {/* We pass the scrolled state in case you need specific hover colors to change */}
          <DesktopNav 
            links={leftLinks} 
            isScrolled={isScrolled} 
          />

          {/* CENTER LOGO */}
          {/* Positioned absolutely to ensure it stays center regardless of left/right link lengths */}
          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* RIGHT NAV */}
          <DesktopNav 
            links={rightLinks} 
            className="ml-auto" 
            isScrolled={isScrolled}
          />

          {/* MOBILE MENU BUTTON */}
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            isScrolled={isScrolled} // Pass this to change button color (white vs dark)
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        links={allLinks}
      />
    </motion.header>
  );
};
