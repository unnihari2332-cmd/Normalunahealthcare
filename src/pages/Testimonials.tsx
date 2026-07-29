import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Star, 
  MapPin, 
  Quote, 
  Heart, 
  Home, 
  ChevronRight 
} from 'lucide-react';

// --- COMPONENT: HERO BANNER ---
// Updated to match the Services Page style with #0B3A66 background
const HeroBanner = ({ title }: { title: string }) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#0B3A66] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full border-2 border-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Breadcrumb Path */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-wider"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-white">{title}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-5xl font-display font-bold tracking-tight text-center px-4"
        >
          {title}
        </motion.h1>
      </div>

      {/* THE CURVE */}
      {/* fill="#ffffff" matches the bg-white of the page content */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[90px]"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

const testimonials = [
 {
  name: "Sarah Mitchell",
  location: "Manchester, United Kingdom",
  treatment: "Full-Mouth Dental Rehabilitation",
  content: "I knew I needed extensive dental work, but every time I looked at the cost in the UK, I put it off again. Eventually I started researching treatment in India. There were so many clinics and packages online that I honestly had no idea who to trust. What I liked about Norma Luna was that they didn’t simply send me a price and ask me to book. My dental records and scans were shared for review, I received a proposed treatment plan, and I had the opportunity to understand what was being recommended before arranging the trip. The treatment itself was excellent, but what surprised me most was how easy they made everything around it. My appointments worked around my stay, transport was arranged when I needed it, and I always knew who to call. I went to India because the treatment was financially realistic for me. I would happily recommend Norma Luna to friends and family because of how well I was looked after throughout the journey.",
  rating: 5
},
{
  name: "Farah Al-Mansouri",
  location: "Muscat, Oman",
  treatment: "IVF & Reproductive Medicine",
  content: "By the time I contacted Norma Luna, I was tired—not only physically, but emotionally and mentally. We had already been through fertility treatment and I did not want another generic consultation. I wanted someone to look at my history properly and tell me what options were genuinely worth considering. Norma Luna arranged for our previous reports to be reviewed by a fertility specialist in India before we travelled. That made the decision much easier. IVF is an intensely private experience, and I appreciated that communication was always discreet and never intrusive. I am still on my fertility journey, so mine is not a story with a perfect ending written yet. But for the first time in quite a while, my husband and I feel that we understand our options and have a clear way forward. Sometimes that clarity itself means a great deal.",
  rating: 5
},
{
  name: "Amina Njoroge",
  location: "Nairobi, Kenya",
  treatment: "Oncology",
  content: "When you are dealing with cancer, searching through hospitals, specialists and treatment options in another country is the last thing you want to be doing. My family wanted another oncology opinion after we received different recommendations about how my treatment should proceed. Norma Luna helped get my reports, scans and pathology information to the appropriate specialists in India. What stayed with me most was the honesty. If an answer had to come from the hospital, they said so. If something could not be confirmed immediately, they did not pretend otherwise. I never felt that anyone was trying to 'sell' me treatment. I am continuing my care, and there is still a road ahead of me. But having clarity about my options—and knowing there was someone helping my family navigate everything around the medical decisions—gave us a sense of control at a time when very little felt within our control.",
  rating: 5
},
{
  name: "Natalia Ivanova",
  location: "Almaty, Kazakhstan",
  treatment: "Orthopaedic Surgery",
  content: "I had already decided that I was willing to travel for my knee surgery. My problem was choosing where to go. I had spoken to different hospitals in different countries and received very different recommendations. Norma Luna arranged for my scans to be reviewed in India and helped me understand the hospital’s proposed approach before I booked anything. That was what convinced me. I did not need somebody to tell me that everything would be perfect—I needed somebody to help me get the right information. My recovery was slower than I expected, and I ended up staying longer in India. The team helped extend my accommodation and reorganise transport for my follow-up visits without making it another problem for me to solve. I remember that more than anything else. I can walk comfortably again now. For me, the experience was not about luxury. It was about feeling that somebody was paying attention.",
  rating: 5
},
{
  name: "David Mwansa",
  location: "Lusaka, Zambia",
  treatment: "Cardiac Surgery",
  content: "Shared by his daughter, Naomi. When Dad was advised to undergo cardiac surgery, the waiting and uncertainty were extremely difficult for all of us. We began looking at India because we wanted access to an experienced cardiac team without facing an extended delay. I was the one communicating with Norma Luna because Dad was understandably overwhelmed. They coordinated his records with the hospital, helped us arrange the specialist consultation and gave us a clear picture of the expected costs and length of stay before we travelled. One thing I will always remember is arriving in India exhausted and nervous and seeing our driver already waiting for us. It sounds like a small thing, but at that moment it wasn't. From then on, we felt we had someone on the ground who knew why we were there. Dad is back home now and doing well. The doctors deserve the credit for his medical care. Norma Luna deserves ours for making an intimidating journey feel manageable for our family.",
  rating: 5
},
{
  name: "Dilshad Rahman",
  location: "Dhaka, Bangladesh",
  treatment: "Gastroenterology",
  content: "I didn't come to India looking for surgery. I came because after months of consultations, I still didn't feel I understood what was causing my symptoms. Norma Luna arranged an appointment with a gastroenterology specialist and helped coordinate the investigations recommended after my consultation. In the end, the specialist did not recommend the procedure I had previously thought I might need. That actually increased my confidence in the entire experience. I received an explanation I understood, a treatment direction, and no pressure to undergo something unnecessary. Sometimes the best outcome of travelling for medical care is simply getting the right answer.",
  rating: 5
},
];

const TestimonialsPage = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <HeroBanner title="Patient Testimonials" />
      </div>

      {/* Introduction */}
      <section className="py-12 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1B2A49] px-4 py-2 rounded-full mb-6">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">Stories of Hope & Healing</span>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real stories from real patients who transformed their lives with world-class medical care in India.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedCards[index];
              const shouldTruncate = testimonial.content.length > 300;
              const displayContent = isExpanded || !shouldTruncate 
                ? testimonial.content 
                : testimonial.content.slice(0, 300) + '...';

              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-10 h-10 transform rotate-180 text-gray-200" />
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 bg-[#1B2A49]">
                        {getInitials(testimonial.name)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{testimonial.location}</span>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-[#1B2A49]">
                          <span className="text-xs font-medium">{testimonial.treatment}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {displayContent}
                    </p>

                    {/* Read More Button */}
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="font-semibold hover:opacity-80 transition flex items-center gap-2 group text-[#1B2A49]"
                      >
                        {isExpanded ? 'Show less' : 'Read full story'}
                        <svg 
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-[#1B2A49] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
