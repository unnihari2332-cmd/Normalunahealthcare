import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address Business",
    content: "No 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel, Thousand Lights West, Nungambakkam, Chennai, Tamil Nadu 600034",
  },
  {
    icon: Phone,
    title: "Contact With Us",
    content: "Call An Appointment: +91-7358746061",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@normaluna.org",
  },
  {
    icon: Clock,
    title: "Working Time",
    content: "24/7 support",
  },
];

export const ContactForm = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Send Us Your Message!
            </h2>
            <p className="text-muted-foreground mb-8">
              We are always ready to help you at any time, let's talk together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="*Full Name" className="rounded-lg" />
                <Input placeholder="*Email Address" type="email" className="rounded-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="*Phone Number" className="rounded-lg" />
                <Select>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="What are your needs?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="appointment">Appointment</SelectItem>
                    <SelectItem value="inquiry">General Inquiry</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea placeholder="Message..." className="rounded-lg min-h-[150px]" />

              <Button
                type="submit"
                className="bg-navy hover:bg-primary text-navy-foreground rounded-full px-8 group"
              >
                Submit Require
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-lg h-[300px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7754842307775!2d80.24830887507825!3d13.05108218727787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662f18e0e9a1%3A0xb4b0f7f93c89c9f!2sNungambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704460800000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};
