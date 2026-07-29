import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex overflow-hidden rounded-l-xl shadow-2xl">

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center bg-[#25D366] hover:bg-[#1EBE5D]"
      >
        <FaWhatsapp className="text-3xl text-white" />
      </a>

      <a
        href="mailto:info@normalunahealthcare.com?subject=Medical%20Enquiry"
        className="flex h-14 items-center gap-3 bg-[#005B46] px-6 text-white hover:bg-[#004636]"
      >
        <Mail size={20} />
        <span>Send Enquiry</span>
      </a>

    </div>
  );
};
