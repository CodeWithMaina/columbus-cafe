import { motion, useScroll, useTransform } from "framer-motion";
import { InjectTextEffectStyles, TextEffectPerChar } from "../animation/TextEffectPerChar";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { scrollY } = useScroll();

  // Background parallax + fade effect
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background video */}
      <motion.video
        style={{ scale, opacity }}
        className="absolute inset-0 h-full w-full object-cover"
        src="https://www.pexels.com/download/video/3189044/"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for blur + color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0e9]/70 to-[#b08968]/80 backdrop-blur-sm"></div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 text-center text-[#3b2f2f]">
        <div className="max-w-3xl">
          <InjectTextEffectStyles />
          <h1 className="mb-6 text-6xl font-extrabold tracking-tight md:text-6xl">
            <TextEffectPerChar text="Welcome to Columbus Café" />
          </h1>

          <p className="mb-8 text-lg font-medium text-[#4e3b31] md:text-xl">
            Experience exclusivity in every detail – from fine dining to warm hospitality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/restaurant" className="rounded-2xl bg-[#8b5e3c] px-6 py-3 text-white shadow-md transition hover:bg-[#6f4426]">
              Explore Our Menu
            </Link>
            <Link to="/hotel" className="rounded-2xl bg-[#d4a373] px-6 py-3 text-[#3b2f2f] shadow-md transition hover:bg-[#c58c5c]">
              Book a Room
            </Link>
            <Link to="/event" className="rounded-2xl bg-[#f5f0e9] px-6 py-3 text-[#3b2f2f] shadow-md transition hover:bg-[#e8dccd]">
              Host an Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
