import { motion } from "framer-motion";
import {
  Quote,
  HeartHandshake,
  Eye,
  ShieldCheck,
  Hospital,
  Globe,
  Stethoscope,
  Users,
} from "lucide-react";

export const FounderSection = () => {
  const stats = [
    {
      icon: Hospital,
      number: "20+",
      label: "Partner Hospitals",
    },
    {
      icon: Stethoscope,
      number: "25+",
      label: "Medical Specialities",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Patients Assisted",
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries Served",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
      {/* Background Decorations */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Hero Section */}

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Founder Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-[32px] bg-slate-100 shadow-2xl">
              <img
                src="/founder.jpg"
                alt="Niveditha Latha"
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary px-7 py-6 text-white shadow-2xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm leading-5 opacity-90">
                Countries
                <br />
                Served
              </p>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Leadership
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              A Vision That Inspires Trust
            </h2>

            <div className="mt-10">
              <h3 className="text-3xl font-bold text-slate-900">
                Niveditha Latha
              </h3>

              <p className="mt-2 text-lg font-medium text-primary">
                Founder & Managing Partner
              </p>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-9 text-slate-600">
              <p>
                Founded by Niveditha Latha, Norma Luna Healthcare was
                established with a singular vision—to make world-class
                healthcare in India accessible, transparent, and reassuring for
                patients across the globe.
              </p>

              <p>
                With a strong foundation in business leadership and an
                unwavering commitment to trust and compassion, she envisioned an
                organisation that simplifies every aspect of international
                medical care while ensuring dignity, confidence, and peace of
                mind.
              </p>

              <p>
                Through ethical partnerships, personalised coordination, and
                access to internationally accredited hospitals and leading
                specialists, Norma Luna Healthcare has become a trusted bridge
                connecting global patients with exceptional healthcare in India.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <item.icon className="mb-5 h-10 w-10 text-primary" />

              <h3 className="text-4xl font-bold text-slate-900">
                {item.number}
              </h3>

              <p className="mt-2 text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Founder Quote */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-28 max-w-5xl"
        >
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg md:p-14">
            <Quote className="mb-6 h-14 w-14 text-primary" />

            <h3 className="text-3xl font-bold text-slate-900">
              A Note from the Founder
            </h3>

            <p className="mt-8 text-xl italic leading-10 text-slate-600">
              Medical travel begins long before a patient boards a flight. It
              begins with trust—the confidence that someone understands your
              journey and will help you navigate every decision with clarity,
              compassion, and care.
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Norma Luna Healthcare was founded on that belief—to ensure every
              patient crossing borders for treatment never feels alone.
            </p>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <h4 className="text-2xl font-bold text-slate-900">
                Niveditha Latha
              </h4>

              <p className="mt-2 text-lg text-slate-600">
                Founder & Managing Partner
              </p>

              <p className="font-semibold text-primary">
                Norma Luna Healthcare
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Vision Values */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <HeartHandshake className="mb-6 h-12 w-12 text-primary" />

            <h3 className="text-2xl font-bold text-slate-900">Mission</h3>

            <p className="mt-5 leading-8 text-slate-600">
              To simplify access to world-class healthcare in India through
              ethical coordination, trusted partnerships, and compassionate
              patient support.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <Eye className="mb-6 h-12 w-12 text-primary" />

            <h3 className="text-2xl font-bold text-slate-900">Vision</h3>

            <p className="mt-5 leading-8 text-slate-600">
              To become the world's most trusted healthcare facilitator,
              connecting international patients with India's finest medical
              expertise.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <ShieldCheck className="mb-6 h-12 w-12 text-primary" />

            <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>✓ Transparency</li>
              <li>✓ Compassion</li>
              <li>✓ Integrity</li>
              <li>✓ Excellence</li>
              <li>✓ Patient-Centric Care</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[32px] bg-primary p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold">
            Considering Treatment in India?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Begin with a confidential conversation. Norma Luna Healthcare
            connects international patients with leading specialists and
            accredited hospitals while coordinating every stage of the medical
            journey.
          </p>

          <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105">
            Book a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};
