import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary uppercase tracking-[0.25em] text-sm font-semibold">
              Leadership
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-10 leading-tight">
              A Vision That Inspires Trust
            </h2>

            <div className="border-l-4 border-primary pl-6 mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Niveditha Latha
              </h3>

              <p className="text-primary font-medium mt-2">
                Founder &amp; Managing Partner | Norma Luna Healthcare
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">

              <p>
                Founded by Niveditha Latha, Norma Luna Healthcare was
                established with a singular vision—to make world-class
                healthcare in India accessible, transparent, and reassuring
                for patients across the globe.
              </p>

              <p>
                With a strong foundation in business leadership and an
                unwavering commitment to trust and compassion, Niveditha
                envisioned an organisation that would simplify the
                complexities of seeking medical treatment abroad. Her
                philosophy is rooted in ensuring that every patient
                experiences clarity, dignity, and confidence while navigating
                important healthcare decisions.
              </p>

              <p>
                Through ethical partnerships, personalised coordination,
                and access to internationally accredited hospitals and
                distinguished medical specialists, she continues to shape
                Norma Luna Healthcare as a trusted bridge between
                international patients and exceptional medical expertise in
                India.
              </p>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 h-full relative">

              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10 fill-primary/10" />

              <span className="uppercase tracking-[0.2em] text-primary font-semibold text-sm">
                A Note from the Founder
              </span>

              <blockquote className="mt-8 text-xl lg:text-2xl italic text-slate-800 leading-relaxed">

                “Medical travel begins long before a patient boards a flight.
                It begins with trust—the confidence that someone understands
                what you are going through and will help you navigate every
                decision with clarity and care.

                <br />
                <br />

                Norma Luna Healthcare was founded on that belief: to ensure
                that patients crossing borders for treatment never feel they
                are navigating the journey alone.”

              </blockquote>

              <div className="mt-10 pt-6 border-t border-slate-200">
                <h4 className="font-bold text-xl text-slate-900">
                  — Niveditha Latha
                </h4>

                <p className="text-slate-600 mt-2">
                  Founder &amp; Managing Partner
                </p>

                <p className="text-primary font-semibold mt-1">
                  Norma Luna Healthcare
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
