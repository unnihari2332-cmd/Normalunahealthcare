import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-navy border-t border-white/10"
        >
          <nav className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`text-sm font-medium tracking-wide uppercase ${
                  location.pathname === link.path
                    ? "text-gold-light"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
