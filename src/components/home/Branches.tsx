import { motion, type Variants } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export const Branches = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 lg:px-20 bg-gradient-to-br from-[#f5f0e9] to-[#e3d6c6]">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif font-bold text-[#3a2b20] tracking-wide"
        >
          Our Locations
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-28 h-[3px] bg-gradient-to-r from-[#a67856] to-[#7b4b2a] mx-auto my-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto text-[#5a4634] text-lg leading-relaxed font-light"
        >
          Two destinations, one exceptional standard of culinary excellence.
        </motion.p>
      </div>

      {/* Branch Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Eldoret Branch (Image Top) */}
        <motion.div
          className="group cursor-pointer flex flex-col h-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1}
        >
          <div className="relative overflow-hidden mb-8 rounded-2xl shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200"
              alt="Eldoret Branch"
              className="w-full h-72 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-[#3a2b20]/30 group-hover:bg-[#3a2b20]/10 transition-colors duration-500" />
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-serif font-semibold text-[#3a2b20]">
                Eldoret
              </h3>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4a373] text-[#d4a373]" />
                ))}
              </div>
            </div>

            <p className="text-[#5a4634] text-lg leading-relaxed font-light max-w-md">
              Experience refined dining in the heart of the highlands. Our
              Eldoret location blends contemporary elegance with warm
              hospitality.
            </p>

            <motion.div
              className="flex items-center gap-3 text-[#7b4b2a] group-hover:gap-4 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <Link to='/contact' className="text-sm font-medium tracking-wider uppercase">
                Reserve Table
              </Link>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>

        {/* Kakamega Branch (Image Bottom) */}
        <motion.div
          className="group cursor-pointer flex flex-col h-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
        >
          <div className="space-y-6 mb-8 order-1 md:order-none">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-serif font-semibold text-[#3a2b20]">
                Kakamega
              </h3>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4a373] text-[#d4a373]" />
                ))}
              </div>
            </div>

            <p className="text-[#5a4634] text-lg leading-relaxed font-light max-w-md">
              Nestled in nature’s embrace, our Kakamega venue offers an intimate
              dining experience where culinary artistry meets serene surroundings.
            </p>

            <motion.div
              className="flex items-center gap-3 text-[#7b4b2a] group-hover:gap-4 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <Link to='/restaurant' className="text-sm font-medium tracking-wider uppercase">
                View Menu
              </Link>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <motion.img
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200"
              alt="Kakamega Branch"
              className="w-full h-72 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-[#3a2b20]/30 group-hover:bg-[#3a2b20]/10 transition-colors duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
