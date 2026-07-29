import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Logo } from "./header/Logo";
import { DesktopNav } from "./header/DesktopNav";
import { MobileMenu } from "./header/MobileMenu";
import { MobileMenuButton } from "./header/MobileMenuButton";
import { Button } from "./ui/button";

/* ------------------ TYPES ------------------ */
export interface NavItem {
  name: string;
  path: string;
  hasDropdown: boolean;
  dropdownItems?: NavItem[];
}

/* ------------------ DATA ------------------ */
const specialityItems: NavItem[] = [
  { name: "IVF & Gynaecology", path: "/specialities/ivf-obstetrics-gynaecology", hasDropdown: false },
  { name: "Gastroenterology", path: "/specialities/gastroenterology", hasDropdown: false },
  { name: "Oncology", path: "/specialities/oncology", hasDropdown: false },
  { name: "Transplants (Kidney/Liver)", path: "/specialities/transplant-kidney-liver", hasDropdown: false },
  { name: "Orthopaedics", path: "/specialities/orthopaedics", hasDropdown: false },
  { name: "Dental Care", path: "/specialities/dental", hasDropdown: false },
  { name: "Bariatrics", path: "/specialities/bariatrics", hasDropdown: false },
  { name: "Aesthetic Surgery", path: "/specialities/aesthetic-dermatology-plastic", hasDropdown: false },
  { name: "Ophthalmology", path: "/specialities/ophthalmology", hasDropdown: false },
  { name: "Nephrology", path: "/specialities/nephrology", hasDropdown: false },
  { name: "Urology", path: "/specialities/urology", hasDropdown: false },
  { name: "Colorectal Surgery", path: "/specialities/colorectal-surgery", hasDropdown: false },
];

const leftLinks: NavItem[] = [
  { name: "Home", path: "/", hasDropdown: false },
  { name: "About Us", path: "/about", hasDropdown: false },
  { name: "Services", path: "/services", hasDropdown: false },
  {
    name: "Specialities",
    path: "#",
    hasDropdown: true,
    dropdownItems: specialityItems,
  },
];

const rightLinks: NavItem[] = [
  { name: "Testimonials", path: "/testimonials", hasDropdown: false },
  { name: "Contact Us", path: "/contact", hasDropdown: false },
];

const allLinks = [...leftLinks, ...rightLinks];

/* ------------------ COMPONENT ------------------ */

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleAppointmentClick = (): void => {
    if (location.pathname === "/appointment") {
      const form = document.getElementById("appointment-form");
      if (form instanceof HTMLElement) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/appointment");
    }
    setIsMobileMenuOpen(false);
  };

  /* Close contact popup on outside click */
  useEffect(() => {
    const close = () => setIsContactOpen(false);
    if (isContactOpen) document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [isContactOpen]);

  return (
    <motion.header
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-10">

            {/* LOGO */}
            <Logo isScrolled={false} />

            {/* DESKTOP LEFT NAV */}
            <div className="hidden lg:flex items-center gap-6">
              <DesktopNav links={leftLinks} />
            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className="hidden lg:flex items-center gap-4">

            <DesktopNav links={rightLinks} />

            <Button
              onClick={handleAppointmentClick}
              className="bg-[#0b1c2d] text-white px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Book Appointment
            </Button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsContactOpen((p) => !p);
              }}
              className="w-10 h-10 rounded-full bg-[#0b1c2d] text-white text-xl font-bold flex items-center justify-center"
              aria-label="Open contact details"
            >
              +
            </button>

          </div>

          {/* MOBILE HEADER */}
          <div className="flex lg:hidden items-center">
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              isScrolled={true}
            />
          </div>

        </div>
      </div>

      {/* CONTACT POPUP */}
      {isContactOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="absolute right-6 top-24 z-50"
        >
          <div className="w-[320px] rounded-2xl bg-[#fdecee] p-6 shadow-xl border">
            <div className="bg-red-500 text-white text-center py-3 rounded-xl font-semibold mb-4">
              Call Us Urgent 24/7
              <div className="text-lg mt-1">+91 73587 46061</div>
            </div>

            <p className="text-sm text-center text-gray-700 mb-4">
              Contact us today and take the first step towards personalized,
              compassionate care at Norma Luna.
            </p>

            <p className="text-xs text-center text-gray-600 leading-relaxed mb-5">
              No 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel,
              <br />
              Thousand Lights West, Nungambakkam,
              <br />
              Chennai, Tamil Nadu 600034
            </p>

            <a
              href="/contact"
              onClick={() => setIsContactOpen(false)}
              className="block text-center bg-red-500 text-white py-2.5 rounded-full text-sm font-semibold"
            >
              Contact Now
            </a>
          </div>
        </motion.div>
      )}

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={allLinks}
        onAppointmentClick={handleAppointmentClick}
      />
    </motion.header>
  );
};

export { Header };
