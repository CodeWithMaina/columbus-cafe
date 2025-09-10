import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, Home, Info, Menu, PersonStanding, Phone, Utensils, X } from "lucide-react";
import logo from "../../assets/images/3.png";

const NAV_LINKS = [
  { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
  { name: "Hotel", path: "/hotel", icon: <Building2 className="w-4 h-4" /> },
  {
    name: "Restaurant",
    path: "/restaurant",
    icon: <Utensils className="w-4 h-4" />,
  },
  { name: "Event", path: "/event", icon: <PersonStanding className="w-4 h-4" /> },
  { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
  { name: "Contact", path: "/contact", icon: <Phone className="w-4 h-4" /> },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Outside click handler for drawer
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        drawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f0e9]/95 shadow-md border-b border-[#e0d5c3]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Columbus Cafe"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-[#5c4033]">
            Columbus Cafe
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative flex items-center gap-1 text-sm font-medium px-2 py-1 transition ${
                  isActive
                    ? "text-[#a47148]"
                    : "text-[#6b5b4d] hover:text-[#a47148]"
                }`}
              >
                {link.icon}
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#a47148] origin-left scale-x-0 group-hover:scale-x-100 transition-transform ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#5c4033] focus:outline-none"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-72 bg-[#f5f0e9] text-[#5c4033] z-50 shadow-2xl transition-transform duration-300 transform rounded-l-2xl ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#e0d5c3]">
          <span className="text-xl font-semibold">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="hover:text-[#a47148] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="p-5 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e8ded1] transition font-medium"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
