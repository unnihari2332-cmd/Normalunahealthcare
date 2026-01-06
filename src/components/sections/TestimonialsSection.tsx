import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    content: `Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference. I am now cancer-free, and I owe it to their expertise and support.`,
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
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-primary text-sm font-semibold uppercase mb-2">
            Real Stories. Real Results.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Patient Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-md border flex flex-col min-h-[580px]"
            >
              <Quote className="w-9 h-9 text-primary/20 mb-6" />

              <p className="text-muted-foreground whitespace-pre-line leading-relaxed text-[15px]">
                {t.content}
              </p>

              <div className="mt-auto pt-6 border-t">
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="text-primary font-medium">
                    {t.location}
                  </span>{" "}
                  | {t.treatment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
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
