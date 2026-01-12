import { Link } from "react-router-dom";

interface LogoProps {
  isScrolled?: boolean;
}

export const Logo = ({ isScrolled = false }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src={isScrolled ? "/image-gen-blue-.png" : "/image-gen-white-.png"} 
        alt="NormaLuna Health Care" 
        className="h-12 lg:h-16 w-auto"
      />
    </Link>
  );
};
