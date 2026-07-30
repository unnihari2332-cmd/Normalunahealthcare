import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const benefits = [
  "Personalized assistance for your medical journey.",
  "Access to top hospitals and renowned specialists.",
  "Hassle-free coordination of travel and treatment.",
  "Transparent cost estimation and budget-friendly options.",
  "Support with visa, accommodation, and local transport.",
  "Guidance on the best treatment options available.",
];

export const AppointmentForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <section id="appointment-form" className="py-16 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Write Your Concern
            </h2>
            <p className="text-muted-foreground mb-8">
              Take care of your health and that of your family today!
            </p>

            <form
              action="https://formsubmit.co/info@normalunahealthcare.com"
              method="POST"
              className="space-y-6"
            >
              {/* FormSubmit Configuration Settings */}
              <input type="hidden" name="_subject" value="New Concern/Appointment Submission" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name*</label>
                  <Input name="fullName" placeholder="Full Name..." className="rounded-lg" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Address</label>
                  <Input name="address" placeholder="Your Address..." className="rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone*</label>
                  <Input name="phone" placeholder="Phone Number..." className="rounded-lg" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email*</label>
                  <Input name="email" placeholder="Email address..." type="email" className="rounded-lg" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Country</label>
                  <Input name="country" placeholder="Your Country..." className="rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Gender*</label>
                  <Select name="gender" required>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Choose gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Treatment</label>
                  <Select name="treatment">
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select Treatment" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="General Checkup">
                        General Checkup
                      </SelectItem>
                      <SelectItem value="IVF & Gynaecology">
                        IVF & Gynaecology
                      </SelectItem>
                      <SelectItem value="Gastroenterology">
                        Gastroenterology
                      </SelectItem>
                      <SelectItem value="Oncology">
                        Oncology
                      </SelectItem>
                      <SelectItem value="Transplants">
                        Transplants
                      </SelectItem>
                      <SelectItem value="Cardiology">
                        Cardiology
                      </SelectItem>
                      <SelectItem value="Neurology">
                        Neurology
                      </SelectItem>
                      <SelectItem value="Orthopaedics">
                        Orthopaedics
                      </SelectItem>
                      <SelectItem value="Dental Care">
                        Dental Care
                      </SelectItem>
                      <SelectItem value="Gender Reassignment Surgery">
                        Gender Reassignment Surgery
                      </SelectItem>
                      <SelectItem value="Bariatrics">
                        Bariatrics
                      </SelectItem>
                      <SelectItem value="Aesthetic Surgery">
                        Aesthetic Surgery
                      </SelectItem>
                      <SelectItem value="Ophthalmology">
                        Ophthalmology
                      </SelectItem>
                      <SelectItem value="Nephrology">
                        Nephrology
                      </SelectItem>
                      <SelectItem value="Urology">
                        Urology
                      </SelectItem>
                      <SelectItem value="Andrology">
                        Andrology
                      </SelectItem>
                      <SelectItem value="Colorectal Surgery">
                        Colorectal Surgery
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Date of Birth*</label>
                  <Input name="dob" type="date" className="rounded-lg" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea name="message" placeholder="Write content..." className="rounded-lg min-h-[100px]" />
              </div>
              
              <Button
                type="submit"
                className="bg-navy hover:bg-primary text-navy-foreground rounded-full px-8 group"
              >
                Submit Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary rounded-2xl p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-6">
                Benefits If You Schedule An Appointment
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-primary-foreground/90"
                  >
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Hospital Room Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
                alt="Hospital Room"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
