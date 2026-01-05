import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { getSpecialityById, specialities } from "@/data/specialities";
import { Check, ArrowRight, Calendar } from "lucide-react";
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
    .slice(0, 3);

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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
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
                <h3 className="font-display text-xl font-semibold mb-4">
                  Treatments & Procedures
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {speciality.treatments.map((treatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{treatment}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <h3 className="font-display text-xl font-semibold mb-4">
                  Why Choose Us
                </h3>
                <div className="bg-secondary rounded-2xl p-6">
                  <div className="space-y-3">
                    {speciality.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent-foreground" />
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
                className="sticky top-24"
              >
                {/* Appointment Card */}
                <div className="bg-navy rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground">Book Appointment</h4>
                      <p className="text-sm text-primary-foreground/70">Get expert consultation</p>
                    </div>
                  </div>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Schedule a consultation with our {speciality.title} specialists today.
                  </p>
                  <Link to="/appointment">
                    <Button className="w-full bg-primary hover:bg-teal-light text-primary-foreground rounded-full">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Related Specialities */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-display text-lg font-semibold mb-4">Related Specialities</h4>
                  <div className="space-y-3">
                    {relatedSpecialities.map((related) => (
                      <Link
                        key={related.id}
                        to={`/specialities/${related.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors truncate">
                            {related.title}
                          </h5>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
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
