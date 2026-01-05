import { motion } from "framer-motion";
import { Heart, Shield, Users } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";

const features = [
  {
    icon: Heart,
    title: "Knowledge and Skill",
    description: "Surgical and non-surgical treatment options at top hospitals worldwide.",
  },
  {
    icon: Shield,
    title: "Commitment to Quality",
    description: "We prioritize excellence in every procedure and patient interaction.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Every treatment plan is personalized to your unique needs.",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-2">About Norma Luna</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Bringing Care Closer to You
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When you or your loved ones face a medical challenge, finding the right healthcare can feel overwhelming. That's where Norma Luna Healthcare steps in—a trusted partner connecting patients to world-class medical facilities at affordable prices.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From life-saving surgeries to preventive checkups, we simplify the entire process—medical visa, travel, accommodation, and local transport. Our team ensures seamless care for every patient, every step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-secondary rounded-xl text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={medicalTeam}
                alt="Medical Team"
                className="w-full h-auto"
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">5+</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                  <p className="font-semibold">In Healthcare</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
