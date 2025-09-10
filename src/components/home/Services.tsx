import React from "react";
import {
  BedDouble,
  UtensilsCrossed,
  Users,
  CalendarCheck,
  Coffee,
  ConciergeBell,
} from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Service list for the slider
const services = [
  {
    icon: BedDouble,
    label: "Luxury Rooms",
    action: () => toast.success("Explore our luxury rooms"),
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurant & Meals",
    action: () => toast.success("Discover fine dining"),
  },
  {
    icon: Users,
    label: "Conference Rooms",
    action: () => toast.success("Host your next meeting"),
  },
  {
    icon: CalendarCheck,
    label: "Easy Booking",
    action: () => toast.success("Book your stay with ease"),
  },
  {
    icon: Coffee,
    label: "Tailored Meals",
    action: () => toast.success("Personalized meal plans"),
  },
  {
    icon: ConciergeBell,
    label: "Concierge Service",
    action: () => toast.success("Enjoy premium concierge"),
  },
];

// Infinite scrolling slider component
const InfiniteSlider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll gap-28">{children}{children}</div>
    </div>
  );
};

// Keyframes for infinite scroll
const styles = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 30s linear infinite;
}
`;

export const Services: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const serviceCards = [
    {
      title: "Modern Rooms",
      desc: "Comfortable, stylish, and equipped with everything you need.",
      link: "/hotel",
      icon: BedDouble,
    },
    {
      title: "Restaurant Dining",
      desc: "Fresh meals, cozy atmosphere — open to guests and locals.",
      link: "/restaurant",
      icon: UtensilsCrossed,
    },
    {
      title: "Event Hosting",
      desc: "Meetings, birthdays, conferences – all welcome here.",
      link: "/event",
      icon: Users,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5f0e9] to-[#eaddcf] overflow-hidden py-20 relative font-sans">
      <style>{styles}</style>

      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c4033] font-serif">
          Our Signature Services
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          At Columbus Café, we go beyond comfort — we create experiences. Explore
          our rooms, dining, and event offerings crafted to make your stay memorable.
        </p>
      </div>

      {/* Top Scrolling Services */}
      <div className="relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm opacity-80 italic text-[#5c4033]">
              Enhancing Every Stay
            </p>
          </div>

          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider>
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <button
                    key={idx}
                    onClick={service.action}
                    className="flex flex-col items-center justify-center gap-2 text-center min-w-[160px] p-4 bg-[#faf7f3] hover:bg-[#e9e2da] rounded-2xl shadow transition transform hover:scale-105"
                  >
                    <Icon className="w-8 h-8 text-[#5c4033]" />
                    <span className="text-sm font-medium text-[#5c4033]">
                      {service.label}
                    </span>
                  </button>
                );
              })}
            </InfiniteSlider>

            {/* Left & Right Fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#f5f0e9] to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#f5f0e9] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Storytelling Cards Section */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {serviceCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#fafafa] p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <Icon className="w-10 h-10 text-[#3e4d3b]" />
                <h3 className="text-xl font-semibold text-[#3e4d3b] font-serif">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
                <Link
                  to={card.link}
                  className="text-sm font-medium text-[#a47148] hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
