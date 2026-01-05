import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

// Updated content based on your request
const stats: StatItem[] = [
  { 
    value: 5, 
    suffix: "+", 
    label: "Years of experience", 
    description: "A legacy of saving lives and transforming health for over two decades, driven by innovation and unwavering compassion." 
  },
  { 
    value: 100, 
    suffix: "+", 
    label: "Happy Clients", 
    description: "Your health, our priority – proven by 20,000+ satisfied patients, and growing stronger every day with exceptional care." 
  },
  { 
    value: 20, 
    suffix: "+", 
    label: "Specialities", 
    description: "Norma Luna Hospital proudly offers over 20 specialized medical services. Our expert teams are dedicated to delivering exceptional healthcare across various disciplines." 
  },
  { 
    value: 150, 
    suffix: "+", 
    label: "Qualified Doctors", 
    description: "We are proud to have a team of over 150 expert doctors, each specializing in diverse medical fields to provide the best care." 
  },
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
        {/* Changed to 1 column on mobile, 2 on small screens, 4 on desktop for better readability of long text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <h3 className="text-lg font-bold mt-2 text-foreground uppercase tracking-tight">
                {stat.label}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
