import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { FeaturedTestimonialsHeader, TestimonialsList } from "@/components/sections";
import heroImage from "@/assets/hero-medical.jpg";

const testimonials = [
  {
    name: "Ivan M.",
    location: "Russia",
    treatment: "Stem Cell Therapy",
    content: "After being diagnosed with a neurological condition, I was searching for advanced treatment options that could improve my quality of life. Stem Cell therapy was a promising solution, but in Russia, the cost was extremely high, and access to specialized clinics was limited. That's when I found out India offered world-class regenerative medicine at a much more affordable price. From the moment I reached out, their team handled everything—medical visa assistance, travel arrangements, and scheduling my consultation with one of India's leading specialists in stem cell therapy. When I arrived, I was impressed by the hospital's modern infrastructure and dedicated research team. The doctors took time to explain every step of the procedure. I received personalized rehabilitation support, including physiotherapy and nutritional guidance to maximize my recovery. Today, I feel stronger, and my symptoms have significantly improved. I am grateful for the exceptional care and professionalism that made my journey to India truly life-changing.",
  },
  {
    name: "Amina E.",
    location: "Oman",
    treatment: "Cancer Treatment",
    content: "Norma Luna Healthcare gave me hope when I needed it most. Their team ensured I got world-class oncology treatment in India at a fraction of the cost. The doctors, the advanced treatment plans, and the personal care I received made all the difference. I am now cancer-free, and I owe it to their expertise and support!",
  },
  {
    name: "Amal N.",
    location: "Sri Lanka",
    treatment: "Hip Replacement",
    content: "After suffering for years with severe arthritis, I could barely walk. Hip replacement surgery in Sri Lanka was too costly, and I feared long waiting times. Norma Luna Healthcare provided a quick, affordable solution. Within a week, I was in Chennai, meeting one of the best orthopedic surgeons in India. The hospital used advanced robotic-assisted technology for precise surgery and a faster recovery—just days after surgery, I was walking again without pain. The team handled every detail, from physiotherapy to a smooth return journey home. I now live pain-free, thanks to them!",
  },
  {
    name: "Zoya & Kareem R.",
    location: "Bangladesh",
    treatment: "Twin Pregnancy Complication",
    content: "When we found out we were expecting twins, we were overjoyed. But at five months, complications arose, and doctors in Bangladesh warned us of a high-risk delivery. We were devastated. That's when a family friend recommended Norma Luna Healthcare, and it changed everything. Their team arranged immediate consultations with a top maternal-fetal specialist. The hospital was equipped with advanced NICU facilities, giving our babies the best chance of survival. Norma Luna even arranged for a translator and special dietary care for my wife during her stay. Our twins were born healthy, and today, we look at them with gratitude, knowing that none of this would have been possible without the seamless care an atmosphere in India.",
  },
  {
    name: "Amina S.",
    location: "Uzbekistan",
    treatment: "Dental Implants & Tourism",
    content: "India was always on my travel list—I had dreamed of exploring its vibrant culture, historical landmarks, and beautiful landscapes. When I finally planned my trip to India, I wanted to make the most of my visit. A friend mentioned that India was also known for high-quality, affordable medical treatments, including dental care. I had been considering dental implants for years, but the costs in Uzbekistan were too high and lacked options. That's when I came across Norma Luna Healthcare, and I decided to explore my options. From the moment I contacted them, their team made everything effortless. They arranged a consultation while ensuring my travel plans remained uninterrupted. After a detailed examination, the dentist explained that I could complete my implant procedure with minimal downtime, allowing me to continue enjoying my vacation. Within days, I had a brand new smile, and I was still able to explore Mahabalipuram's ancient temples and take a peaceful houseboat ride in Kerala. The best part? Even after I returned home, Norma Luna's team followed up to ensure my recovery was going well. What started as a trip for adventure ended up being a life-changing journey. Thanks to the team, I left India with not just incredible memories but also a confident new smile!",
  },
  {
    name: "Martin G.",
    location: "United Kingdom",
    treatment: "Dental Implants",
    content: "I had lost most of my teeth over the years, making eating and speaking difficult. In UK, the cost of full-mouth dental implants was simply unaffordable. A colleague recommended Norma Luna Healthcare, and I was skeptical at first. Could I really trust a medical team in another country? My own first virtual consultation with a leading dentist in Chennai, my doubts disappeared. The clinic was more advanced than many I've seen in the UK—with 3D imaging and precision-guided implant technology. The procedure was smooth and completely painless, thanks to advanced sedation techniques. After a comfortable hotel for my recovery and even suggested soft, nutritious meals suited for my healing gums. Within days, I could smile without hesitation for the first time in years. The best part? The cost was nearly 70% lower than in France, and the quality exceeded my expectations.",
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        <HeroBanner
          title="Testimonials"
          image={heroImage}
          breadcrumbs={[{ label: "Testimonials" }]}
        />
      </div>

      <FeaturedTestimonialsHeader />
      <TestimonialsList testimonials={testimonials} />

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
