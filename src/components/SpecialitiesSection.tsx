import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// 1. Importing Lucide Icons
import { 
  ChevronLeft, 
  ChevronRight, 
  HeartPulse, 
  Bone, 
  Baby, 
  Activity, 
  Smile, 
  Weight 
} from 'lucide-react';

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- DATA ---
const specialities = [
  {
    id: "ivf-obstetrics-gynaecology",
    title: "IVF, Obstetrics & Gynaecology",
    description: "Complete infertility care with state-of-the-art IVF treatment. Our fertility specialists offer comprehensive support.",
    icon: Baby, // Icon component
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Cutting edge techniques to treat disorders that affect the esophagus, stomach, small intestine, and colon.",
    icon: Activity, // Icon component
  },
  {
    id: "cardiology",
    title: "Cardiology",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    icon: HeartPulse, // Icon component
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    description: "Handle spine & joint problem through latest orthopedic technology including joint replacements.",
    icon: Bone, // Icon component
  },
  {
    id: "dental",
    title: "Dental",
    description: "Your smile is in expert hands. We offer dental implants to orthodontics with personalized dental solutions.",
    icon: Smile, // Icon component
  },
  {
    id: "bariatrics",
    title: "Bariatrics",
    description: "Our bariatric surgery team provides innovative weight loss solutions. From sleeve gastrectomy to gastric bypass.",
    icon: Weight, // Icon component
  },
];

// --- COMPONENT ---

const SpecialitiesSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="font-semibold tracking-wide uppercase mb-2 block text-[#00205B]">
              Our Departments
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#00205B]">
              Our Practice Areas <br /> and Expertise
            </h2>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="hidden md:flex gap-4">
            <button 
              ref={prevRef} 
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-300 group hover:border-[#00205B] hover:bg-[#00205B] hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              ref={nextRef} 
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-300 group hover:border-[#00205B] hover:bg-[#00205B] hover:text-white"
            >
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
            onBeforeInit={(swiper) => {
              // Bind external buttons to Swiper navigation
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-12"
          >
            {specialities.map((item, index) => {
              // Format number 01, 02...
              const number = (index + 1).toString().padStart(2, '0');
              const IconComponent = item.icon;

              return (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="group bg-white border border-slate-100 rounded-[30px] p-8 h-full flex flex-col relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out hover:border-[#00205B]/20">
                    
                    {/* Background Number */}
                    <div className="absolute top-6 right-8 text-6xl font-bold text-slate-100 select-none -z-0 group-hover:text-slate-50 transition-colors">
                      {number}
                    </div>

                    {/* Icon Container */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shrink-0 transition-colors duration-300 bg-[#E6EBF5] group-hover:bg-[#00205B]">
                      {/* Icon */}
                      <IconComponent 
                        size={40} 
                        className="transition-all duration-300 text-[#00205B] group-hover:text-white" 
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-4 transition-colors text-[#00205B] group-hover:text-[#003087]">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-500 mb-8 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Button */}
                      <Link 
                        to={`/specialities/${item.id}`}
                        className="mt-auto w-full py-3 text-white rounded-full font-semibold text-center transition-colors shadow-md bg-[#00205B] hover:bg-[#003087] shadow-[#00205B]/30"
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
