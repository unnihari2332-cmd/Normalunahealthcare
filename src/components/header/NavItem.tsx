import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export interface NavItemProps {
  name: string;
  path: string;
  hasDropdown?: boolean;
  isScrolled?: boolean;
}

export const NavItem = ({ name, path, hasDropdown = false, isScrolled = false }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors ${
        isScrolled 
          ? `hover:text-primary ${isActive ? "text-primary" : "text-navy"}` 
          : `hover:text-gold-light ${isActive ? "text-gold-light" : "text-white"}`
      }`}
    >
      {name}
      {hasDropdown && <ChevronDown className="h-4 w-4" />}
    </Link>
  );
};
