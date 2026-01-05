import { motion } from "framer-motion";
import { Heart, Shield, Users, CheckCircle2 } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";

const features = [
  {
    icon: Heart,
    title: "Knowledge and Skill",
    description: "Access to world-class surgical and non-surgical treatments.",
  },
  {
    icon: Shield,
    title: "Commitment to Quality",
    description: "Rigorous standards in every procedure and patient care protocol.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Tailored treatment pathways designed for individual recovery.",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Element for Professionalism */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side with Professional Bordering */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden border-[12px] border-white shadow-2xl">
              <img
                src={medicalTeam}
                alt="Norma Luna Healthcare Professional Team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Experience Badge - Integrated Look */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 z-20 bg-primary text-white p-8 rounded-none shadow-xl hidden md:block"
            >
              <div className="text-4xl font-bold mb-1 italic">05+</div>
              <div className="text-xs uppercase tracking-widest opacity-90 leading-tight">
                Years of Clinical<br />Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              About Norma Luna Healthcare
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Global Standards. <br />
              <span className="text-primary/80 font-sans font-medium text-3xl md:text-4xl">Compassionate Care.</span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Facing a medical challenge requires more than just treatment; it requires a partner. 
              Norma Luna Healthcare bridges the gap between patients and elite medical institutions 
              globally, ensuring world-class care remains accessible and affordable.
            </p>

            <p className="text-slate-600 mb-10 leading-relaxed border-l-4 border-primary/20 pl-6 italic">
              "We manage the complexities—visas, logistics, and accommodation—so you can focus 
              entirely on your recovery and well-being."
            </p>

            {/* Professional Feature List */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Why Patients Trust Us</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 leading-none mb-1">{feature.title}</h5>
                      <p className="text-sm text-slate-500 leading-snug">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
