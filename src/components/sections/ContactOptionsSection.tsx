import { motion } from "framer-motion";
import { Phone, Calendar, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    icon: Phone,
    title: "Telephone Support",
    description: "Call us 24/7 and our representatives will help you make an appointment that's convenient for you.",
    action: "Call Support: +91-7358746061",
  },
  {
    icon: Video,
    title: "Online Consultation",
    description: "Experience convenient and secure online health consultations from the comfort of your home.",
    action: "Read More",
  },
  {
    icon: Calendar,
    title: "Book An Appointment",
    description: "Book your appointment today and take the first step towards better health.",
    action: "Book An Appointment",
  },
];

export const ContactOptionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-teal-light/10 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-navy flex items-center justify-center"
                >
                  <option.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                <Button className="bg-navy hover:bg-primary text-navy-foreground rounded-full px-6">
                  {option.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
