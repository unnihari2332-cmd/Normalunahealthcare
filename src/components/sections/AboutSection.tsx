import { motion } from "framer-motion";
import { Microscope, HeartPulse, GraduationCap, Quote, Star } from "lucide-react";
import medicalTeam from "/aboutus.jpg";

// --- ABOUT SECTION DATA ---
const coreValues = [
  {
    icon: Microscope,
    title: "Innovative Treatment Approaches",
  },
  {
    icon: HeartPulse,
    title: "Holistic Health Focus",
  },
  {
    icon: GraduationCap,
    title: "Patient Education and Empowerment",
  },
];

// --- TESTIMONIAL SECTION DATA ---
const testimonials = [
  {
    id: 1,
    text: "Aliquam arcu mi dis habitant fringilla. Primis ut sociosqu habitasse montes nostra. Integer himenaeos facilisi nulla enim ridiculus ex imperdiet nullam faucibus est.",
    name: "Dorothy W Edge",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop", 
    rating: 5,
  },
  {
    id: 2,
    text: "Aliquam arcu mi dis habitant fringilla. Primis ut sociosqu habitasse montes nostra. Integer himenaeos facilisi nulla enim ridiculus ex imperdiet nullam faucibus est.",
    name: "Dorothy W Edge",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    text: "Aliquam arcu mi dis habitant fringilla. Primis ut sociosqu habitasse montes nostra. Integer himenaeos facilisi nulla enim ridiculus ex imperdiet nullam faucibus est.",
    name: "Dorothy W Edge",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop",
    rating: 5,
  },
];

// --- COMPONENT: ABOUT SECTION (UNCHANGED) ---
export const AboutSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Bringing Care Closer to You
            </h2>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                Norma Luna Healthcare aims to bring out the complete requirements of medical services 
                that which offers flexible approach to our clients and provide the level of comfort 
                of a home away from home. After all, Norma Luna Healthcare offers the best services 
                with level of expertise.
              </p>
              <p>
                Norma Luna Healthcare is networked with reputed hospitals and doctors across India. 
                The network includes corporate hospitals, MultiSpeciality hospitals, and Super-Speciality 
                hospitals with International protocols and Multidisciplinary teams at an affordable price.
              </p>
              <p>
                Here at Norma Luna Healthcare, we assure you to facilitate with renowned specialists 
                and hospitals for your required treatments in India with most reputed and experienced 
                Doctors and Surgeons with cutting edge technology.
              </p>
            </div>

            {/* Core Values List */}
            <div className="mt-12 grid gap-6">
              {coreValues.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mt-1">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image & Experience Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={medicalTeam}
                alt="Norma Luna Medical Network"
                className="w-full h-[650px] object-cover"
              />
              {/* Overlay for professionalism */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Experience Counter */}
            <div className="absolute bottom-10 right-10 bg-primary text-white p-8 rounded-2xl shadow-2xl">
              <p className="text-5xl font-bold mb-1">5+</p>
              <p className="text-sm uppercase tracking-wider font-medium opacity-90">
                Years of <br /> Excellence
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- COMPONENT: TESTIMONIAL SECTION (NEW STYLE) ---
export const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">
            Patients Story
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Loved by our Patients
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* White Card Content */}
              <div className="bg-white rounded-lg p-8 pb-12 shadow-[0_2px_15px_rgb(0,0,0,0.05)] text-center w-full relative flex flex-col h-full">
                
                {/* Big Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-16 h-16 text-blue-100 fill-blue-100 transform -scale-x-100" />
                </div>

                {/* Latin Text */}
                <p className="text-slate-600 leading-relaxed mb-8">
                  {item.text}
                </p>

                {/* Stars inside the card */}
                <div className="flex justify-center gap-1.5 mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Floating Image & Name Wrapper (Outside the card) */}
              <div className="flex flex-col items-center -mt-10 z-10">
                {/* Image with white border */}
                <div className="p-1.5 bg-white rounded-full shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>

                {/* Name */}
                <h4 className="mt-4 text-slate-900 font-bold text-lg">
                  {item.name}
                </h4>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
