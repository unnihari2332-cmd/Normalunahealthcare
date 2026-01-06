import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Phone,
  Video,
  Calendar,
  MapPin,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";

// Card Data based on the "Normaluna" image content
const contactCards = [
  {
    icon: Phone,
    title: "Telephone Support",
    description: "Call us 24/7 and our representatives will help you make an appointment that's convenient for you.",
    buttonText: "Read More",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop", // Doctor/Patient
  },
  {
    icon: Video,
    title: "Online Consultation",
    description: "Experience convenient and secure online health consultations from the comfort of your home.",
    buttonText: "Read More",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?w=600&auto=format&fit=crop", // Typing/Laptop
  },
  {
    icon: Calendar,
    title: "Book An Appointment",
    description: "Book your appointment today and take the first step towards better health.",
    buttonText: "Read More",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop", // Brain model/Medical
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* --- MAP BREADCRUMB SECTION --- */}
      {/* Replaces standard HeroBanner with a Map as background */}
      <div className="relative w-full h-[450px] mt-20">
        {/* Google Map Iframe - Location: Zhaoxin Huijin Plaza (from your uploaded image) */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.762928375806!2d114.11656831495786!3d22.53816298519992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f563d767527b%3A0x6644f1535456306e!2sZhaoxin%20Huijin%20Plaza!5e0!3m2!1sen!2scn!4v1679384729123!5m2!1sen!2scn"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale-[20%]"
        ></iframe>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[#1B2A49]/60 pointer-events-none"></div>

        {/* Breadcrumb Text Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-gray-300 text-sm mb-2 pointer-events-auto">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* --- THREE CARDS SECTION --- */}
      <section className="py-20 px-4 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center text-center group"
            >
              {/* Image with Dark Overlay */}
              <div className="w-full h-48 relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Floating Icon */}
                <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#1B2A49] rounded-full flex items-center justify-center border-4 border-white">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 pb-8 px-6 flex flex-col items-center flex-grow">
                <h3 className="text-xl font-bold text-[#1B2A49] mb-3 font-serif">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                <button className="mt-auto px-6 py-2 bg-[#1B2A49] text-white text-sm rounded-full hover:bg-blue-900 transition-colors">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORM & INFO SECTION --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#1B2A49] font-serif mb-2">
                Send Us Your Message!
              </h2>
              <p className="text-gray-500 text-sm">
                We are always ready to help you at any time, let's talk together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-sm">Address Business</h4>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    No 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel, Thousand Lights West, Chennai, Tamil Nadu 600034
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-sm">Contact With Us</h4>
                  <p className="text-gray-500 text-xs mt-1">
                    Call An Appointment: +91-7358746081
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-sm">Email Address</h4>
                  <p className="text-gray-500 text-xs mt-1">
                    info@normaluna.org
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-sm">Working Time</h4>
                  <p className="text-gray-500 text-xs mt-1">
                    24/7 support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-lg">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="*Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
                <input
                  type="email"
                  placeholder="*Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="*Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 text-gray-500">
                  <option>What are your needs?</option>
                  <option>Appointment</option>
                  <option>Consultation</option>
                  <option>Inquiry</option>
                </select>
              </div>

              <textarea
                rows={6}
                placeholder="Message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-[#1B2A49] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-900 transition-colors flex items-center space-x-2"
              >
                <span>Submit Request</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
