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
    question: "What types of medical treatments do you offer for international patients?",
    answer:
      "Norma Luna Healthcare connects international patients with top hospitals and specialists across India. Our network includes multi-specialty and super-specialty hospitals following international standards. We facilitate treatments in cardiology, orthopedics, dermatology, surgery, and more at affordable prices. With expert doctors and advanced technology, we ensure quality care and a comfortable experience.",
  },
  {
    question: "How can I book a consultation or treatment at Norma Luna from international countries?",
    answer:
      "Booking a consultation is easy! You can contact us through our website, email, or by calling our international helpline. We will assist you with scheduling an appointment, arranging your treatment plan, and guiding you through the necessary documentation.",
  },
  {
    question: "Are your doctors trained to handle foreign patients?",
    answer:
      "Yes, our doctors are highly trained and experienced in treating international patients. Many of our specialists are fluent in English, and we also offer interpreters for other languages to ensure clear communication and comfort throughout your treatment process. We also have professional translators to guide you according to your needs.",
  },
  {
    question: "Do you offer any medical packages or discounts for foreign patients?",
    answer:
      "Norma Luna offers competitive pricing for international patients, including customizable medical packages that can include consultations, treatments, and accommodation if necessary. We also have special discounts for first-time international patients, depending on the treatment required.",
  },
  {
    question: "What are the post-treatment follow-up procedures for international patients?",
    answer:
      "We offer post-treatment follow-up care through virtual consultations or phone calls to ensure you are healing well. Our healthcare team will provide you with detailed instructions for recovery and can help you coordinate any necessary follow-up visits during your stay or remotely when you return to your home country.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      // CHANGED: bg-neutral-950 to bg-white, text-white to text-neutral-900
      className="relative py-16 md:py-24 bg-white text-neutral-900"
    >
      {/* subtle top glow (adjusted for light theme) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-neutral-500/10 to-transparent"
      />

      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-start">
          {/* LEFT: Heading + Image */}
          <div>
            <h2 className="text-[40px] leading-[1.05] sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
              Frequently
              <br />
              Asked Questions
            </h2>

            {/* CHANGED: Ring color from white/10 to neutral-200 */}
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-neutral-200 shadow-2xl">
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
                  // CHANGED: bg-white/5 to bg-neutral-50 (light gray), updated rings/shadows for light mode
                  className="rounded-2xl bg-neutral-50 ring-1 ring-neutral-200 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.1)] data-[state=open]:ring-neutral-400"
                >
                  <AccordionTrigger className="group px-6 py-5 md:py-6 text-left [&>svg]:hidden">
                    <div className="flex items-center justify-between gap-6 w-full">
                      <span className="text-xl md:text-2xl font-extrabold">
                        {faq.question}
                      </span>

                      {/* CHANGED: Icon background colors to suit light theme */}
                      <span
                        className="grid h-10 w-10 place-items-center rounded-full bg-neutral-200 ring-1 ring-neutral-300 transition-colors group-data-[state=open]:bg-neutral-300 shrink-0"
                        aria-hidden="true"
                      >
                        <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
                      </span>
                    </div>
                  </AccordionTrigger>

                  {/* CHANGED: Text color to neutral-600 */}
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
