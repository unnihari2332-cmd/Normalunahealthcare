import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronDown, Phone, Calendar, ArrowRight, Stethoscope } from "lucide-react";

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
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden bg-[#0A1F44] border-t border-white/10 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
        >
          <nav className="flex flex-col p-5 gap-3">
            {links.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.hasDropdown) {
                const isSubOpen = openSubMenu === link.name;
                return (
                  <div key={link.name} className="flex flex-col rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                    <button
                      onClick={() => toggleSubMenu(link.name)}
                      className="flex items-center justify-between text-sm font-semibold tracking-wide text-white p-3.5 hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-400" />
                        {link.name}
                      </span>
                      <motion.span
                        animate={{ rotate: isSubOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-blue-300" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isSubOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="bg-slate-900/60 border-t border-white/10 p-3"
                        >
                          <div className="grid grid-cols-2 gap-2">
                            {link.dropdownItems?.map((subItem) => {
                              const isSubActive = location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={onClose}
                                  className={`text-xs font-medium p-2.5 rounded-lg leading-snug transition-all flex items-center gap-1.5 ${
                                    isSubActive
                                      ? "bg-blue-600 text-white font-bold"
                                      : "bg-white/5 text-slate-200 hover:bg-white/15 hover:text-white"
                                  }`}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                  <span className="truncate">{subItem.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                          
                          <Link
                            to="/specialities"
                            onClick={onClose}
                            className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-blue-300 hover:text-white pt-2 border-t border-white/10"
                          >
                            View All Specialities
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={onClose}
                  className={`text-sm font-semibold tracking-wide py-3 px-4 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold"
                      : "text-slate-100 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`} />
                </Link>
              );
            })}

            {/* Quick Contact & Action Buttons */}
            <div className="mt-3 pt-3 border-t border-white/10 space-y-2.5">
              <a
                href="tel:+917358746061"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/15 transition-all"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Us: +91 73587 46061</span>
              </a>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold rounded-xl h-12 shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 text-sm"
                onClick={onAppointmentClick}
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
