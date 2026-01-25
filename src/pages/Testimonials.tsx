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
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options that could improve my quality of life. Stem Cell therapy was a promising solution, but in Russia, the cost was extremely high, and access to specialized clinics was limited. That's when I found out India offered world-class regenerative medicine at a much more affordable price. From the moment I reached out, their team handled everything—medical visa assistance, travel arrangements, and scheduling my consultation with one of India's leading specialists in stem cell therapy. When I arrived, I was impressed by the hospital's modern infrastructure and dedicated research team. The doctors took time to explain every step of the procedure. I received personalized rehabilitation support, including physiotherapy and nutritional guidance to maximize my recovery. Today, I feel stronger, and my symptoms have significantly improved. I am grateful for the exceptional care and professionalism that made my journey to India truly life-changing.",
    rating: 5
  },
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: "Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference. I am now cancer-free, and I owe it to their expertise and support!",
    rating: 5
  },
  {
    name: "Amal N.",
    location: "Sri Lanka",
    treatment: "Hip Replacement",
    content: "After suffering for years with severe arthritis, I could barely walk. Hip replacement surgery in Sri Lanka was too costly, and I feared long waiting times. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai, meeting one of the best orthopedic surgeons in India. The hospital used advanced robotic-assisted technology for precise surgery and a faster recovery—just days after surgery, I was walking again without pain. The team handled every detail, from physiotherapy to a smooth return journey home. I now live pain-free, thanks to them!",
    rating: 5
  },
  {
    name: "Zoya & Kareem R.",
    location: "Bangladesh",
    treatment: "Twin Pregnancy Complication",
    content: "When we found out we were expecting twins, we were overjoyed. But at five months, complications arose, and doctors in Bangladesh warned us of a high-risk delivery. We were devastated. That's when a family friend recommended Norma Luna Healthcare, and it changed everything. Their team arranged immediate consultations with a top maternal-fetal specialist. The hospital was equipped with advanced NICU facilities, giving our babies the best chance of survival. Norma Luna even arranged for a translator and special dietary care for my wife during her stay. Our twins were born healthy, and today, we look at them with gratitude, knowing that none of this would have been possible without the seamless care an atmosphere in India.",
    rating: 5
  },
  {
    name: "Amina S.",
    location: "Uzbekistan",
    treatment: "Dental Implants & Tourism",
    content: "India was always on my travel list—I had dreamed of exploring its vibrant culture, historical landmarks, and beautiful landscapes. When I finally planned my trip to India, I wanted to make the most of my visit. A friend mentioned that India was also known for high-quality, affordable medical treatments, including dental care. I had been considering dental implants for years, but the costs in Uzbekistan were too high and lacked options. That's when I came across Norma Luna Healthcare, and I decided to explore my options. From the moment I contacted them, their team made everything effortless. They arranged a consultation while ensuring my travel plans remained uninterrupted. After a detailed examination, the dentist explained that I could complete my implant procedure with minimal downtime, allowing me to continue enjoying my vacation. Within days, I had a brand new smile, and I was still able to explore Mahabalipuram's ancient temples and take a peaceful houseboat ride in Kerala. The best part? Even after I returned home, Norma Luna's team followed up to ensure my recovery was going well. What started as a trip for adventure ended up being a life-changing journey. Thanks to the team, I left India with not just incredible memories but also a confident new smile!",
    rating: 5
  },
  {
    name: "Martin G.",
    location: "United Kingdom",
    treatment: "Dental Implants",
    content: "I had lost most of my teeth over the years, making eating and speaking difficult. In UK, the cost of full-mouth dental implants was simply unaffordable. A colleague recommended Norma Luna Healthcare, and I was skeptical at first. Could I really trust a medical team in another country? My own first virtual consultation with a leading dentist in Chennai, my doubts disappeared. The clinic was more advanced than many I've seen in the UK—with 3D imaging and precision-guided implant technology. The procedure was smooth and completely painless, thanks to advanced sedation techniques. After a comfortable hotel for my recovery and even suggested soft, nutritious meals suited for my healing gums. Within days, I could smile without hesitation for the first time in years. The best part? The cost was nearly 70% lower than in France, and the quality exceeded my expectations.",
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
