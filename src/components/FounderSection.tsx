import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";

export const FounderSection = () => {
  return (
    <section 
      className="relative overflow-hidden py-16 lg:py-24 bg-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(147, 197, 253, 0.08) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundSize: '60px 60px, auto, auto',
        backgroundPosition: 'center, center, center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Floating Elements */}
      <motion.div
        animate={{ float: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-blue-100 opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ float: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-200 opacity-15 blur-3xl"
      />

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
            <Heart className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Leadership
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            A Vision That Inspires Trust
          </h2>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 border-l-4 border-blue-600 pl-6"
          >
            <h3 className="text-3xl font-bold text-slate-900">
              Niveditha Latha
            </h3>
            <p className="mt-3 text-lg font-medium text-blue-600">
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

          {/* Founder Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 border-l-4 border-blue-600 pl-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Quote className="h-8 w-8 text-blue-600" />
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
            <p className="mt-1 text-lg font-semibold text-blue-600">
              Norma Luna Healthcare
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
