// components/OpeningHours.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const hours = [
  { day: "Mon - Thu", time: "5 PM - 12 AM" },
  { day: "Fri - Sat", time: "5 PM - 2 AM" },
  { day: "Sun", time: "Closed" },
];

export const OpeningHours = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f5f0e9] to-[#e3d6c6] py-24 flex flex-col justify-center">
      <motion.div
        className="max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Intro paragraph */}
        <p className="text-lg md:text-xl text-[#5a4634] font-light mb-6 leading-relaxed tracking-wide">
          Whether you’re winding down after work, celebrating the weekend, or
          enjoying a quiet evening, our doors are open to welcome you with warm
          hospitality and crafted drinks.
        </p>

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[#3a2b20] mb-10 tracking-wide drop-shadow-sm">
          Opening Hours
        </h2>

        {/* Hours Table */}
        <div className="divide-y divide-[#e5d8c8] rounded-2xl bg-[#fdfbf8] shadow-xl overflow-hidden">
          {hours.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-between px-8 py-5 text-lg md:text-xl font-serif transition-colors"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ backgroundColor: "#f5ede3", scale: 1.02 }}
            >
              <span className="font-medium text-[#5a4634]">{item.day}</span>
              <span
                className={`font-semibold ${
                  item.time === "Closed"
                    ? "text-rose-600 italic"
                    : "text-[#2c1d12]"
                }`}
              >
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button with Link */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#3a2b20] text-[#f5f0e9] rounded-full shadow-lg hover:bg-[#5a4634] transition font-semibold text-lg tracking-wide"
          >
            Reserve a Table
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
