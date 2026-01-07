import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { getSpecialityById, specialities } from "@/data/specialities";
import { 
  Check, 
  ArrowRight, 
  Play, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Users,
  Star,
  Shield,
  Heart
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-medical.jpg";

const SpecialityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const speciality = id ? getSpecialityById(id) : undefined;

  if (!speciality) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-40 pb-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Speciality Not Found</h1>
          <Link to="/specialities">
            <Button>Back to Specialities</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get other specialities for sidebar (excluding current one)
  const otherSpecialities = specialities.filter(s => s.id !== speciality.id);

  const whyChooseUsItems = [
    { icon: Star, text: "Experience and Expertise" },
    { icon: Shield, text: "Pathology Analysis" },
    { icon: Users, text: "Customer Focused" },
    { icon: Heart, text: "Honesty and integrity" },
    { icon: Check, text: "Reasonable Treatment Prices" },
  ];

  const primaryCareItems = [
    { 
      icon: Users, 
      title: "Focused Customer", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere et dolor sed vehicula." 
    },
    { 
      icon: Star, 
      title: "24/7 Care", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere et dolor sed vehicula." 
    },
    { 
      icon: Clock, 
      title: "Timely Care", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere et dolor sed vehicula." 
    },
  ];

  const faqItems = [
    { question: "Can I know the doctors' credentials?", answer: "Cras facilisis quam placerat massa euismod accumsan. Nulla ac neque non sapien blandit bibendum. Aenean malesuada porta sapien, in Interdum urna commodo." },
    { question: "If I'm taking a companion, when can he or she travel?", answer: "Our team coordinates companion travel arrangements to align with your treatment schedule. Companions can typically travel with you or arrive shortly after." },
    { question: "What happens if I need follow-up?", answer: "We provide comprehensive follow-up care through telemedicine consultations and coordinate with local healthcare providers for ongoing care." },
    { question: "What does the treatment package include?", answer: "Our treatment packages include medical procedures, hospital stay, medications during hospitalization, and post-operative care as specified in your treatment plan." },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title={speciality.title}
          image={heroImage}
          breadcrumbs={[
            { label: "Specialities", path: "/specialities" },
            { label: speciality.title }
          ]}
        />
      </div>

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - 2/3 */}
            <div className="lg:col-span-2 space-y-12">
              {/* Video/Image Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src={speciality.image}
                  alt={speciality.title}
                  className="w-full h-[400px] object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-navy fill-navy ml-1" />
                  </div>
                </button>
              </motion.div>

              {/* Our Approach Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Approach to {speciality.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {speciality.fullDescription}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We've redesigned the patient experience to fit your life, put you at ease, and treat you as a whole
                  person. We create safe and inviting spaces, ask meaningful questions, give you time to talk, and listen
                  without judgment. Then we work with you with a plan to help you feel your best — whether you want to
                  address a specific concern or simply maintain your health.
                </p>
              </motion.div>

              {/* Primary Care Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
                  Primary Care
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  To continue shedding a light on quality healthcare, we teamed up with the award-winning physicians
                  to create a care system ensuring comprehensive patient support. See how the project came to life
                  in the video above — and if you're struggling, we can help.
                </p>

                {/* Primary Care Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {primaryCareItems.map((item, index) => (
                    <div 
                      key={index}
                      className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#E8F4F8] flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  {speciality.benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Our Industry Expertise Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                  Our Industry Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  You know your body better than anyone, so when aches, pains or sprains make your life more challenging,
                  it's a good idea to seek help from specialists. At our healthcare facility, you'll have a care team of experts — who
                  can help you find relief when you're living with the following conditions:
                </p>

                {/* Treatments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {speciality.treatments.map((treatment, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer group"
                    >
                      <span className="text-foreground">{index + 1}. {treatment}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Treatment Process Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                  Our Treatment Process
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you've been living with symptoms for a while or you've just started noticing muscle or bone pain,
                  we can help pinpoint what's ailing you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src={speciality.image} 
                      alt="Treatment process" 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {step === 1 ? "Fill In Our Medical Application" : 
                             step === 2 ? "Complete Initial Assessment" : 
                             "Begin Your Treatment Plan"}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Cras facilisis quam placerat massa euismod accumsan. Nulla ac neque non sapien.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                  FAQs About The Service
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  There are many questions about the service, we have selected frequently asked questions about this
                  service. If you do not see your answer, please contact us.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>

            {/* Right Sidebar - 1/3 */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24"
              >
                {/* Services List */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm mb-6">
                  <div className="bg-navy text-primary-foreground py-4 px-6">
                    <h4 className="font-semibold text-lg">Services</h4>
                  </div>
                  <div className="divide-y divide-border">
                    {otherSpecialities.slice(0, 6).map((spec) => (
                      <Link
                        key={spec.id}
                        to={`/specialities/${spec.id}`}
                        className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors group"
                      >
                        <span className="text-foreground group-hover:text-primary transition-colors uppercase text-sm tracking-wide">
                          {spec.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm mb-6">
                  <div className="bg-navy text-primary-foreground py-4 px-6">
                    <h4 className="font-semibold text-lg">Why Choose Us?</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    {whyChooseUsItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E8F4F8] flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Profile */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm mb-6">
                  <div className="bg-navy text-primary-foreground py-4 px-6">
                    <h4 className="font-semibold text-lg">Company Profile</h4>
                  </div>
                  <div className="p-6 space-y-3">
                    <button className="w-full flex items-center justify-between p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                      <span className="text-foreground text-sm">Download Profile.PDF</span>
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                      <span className="text-foreground text-sm">Download Profile.DOC</span>
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-navy rounded-2xl overflow-hidden">
                  <div className="p-6">
                    <h4 className="text-primary-foreground text-xl font-bold mb-1">
                      Are you having
                    </h4>
                    <h4 className="text-primary-foreground text-xl font-bold mb-2">
                      health problems?
                    </h4>
                    <p className="text-primary-foreground/80 text-sm mb-6">
                      Contact us today!
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-primary-foreground font-semibold text-sm mb-2">Address Business</h5>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                          <p className="text-primary-foreground/80 text-sm">
                            511 SW 10th Ave #1206, Portland,<br />
                            OR United States
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-primary-foreground font-semibold text-sm mb-2">Contact With Us</h5>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
                            <span className="text-primary-foreground/80 text-sm">contact@normaluna.com</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
                            <span className="text-primary-foreground/80 text-sm">+1 800-123-1234</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-primary-foreground font-semibold text-sm mb-2">Working Time</h5>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                          <div className="text-primary-foreground/80 text-sm">
                            <p>Monday–Saturday: 7:00am–10:00pm</p>
                            <p>Sunday: 8:30am–10:30pm</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link to="/appointment" className="block mt-6">
                      <Button className="w-full bg-white text-navy hover:bg-white/90 rounded-full font-semibold">
                        Book An Appointment
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialityDetailPage;
