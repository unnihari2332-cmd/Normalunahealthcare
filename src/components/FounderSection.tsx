import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
      
      {/* Animated Decorative Elements */}
      <motion.div
        animate={{ float: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary/10 to-blue-200/10 blur-3xl"
      />
      <motion.div
        animate={{ float: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-100/20 to-primary/5 blur-3xl"
      />
      <motion.div
        animate={{ float: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gradient-to-t from-blue-100/15 to-transparent blur-3xl"
      />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          {/* Section Label with Icon */}
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Leadership
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            A Vision That Inspires Trust
          </h2>

          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 rounded-xl border border-primary/10 bg-gradient-to-br from-white to-blue-50/30 p-8 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-slate-900">
              Niveditha Latha
            </h3>
            <p className="mt-3 text-lg font-medium text-primary">
              Founder &amp; Managing Partner | Norma Luna Healthcare
            </p>
          </motion.div>

          {/* Story */}
          <div className="mt-12 space-y-4 text-lg leading-8 text-slate-700">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Founded by Niveditha Latha, Norma Luna Healthcare was established
              with a singular vision—to make world-class healthcare in India
              accessible, transparent, and reassuring for patients across the
              globe.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With a strong foundation in business leadership and an unwavering
              commitment to trust and compassion, Niveditha envisioned an
              organisation that would simplify the complexities of seeking
              medical treatment abroad. Her philosophy is rooted in ensuring
              that every patient experiences clarity, dignity, and confidence
              while navigating important healthcare decisions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Through ethical partnerships, personalised coordination, and
              access to internationally accredited hospitals and distinguished
              medical specialists, she continues to shape Norma Luna Healthcare
              as a trusted bridge between international patients and
              exceptional medical expertise in India.
            </motion.p>
          </div>

          {/* Founder Note - Highlighted Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 rounded-2xl border-l-4 border-primary bg-gradient-to-br from-primary/5 to-blue-50 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">
                A Note from the Founder
              </h3>
            </div>

            <div className="space-y-4 text-lg leading-8 text-slate-700">
              <p>
                Medical travel begins long before a patient boards a flight. It
                begins with trust—the confidence that someone understands what
                you are going through and will help you navigate every decision
                with clarity and care.
              </p>

              <p>
                Norma Luna Healthcare was founded on that belief: to ensure that
                patients crossing borders for treatment never feel they are
                navigating the journey alone.
              </p>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <h4 className="text-2xl font-bold text-slate-900">
              Niveditha Latha
            </h4>
            <p className="mt-2 text-lg text-slate-600">
              Founder &amp; Managing Partner
            </p>
            <p className="mt-1 text-lg font-semibold text-primary">
              Norma Luna Healthcare
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
