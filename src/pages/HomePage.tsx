import { Footer } from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import { Branches } from "../components/home/Branches";
import { Gallery } from "../components/home/Gallery";
import { Hero } from "../components/home/Hero";
import { OpeningHours } from "../components/home/OpeningHours";
import { Reviews } from "../components/home/Reviews";
import { Services } from "../components/home/Services";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/images/1.png"; // replace with your logo path

export const HomePage = () => {
  const { scrollY } = useScroll();

  // Parallax movement
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const x = useTransform(scrollY, [0, 1000], [0, 50]);

  const controls = useAnimation();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // 1s after scroll stops
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
  if (isScrolling) {
    controls.start({
      opacity: 1, // visible on top while scrolling
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  } else {
    controls.start({
      opacity: 0, // fade out after scrolling stops
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  }
}, [isScrolling, controls]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isScrolling) {
      // vibrate every 20s when idle
      interval = setInterval(() => {
        controls.start({
          opacity: [0, 1, 1, 0],
          x: [0, -3, 3, -2, 2, 0],
          transition: { duration: 1, ease: "easeInOut" },
        });
      }, 20000);
    }
    return () => clearInterval(interval);
  }, [isScrolling, controls]);

  return (
    <div className="relative overflow-hidden">
      {/* Floating logo */}
      <motion.img
  src={logo}
  alt="Floating Logo"
  className="fixed top-10 left-1/2 -translate-x-1/2 pointer-events-none w-[120px] md:w-[160px] z-50"
  style={{ y, x }}
  initial={{ opacity: 0 }}
  animate={controls}
  transition={{ duration: 0.6 }}
/>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Branches />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Gallery />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <OpeningHours />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Reviews />
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};
