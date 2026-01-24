import { NavItem } from "./NavItem";

export interface NavLink {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; path: string }[];
}

export interface DesktopNavProps {
  links: NavLink[];
  className?: string;
  isScrolled?: boolean;
}

export const DesktopNav = ({
  links,
  className = "",
  isScrolled = false,
}: DesktopNavProps) => {
  return (
    <nav
      className={`
        hidden lg:flex items-center gap-8
        text-black
        ${className}
      `}
      style={{ color: "black" }} // 🔒 HARD LOCK
    >
      {links.map((link) => (
        <NavItem
          key={link.path}
          name={link.name}
          path={link.path}
          hasDropdown={link.hasDropdown}
          dropdownItems={link.dropdownItems}
          isScrolled={false} // ❌ DO NOT allow scroll-based color change
          className="!text-black" // 🔒 FORCE BLACK INTO NavItem
        />
      ))}
    </nav>
  );
};
