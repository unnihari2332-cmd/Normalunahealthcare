import { Menu, X } from "lucide-react";

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isScrolled?: boolean;
}

export const MobileMenuButton = ({ isOpen, onClick, isScrolled = false }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`lg:hidden p-2 transition-colors ${
        isScrolled 
          ? "text-navy hover:text-primary" 
          : "text-white hover:text-gold-light"
      }`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};
