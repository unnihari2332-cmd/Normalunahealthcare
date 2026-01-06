import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 5,
    suffix: "+",
    label: "Years of experience",
    description: "A legacy of saving lives and transforming health for over two decades, driven by innovation."
  },
  {
    value: 100,
    suffix: "+",
    label: "Happy Clients",
    description: "Your health, our priority – proven by 20,000+ satisfied patients growing stronger every day."
  },
  {
    value: 20,
    suffix: "+",
    label: "Specialities",
    description: "Proudly offering specialized medical services dedicated to delivering exceptional healthcare."
  },
  {
    value: 150,
    suffix: "+",
    label: "Qualified Doctors",
    description: "We are proud to have a team of expert doctors, each specializing in diverse medical fields."
  },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
    duration: 2
  });

  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      spring.set(target);
    }
  }, [inView, spring, target]);

  return (
    <span ref={ref} className="flex items-baseline justify-center">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              {/* Decorative top accent that appears on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-t-2xl" />

              <div className="flex flex-col items-center text-center h-full">
                {/* Number Wrapper */}
                <div className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label with decorative line */}
                <div className="relative mb-4">
                  <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">
                    {stat.label}
                  </h3>
                  <span className="block h-1 w-8 bg-gray-200 mx-auto mt-2 rounded-full group-hover:bg-primary/50 transition-colors duration-300"></span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
