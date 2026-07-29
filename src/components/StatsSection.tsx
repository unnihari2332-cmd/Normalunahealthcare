import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import {
  Heart,
  Puzzle,
  Handshake,
  ThumbsUp,
  Globe,
  LucideIcon,
} from "lucide-react";

/* BRAND COLOR */
const BRAND_BLUE = "#0C3B66";

// --- Types ---
interface ValueItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  text: string;
}

// --- Data ---
const stats: StatItem[] = [
  {
    value: 5,
    suffix: "+",
    label: "Years of experience",
    text:
      "A legacy of saving lives and transforming health for over five years, driven by innovation and unwavering compassion.",
  },
  {
    value: 200,
    suffix: "+",
    label: "Happy Clients",
    text:
      "Your health, our priority – proven by 200+ satisfied patients, and growing stronger every day with exceptional care.",
  },
  {
    value: 20,
    suffix: "+",
    label: "Specialities",
    text:
      "Our extensive network provides access to a diverse range of medical and surgical specialties, ensuring personalized care for a wide spectrum of healthcare needs.",
  },
  {
    value: 300,
    suffix: "+",
    label: "Qualified Doctors",
    text:
      "Access a trusted network of 150+ highly qualified specialists across multiple medical and surgical disciplines, carefully matched to your treatment needs through our partner hospitals.",
  },
];

const values: ValueItem[] = [
  {
    id: "01",
    title: "Passion",
    icon: Heart,
    description:
      "We are passionate about making every patient’s journey to better healthcare simpler, supported and reassuring.",
    color: "text-[#0C3B66]",
  },
  {
    id: "02",
    title: "Integrity",
    icon: Puzzle,
    description:
      "We build trust through transparency, honesty and responsible guidance at every stage of the medical journey.",
    color: "text-[#0C3B66]",
  },
  {
    id: "03",
    title: "Respect",
    icon: Handshake,
    description:
      "We treat every patient, family and partner with dignity, empathy and understanding.",
    color: "text-[#0C3B66]",
  },
  {
    id: "04",
    title: "Excellence",
    icon: ThumbsUp,
    description:
      "We strive for excellence in every detail, from healthcare coordination to travel and patient support.",
    color: "text-[#0C3B66]",
  },
  {
    id: "05",
    title: "Diversity",
    icon: Globe,
    description:
      "We embrace people across cultures, countries and backgrounds, making healthcare accessible beyond borders.",
    color: "text-[#0C3B66]",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- Counter ---
const Counter = ({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10px" });

  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [count, to, duration, isInView]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

// --- Main Component ---
export const StatsSection = () => {
  return (
      <section
  className="py-24 relative overflow-hidden bg-no-repeat bg-center"
  style={{
    backgroundImage: "url('/bg.png')",
    backgroundSize: "90%", // 👈 slightly smaller than full
  }}
>
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: BRAND_BLUE }}
        />
        <div
          className="absolute top-1/2 -left-24 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: BRAND_BLUE }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Box */}
        <div
          className="rounded-2xl p-10 mb-32 shadow-xl"
          style={{ backgroundColor: "#1B2A49" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left space-y-3"
              >
                <div className="text-5xl font-black text-gray-300 flex justify-center md:justify-start items-baseline">
                  <Counter from={0} to={stat.value} />
                  <span>{stat.suffix}</span>
                </div>

                <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                  {stat.label}
                </h4>

                <p className="text-[#D6E6F2] text-sm leading-relaxed pr-4">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
            style={{ color: "#1B2A49" }}
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 mx-auto rounded-full"
            style={{ backgroundColor: BRAND_BLUE }}
          />
        </div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <span className="absolute top-4 right-4 text-4xl font-black text-gray-200 opacity-50">
                  {item.id}
                </span>

                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 ring-1 ring-gray-100">
                  <Icon className={`w-8 h-8 ${item.color}`} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: BRAND_BLUE }}>
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div
                  className="w-0 h-0.5 mt-6 group-hover:w-12 transition-all duration-300"
                  style={{ backgroundColor: BRAND_BLUE }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
