// src/components/Navbar.jsx → FINAL LIGHT THEME (Clean & Premium)

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop & Mobile Navbar - Light & Clean */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 shadow-lg bg-white/95 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl">

          {/* Logo */}
          <Link to="/" className="text-4xl font-black tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] via-[#FF7A2D] to-[#0A2647]">
              TCM CONSTRUCTIONS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-lg font-semibold transition-all duration-300
                  ${location.pathname === link.to
                    ? "text-[#F9A826]"
                    : "text-gray-700 hover:text-[#F9A826]"
                  }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navbarUnderline"
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-xl border-2 border-gray-300 lg:hidden hover:border-[#F9A826] transition"
          >
            {isOpen ? (
              <X className="text-gray-800 w-7 h-7" />
            ) : (
              <Menu className="text-gray-800 w-7 h-7" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Light & Elegant */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed inset-0 z-40 flex items-center justify-center bg-white shadow-2xl lg:hidden"
      >
        <div className="space-y-12 text-center">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 60 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.to}
                className="block text-5xl md:text-6xl font-black text-gray-800 hover:text-[#F9A826] transition duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}