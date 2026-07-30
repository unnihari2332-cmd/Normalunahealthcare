import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";

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

      {/* --- FORM & INFO SECTION --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-[#1B2A49] font-serif mb-4">
                Begin the Conversation
              </h2>
              <p className="text-gray-500 text-base">
                Your journey begins with a conversation—connect with us and discover the possibilities for your healthcare journey in India.
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
                  <h4 className="font-bold text-[#1B2A49] text-base">Contact Us</h4>
                  <p className="text-gray-500 text-sm mt-2">
                  +91-7358746061
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
                    info@normalunahealthcare.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">

                
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
              <input type="hidden" name="_subject" value="New Appointment Submission from Website" />
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
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="*Phone Number"
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
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50"
                />
                <select
                  name="gender"
                  required
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 text-gray-500"
                >
                  <option value="" disabled selected>*Choose gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select 
                  name="treatment"
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 text-gray-500"
                >
                  <option value="" disabled selected>Select Treatment</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Dental">Dental</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="ENT">ENT</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Urology">Urology</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                </select>
                <input
                  type="date"
                  name="dob"
                  required
                  className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 text-gray-500"
                  title="Date of Birth"
                />
              </div>

              <textarea
                name="message"
                rows={6}
                placeholder="Note If Any..."
                className="w-full px-5 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1B2A49] text-sm bg-gray-50/50 resize-none"
              ></textarea>


              <button
                type="submit"
                className="bg-[#1B2A49] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-blue-900 transition-colors flex items-center space-x-2"
              >
                <span>Submit Appointment</span>
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
