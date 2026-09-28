import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  HeartHandshake,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const whatsappUrl = (topic: string) =>
  `https://wa.me/917358746061?text=${encodeURIComponent(`Hello Norma Luna, I'd like to ask about ${topic} in India.`)}`;

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
    text: "Tell us what you are considering and where you will travel from. No medical records are needed to start a chat.",
  },
  {
    icon: ClipboardList,
    title: "Explore a clinical review",
    text: "We help arrange a consultation. The treating dentist assesses your needs and advises on further investigations.",
  },
  {
    icon: Plane,
    title: "Plan the journey",
    text: "We can coordinate appointments and travel around the provider's proposed visits and indicative costs.",
  },
  {
    icon: HeartHandshake,
    title: "Stay connected",
    text: "We help you stay in touch with the treating provider about follow-up after your visit.",
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
        <section className="relative overflow-hidden bg-[#0B2947] pt-28 pb-12 text-white sm:pt-36 sm:pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(78,165,225,0.24),transparent_40%)]" aria-hidden="true" />
          <div className="container relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-100 sm:text-sm">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Dental care coordination in India
              </p>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Plan your dental care in India before you travel.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-50 sm:text-lg">
                Considering implants, crowns or more extensive dental work? We help you connect with dental providers, discuss proposed visits and indicative costs, and coordinate travel around a clinical plan.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl("dental care")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#0B2947] transition-colors hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Discuss my dental options <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="tel:+917358746061" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call our coordinator
                </a>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-blue-100">
                Norma Luna coordinates care. Your treating dentist determines suitability, treatment and final costs.
              </p>
            </div>
            <div className="hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-sm lg:block">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Before you book your flight</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Know what comes next.</h2>
              <ol className="mt-7 space-y-5">
                {["Share the treatment you are considering", "Explore a consultation with a dental provider", "Review proposed visits, costs and travel plans"].map((item, index) => (
                  <li key={item} className="flex items-start gap-4 text-base leading-relaxed text-blue-50">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-sky-200">0{index + 1}</span>{item}
                  </li>
                ))}
              </ol>
              <p className="mt-7 border-t border-white/20 pt-5 text-sm text-blue-100">A proposed plan is not a clinical diagnosis or a guaranteed quote.</p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20" aria-labelledby="dental-options">
          <div className="container mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Choose a starting point</p>
            <h2 id="dental-options" className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">What treatment are you considering?</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Start with the option closest to your needs. A treating dentist can assess which approach is appropriate.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {treatments.map(({ title, text }) => (
                <article key={title} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-5 h-1 w-10 rounded-full bg-blue-600" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-[#0B2947]">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{text}</p>
                  <a href={whatsappUrl(title.toLowerCase())} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-blue-800 hover:text-blue-600 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Ask about {title.toLowerCase()} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F0F6FA] py-16 sm:py-20" aria-labelledby="dental-process">
          <div className="container mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">How it works</p>
            <h2 id="dental-process" className="mt-3 font-display text-3xl font-bold sm:text-4xl">What happens after you enquire?</h2>
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
              <a href={whatsappUrl("dental care")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#0B2947] hover:bg-blue-100">Start a dental enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
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
