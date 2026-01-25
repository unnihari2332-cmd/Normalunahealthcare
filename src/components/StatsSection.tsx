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
      "A legacy of saving lives and transforming health for over two decades, driven by innovation and unwavering compassion.",
  },
  {
    value: 100,
    suffix: "+",
    label: "Happy Clients",
    text:
      "Your health, our priority – proven by 20,000+ satisfied patients, and growing stronger every day with exceptional care.",
  },
  {
    value: 20,
    suffix: "+",
    label: "Specialities",
    text:
      "Norma Luna Hospital proudly offers over 20 specialized medical services. Our expert teams are dedicated to delivering exceptional healthcare across various disciplines.",
  },
  {
    value: 150,
    suffix: "+",
    label: "Qualified Doctors",
    text:
      "We are proud to have a team of over 150 expert doctors, each specializing in diverse medical fields to provide the best care. Our skilled physicians are committed to delivering personalized treatments and exceptional patient outcomes.",
  },
];

const values: ValueItem[] = [
  {
    id: "01",
    title: "Passion",
    icon: Heart,
    description:
      "Driven by a burning desire to improve lives and deliver care with genuine warmth.",
    color: "text-[#0C3B66]",
  },
  {
    id: "02",
    title: "Integrity",
    icon: Puzzle,
    description:
      "Honest, transparent, and ethical in every decision. We fit the pieces together perfectly.",
    color: "text-[#0C3B66]",
  },
  {
    id: "03",
    title: "Respect",
    icon: Handshake,
    description:
      "Treating every patient and partner with the dignity, kindness, and courtesy they deserve.",
    color: "text-[#0C3B66]",
  },
  {
    id: "04",
    title: "Excellence",
    icon: ThumbsUp,
    description:
      "Commited to the highest standards of medical quality. We don't just meet expectations; we exceed them.",
    color: "text-[#0C3B66]",
  },
  {
    id: "05",
    title: "Diversity",
    icon: Globe,
    description:
      "Embracing patients from all walks of life and corners of the world with inclusive care.",
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
        backgroundSize: "600px", // 👈 decrease image size here
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
