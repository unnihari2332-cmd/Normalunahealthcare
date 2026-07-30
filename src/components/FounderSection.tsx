import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Background Decoration */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          {/* Section Label */}

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Leadership
          </span>

          {/* Heading */}

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            A Vision That Inspires Trust
          </h2>

          {/* Founder */}

          <div className="mt-8 border-l-4 border-primary pl-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Niveditha Latha
            </h3>

            <p className="mt-2 text-lg font-medium text-primary">
              Founder &amp; Managing Partner | Norma Luna Healthcare
            </p>
          </div>

          {/* Story */}

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">
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

          <div className="my-12 h-px w-full bg-slate-200" />

          {/* Founder Note */}

          <div>
            <div className="flex items-center gap-3">
              <Quote className="h-8 w-8 text-primary" />

              <h3 className="text-2xl font-semibold text-slate-900">
                A Note from the Founder
              </h3>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-9 text-slate-600">
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
          </div>

          {/* Signature */}

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h4 className="text-2xl font-bold text-slate-900">
              Niveditha Latha
            </h4>

            <p className="mt-2 text-lg text-slate-600">
              Founder &amp; Managing Partner
            </p>

            <p className="mt-1 text-lg font-semibold text-primary">
              Norma Luna Healthcare
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
