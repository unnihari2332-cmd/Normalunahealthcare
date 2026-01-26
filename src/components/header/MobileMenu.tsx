import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react"; // Make sure to install lucide-react or use your icon set

/* Updated Interface to match your Header's data structure */
interface NavLink {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: NavLink[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  onAppointmentClick?: () => void;
}

export const MobileMenu = ({ isOpen, onClose, links, onAppointmentClick }: MobileMenuProps) => {
  const location = useLocation();
  // State to track which dropdown is currently open (if any)
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0b1c2d] border-t border-white/10 overflow-hidden"
        >
          <nav className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.hasDropdown ? (
                  <>
                    {/* Trigger for the dropdown */}
                    <button
                      onClick={() => toggleSubMenu(link.name)}
                      className="flex items-center justify-between text-sm font-medium tracking-wide uppercase text-white py-2"
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: openSubMenu === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>

                    {/* The actual dropdown items */}
                    <AnimatePresence>
                      {openSubMenu === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col pl-4 gap-3 overflow-hidden"
                        >
                          {link.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={onClose}
                              className={`text-xs font-medium uppercase py-1 ${
                                location.pathname === subItem.path
                                  ? "text-gold-light"
                                  : "text-white/70"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  /* Standard Link */
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`text-sm font-medium tracking-wide uppercase py-2 ${
                      location.pathname === link.path
                        ? "text-gold-light"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Button
              size="sm"
              className="bg-red-500 hover:bg-red-600 text-white mt-2 w-full rounded-full"
              onClick={onAppointmentClick}
            >
              Book an Appointment
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
