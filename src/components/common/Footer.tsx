import { motion } from "framer-motion";
import logo from "../../assets/images/1.png";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#f8f3ec] via-[#ede0d1] to-[#ddd0bf] text-[#2c1d12] overflow-hidden">
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23654321' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      {/* Elegant Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#a6784d] to-transparent opacity-40"></div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid gap-16 lg:grid-cols-4 md:grid-cols-2">
          
          {/* Logo & Brand Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.img 
              src={logo} 
              alt="Columbus Café Logo" 
              className="w-40 mb-6 drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="max-w-md space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#654321] mb-3">
                A Culinary Journey Since 1992
              </h3>
              <p className="text-lg leading-relaxed text-[#5a4634] font-light">
                At <span className="font-serif font-semibold italic text-[#8b6914]">Columbus Café</span>, 
                we blend traditional recipes with contemporary flair, creating memorable dining 
                experiences that celebrate the art of hospitality.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#a6784d] pt-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="text-lg"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <span className="text-sm font-medium ml-2">Trusted by thousands</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-xl font-serif font-bold mb-6 text-[#654321] flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-5 h-5 text-[#a6784d]" />
              Get In Touch
            </h4>
            <ul className="space-y-4 text-[#5a4634]">
              <motion.li 
                className="flex items-center justify-center lg:justify-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 text-[#a6784d] group-hover:text-[#8b6914] transition-colors" />
                <span className="font-medium">+254 700 123 456</span>
              </motion.li>
              <motion.li 
                className="flex items-center justify-center lg:justify-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 text-[#a6784d] group-hover:text-[#8b6914] transition-colors" />
                <span className="font-medium">+254 711 987 654</span>
              </motion.li>
              <motion.li 
                className="flex items-center justify-center lg:justify-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 text-[#a6784d] group-hover:text-[#8b6914] transition-colors" />
                <span className="font-medium">info@columbuscafe.com</span>
              </motion.li>
              <motion.li 
                className="flex items-center justify-center lg:justify-start gap-3 group pt-2"
                whileHover={{ x: 5 }}
              >
                <Clock className="w-4 h-4 text-[#a6784d] group-hover:text-[#8b6914] transition-colors" />
                <div className="text-sm">
                  <div className="font-semibold">Daily: 7AM - 11PM</div>
                  <div className="text-[#8b7355]">Kitchen closes at 10:30PM</div>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h4 className="text-xl font-serif font-bold mb-6 text-[#654321]">
              Stay Connected
            </h4>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-6">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-100" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-100" },
                { Icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-100" },
              ].map(({ Icon, href, label, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`group relative p-3 rounded-full bg-[#f0e6d6] border border-[#d4c4ac] ${color} transition-all duration-300 shadow-sm hover:shadow-md`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-[#654321] group-hover:text-[#8b6914] transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-[#f0e6d6] rounded-lg p-4 border border-[#d4c4ac]">
              <h5 className="font-serif font-semibold text-[#654321] mb-2">Newsletter</h5>
              <p className="text-sm text-[#8b7355] mb-3">Get exclusive recipes & offers</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 text-sm bg-white border border-[#d4c4ac] rounded focus:ring-2 focus:ring-[#a6784d] focus:border-transparent outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#a6784d] text-white text-sm font-medium rounded hover:bg-[#8b6914] transition-colors"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#a6784d] to-transparent opacity-50"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#ede0d1] border border-[#a6784d] rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-[#a6784d] rounded-full"></div>
        </div>
      </motion.div>

      {/* Bottom Strip */}
      <div className="bg-gradient-to-r from-[#654321] via-[#5a4634] to-[#654321] text-center py-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-[#f8f3ec] text-sm font-light tracking-wide">
            © {new Date().getFullYear()} Columbus Café · Crafted with passion in Nairobi
          </div>
          <div className="flex gap-6 text-[#d4c4ac] text-xs">
            <a href="#" className="hover:text-[#f8f3ec] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#f8f3ec] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#f8f3ec] transition-colors">Reservations</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};