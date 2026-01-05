import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 20, suffix: "+", label: "Years Experience in Healthcare" },
  { value: 100, suffix: "+", label: "Nationally & Internationally Accredited Facilities" },
  { value: 20, suffix: "+", label: "Partner Across 20 Countries for Health Services" },
  { value: 150, suffix: "+", label: "Expert Doctors and Specialists" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-4xl md:text-5xl font-display font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
