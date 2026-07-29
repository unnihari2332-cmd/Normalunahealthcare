import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getSpecialityById, specialities } from "@/data/specialities";
import { 
  Check, 
  ArrowRight, 
  Calendar,
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Home,
  ChevronRight
} from "lucide-react";

// --- COMPONENT: HERO BANNER (Matched to Brand Color #0B3A66) ---
const HeroBanner = ({ title }: { title: string }) => {
  return (
    <section className="relative h-[350px] flex flex-col items-center justify-center bg-[#0B3A66] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full border-2 border-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Breadcrumb Path */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-wider"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <Link to="/specialities" className="hover:text-white transition-colors">
            Specialities
          </Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-white">{title}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-5xl font-display font-bold tracking-tight text-center px-4"
        >
          {title}
        </motion.h1>
      </div>

      {/* THE CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[90px]"
        >
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff" 
          ></path>
        </svg>
      </div>
    </section>
  );
};

const SpecialityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const speciality = id ? getSpecialityById(id) : undefined;
  const brandColor = "#0B3A66";

  if (!speciality) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-40 pb-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Speciality Not Found</h1>
          <Link to="/specialities">
            <Button style={{ backgroundColor: brandColor }}>Back to Specialities</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedSpecialities = specialities.filter(s => s.id !== speciality.id);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        <HeroBanner title={speciality.title} />
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white overflow-hidden"> 
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="rounded-3xl overflow-hidden mb-10 shadow-xl border border-gray-100">
                  <motion.img
                    src={speciality.image}
                    alt={speciality.title}
                    className="w-full h-[450px] object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <h2 className="font-display text-3xl font-bold mb-6" style={{ color: brandColor }}>
                  About {speciality.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {speciality.fullDescription}
                </p>

                {/* Treatments */}
                <h3 className="font-display text-2xl font-semibold mb-6" style={{ color: brandColor }}>
                  Treatments & Procedures
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {speciality.treatments.map((treatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4" style={{ color: brandColor }} />
                        </div>
                        <span className="text-gray-700 font-medium">{treatment}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-all" style={{ color: brandColor }} />
                    </motion.div>
                  ))}
                </div>

                {/* Benefits Section */}
                <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-12 rounded-3xl bg-[#0B3A66] p-8 md:p-10 shadow-2xl"
>
  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-5">
    Considering Treatment in India?
  </h3>

  <p className="text-white/90 text-lg leading-relaxed">
    Begin with a confidential conversation. Norma Luna Healthcare can connect
    you with the appropriate specialists and accredited healthcare institutions
    while thoughtfully coordinating the journey ahead.
  </p>
</motion.div>
                {/* Add your benefits content here if needed */}
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="space-y-8"
              >
                {/* Related Specialities Sidebar */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="py-5 px-6 text-white" style={{ backgroundColor: brandColor }}>
                    <h4 className="font-bold text-lg">Other Specialities</h4>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {relatedSpecialities.map((related) => (
                      <Link
                        key={related.id}
                        to={`/specialities/${related.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="flex items-center justify-between px-6 py-4 hover:bg-blue-50 transition-colors group"
                      >
                        <span className="text-gray-600 group-hover:text-[#0B3A66] text-sm font-semibold transition-transform group-hover:translate-x-1">
                          {related.title}
                        </span>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-[#0B3A66]" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Brand Themed Appointment Card */}
                <div className="rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: brandColor }}>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                  <div className="relative z-10">
                    <h4 className="font-bold text-xl mb-6">Need Assistance?</h4>
                    <div className="space-y-5 mb-8">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-200" />
                        <span className="text-white/80 text-sm font-semibold">+91 73587 46061</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-200" />
                        <span className="text-white/80 text-sm">info@normalunahealthcare.com</span>
                      </div>
                    </div>
                    <Link to="/appointment">
                      <Button className="w-full bg-white text-[#0B3A66] hover:bg-blue-50 rounded-xl h-12 font-bold shadow-xl transition-all hover:scale-[1.02]">
                        Book Appointment
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
