import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, MapPin, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options that could improve my quality of life. Stem cell therapy was a promising solution, but in Russia, the cost was extremely high, and access to specialized clinics was limited. That’s when I found and realized that India offered world-class regenerative medicine at a much more affordable price. From the moment I reached out, their team handled everything—medical visa assistance, travel arrangements, and scheduling my consultation with one of India’s leading specialists in stem cell therapy. When I arrived, I was impressed by the hospital’s modern infrastructure and dedicated research team. The doctors took the time to explain every step of the procedure. Post-treatment, I received personalized rehabilitation support, including physiotherapy and nutritional guidance to maximize my recovery. Today, I feel stronger, and my symptoms have significantly improved. I am grateful for the exceptional care and professionalism that made my journey to India truly life-changing.",
  },
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: "Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference. I am now cancer-free, and I owe it to their expertise and support.",
  },
  {
    name: "Amal N.",
    location: "Sri Lanka",
    treatment: "Hip Replacement",
    content: "After suffering for years with severe arthritis, I could barely walk. Hip replacement surgery in Sri Lanka was too costly, and I feared long waiting times. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai, meeting one of the best orthopaedic surgeons in India. The hospital used advanced robotic-assisted technology for precise surgery and a faster recovery. Just days after surgery, I was walking again without pain. The team handled every detail, from physiotherapy to a smooth return journey home. I now live pain-free, thanks to them!",
  },
  {
    name: "Zoya & Kareem R.",
    location: "Bangladesh",
    treatment: "Twin Pregnancy Complication",
    content: "When we found out we were expecting twins, we were overjoyed. But at five months, complications arose, and doctors in Bangladesh warned us of a high-risk delivery. We were devastated. That’s when a family friend recommended Norma Luna Healthcare, and it changed everything. The team arranged immediate consultations with a top maternal-fetal specialist. The hospital was equipped with advanced NICU facilities, giving our babies the best chance of survival. Norma Luna even arranged for a translator and special dietary care for my wife during her stay. Our twins were born healthy, and today, we look at them with gratitude, knowing that none of this would have been possible without the seamless care and expertise in India.",
  },
  {
    name: "Amina S.",
    location: "Uzbekistan",
    treatment: "Dental Implants & Tourism",
    content: "India was always on my travel list—I had dreamed of exploring its vibrant culture, historical landmarks, and beautiful landscapes. When I finally planned my trip to India, I wanted to make the most of my visit. A friend mentioned that India was also known for high-quality, affordable medical treatments, including dental care. I had been considering dental implants for years, but the costs in Uzbekistan were too high and lacked options. That’s when I came across Norma Luna Healthcare, and I decided to reach out just to explore my options. From the moment I contacted them, their team made everything effortless. They arranged a consultation while ensuring my travel plans remained uninterrupted. After a detailed examination, the dentist explained that I could complete my implant procedure with minimal downtime, allowing me to continue enjoying my vacation. Within days, I had a brand-new smile, and I was still able to explore Mahabalipuram’s ancient temples and take a peaceful houseboat ride in Kerala. The best part? Even after I returned home, Norma Luna’s team followed up to ensure my recovery was going well. What started as a trip for adventure ended up being a life-changing journey. Thanks to the team, I left India with not just incredible memories but also a confident new smile!",
  },
  {
    name: "Martin G.",
    location: "United Kingdom",
    treatment: "Dental Implants",
    content: "I had lost most of my teeth over the years, making eating and speaking difficult. In UK, the cost of full-mouth dental implants was simply unaffordable. A colleague recommended Norma Luna Healthcare, and I was sceptical at first. Could I really trust a medical team in another country? From my first virtual consultation with a leading dentist in Chennai, my doubts disappeared. The clinic was more advanced than many I’ve seen, with 3D imaging and precision-guided implant technology. The procedure was smooth and completely painless, thanks to advanced sedation techniques. Norma Luna arranged a comfortable hotel for my recovery and even suggested soft, nutritious meals suited for my healing gums. Within days, I could smile without hesitation for the first time in years. The best part? The cost was nearly 70% lower than in France, and the quality exceeded my expectations.",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const swipe = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* REMOVED: The decorative background gradient div was here. 
         Now the background is pure white.
      */}

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Testimonials
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto min-h-[500px] md:min-h-[400px] flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => swipe(-1)}
            className="absolute left-0 md:-left-12 z-20 p-2 text-primary hover:text-primary/70 transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full flex flex-col items-center text-center px-4 md:px-12"
            >
              <div className="mb-8 text-primary">
                <Quote size={64} className="fill-current opacity-20" />
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-serif italic mb-10 max-w-3xl">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex flex-col items-center gap-2">
                {/* Avatar Placeholder / Initials */}
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-3 text-primary font-bold text-xl shadow-inner">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                
                <h3 className="text-xl font-bold text-primary">
                  {testimonials[currentIndex].name}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {testimonials[currentIndex].location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1 text-primary/80 font-medium">
                    <Activity size={14} />
                    {testimonials[currentIndex].treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={() => swipe(1)}
            className="absolute right-0 md:-right-12 z-20 p-2 text-primary hover:text-primary/70 transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Controls (Visible only on small screens) */}
        <div className="flex md:hidden justify-center gap-8 mt-8">
          <button onClick={() => swipe(-1)} className="p-2 text-primary hover:bg-secondary rounded-full">
            <ChevronLeft size={32} />
          </button>
          <button onClick={() => swipe(1)} className="p-2 text-primary hover:bg-secondary rounded-full">
            <ChevronRight size={32} />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/testimonials">
            <Button variant="outline" className="rounded-full px-8 hover:bg-primary hover:text-white transition-all">
              View All Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
