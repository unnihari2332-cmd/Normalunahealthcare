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
  Calendar,
  MapPin, 
  Mail, 
  Phone, 
  Clock
} from "lucide-react";
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

  // Get related specialities (excluding current one)
  const relatedSpecialities = specialities
    .filter(s => s.id !== speciality.id)
    .slice(0, 6);

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

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-2xl overflow-hidden mb-8">
                  <img
                    src={speciality.image}
                    alt={speciality.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                  About {speciality.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {speciality.fullDescription}
                </p>

                {/* Treatments */}
                <h3 className="font-display text-xl font-semibold mb-6">
                  Treatments & Procedures
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {speciality.treatments.map((treatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 border-b border-border hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#E8F4F8] flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{treatment}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <h3 className="font-display text-xl font-semibold mb-6">
                  Why Choose Us
                </h3>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="space-y-4">
                    {speciality.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#E8F4F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                {/* Services/Related Specialities */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-navy text-primary-foreground py-4 px-6">
                    <h4 className="font-semibold text-lg">Related Specialities</h4>
                  </div>
                  <div className="divide-y divide-border">
                    {relatedSpecialities.map((related) => (
                      <Link
                        key={related.id}
                        to={`/specialities/${related.id}`}
                        className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors group"
                      >
                        <span className="text-foreground group-hover:text-primary transition-colors text-sm">
                          {related.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Appointment Card */}
                <div className="bg-navy rounded-2xl overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-foreground">Book Appointment</h4>
                        <p className="text-sm text-primary-foreground/70">Get expert consultation</p>
                      </div>
                    </div>
                    <p className="text-primary-foreground/80 text-sm mb-6">
                      Schedule a consultation with our {speciality.title} specialists today.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                        <p className="text-primary-foreground/80 text-sm">
                           No. 143, 1, Uthamar Gandhi Rd, opp. The Park Hotel,<br /> Thousand Lights West, Nungambakkam,<br /> Chennai, Tamil Nadu 600034
                      
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
                        <span className="text-primary-foreground/80 text-sm">info@normaluna.co</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" />
                        <span className="text-primary-foreground/80 text-sm">+91 73587 46061</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                        <div className="text-primary-foreground/80 text-sm">
                          <p>24/7 Support</p>
                        </div>
                      </div>
                    </div>

                    <Link to="/appointment">
                      <Button className="w-full bg-white text-navy hover:bg-white/90 rounded-full font-semibold">
                        Book Now
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

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Contact us today to learn more about our {speciality.title} services and schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment">
                <Button size="lg" className="bg-primary hover:bg-teal-light text-primary-foreground rounded-full px-8">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpecialityDetailPage;
