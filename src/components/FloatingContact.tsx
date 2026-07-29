import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-0 z-50 flex items-center shadow-2xl">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-14 bg-[#25D366] flex items-center justify-center hover:bg-[#1ebe5d] transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-14 bg-[#0084FF] flex items-center justify-center hover:bg-[#0073e6] transition-all duration-300"
      >
        <FaFacebookMessenger className="text-white text-3xl" />
      </a>

      {/* Send Enquiry */}
      <a
        href="/contact"
        className="bg-[#005B46] hover:bg-[#004737] text-white h-14 px-8 flex items-center text-xl font-medium transition-all duration-300 rounded-l-none"
      >
        Send Enquiry
      </a>

    </div>
  );
};
