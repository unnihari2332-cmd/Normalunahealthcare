// src/components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I know which hospital and specialist are right for my treatment?",
    answer:
      "Every medical journey begins with understanding your individual requirements. Based on your medical records, preferred destination, treatment needs, and other relevant considerations, Norma Luna Healthcare facilitates access to appropriate specialists within its network of NABH and JCI-accredited multispecialty and super-specialty hospitals. The objective is to help you make an informed choice with clarity and confidence.",
  },
  {
    question: "Can I receive a treatment plan and cost estimate before travelling to India?",
    answer:
      "Yes. Your medical records can be shared with the relevant hospital and specialist for preliminary review before you travel. Based on their assessment, an indicative treatment plan, expected duration of stay, and estimated hospital costs can be obtained, allowing you to understand the proposed course of treatment and plan your journey accordingly.",
  },
  {
    question: "Why should I choose Norma Luna Healthcare instead of contacting a hospital directly?",
    answer:
      "Medical travel involves far more than selecting a hospital. Norma Luna Healthcare serves as your dedicated point of coordination, bringing together specialist access, hospital communication, medical documentation, visa assistance, travel planning, accommodation, local transportation, language support, and follow-up coordination into one seamless journey—particularly valuable when navigating healthcare in another country.",
  },
  {
    question: "What support can I expect once I arrive in India?",
    answer:
      "From arrival through treatment and recovery, essential aspects of your stay can be thoughtfully coordinated around your medical schedule. This may include airport transfers, local transportation, accommodation, hospital appointments, interpreter assistance, and communication with the treating institution, allowing you and your accompanying family to focus on the purpose of your journey.",
  },
  {
    question: "What happens after I complete my treatment and return home?",
    answer:
      "The relationship does not simply end when you leave India. Where follow-up is required, Norma Luna Healthcare facilitates continued communication with the treating hospital or specialist, helping coordinate medical reports, follow-up consultations, and recommended next steps to support continuity after your return home.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      // CHANGED: bg-white -> bg-gray-50 (Matches the off-white/light gray in your image)
      className="relative py-16 md:py-24 bg-gray-50 text-neutral-900"
    >
      {/* Subtle top fade to blend with potential white header above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-gray-100/50 to-transparent"
      />

      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
          {/* LEFT: Heading + Image */}
          <div>
            <h2 className="text-[40px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 text-neutral-950">
              Frequently
              <br />
              Asked Questions
            </h2>

            <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
                alt="Medical professionals in a modern hospital setting"
                className="h-[340px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Accordion list */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  // CHANGED: bg-neutral-50 -> bg-white (White cards to stand out against the gray background)
                  className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm data-[state=open]:shadow-md data-[state=open]:ring-black/10 transition-all duration-200"
                >
                  <AccordionTrigger className="group px-6 py-5 md:py-6 text-left [&>svg]:hidden">
                    <div className="flex items-center justify-between gap-6 w-full">
                      <span className="text-xl md:text-2xl font-bold text-neutral-900">
                        {faq.question}
                      </span>

                      {/* Icon Container */}
                      <span
                        className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-600 ring-1 ring-black/5 transition-colors group-hover:bg-gray-200 group-data-[state=open]:bg-neutral-900 group-data-[state=open]:text-white shrink-0"
                        aria-hidden="true"
                      >
                        <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6 pt-0 text-neutral-600 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
