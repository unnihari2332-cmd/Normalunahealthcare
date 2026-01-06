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

// Card Data (Removed buttonText)
const contactCards = [
  {
    icon: Phone,
    title: "Telephone Support",
    description: "Call us 24/7 and our representatives will help you make an appointment that's convenient for you.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop",
  },
  {
    icon: Video,
    title: "Online Consultation",
    description: "Experience convenient and secure online health consultations from the comfort of your home.",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?w=600&auto=format&fit=crop",
  },
  {
    icon: Calendar,
    title: "Book An Appointment",
    description: "Book your appointment today and take the first step towards better health.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* --- MAP SECTION --- */}
      <div className="relative w-full h-[550px] mt-20 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1dU7YVq8_qgpH8BuziwjI5ytT5L0AoKg&ehbc=2E312F&noprof=1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-[calc(100%+60px)] -mt-[60px]"
        ></iframe>
      </div>

      {/* --- THREE CARDS SECTION --- */}
      {/* Removed '-mt-32' so cards sit below the map, not overlapping */}
      <section className="py-20 px-4 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center text-center group h-full"
            >
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

              <div className="pt-12 pb-10 px-6 flex flex-col items-center flex-grow">
                <h3 className="text-xl font-bold text-[#1B2A49] mb-3 font-serif">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
                {/* Removed Read More Button */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORM & INFO SECTION --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-[#1B2A49] font-serif mb-4">
                Send Us Your Message!
              </h2>
              <p className="text-gray-500 text-base">
                We are always ready to help you at any time, let's talk together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-base">Address Business</h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    No 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel, Thousand Lights West, Chennai, Tamil Nadu 600034
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-base">Contact With Us</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Call An Appointment: +91-7358746081
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-base">Email Address</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    info@normaluna.org
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#1B2A49]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1B2A49] text-base">Working Time</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    24/7 support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form (Connected to FormSubmit.io) */}
          <div className="bg-white rounded-lg">
            {/* REPLACE 'your@email.com' WITH YOUR ACTUAL EMAIL ADDRESS */}
            <form 
              action="https://formsubmit.co/your@email.com" 
              method="POST" 
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Submission from Website Contact Form" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="fullName"
                  placeholder="*Full Name"
                  required
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="*Email Address"
                  required
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="*Phone Number"
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
                <select 
                  name="serviceNeeded"
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 text-gray-500"
                >
                  <option value="" disabled selected>What are your needs?</option>
                  <option value="Appointment">Appointment</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Inquiry">Inquiry</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={8}
                placeholder="Message..."
                required
                className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-[#1B2A49] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-blue-900 transition-colors flex items-center space-x-2"
              >
                <span>Submit Request</span>
                <ChevronRight className="w-5 h-5" />
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
