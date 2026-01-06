
import React, { useState } from 'react';
import { Star, MapPin, Heart, Quote } from 'lucide-react';

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
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-navy-900" style={{ color: '#001F3F' }}>Norma Luna Healthcare</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:opacity-80 transition" style={{ color: '#001F3F' }}>Home</a>
              <a href="#" className="text-gray-600 hover:opacity-80 transition" style={{ color: '#001F3F' }}>Services</a>
              <a href="#" className="font-semibold" style={{ color: '#001F3F' }}>Testimonials</a>
              <a href="#" className="text-gray-600 hover:opacity-80 transition" style={{ color: '#001F3F' }}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-20 pb-16 text-white" style={{ backgroundColor: '#001F3F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-white font-medium">Testimonials</span>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Stories of Hope & Healing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Patient Testimonials</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real stories from real patients who transformed their lives with world-class medical care in India
            </p>
            <div className="mt-8 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-gray-300 text-sm">Happy Patients</div>
              </div>
              <div className="h-12 w-px bg-gray-400"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div className="h-12 w-px bg-gray-400"></div>
              <div className="text-center">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 transform rotate-180" style={{ color: '#e0e6ed' }} />
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #001F3F, #003366)' }}>
                      {getInitials(testimonial.name)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{testimonial.location}</span>
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full" style={{ backgroundColor: '#e6f0ff', color: '#001F3F' }}>
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
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {displayContent}
                  </p>

                  {/* Read More Button */}
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="font-semibold hover:opacity-80 transition flex items-center gap-2 group"
                      style={{ color: '#001F3F' }}
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
                <div className="h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: '#001F3F' }}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, #001F3F, #003366)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join hundreds of patients who have transformed their lives with world-class care
          </p>
          <button className="bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg" style={{ color: '#001F3F' }}>
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Norma Luna Healthcare</h3>
              <p className="text-gray-400">Connecting patients worldwide with India's best medical care</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Medical Tourism</a></li>
                <li><a href="#" className="hover:text-white transition">Treatment Planning</a></li>
                <li><a href="#" className="hover:text-white transition">Travel Assistance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Chennai, India</li>
                <li>info@normaluna.com</li>
                <li>+91 XXX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Norma Luna Healthcare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialsPage;
