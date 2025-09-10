import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Users,
  CheckCircle,
  Wifi,
  Car,
  Coffee,
  Circle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/common/Footer";
import Navbar from "../components/common/NavBar";

const stepAnimations: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.06,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Button = ({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "outline" }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-lg font-medium transition-transform duration-150 transform hover:scale-[1.02] ${className}`}
  >
    {children}
  </button>
);

export const HotelPage = () => {
  const [step, setStep] = useState<number>(1);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);

  const navigate = useNavigate();

  const image =
    "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg";

  const handleNext = () => setStep((s) => Math.min(3, s + 1));
  const handlePrev = () => setStep((s) => Math.max(1, s - 1));

  const rooms = [
    {
      name: "Deluxe Room",
      img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      price: "Ksh 6,200 / night",
      desc: "Spacious room with king-size bed and balcony view.",
    },
    {
      name: "Executive Suite",
      img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      price: "Ksh 4,500 / night",
      desc: "Luxury suite with private lounge and butler service.",
    },
    {
      name: "Standard Room",
      img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      price: "Ksh 2,000 / night",
      desc: "Cozy room ideal for short stays.",
    },
    {
      name: "Family Room",
      img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      price: "Ksh 3,200 / night",
      desc: "Perfect for families, with extra space and beds.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-black/70 overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={image}
          alt="Luxury Hotel"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d9c8b4]/70 to-[#5c4632]/80 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl text-center text-white space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: -36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-xl text-[#f5f0e9]"
          >
            Find Your Perfect Stay
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="text-lg md:text-xl text-[#f0e6db]"
          >
            Seamless booking, luxurious comfort, and unforgettable memories
            await.
          </motion.p>

          {/* Steps */}
          <div className="mt-4">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  variants={stepAnimations}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={1}
                  className="flex flex-col md:flex-row items-center gap-4 justify-center"
                >
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-48 px-4 py-2 rounded-lg bg-[#f5f0e9]/90 text-[#3b2a1a] shadow-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                  />

                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-48 px-4 py-2 rounded-lg bg-[#f5f0e9]/90 text-[#3b2a1a] shadow-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                  />

                  <Button
                    onClick={handleNext}
                    className="bg-[#d4a373] text-white hover:bg-[#b5835a]"
                  >
                    Next
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  variants={stepAnimations}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={2}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="bg-[#f5f0e9]/90 text-[#3b2a1a] rounded-xl p-6 shadow-lg w-full max-w-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Users size={20} /> Number of Guests
                    </h3>
                    <div className="flex justify-between items-center">
                      <span>Total People</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setGuests((g) => Math.max(1, g - 1))}
                          className="px-2 py-1 bg-[#e6d8c4] rounded hover:bg-[#d4a373] transition"
                        >
                          -
                        </button>
                        <span>{guests}</span>
                        <button
                          onClick={() => setGuests((g) => g + 1)}
                          className="px-2 py-1 bg-[#e6d8c4] rounded hover:bg-[#d4a373] transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={handlePrev}
                      className="text-white border border-white bg-transparent hover:bg-white/10"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-[#d4a373] text-white hover:bg-[#b5835a]"
                    >
                      Next
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  variants={stepAnimations}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={3}
                  className="flex flex-col items-center gap-6"
                >
                  <CheckCircle size={40} className="text-[#d4a373]" />
                  <h3 className="text-xl font-semibold text-[#f5f0e9]">
                    Confirm Your Booking
                  </h3>

                  <div className="bg-[#f5f0e9]/90 text-[#3b2a1a] p-6 rounded-xl shadow-xl max-w-sm w-full text-left space-y-2">
                    <div>
                      <strong>Check-in:</strong>{" "}
                      {checkIn ? checkIn : "Not selected"}
                    </div>
                    <div>
                      <strong>Check-out:</strong>{" "}
                      {checkOut ? checkOut : "Not selected"}
                    </div>
                    <div>
                      <strong>Guests:</strong> {guests} Guest
                      {guests > 1 ? "s" : ""}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={handlePrev}
                      className="text-white border border-white bg-transparent hover:bg-white/10"
                    >
                      Back
                    </Button>
                    <Button className="bg-[#5c8d89] hover:bg-[#3f6d68] text-white">
                      Find Rooms
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Rooms Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="bg-[#f5f0e9]/95 rounded-lg shadow-lg overflow-hidden text-[#3b2a1a]"
              >
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <p className="text-sm">{room.desc}</p>
                  <p className="text-[#d4a373] font-bold">{room.price}</p>
                  <Button className="bg-[#d4a373] text-white hover:bg-[#b5835a] mt-2">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <Wifi size={32} className="text-[#d4a373]" />
              <p>Free Wifi</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Car size={32} className="text-[#d4a373]" />
              <p>Parking</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Circle size={32} className="text-[#d4a373]" />
              <p>Swimming Pool</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Coffee size={32} className="text-[#d4a373]" />
              <p>Breakfast</p>
            </div>
          </div>

          {/* Quick Contact Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-[#f5f0e9] mb-4">
              Have Questions?
            </h3>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-[#d4a373] text-white hover:bg-[#b5835a]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
