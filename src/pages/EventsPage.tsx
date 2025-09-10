import { motion, type Variants } from "framer-motion";
import Navbar from "../components/common/NavBar";
import { Footer } from "../components/common/Footer";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: [0.42, 0, 0.58, 1] },
  }),
};

export const EventsPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-r from-[#3b2a1a] to-[#b5835a] text-white px-6 pt-32 pb-32 flex flex-col justify-center items-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-serif font-bold text-center"
        >
          Conference & Events – Eldoret City Branch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-3xl text-center font-light"
        >
          Meet, Train, or Celebrate — We're Ready for You
        </motion.p>
        <div className="mt-12 flex gap-6 flex-wrap justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#ffd700] text-[#3b2a1a] font-semibold rounded-xl hover:bg-[#e6c200] transition"
          >
            Request a Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#3b2a1a] transition"
          >
            Tour the Venue
          </motion.button>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 px-6 bg-[#f5f0e9]">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Conference Setup */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#3b2a1a] mb-4">
                Business Meetings
              </h2>
              <p className="text-[#5c4632] text-lg leading-relaxed">
                Professional meeting spaces perfect for board meetings, client
                presentations, and team gatherings.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg"
              alt="Conference Setup"
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
            />
          </motion.div>

          {/* Training Setup */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#3b2a1a] mb-4">
                Training & Workshops
              </h2>
              <p className="text-[#5c4632] text-lg leading-relaxed">
                Comfortable spaces designed for learning and collaboration with
                all necessary equipment.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
              alt="Training Setup"
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
            />
          </motion.div>

          {/* Celebration Setup */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#3b2a1a] mb-4">
                Private Celebrations
              </h2>
              <p className="text-[#5c4632] text-lg leading-relaxed">
                Elegant venues for your special occasions with customizable
                catering options.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
              alt="Celebration Setup"
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6 bg-gradient-to-b from-[#e8ded1] to-[#f5f0e9]">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-[#3b2a1a]"
          >
            Event Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Projector & Screen",
                desc: "High-quality projection equipment for presentations and displays.",
              },
              {
                title: "Wi-Fi & Sound System",
                desc: "Reliable internet connection and audio equipment for all your technical needs.",
              },
              {
                title: "Flexible Room Layouts",
                desc: "Customizable seating arrangements to suit your specific event requirements.",
              },
              {
                title: "In-House Catering",
                desc: "Delicious food and beverage options from our restaurant for your attendees.",
              },
              {
                title: "Event Planning Support",
                desc: "Our experienced team will help you plan and execute a successful event.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105"
              >
                <h3 className="text-2xl font-serif font-semibold text-[#3b2a1a] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#5c4632]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-[#3b2a1a] text-white text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Ready to Host Your Next Event?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Contact us today to discuss your needs and check availability.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#ffd700] text-[#3b2a1a] font-semibold rounded-xl hover:bg-[#e6c200] transition"
          >
            Request a Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#3b2a1a] transition"
          >
            Contact Us
          </motion.button>
        </div>
      </div>

      <Footer />
    </>
  );
};
