import { NavItem } from "./NavItem";

interface NavLink {
  name: string;
  path: string;
  hasDropdown?: boolean;
}

interface DesktopNavProps {
  links: NavLink[];
  className?: string;
}

export const DesktopNav = ({ links, className = "" }: DesktopNavProps) => {
  return (
    <nav className={`hidden lg:flex items-center gap-8 ${className}`}>
      {links.map((link) => (
        <NavItem
          key={link.path}
          name={link.name}
          path={link.path}
          hasDropdown={link.hasDropdown}
        />
      ))}
    </nav>
  );
};
