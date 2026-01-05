import { motion } from "framer-motion";
import { Check, Heart, Shield, Users, Award, Clock, Globe, LucideIcon } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
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
  {
    icon: Award,
    title: "Internationally Accredited",
    description: "Partnered with globally recognized healthcare institutions.",
  },
  {
    icon: Clock,
    title: "Healing Experience",
    description: "Comprehensive care from consultation to recovery.",
  },
  {
    icon: Globe,
    title: "Diverse Treatments",
    description: "Wide range of medical specialties to serve every patient.",
  },
];

const missionPoints = [
  "Personalized, patient-centered healthcare services",
  "Affordable access to world-class medical facilities",
  "Seamless coordination of travel and treatment",
  "24/7 support throughout your medical journey",
];

const visionPoints = [
  "To become the trusted partner in healthcare worldwide",
  "Excellence in patient care and medical outcomes",
  "Building bridges between patients and specialists",
  "Creating positive healthcare experiences",
];

export const MissionVisionSection = () => {
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
            <p className="text-primary font-medium mb-2">Welcome to Norma Luna Healthcare</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Where compassionate care meets expert treatment for your best health.
            </h2>

            <div className="space-y-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gold/10 rounded-2xl p-6 border-l-4 border-gold"
              >
                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-accent-foreground text-sm">M</span>
                  Our Mission
                </h3>
                <ul className="space-y-2">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary"
              >
                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">V</span>
                  Our Vision
                </h3>
                <ul className="space-y-2">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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

            {/* Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-primary rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <span className="text-4xl font-bold text-primary-foreground">5+</span>
                <p className="text-primary-foreground/80 text-sm mt-1">Years Experience<br />In Healthcare</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ValuesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2">Our Values</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Committed to creating a positive, safe, and patient-focused atmosphere.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
