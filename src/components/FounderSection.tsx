import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";

export const FounderSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-12 lg:py-16"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(59,130,246,0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(147,197,253,0.08) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundSize: "60px 60px, auto, auto",
        backgroundPosition: "center, center, center",
      }}
    >
      {/* Background Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-200 opacity-15 blur-3xl"
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Leadership
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            A Vision That Inspires Trust
          </h2>

          {/* Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 border-l-4 border-blue-600 pl-5"
          >
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Niveditha Latha
            </h3>
            <p className="mt-2 text-base font-medium text-blue-600 md:text-lg">
              Founder &amp; Managing Partner | Norma Luna Healthcare
            </p>
          </motion.div>

          {/* Story */}
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
              transition={{ delay: 0.3 }}
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
              transition={{ delay: 0.4 }}
            >
              Through ethical partnerships, personalised coordination, and
              access to internationally accredited hospitals and distinguished
              medical specialists, she continues to shape Norma Luna Healthcare
              as a trusted bridge between international patients and exceptional
              medical expertise in India.
            </motion.p>
          </div>

          {/* Founder Note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 border-l-4 border-blue-600 pl-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <Quote className="h-7 w-7 text-blue-600" />
              <h3 className="text-2xl font-semibold text-slate-900">
                A Note from the Founder
              </h3>
            </div>

            <div className="space-y-3 text-lg leading-8 text-slate-700">
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
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8"
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
