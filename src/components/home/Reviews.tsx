import { motion } from "framer-motion";

export const Reviews = () => {
  const feedback = [
    {
      name: "Floyd Miles",
      comment: "The food was exquisite, and the atmosphere made us feel at home.",
      image: "/images/user1.jpg",
      rating: 5,
    },
    {
      name: "Ronald Richards",
      comment: "The best dining experience I’ve had in years. Highly recommended!",
      image: "/images/user2.jpg",
      rating: 4,
    },
    {
      name: "Savannah Nguyen",
      comment: "Warm hospitality, cozy ambience, and delicious meals.",
      image: "/images/user3.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#e8ded1] to-[#f5f0e9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#5c4033] mb-4 tracking-wide"
        >
          What Our Guests Say
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-[#7a6a58] mb-14"
        >
          A taste of warmth, flavor, and unforgettable memories shared by our customers.
        </motion.p>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {feedback.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 12px 30px rgba(92, 64, 51, 0.25)" }}
              className="bg-[#fffdf9] p-6 rounded-2xl shadow-md border border-[#e0d5c3] transition-all duration-300"
            >
              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-14 h-14 rounded-full border-2 border-[#d4b996] shadow-sm"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-[#5c4033]">{f.name}</h3>
                  <p className="text-[#d4a373] font-medium">
                    {"★".repeat(f.rating)}{" "}
                    <span className="text-[#c0a080]">{"☆".repeat(5 - f.rating)}</span>
                  </p>
                </div>
              </div>

              {/* Comment */}
              <p className="text-[#6b5b4d] text-sm leading-relaxed italic">“{f.comment}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
