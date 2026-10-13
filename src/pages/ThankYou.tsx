import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { trackPixel } from "@/lib/pixel";

const ThankYou = () => {
  useEffect(() => {
    document.title = "Registration Received | Norma Luna Healthcare";
    trackPixel("CompleteRegistration", {
      content_name: "Dental & Medical Consultation Request",
      status: true,
      value: 0,
      currency: "USD",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-28 sm:py-36">
        <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 text-center space-y-6">
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Registration Complete
            </span>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#0B2947]">
              Thank You! We Have Received Your Request.
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our international care coordinator will review your inquiry and connect with you shortly.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <p className="text-xs font-medium text-slate-500">
              Want a faster response? Connect with us directly:
            </p>
            <a
              href="https://wa.me/917358746061?text=Hello%20Norma%20Luna%2C%20I%20just%20submitted%20my%20registration%20on%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-3.5 px-6 rounded-full shadow-md transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Coordinator on WhatsApp
            </a>
          </div>

          <div>
            <Link
              to="/"
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors inline-flex items-center gap-1"
            >
              Return to Homepage <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
