import { motion, type Variants } from "framer-motion";
import { Footer } from "../components/common/Footer";
import Navbar from "../components/common/NavBar";

// Type-safe fade-in-up animation with stagger
// eslint-disable-next-line react-refresh/only-export-components
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

// Slight parallax for images
// eslint-disable-next-line react-refresh/only-export-components
export const parallaxImage: Variants = {
  hidden: { scale: 1, y: 0 },
  visible: { 
    scale: 1.05, 
    y: -10, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export const AboutUsPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex flex-col justify-center items-center bg-gradient-to-r from-[#d4a373] to-[#b5835a] text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-serif font-bold text-center"
        >
          About Columbus CAFE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-3xl text-center"
        >
          From One Branch to Two — Built with Heart
        </motion.p>
      </div>

      {/* Story Section */}
      <div className="py-24 px-6 bg-gradient-to-b from-[#f5f0e9] to-[#e8ded1]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif font-bold text-[#3b2a1a]">Our Journey</h2>
            <p className="text-[#5c4632] text-lg leading-relaxed">
              Columbus CAFE was founded by a passionate entrepreneur with a vision to offer
              warm meals and welcoming spaces. Since opening our doors in Kakamega in 2021,
              we've grown into a trusted name for food lovers and travelers alike — now
              proudly serving you in Eldoret City with a full restaurant, hotel, and
              conference facility.
            </p>
          </motion.div>
          <motion.div
            variants={parallaxImage}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              alt="Our Story"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 px-6 bg-[#f5f0e9]">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-[#3b2a1a]"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Warm Hospitality", desc: "Creating a welcoming atmosphere where every guest feels valued." },
              { title: "Fresh Quality", desc: "Fresh ingredients and quality service define everything we do." },
              { title: "Home Away From Home", desc: "Spaces that feel comfortable, safe, and restful for all guests." },
              { title: "Community Connection", desc: "Proud to be part of the local community and support its growth." },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105"
              >
                <h3 className="text-2xl font-serif font-semibold text-[#3b2a1a] mb-4">{value.title}</h3>
                <p className="text-[#5c4632]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 px-6 bg-gradient-to-b from-[#e8ded1] to-[#f5f0e9]">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-[#3b2a1a]"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Our Chef", role: "Head of Kitchen", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" },
              { name: "Hotel Manager", role: "Eldoret Branch", img: "https://images.pexels.com/photos/123123/pexels-photo-123123.jpeg" },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-[#3b2a1a]">{member.name}</h3>
                  <p className="text-[#5c4632] mt-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-[#d4a373] text-white text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold mb-6"
        >
          Experience Columbus CAFE For Yourself
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-2xl mx-auto mb-8 text-lg"
        >
          Join us for a meal, stay the night, or host your next event with us.
        </motion.p>
        <div className="flex justify-center gap-6 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-[#3b2a1a] font-semibold rounded-xl hover:bg-[#f0e6db] transition"
          >
            View Our Menu
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#3b2a1a] text-white font-semibold rounded-xl hover:bg-[#5c4632] transition"
          >
            Book a Room
          </motion.button>
        </div>
      </div>

      <Footer />
    </>
  );
};
