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
  className?: string;
}

export const NavItem = ({
  name,
  path,
  hasDropdown = false,
  dropdownItems,
  className = "",
}: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const isActive =
    location.pathname === path ||
    (hasDropdown && location.pathname.startsWith(path) && path !== "/");

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* MAIN LINK */}
      <Link
        to={path}
        className={`
          flex items-center gap-1
          text-sm font-medium tracking-wide uppercase
          text-black
          hover:text-black
          active:text-black
          focus:text-black
          focus-visible:text-black
          visited:text-black
          outline-none
          ${className}
        `}
        style={{ color: "black" }} // 🔒 HARD LOCK
        aria-current={isActive ? "page" : undefined}
      >
        {name}

        {hasDropdown && (
          <ChevronDown
            className={`h-4 w-4 text-black transition-transform duration-200 ${
              isHovered ? "rotate-180" : ""
            }`}
            style={{ color: "black" }}
          />
        )}
      </Link>

      {/* DROPDOWN */}
      <AnimatePresence>
        {hasDropdown && isHovered && dropdownItems && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-[600px] z-50"
          >
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6">

              <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-black">
                Select a Speciality
              </h4>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="
                      group flex items-center gap-2
                      text-sm normal-case
                      text-black
                      hover:text-black
                      active:text-black
                      focus:text-black
                      focus-visible:text-black
                      visited:text-black
                      py-1
                      outline-none
                    "
                    style={{ color: "black" }} // 🔒 HARD LOCK
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
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
