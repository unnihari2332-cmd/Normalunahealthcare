import { NavItem } from "./NavItem";

export interface NavLink {
  name: string;
  path: string;
  hasDropdown?: boolean;
  // Added optional dropdownItems property
  dropdownItems?: { name: string; path: string }[];
}

export interface DesktopNavProps {
  links: NavLink[];
  className?: string;
  isScrolled?: boolean;
}

export const DesktopNav = ({ links, className = "", isScrolled = false }: DesktopNavProps) => {
  return (
    <nav className={`hidden lg:flex items-center gap-8 ${className}`}>
      {links.map((link) => (
        <NavItem
          key={link.path}
          name={link.name}
          path={link.path}
          hasDropdown={link.hasDropdown}
          dropdownItems={link.dropdownItems} // Pass the items here
          isScrolled={isScrolled}
        />
      ))}
    </nav>
  );
};
