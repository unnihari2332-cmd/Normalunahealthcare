import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface NavItemProps {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; path: string }[];
  isScrolled?: boolean;
}

export const NavItem = ({ 
  name, 
  path, 
  hasDropdown = false, 
  dropdownItems, 
  isScrolled = false 
}: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  // Active state: True if exact match OR if we are inside a sub-page of this dropdown
  const isActive = location.pathname === path || 
    (hasDropdown && location.pathname.startsWith(path) && path !== "/");

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={path}
        className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors ${
          isScrolled 
            ? `hover:text-primary ${isActive ? "text-primary" : "text-navy"}` 
            : `hover:text-gold-light ${isActive ? "text-gold-light" : "text-white"}`
        }`}
      >
        {name}
        {hasDropdown && (
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-200 ${
              isHovered ? "rotate-180" : ""
            }`} 
          />
        )}
      </Link>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {hasDropdown && isHovered && dropdownItems && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] z-50"
          >
            {/* Dropdown Card */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 relative overflow-hidden">
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400" />
              
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-left">
                Select a Speciality
              </h4>

              {/* 2-Column Grid Layout */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="group flex items-center gap-2 text-sm normal-case text-gray-600 hover:text-primary transition-colors py-1 text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors flex-shrink-0" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
