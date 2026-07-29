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
      "Every medical journey begins with understanding your individual healthcare needs. Based on your medical records, preferred destination, treatment requirements, and other relevant factors, Norma Luna Healthcare facilitates access to suitable specialists within its network of NABH and JCI-accredited multispecialty and super-specialty hospitals. This enables you to make an informed decision with confidence before beginning your treatment journey.",
  },
  {
    question: "Can I receive a treatment plan and cost estimate before travelling to India?",
    answer:
      "Yes. Your medical records can be securely shared with the appropriate hospital and specialist for a preliminary medical review before you travel. Based on their assessment, you can receive an indicative treatment plan, estimated hospital costs, expected duration of stay, and other relevant recommendations, allowing you to plan your medical journey with greater clarity.",
  },
  {
    question: "Why should I choose Norma Luna Healthcare instead of contacting a hospital directly?",
    answer:
      "Medical travel involves much more than selecting a hospital. Norma Luna Healthcare serves as your dedicated healthcare facilitator by coordinating specialist access, hospital communication, medical documentation, visa guidance, travel planning, accommodation, airport transfers, language assistance, and post-treatment follow-up. Our goal is to make your international healthcare journey smooth, organized, and stress-free.",
  },
  {
    question: "What support can I expect once I arrive in India?",
    answer:
      "From your arrival until your return home, Norma Luna Healthcare coordinates essential services around your treatment schedule. This includes airport pickup, local transportation, accommodation assistance, hospital appointments, interpreter support, and ongoing coordination with your treating hospital, allowing both you and your accompanying family members to focus on recovery with peace of mind.",
  },
  {
    question: "What happens after I complete my treatment and return home?",
    answer:
      "Our support continues even after you return to your home country. When follow-up care is required, Norma Luna Healthcare facilitates communication with your treating hospital or specialist, coordinates medical reports, arranges virtual follow-up consultations where applicable, and assists with recommended next steps to ensure continuity of care after your treatment.",
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
