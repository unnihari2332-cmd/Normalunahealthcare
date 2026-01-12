import { Link } from "react-router-dom";
import normalunaLogo from "@/assets/normaluna-logo.png";

interface LogoProps {
  isScrolled?: boolean;
}

export const Logo = ({ isScrolled = false }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src={normalunaLogo} 
        alt="NormaLuna Health Care" 
        className="h-12 lg:h-16 w-auto"
      />
    </Link>
  );
};
