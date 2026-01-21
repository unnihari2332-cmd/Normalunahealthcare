import { motion } from "framer-motion";
import { Microscope, HeartPulse, GraduationCap } from "lucide-react";
import medicalTeam from "@/aboutus.jpg"; // Ensure this path is correct

const coreValues = [
  {
    icon: Microscope,
    title: "Innovative Treatment Approaches",
    desc: "Access to cutting-edge medical protocols.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Health Focus",
    desc: "Treating the whole person, not just the symptoms.",
  },
  {
    icon: GraduationCap,
    title: "Patient Education & Empowerment",
    desc: "Guiding you through every step of your journey.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Bringing World-Class Care <br className="hidden md:block" />
              <span className="text-primary">Closer to You</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                At <strong>Norma Luna Healthcare</strong>, we redefine medical services by offering 
                a flexible, holistic approach that provides the comfort of a home away from home. 
                We are dedicated to delivering expertise with genuine compassion.
              </p>
              <p>
                We are networked with India's most reputed medical institutions, including 
                top-tier Corporate, Multi-Speciality, and Super-Speciality hospitals. 
                Our partners adhere to international protocols, ensuring multidisciplinary 
                care at an affordable price point.
              </p>
              <p>
                We bridge the gap between you and renowned specialists, facilitating 
                treatments with experienced surgeons utilizing state-of-the-art technology.
              </p>
            </div>

            {/* Core Values List with Staggered Animation */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 grid gap-5"
            >
              {coreValues.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 hidden sm:block">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image & Experience Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-auto"
          >
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={medicalTeam}
                alt="Norma Luna Medical Network Team"
                className="w-full h-full object-cover"
              />
              {/* Overlay for text legibility if needed, but mostly for style */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Experience Floating Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute bottom-8 right-8 md:bottom-12 md:right-[-20px] bg-white p-6 rounded-2xl shadow-xl border-l-8 border-primary max-w-[180px]"
            >
              <p className="text-5xl font-extrabold text-primary mb-1">5+</p>
              <p className="text-slate-700 text-sm font-semibold uppercase tracking-wider leading-tight">
                Years of <br /> Excellence
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
