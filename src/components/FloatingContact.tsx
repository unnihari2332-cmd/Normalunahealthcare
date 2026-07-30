import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex overflow-hidden rounded-full shadow-2xl border border-white/20">

      <a
        href="https://wa.me/917358746061"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center bg-[#25D366] hover:bg-[#1EBE5D] transition-colors"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl text-white" />
      </a>

      <a
        href="mailto:info@normalunahealthcare.com?subject=Medical%20Enquiry"
        className="flex h-12 sm:h-14 items-center gap-2 sm:gap-3 bg-[#0C3B66] hover:bg-[#072440] px-4 sm:px-6 text-white text-xs sm:text-sm font-semibold transition-colors"
      >
        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden xs:inline sm:inline">Enquire Now</span>
      </a>

    </div>
  );
};
