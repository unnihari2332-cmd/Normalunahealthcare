import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const whatsappUrl =
  "https://wa.me/917358746061?text=Hello%20Norma%20Luna%2C%20I%27d%20like%20to%20enquire%20about%20dental%20care%20in%20India.";

const treatments = [
  {
    title: "Dental implants",
    text: "Explore implant options with a dental specialist, including whether additional procedures or visits may be needed.",
  },
  {
    title: "Full-mouth restoration",
    text: "Discuss complex restorative plans, including implant-supported options where clinically appropriate.",
  },
  {
    title: "Crowns & veneers",
    text: "Ask about restorative and cosmetic options based on your oral health and treatment goals.",
  },
  {
    title: "Other dental care",
    text: "Get help finding the right specialist for root canals, orthodontics, gum care or oral surgery.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Tell us what you need",
    text: "Share the dental treatment you are considering and where you will be travelling from. You can start without sending medical records in a chat.",
  },
  {
    icon: ClipboardList,
    title: "Explore a clinical review",
    text: "We help coordinate a consultation with a dental provider. The treating dentist assesses suitability and recommends any investigations.",
  },
  {
    icon: Plane,
    title: "Plan the journey",
    text: "Once a provider proposes a plan, we can help coordinate appointments, indicative costs and travel logistics around the expected visits.",
  },
  {
    icon: HeartHandshake,
    title: "Stay connected",
    text: "We help keep you in touch with the treating provider about follow-up and next steps after your visit.",
  },
];

const faqs = [
  {
    question: "Does Norma Luna provide the dental treatment?",
    answer:
      "No. Norma Luna Healthcare is a care-coordination service. Dental assessment and treatment are provided by the treating dental professionals, who make the clinical decisions.",
  },
  {
    question: "Can I receive a price before travelling?",
    answer:
      "We can help request an indicative estimate from a provider. The final treatment plan and cost depend on a dental assessment and may change if further investigations or procedures are needed.",
  },
  {
    question: "How many visits will I need?",
    answer:
      "That depends on the procedure and your clinical needs. Some implant and restorative treatments are staged. Your treating dentist will advise on the likely schedule and follow-up before you make travel plans.",
  },
  {
    question: "Can you help with travel arrangements?",
    answer:
      "We can help coordinate appointments and discuss travel, accommodation and local support requirements once a proposed treatment schedule is available.",
  },
];

const DentalLanding = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = "Dental Care in India | Norma Luna Healthcare";
    if (description) {
      description.content =
        "Explore dental care in India with Norma Luna Healthcare. We help international patients coordinate specialist consultations, treatment planning and travel.";
    }
    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#0B2947] pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(78,165,225,0.24),transparent_40%)]" aria-hidden="true" />
          <div className="container relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-100 sm:text-sm">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Dental care coordination in India
              </p>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Exploring dental treatment in India?
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-50 sm:text-lg">
                We help international patients connect with dental professionals and coordinate consultations, proposed treatment plans and travel arrangements. Start with a conversation about what you need.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#0B2947] transition-colors hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Ask about dental care <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="tel:+917358746061" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call our coordinator
                </a>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-blue-100">
                Norma Luna coordinates care; your treating dentist determines clinical suitability, treatment and costs.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">A clearer first step</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Understand the plan before you travel</h2>
              <ul className="mt-7 space-y-5">
                {["Discuss your goals and the dental care you are considering", "Explore a provider consultation and possible treatment steps", "Review the proposed schedule and indicative costs", "Coordinate travel around the clinical plan"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-blue-50 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20" aria-labelledby="dental-options">
          <div className="container mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">What we can help you explore</p>
            <h2 id="dental-options" className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">Dental care that starts with your needs</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Every treatment decision belongs to you and the treating dental professional. We help you get the information needed to plan the next step.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {treatments.map(({ title, text }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-5 h-1 w-10 rounded-full bg-blue-600" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-[#0B2947]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F0F6FA] py-16 sm:py-20" aria-labelledby="dental-process">
          <div className="container mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">How it works</p>
            <h2 id="dental-process" className="mt-3 font-display text-3xl font-bold sm:text-4xl">From first enquiry to a clearer plan</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                    <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#0B2947]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20" aria-labelledby="dental-faq">
          <div className="container mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Frequently asked questions</p>
              <h2 id="dental-faq" className="mt-3 font-display text-3xl font-bold sm:text-4xl">Plan with fewer unknowns</h2>
              <p className="mt-4 leading-relaxed text-slate-600">The details depend on your dentist's assessment. These answers explain how our coordination works.</p>
            </div>
            <div className="space-y-3">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group rounded-2xl border border-slate-200 p-5 open:border-blue-200 open:bg-blue-50/40">
                  <summary className="cursor-pointer font-semibold text-[#0B2947] marker:text-blue-600">{question}</summary>
                  <p className="mt-3 pl-4 text-sm leading-relaxed text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B2947] py-16 text-white sm:py-20" aria-labelledby="dental-contact">
          <div className="container mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 id="dental-contact" className="font-display text-3xl font-bold sm:text-4xl">Ready to discuss your dental care?</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-blue-100">Tell us what you are considering and where you are travelling from. We can discuss how to begin a provider consultation.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#0B2947] hover:bg-blue-100">Start a dental enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-7 py-3 font-semibold text-white hover:bg-white/10">Other ways to contact us</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DentalLanding;
