import {
  motion,
  type Variants,
  useScroll,
  useTransform,
  easeOut,
} from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/common/NavBar";
import { Footer } from "../components/common/Footer";

// Animation for fade-in-up
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: easeOut },
  }),
};

export const RestaurantPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Timeline sections data
  const sections = [
    {
      title: "Local Favorites",
      desc: "Authentic Kenyan dishes celebrating the flavors of the region.",
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    },
    {
      title: "Continental Cuisine",
      desc: "Savor international flavors from pastas to seafood delights.",
      img: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
    },
    {
      title: "Desserts & Beverages",
      desc: "Fresh juices, coffee selections, and homemade desserts to complete your meal.",
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    },
    {
      title: "Restaurant Highlights",
      desc: "Full menu, vegetarian & vegan options, takeaway, dine-in, and kid-friendly choices.",
      img: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative bg-[#f5f0e9] text-[#3b2a1a] min-h-[70vh] flex flex-col justify-center items-center px-6 py-24 overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg')] bg-cover bg-center opacity-20"
        />
        <div className="relative max-w-3xl text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-serif font-bold"
          >
            Delicious, Diverse & Always Fresh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-[#5c4632] font-light"
          >
            Our menu is a flavorful mix of local favorites and international
            classics, all prepared with fresh ingredients and a touch of love.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#d4a373] text-white font-semibold rounded-xl shadow-md hover:bg-[#b5835a] transition"
          >
            Download Full Menu
          </motion.button>
        </div>
      </div>

      {/* Timeline Section */}
      {/* Timeline Section */}
      <section className="relative py-24 px-6 bg-[#f5f0e9]">
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line - only visible on medium screens and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#d4a373]" />

          {sections.map((section, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                className={`relative mb-24 flex flex-col md:flex-row items-center justify-between ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-y-1/2 bg-[#d4a373] w-6 h-6 rounded-full z-10 shadow-lg" />

                {/* Image */}
                <motion.div className="w-full md:w-1/2 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 mb-6 md:mb-0">
                  <img
                    src={section.img}
                    alt={section.title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>

                {/* Text */}
                <div className="w-full md:w-1/2 px-6 text-center md:text-left">
                  <h3 className="text-3xl font-serif font-bold text-[#3b2a1a] mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[#5c4632] text-lg leading-relaxed">
                    {section.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#d4a373] to-[#b5835a] text-white py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Ready to Taste Columbus?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Join us for breakfast, lunch, or dinner at either of our locations.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-[#3b2a1a] rounded-lg font-semibold hover:bg-[#f5f0e9] transition"
          >
            Find a Location
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#5c4632] text-white rounded-lg font-semibold hover:bg-[#3b2a1a] transition"
          >
            Make a Reservation
          </motion.button>
        </div>
      </section>

      <Footer />
    </>
  );
};
