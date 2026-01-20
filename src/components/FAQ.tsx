import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { StatsSection } from "@/components/StatsSection";
import { motion, AnimatePresence } from "framer-motion";
// Added Microscope, Heart, GraduationCap for the new list items
import { ChevronLeft, ChevronRight, Quote, Target, Eye, Users, Microscope, Heart, GraduationCap } from "lucide-react";

// IMPORTANT: Ensure this image exists in src/assets/ or change the path
import heroImage from "@/assets/hero-medical.jpg"; 

// --- DATA: TAB CONTENT ---
const tabContent = {
  about: {
    title: "Bringing Care Closer to You",
    icon: Users,
    text: [
      "Norma Luna Healthcare aims to bring out the complete requirements of medical services that which offers flexible approach to our clients and provide the level of comfort of a home away from home. After all, Norma Luna Healthcare offers the best services with level of expertise.",
      "Norma Luna Healthcare is networked with reputed hospitals and doctors across India. The network includes corporate hospitals, MultiSpeciality hospitals, and Super-Speciality hospitals with International protocols and Multidisciplinary teams at an affordable price.",
      "Here at Norma Luna Healthcare, we assure you to facilitate with renowned specialists and hospitals for your required treatments in India with most reputed and experienced Doctors and Surgeons with cutting edge technology."
    ],
    // Added specific features from the screenshot image
    features: [
      { label: "Innovative Treatment Approaches", icon: Microscope },
      { label: "Holistic Health Focus", icon: Heart },
      { label: "Patient Education and Empowerment", icon: GraduationCap }
    ]
  },
  vision: {
    title: "Our Vision",
    icon: Eye,
    text: [
      "To be the world’s most trusted bridge to healing, removing geographical and financial barriers to advanced healthcare.",
      "We envision a world where quality medical treatment is accessible to everyone, regardless of where they live. By leveraging global medical expertise and cutting-edge technology, we aim to redefine medical tourism as a seamless, compassionate, and life-changing experience."
    ]
  },
  mission: {
    title: "Our Mission",
    icon: Target,
    text: [
      "To provide affordable, world-class medical care with a flexible, patient-centric approach that feels like a home away from home.",
      "We differ by not just arranging appointments, but by curating complete recovery journeys. From the moment you contact us until you are safely back home, our mission is to ensure your comfort, safety, and health are prioritized with the highest level of expertise and empathy."
    ]
  }
};

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
];

// --- COMPONENTS ---

// 1. NEW: Interactive Left-Image / Right-Content Section
const InteractiveAboutSection = () => {
  const [activeTab, setActiveTab] = useState<"about" | "vision" | "mission">("about");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           
          {/* LEFT SIDE: IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Using heroImage as placeholder. Replace src if you have a specific about image */}
            <img 
              src={heroImage} 
              alt="Medical Professionals" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-8">
               <div className="text-white">
                 <p className="font-bold text-lg">Norma Luna Healthcare</p>
                 <p className="text-sm opacity-80">Excellence in Medical Tourism</p>
               </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT & BUTTONS */}
          <div className="flex flex-col h-full justify-center">
            
            {/* BUTTONS ROW */}
            <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-100 pb-4">
              {(["about", "vision", "mission"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-navy text-white shadow-lg transform -translate-y-1"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {tab === "about" ? "Who We Are" : tab}
                </button>
              ))}
            </div>

            {/* DYNAMIC CONTENT AREA */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {/* Icon wrapper */}
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {activeTab === 'about' && <Users size={24} />}
                      {activeTab === 'vision' && <Eye size={24} />}
                      {activeTab === 'mission' && <Target size={24} />}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-navy">
                      {tabContent[activeTab].title}
                    </h3>
                  </div>

                  {/* Render Paragraphs */}
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg mb-8">
                    {tabContent[activeTab].text.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Render Features List (Only for About/Who We Are) */}
                  {/* This maps the specific features from the image: Innovative, Holistic, Education */}
                  {tabContent[activeTab].features && (
                    <div className="space-y-3 mt-6">
                      {tabContent[activeTab].features.map((feature, i) => (
                        <div key={i} className="flex items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-blue-50 p-2 rounded-full text-primary mr-4">
                            <feature.icon size={20} />
                          </div>
                          <span className="font-bold text-navy text-sm md:text-base">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Button (Optional) */}
            <div className="mt-8 pt-6 border-t border-gray-100">
               <button className="text-primary font-bold hover:text-navy transition-colors flex items-center gap-2 group">
                 Learn more about our services 
                 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Testimonial Slider
const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[400px] flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button onClick={prevStep} className="absolute left-0 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-navy transition-all -ml-4 md:-ml-12"><ChevronLeft size={24} /></button>
      <button onClick={nextStep} className="absolute right-0 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-navy transition-all -mr-4 md:-mr-12"><ChevronRight size={24} /></button>
      <div className="w-full h-full overflow-hidden relative rounded-2xl bg-white shadow-lg border border-primary/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }}}
            className="absolute top-0 left-0 w-full h-full p-8 md:p-12 flex flex-col items-center justify-center text-center"
          >
            <Quote className="w-12 h-12 text-primary/20 mb-6 mx-auto" />
            <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8 max-w-2xl line-clamp-6 md:line-clamp-none">"{testimonials[index].content}"</p>
            <div className="mt-auto">
              <h4 className="font-bold text-xl text-navy">{testimonials[index].name}</h4>
              <p className="text-sm font-medium text-primary uppercase tracking-wide">{testimonials[index].location}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">{testimonials[index].treatment}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i === index ? "bg-primary" : "bg-gray-300 hover:bg-primary/50"}`}
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

      {/* NEW: Combined Section (Image Left, Tabs Right) */}
      <InteractiveAboutSection />
       
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
