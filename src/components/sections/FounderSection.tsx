import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src=""
                alt="Niveditha Latha"
                className="w-full h-[700px] object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-8 bg-primary text-white rounded-2xl px-8 py-6 shadow-xl">
              <h3 className="text-2xl font-bold">
                Niveditha Latha
              </h3>
              <p className="text-sm uppercase tracking-widest mt-1 opacity-90">
                Founder & Managing Partner
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="uppercase tracking-[0.25em] text-primary font-semibold text-sm">
              Leadership
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              A Vision That Inspires Trust
            </h2>

            <div className="mt-10 space-y-6 text-slate-600 text-lg leading-relaxed">

              <p>
                <strong>Niveditha Latha</strong><br />
                Founder &amp; Managing Partner | Norma Luna Healthcare
              </p>

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

        </div>

        {/* Founder Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-10 lg:p-14">

            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10 fill-primary/10" />

            <span className="text-primary uppercase tracking-[0.2em] font-semibold text-sm">
              A Note from the Founder
            </span>

            <blockquote className="mt-6 text-2xl leading-relaxed text-slate-800 font-medium italic">
              “Medical travel begins long before a patient boards a flight.
              It begins with trust—the confidence that someone understands
              what you are going through and will help you navigate every
              decision with clarity and care.
              <br /><br />
              Norma Luna Healthcare was founded on that belief: to ensure
              that patients crossing borders for treatment never feel they
              are navigating the journey alone.”
            </blockquote>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <h4 className="font-bold text-xl text-slate-900">
                — Niveditha Latha
              </h4>

              <p className="text-slate-600 mt-1">
                Founder &amp; Managing Partner
              </p>

              <p className="text-primary font-semibold mt-2">
                Norma Luna Healthcare
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
