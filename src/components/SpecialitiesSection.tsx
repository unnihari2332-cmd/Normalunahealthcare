import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- DATA (Kept same as provided) ---
// Note: In a real app, ensure your image paths are correct. 
// I'm using placeholders for the example where specific imports might fail.
const specialities = [
  {
    id: "ivf-obstetrics-gynaecology",
    title: "IVF, Obstetrics & Gynaecology",
    description: "Complete infertility care with state-of-the-art IVF treatment. Our fertility specialists offer comprehensive support.",
    // Using a placeholder for the example, replace with your 'consultation' import
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600", 
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Cutting edge techniques to treat disorders that affect the esophagus, stomach, small intestine, and colon.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600",
  },
  {
    id: "cardiology", // Added to match your screenshot
    title: "Cardiology",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    description: "Handle spine & joint problem through latest orthopedic technology including joint replacements.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600",
  },
  {
    id: "dental",
    title: "Dental",
    description: "Your smile is in expert hands. We offer dental implants to orthodontics with personalized dental solutions.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600",
  },
  {
    id: "bariatrics",
    title: "Bariatrics",
    description: "Our bariatric surgery team provides innovative weight loss solutions. From sleeve gastrectomy to gastric bypass.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
  },
];

// --- COMPONENT ---

const SpecialitiesSection: React.FC = () => {
  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wide uppercase mb-2 block">
              Our Departments
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Our Practice Areas <br /> and Expertise
            </h2>
          </div>
          
          {/* Custom Navigation Buttons (Visible on Desktop) */}
          <div className="hidden md:flex gap-4">
            <button ref={prevRef} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              <ChevronLeft size={24} />
            </button>
            <button ref={nextRef} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* --- SWIPER CAROUSEL --- */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            // Make sure to update refs when swiper initializes
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12" // Padding bottom for shadow/pagination space
          >
            {specialities.map((item, index) => {
              // Format number (01, 02, etc.)
              const number = (index + 1).toString().padStart(2, '0');

              return (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="group bg-white border border-slate-100 rounded-[30px] p-8 h-full flex flex-col relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out">
                    
                    {/* Background Number (01, 02...) */}
                    <div className="absolute top-6 right-8 text-6xl font-bold text-slate-100 select-none -z-0 group-hover:text-slate-50 transition-colors">
                      {number}
                    </div>

                    {/* Image/Icon Container */}
                    {/* Styling to look like the blue square icon in screenshot */}
                    <div className="relative z-10 w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-10 h-10 object-cover rounded-full opacity-80 mix-blend-multiply group-hover:opacity-100 group-hover:mix-blend-normal group-hover:brightness-0 group-hover:invert transition-all"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-500 mb-8 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Button */}
                      <Link 
                        to={`/specialities/${item.id}`}
                        className="mt-auto w-full py-3 bg-[#3B82F6] text-white rounded-full font-semibold text-center hover:bg-[#2563EB] transition-colors shadow-blue-200 shadow-md"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default SpecialitiesSection;
