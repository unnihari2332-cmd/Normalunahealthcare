import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: `Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference. I am now cancer-free, and I owe it to their expertise and support`,
  },
  {
    name: "Amal N.",
    location: "Sri Lanka",
    treatment: "Hip Replacement",
    content: `After suffering for years with severe arthritis, I could barely walk. Hip replacement surgery in Sri Lanka was too costly, and I feared long waiting times. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai, meeting one of the best orthopaedic surgeons in India. The hospital used advanced robotic-assisted technology for precise surgery and a faster recovery. Just days after surgery, I was walking again without pain. The team handled every detail, from physiotherapy to a smooth return journey home. I now live pain-free, thanks to them!`,
  },
  {
    name: "Zoya & Kareem R.",
    location: "Bangladesh",
    treatment: "Twin Pregnancy Complication",
    content: `When we found out we were expecting twins, we were overjoyed. But at five months, complications arose, and doctors in Bangladesh warned us of a high-risk delivery. We were devastated. That’s when a family friend recommended Norma Luna Healthcare, and it changed everything. The team arranged immediate consultations with a top maternal-fetal specialist. The hospital was equipped with advanced NICU facilities, giving our babies the best chance of survival. Norma Luna even arranged for a translator and special dietary care for my wife during her stay. Our twins were born healthy, and today, we look at them with gratitude, knowing that none of this would have been possible without the seamless care and expertise in India.`,
  },
];

export const TestimonialsSection = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-primary text-sm font-semibold uppercase mb-2">
              Real Stories. Real Results.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Patient Testimonials
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            Drag to explore <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <motion.div ref={carousel} className="cursor-grab">
          <motion.div
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            className="flex gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[340px] md:min-w-[520px] bg-white rounded-3xl p-8 shadow-md border flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <div className="flex-grow overflow-y-auto max-h-[320px] pr-2">
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {t.content}
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t">
                  <h4 className="font-semibold text-lg">{t.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="text-primary font-medium">{t.location}</span>{" "}
                    | {t.treatment}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="text-center mt-14">
          <Link to="/testimonials">
            <Button className="rounded-full px-8">
              View All Testimonials
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
