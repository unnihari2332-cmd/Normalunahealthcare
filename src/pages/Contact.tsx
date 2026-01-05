import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { ContactForm } from "@/components/ContactForm";
import { ContactOptionsGrid } from "@/components/sections";
import heroImage from "@/assets/hero-medical.jpg";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title="Contact Us"
          image={heroImage}
          breadcrumbs={[{ label: "Contact Us" }]}
        />
      </div>

      <ContactOptionsGrid />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default ContactPage;
