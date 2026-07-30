import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { AppointmentForm } from "@/components/AppointmentForm";
import heroImage from "@/assets/hero-medical.jpg";

const AppointmentPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner title="Book Appointment" />
      </div>

      <AppointmentForm />

      <Footer />
    </div>
  );
};

export default AppointmentPage;
