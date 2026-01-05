import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="font-display text-xl font-bold leading-none">
        <span className="text-white">NORMA</span>
        <span className="text-gold-light">LUNA</span>
        <div className="text-[10px] tracking-[0.2em] text-white/70 mt-0.5">
          HEALTH CARE
        </div>
      </div>
    </Link>
  );
};
