import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

export const FeaturedTestimonialsHeader = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-primary font-medium">Heartfelt Stories of Healing</p>
              <h3 className="font-display text-2xl font-bold">
                Real-Life Stories of Healing and Hope
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground max-w-xl text-center md:text-left">
            Discover the heartfelt experiences of those who've trusted Norma Luna Healthcare. Our patients' stories reflect the compassionate care and unwavering commitment we provide every day. See how we've made a difference in their lives.
          </p>
          <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <Quote className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Trusted Voices, Caring Stories</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
