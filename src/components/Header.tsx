import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Specialities", path: "/specialities" },
];

const rightLinks = [
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact Us", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLinks = (links: typeof leftLinks) =>
    links.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`relative font-medium transition-colors hover:text-primary ${
          location.pathname === link.path
            ? "text-primary"
            : "text-foreground"
        }`}
      >
        {link.name}
        {location.pathname === link.path && (
          <motion.div
            layoutId="activeNav"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          />
        )}
      </Link>
    ));

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LEFT NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {renderLinks(leftLinks)}
          </nav>

          {/* CENTER LOGO */}
          <Link to="/" className="flex flex-col items-center text-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <div className="font-display text-2xl font-bold leading-none">
              <span className="text-primary">NORMA</span>
              <span className="text-gold">LUNA</span>
              <div className="text-xs tracking-widest text-muted-foreground mt-1">
                HEALTH CARE
              </div>
            </div>
          </Link>

          {/* RIGHT NAV */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {renderLinks(rightLinks)}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 ml-auto"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t"
          >
            <nav className="flex flex-col p-6 gap-4">
              {[...leftLinks, ...rightLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
