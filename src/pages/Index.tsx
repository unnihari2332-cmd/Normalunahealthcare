import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, Video, Heart, Shield, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";
import medicalTeam from "@/assets/medical-team.jpg";

const features = [
  {
    icon: Heart,
    title: "Knowledge and Skill",
    description: "Surgical and non-surgical treatment options at top hospitals worldwide.",
  },
  {
    icon: Shield,
    title: "Commitment to Quality",
    description: "We prioritize excellence in every procedure and patient interaction.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Every treatment plan is personalized to your unique needs.",
  },
];

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

const testimonials = [
  {
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options. Norma Luna Healthcare gave me hope. The doctors took time to explain every step of the procedure. Today, I feel stronger, and my symptoms have significantly improved.",
  },
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: "Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference. I am now cancer-free.",
  },
  {
    name: "Amal N.",
    location: "Sri Lanka",
    treatment: "Hip Replacement",
    content: "After suffering for years with severe arthritis, I could barely walk. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai, meeting one of the best orthopedic surgeons in India. I now live pain-free, thanks to them!",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        </div>

        {/* Animated shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
        />

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold font-medium mb-4"
            >
              Welcome to Norma Luna Healthcare
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Your Health, Our Priority.
              <br />
              <span className="text-primary">Trusted Healthcare</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/80 text-lg mb-8 max-w-xl"
            >
              At Norma Luna Healthcare, we don't just treat illnesses – we nurture hope and healing. Your well-being is our heartfelt mission, every step of the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/appointment">
                <Button size="lg" className="bg-primary hover:bg-teal-light text-primary-foreground rounded-full px-8 group">
                  Book An Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Support Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 inline-flex items-center gap-4 bg-card/10 backdrop-blur-md rounded-full px-6 py-3 border border-primary-foreground/20"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-sm">24/7 Support</p>
                <p className="text-primary-foreground font-semibold text-lg">+91 73587 46061</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bringing Care Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium mb-2">About Norma Luna</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Bringing Care Closer to You
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you or your loved ones face a medical challenge, finding the right healthcare can feel overwhelming. That's where Norma Luna Healthcare steps in—a trusted partner connecting patients to world-class medical facilities at affordable prices.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From life-saving surgeries to preventive checkups, we simplify the entire process—medical visa, travel, accommodation, and local transport. Our team ensures seamless care for every patient, every step of the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 bg-secondary rounded-xl text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={medicalTeam}
                  alt="Medical Team"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">5+</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                    <p className="font-semibold">In Healthcare</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Contact Options */}
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

      {/* Testimonials Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium mb-2">What Our Patients Say</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Patient Testimonials: Real Stories, Real Results
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/testimonials">
              <Button variant="outline" className="rounded-full px-8">
                View All Testimonials
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-teal-dark to-primary relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary-foreground/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-primary-foreground/10"
        />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Transforming Health, Empowering Lives
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Take care of your health and that of your family today. Book an appointment and start your journey to better health.
            </p>
            <Link to="/appointment">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-accent-foreground rounded-full px-10 font-semibold">
                Book An Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
