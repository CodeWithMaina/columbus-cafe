// components/Gallery.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1000",
  "https://images.unsplash.com/photo-1612197598210-0ff17c690f3a?q=80&w=1000",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f0e9] to-[#e3d6c6] overflow-hidden px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3a2b20] mb-12 text-center">
        Our Gallery
      </h2>

      {/* Storytelling Patterned Layout */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group ${
              i % 2 === 0 ? "md:translate-y-6" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            onClick={() => setSelectedImage(src)}
          >
            <motion.img
              src={src}
              alt={`Gallery ${i}`}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              whileHover={{ rotate: i % 2 === 0 ? 2 : -2 }}
            />

            {/* Overlay text effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white font-serif text-lg tracking-wide">
                Click to view
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div whileHover={{ scale: 1.05, x: 5 }} className="mt-12">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#3a2b20] text-[#f5f0e9] rounded-full shadow-lg hover:bg-[#5a4634] transition"
        >
          View Full Gallery <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Expanded"
            className="max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </section>
  );
};
