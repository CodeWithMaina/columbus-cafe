import { motion, type Variants } from "framer-motion";
import { Footer } from "../components/common/Footer";
import Navbar from "../components/common/NavBar";

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

export const ContactPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section with Blur */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <motion.img
          src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg"
          alt="Restaurant Hero"
          className="absolute w-full h-full object-cover scale-110 blur-sm"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-[#f5f0e9]"
          >
            Contact & Reservations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-[#f0e6db] max-w-2xl mt-4"
          >
            Reach out to us for bookings, inquiries, or simply to say hello.
          </motion.p>
        </div>
      </div>

      {/* Reservation Form */}
      <div className="py-24 px-6 bg-gradient-to-b from-[#f5f0e9] to-[#e8ded1]">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-[#3b2a1a] text-center mb-10"
          >
            Make a Reservation
          </motion.h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { type: "text", placeholder: "Full Name" },
              { type: "email", placeholder: "Email Address" },
              { type: "tel", placeholder: "Phone Number" },
              { type: "date", placeholder: "Reservation Date" },
            ].map((input, i) => (
              <motion.input
                key={i}
                type={input.type}
                placeholder={input.placeholder}
                whileFocus={{ scale: 1.02, borderColor: "#b5835a" }}
                className="p-4 border border-[#d4a373] rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-[#b5835a] text-[#3b2a1a] font-medium transition-all"
              />
            ))}
            <motion.textarea
              placeholder="Special Requests"
              whileFocus={{ scale: 1.02, borderColor: "#b5835a" }}
              className="md:col-span-2 p-4 border border-[#d4a373] rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-[#b5835a] text-[#3b2a1a] font-medium transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:col-span-2 px-6 py-3 bg-[#d4a373] text-white font-semibold rounded-xl shadow-lg hover:bg-[#b5835a] transition-all"
            >
              Reserve Now
            </motion.button>
          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div className="py-24 px-6 bg-[#f5f0e9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { title: "Visit Us", desc: "Columbus Café, Eldoret, Kenya" },
            { title: "Call Us", desc: "+254 712 345 678" },
            { title: "Email Us", desc: "info@columbuscafe.co.ke" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-serif font-semibold text-[#3b2a1a] mb-4">{item.title}</h3>
              <p className="text-[#5c4632]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Email Form Section */}
      <div className="py-24 px-6 bg-gradient-to-r from-[#d4a373] to-[#b5835a] text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold"
          >
            Send Us a Message
          </motion.h2>
          <form className="space-y-6">
            {[
              { type: "text", placeholder: "Your Name" },
              { type: "email", placeholder: "Your Email" },
            ].map((input, i) => (
              <motion.input
                key={i}
                type={input.type}
                placeholder={input.placeholder}
                whileFocus={{ scale: 1.02, borderColor: "#f5f0e9" }}
                className="w-full p-4 rounded-xl border border-white bg-white text-[#3b2a1a] font-medium focus:outline-none focus:ring-2 focus:ring-[#f5f0e9] transition-all"
              />
            ))}
            <motion.textarea
              placeholder="Your Message"
              whileFocus={{ scale: 1.02, borderColor: "#f5f0e9" }}
              className="w-full p-4 rounded-xl border border-white bg-white text-[#3b2a1a] font-medium focus:outline-none focus:ring-2 focus:ring-[#f5f0e9] transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#3b2a1a] rounded-xl font-semibold hover:bg-[#f0e6db] transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="py-16 px-6 bg-[#e8ded1] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-serif font-bold text-[#3b2a1a] mb-6"
        >
          Connect With Us
        </motion.h2>
        <div className="flex justify-center gap-8">
          {["Facebook", "Instagram", "Twitter"].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-[#5c4632] font-medium hover:text-[#b5835a]"
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-[450px]">
        <iframe
          title="Columbus Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.26922998449!2d35.274999!3d0.514277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780f9a1a3d2b2a7%3A0x7cf8c1f1c2a1a8f0!2sEldoret!5e0!3m2!1sen!2ske!4v1694456789012!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <Footer />
    </>
  );
};
