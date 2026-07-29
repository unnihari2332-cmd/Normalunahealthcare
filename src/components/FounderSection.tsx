import { motion } from "framer-motion";

export const FounderSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Section Label */}
          <span className="text-primary uppercase tracking-[0.25em] font-semibold text-sm">
            Leadership
          </span>

          {/* Main Heading */}
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            A Vision That Inspires Trust
          </h2>

          {/* Founder Details */}
          <div className="mt-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Niveditha Latha
            </h3>

            <p className="mt-2 text-primary font-medium text-lg">
              Founder &amp; Managing Partner | Norma Luna Healthcare
            </p>
          </div>

          {/* Content */}
          <div className="mt-10 space-y-8 text-slate-600 text-lg leading-9">
            <p>
              Founded by Niveditha Latha, Norma Luna Healthcare was established
              with a singular vision—to make world-class healthcare in India
              accessible, transparent, and reassuring for patients across the
              globe.
            </p>

            <p>
              With a strong foundation in business leadership and an unwavering
              commitment to trust and compassion, Niveditha envisioned an
              organisation that would simplify the complexities of seeking
              medical treatment abroad. Her philosophy is rooted in ensuring
              that every patient experiences clarity, dignity, and confidence
              while navigating important healthcare decisions.
            </p>

            <p>
              Through ethical partnerships, personalised coordination, and
              access to internationally accredited hospitals and distinguished
              medical specialists, she continues to shape Norma Luna Healthcare
              as a trusted bridge between international patients and
              exceptional medical expertise in India.
            </p>
          </div>

          {/* Divider */}
          <div className="my-16 border-t border-slate-200" />

          {/* Founder Note */}
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            A Note from the Founder
          </h3>

          <blockquote className="mt-8 border-l-4 border-primary pl-8 text-xl md:text-2xl italic text-slate-700 leading-10">
            “Medical travel begins long before a patient boards a flight. It
            begins with trust—the confidence that someone understands what you
            are going through and will help you navigate every decision with
            clarity and care.
            <br />
            <br />
            Norma Luna Healthcare was founded on that belief: to ensure that
            patients crossing borders for treatment never feel they are
            navigating the journey alone.”
          </blockquote>

          {/* Signature */}
          <div className="mt-10">
            <h4 className="text-2xl font-bold text-slate-900">
              — Niveditha Latha
            </h4>

            <p className="mt-2 text-slate-600 text-lg">
              Founder &amp; Managing Partner
            </p>

            <p className="text-primary font-semibold text-lg">
              Norma Luna Healthcare
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
