import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Placeholder data - replace image URLs with your actual imports
const testimonials = [
  {
    id: 1,
    text: "Aliquam arcu mi dis habitant fringilla. Primis ut sociosqu habitasse montes nostra. Integer himenaeos facilisi nulla enim ridiculus ex imperdiet nullam faucibus est.",
    name: "Dorothy W Edge",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop", // Replace with local import
    rating: 5,
  },
  {
    id: 2,
    text: "Aliquam arcu mi dis habitant fringilla. Primis ut sociosqu habitasse montes nostra. Integer himenaeos facilisi nulla enim ridiculus ex imperdiet nullam faucibus est.",
    name: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=200&h=200&fit=crop", // Replace with local import
    rating: 5,
  },
  {
    id: 3,
    text: "Aliquam arcu mi dis habitant fringilla. Primis ut sociosqu habitasse montes nostra. Integer himenaeos facilisi nulla enim ridiculus ex imperdiet nullam faucibus est.",
    name: "Emily Roberts",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop", // Replace with local import
    rating: 5,
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex justify-center gap-1 mb-8">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3 block"
          >
            Patients Story
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Loved by our Patients
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* White Card */}
              <div className="bg-white rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center relative w-full h-full flex flex-col">
                
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-16 h-16 text-blue-100 fill-blue-100 transform -scale-x-100" />
                </div>

                {/* Text */}
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {item.text}
                </p>

                {/* Stars */}
                <StarRating count={item.rating} />
              </div>

              {/* Profile Image (Overlapping the card) */}
              <div className="relative -mt-10 z-10">
                <div className="rounded-full p-1 bg-white shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h4 className="mt-4 text-slate-900 font-bold text-lg">
                {item.name}
              </h4>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
