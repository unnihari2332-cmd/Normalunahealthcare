import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { StatsSection } from "@/components/StatsSection";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-medical.jpg";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Microscope, 
  HeartPulse, 
  GraduationCap, 
  CheckCircle2 
} from "lucide-react";

// --- DATA: TESTIMONIALS ---
const testimonials = [
  {
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options. Stem cell therapy was a promising solution, but in Russia, the cost was extremely high. That’s when I found that India offered world-class regenerative medicine at a much more affordable price. From the moment I reached out, their team handled everything. Today, I feel stronger, and my symptoms have significantly improved.",
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
    content: "After suffering for years with severe arthritis, I could barely walk. Hip replacement surgery in Sri Lanka was too costly. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai. Just days after surgery, I was walking again without pain. The team handled every detail, from physiotherapy to a smooth return journey home.",
  },
  {
    name: "Zoya & Kareem R.",
    location: "Bangladesh",
    treatment: "Twin Pregnancy Complication",
    content: "When we found out we were expecting twins, we were overjoyed. But complications arose. We were devastated. That’s when a family friend recommended Norma Luna Healthcare. The team arranged immediate consultations with a top maternal-fetal specialist. Our twins were born healthy, and today, we look at them with gratitude.",
  },
  {
    name: "Amina S.",
    location: "Uzbekistan",
    treatment: "Dental Implants & Tourism",
    content: "I had dreamed of exploring India. A friend mentioned India was also known for high-quality, affordable medical treatments. I decided to reach out. Within days, I had a brand-new smile, and I was still able to explore Mahabalipuram’s ancient temples. What started as a trip for adventure ended up being a life-changing journey.",
  },
  {
    name: "Martin G.",
    location: "United Kingdom",
    treatment: "Dental Implants",
    content: "I had lost most of my teeth over the years. In UK, the cost was simply unaffordable. A colleague recommended Norma Luna Healthcare. From my first virtual consultation in Chennai, my doubts disappeared. The procedure was smooth and completely painless. The cost was nearly 70% lower than in France, and the quality exceeded my expectations.",
  },
];

// --- COMPONENTS ---

// 1. NEW: Who We Are Section (Replaces Mission/Vision)
const WhoWeAreSection = () => {
  const [activeTab, setActiveTab] = useState("innovative");

  const pillars = [
    {
      id: "innovative",
      title: "Innovative Treatment Approaches",
      icon: Microscope,
      description: "We constantly research and partner with hospitals utilizing the latest medical breakthroughs. From robotic surgeries to advanced stem cell therapy, we ensure you have access to cutting-edge medical science.",
    },
    {
      id: "holistic",
      title: "Holistic Health Focus",
      icon: HeartPulse,
      description: "Healing is more than just a procedure. We focus on your overall well-being, integrating mental comfort, personalized care plans, and post-treatment support to ensure a complete recovery journey.",
    },
    {
      id: "education",
      title: "Patient Education and Empowerment",
      icon: GraduationCap,
      description: "We believe an informed patient is an empowered patient. We provide transparent details about your treatment, costs, and doctors, ensuring you make decisions with complete confidence.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mt-2">
            Bringing Care Closer to You
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: The Text Content from Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 leading-relaxed text-lg"
          >
            <p>
              Norma Luna Healthcare aims to bring out the complete requirements of medical services that which offers flexible approach to our clients and provide the level of comfort of a home away from home. After all, Norma Luna Healthcare offers the best services with level of expertise.
            </p>
            <p>
              Norma Luna Healthcare is networked with reputed hospitals and doctors across India. The network includes corporate hospitals, MultiSpeciality hospitals, and Super-Speciality hospitals with International protocols and Multidisciplinary teams at an affordable price.
            </p>
            <p>
              Here at Norma Luna Healthcare, we assure you to facilitate with renowned specialists and hospitals for your required treatments in India with most reputed and experienced Doctors and Surgeons with cutting edge technology.
            </p>
          </motion.div>

          {/* Right Side: Select and View Interactive Tabs */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-6">Our Core Approach</h3>
            
            {/* Tab Buttons */}
            <div className="flex flex-col space-y-3">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`relative flex items-center p-4 rounded-xl transition-all duration-300 text-left border ${
                    activeTab === pillar.id
                      ? "bg-navy text-white border-navy shadow-lg scale-[1.02]"
                      : "bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100"
                  }`}
                >
                  <pillar.icon size={24} className={`mr-4 flex-shrink-0 ${activeTab === pillar.id ? "text-primary" : "text-gray-400"}`} />
                  <span className="font-bold text-lg">{pillar.title}</span>
                  {activeTab === pillar.id && (
                    <motion.div layoutId="check" className="ml-auto">
                      <CheckCircle2 size={20} className="text-primary" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content Display area */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <AnimatePresence mode="wait">
                {pillars.map((pillar) => (
                  pillar.id === activeTab && (
                    <motion.div
                      key={pillar.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                        About {pillar.title}
                      </h4>
                      <p className="text-gray-600">
                        {pillar.description}
                      </p>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 2. EXISTING: Testimonial Slider
const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swap logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextStep();
    }, 6000); 
    return () => clearInterval(timer);
  }, [index, isPaused]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[400px] flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button 
        onClick={prevStep} 
        className="absolute left-0 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-navy transition-all -ml-4 md:-ml-12"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextStep} 
        className="absolute right-0 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-navy transition-all -mr-4 md:-mr-12"
      >
        <ChevronRight size={24} />
      </button>

      <div className="w-full h-full overflow-hidden relative rounded-2xl bg-white shadow-lg border border-primary/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute top-0 left-0 w-full h-full p-8 md:p-12 flex flex-col items-center justify-center text-center"
          >
            <Quote className="w-12 h-12 text-primary/20 mb-6 mx-auto" />
            <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8 max-w-2xl line-clamp-6 md:line-clamp-none">
              "{testimonials[index].content}"
            </p>
            <div className="mt-auto">
              <h4 className="font-bold text-xl text-navy">{testimonials[index].name}</h4>
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                {testimonials[index].location}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">
                {testimonials[index].treatment}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === index ? "bg-primary" : "bg-gray-300 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// --- MAIN PAGE ---

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title="About Us"
          image={heroImage}
          breadcrumbs={[{ label: "About Us" }]}
        />
      </div>

      {/* REPLACED: MissionVisionSection with new WhoWeAreSection */}
      <WhoWeAreSection />
      
      <StatsSection />

      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium mb-2">Patient Success Stories</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Patient Testimonials: Real Stories, Real Results
            </h2>
          </motion.div>
          <div className="pb-10">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Embark on Your Health Journey with Norma Luna
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We make healthcare accessible, affordable, and stress-free, while you focus on what truly matters—your recovery.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
