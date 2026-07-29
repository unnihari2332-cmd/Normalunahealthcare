import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

export const FloatingContactWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center rounded-l-xl overflow-hidden shadow-2xl">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center bg-[#25D366] transition-all duration-300 hover:bg-[#1EBE5D]"
      >
        <FaWhatsapp className="text-3xl text-white transition-transform duration-300 group-hover:scale-110" />
      </a>

      {/* Send Enquiry */}
      <a
        href="mailto:info@normalunahealthcare.com?subject=Medical%20Enquiry"
        aria-label="Send Enquiry"
        className="flex h-14 items-center gap-3 bg-[#005B46] px-7 text-white transition-all duration-300 hover:bg-[#004636]"
      >
        <Mail size={20} />
        <span className="text-lg font-medium">
          Send Enquiry
        </span>
      </a>

    </div>
  );
};
